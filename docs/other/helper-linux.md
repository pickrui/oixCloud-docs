# Helper Linux 与运行诊断

Linux / NAS 使用公开容器镜像 `ghcr.io/pickrui/oixcloud-external-proxy-program:latest`，支持 `linux/amd64` 与 `linux/arm64`，需要 Docker Engine 与 Docker Compose。GitHub Release 中的 `-amd64`、`-arm64` 和 `-legacy` 文件均用于 macOS，不是 Linux 独立程序

## 先验证配置，再启动

按 [公开 Docker 教程](https://github.com/pickrui/oixcloud-external-proxy-program/blob/main/docs/docker.md) 获取 `compose.yaml`、`config.example.json` 与自定义规则文件，复制示例为 `config.json` 后填写自己的凭据与局域网鉴权。不要把真实配置提交到仓库；权限需允许容器 UID/GID `10001` 读取，同时限制其他用户访问

在 Compose 所在目录执行：

```sh
docker compose pull
docker compose run --rm --no-deps helper --check-config --config /config/config.json
docker compose run --rm --no-deps helper --diagnose-config --map --listen 127.0.0.1:6172 --config /config/config.json
docker compose up -d
docker compose ps
```

逐条确认成功后再执行下一条。配置检查返回 `0` 表示通过、`2` 表示配置问题，不会登录账户。端口诊断只在临时容器内短暂绑定后释放，不会检查宿主机端口冲突，也不会验证上游网络或防火墙；启动后还需确认容器状态与实际连接

发布的 Compose 默认将端口开放到宿主机所有接口，启动前先配置局域网鉴权并限制防火墙；仅本机使用时将 `ports` 的宿主机地址限制为 `127.0.0.1`。如果配置包含固定 `listeners`，同时核对每项监听地址

## 核对运行结果

保持进程运行，在另一个终端检查：

```sh
curl --fail http://127.0.0.1:6172/health
curl --fail http://127.0.0.1:6172/status
```

`/health` 返回 `ok` 仅表示 HTTP 服务存活。`/status` 显示版本、模式、运行时长、最近刷新、节点与映射数量、就绪状态和绑定错误；`ready` 不代表所有节点都已测通，也不会触发订阅刷新

再在实际使用的客户端导入相应配置或节点列表，选择一个节点并访问目标网站，才能验证完整路径

## 使用容器时检查这些设置

| 项目 | 要求 |
| --- | --- |
| 配置 | 挂载到 `/config/config.json`，建议只读；容器 UID/GID `10001` 必须可读 |
| 状态 | `/data` 持久化且对该用户可写 |
| 订阅 | 发布实际 HTTP 端口，默认 `6172` |
| 代理 | 发布固定监听的 TCP 端口，或实际自动映射范围；只发布 `6172` 无法代理流量 |
| UDP | 设置 `udpPortRange`，按相同端口号发布 UDP 范围 |
| NAT / bridge | `udpAdvertiseAddress` 填客户端可达的宿主机 IPv4；它只改变宣告地址，不代替监听和端口映射 |
| 健康检查 | 修改 HTTP 端口时同步 `OIXCLOUD_SERVE_PORT` |

先配置局域网鉴权，再开放非回环监听。订阅监听和代理监听是两个设置；命令行分别使用 `--listen` 与 `--bind`，同时检查固定监听的地址。限制宿主机发布地址和防火墙范围，使之符合实际局域网需求

## 更新筛选与定位问题

Linux 没有菜单栏筛选界面；在网站或同账户的 macOS Helper 修改筛选，客户端下次获取配置或节点列表时生效，节点缓存最多 30 秒。轮询 `/status` 不会促使刷新

| 现象 | 核对 |
| --- | --- |
| 配置检查失败 | 字段格式、端口范围、路径；保留错误原文 |
| HTTP 正常但没有映射 | 账户与套餐、保留节点数、`listeners: []`、固定节点名称与端口冲突 |
| 非回环 `/status` 返回 403 | 是否已配置局域网鉴权并随请求提交正确凭据 |
| TCP 可用但 UDP 失败 | UDP 端口发布、宣告地址、防火墙及客户端来源是否可达 |
| 节点域名解析或 TLS 失败 | 当前网络 DNS、系统时间、登录门户及完整错误，不要通过关闭证书校验绕过 |

反馈时说明版本、启动方式、接入模式、端口检查与状态摘要；不要粘贴带密码的配置文件
