# Helper Linux 与运行诊断

从 [公开发行页](https://github.com/pickrui/oixcloud-external-proxy-program/releases) 获取对应 Linux 架构的程序，文件名仍是 `oixcloud-external-proxy-program`。容器镜像使用公开发行地址 `ghcr.io/pickrui/oixcloud-external-proxy-program`，部署参数参考 [公开文档](https://github.com/pickrui/oixcloud-external-proxy-program)

## 先验证配置，再启动

使用发行包提供的配置示例填写自己的凭据，将 `config.json` 设为仅自己可读写。默认目录是 `~/.config/oixcloud-external-proxy-program/`，也可以显式指定路径

下面在已解压程序的目录执行，先以仅本机访问的方式运行：

```sh
chmod 600 ./config.json
./oixcloud-external-proxy-program --check-config --config ./config.json
./oixcloud-external-proxy-program --diagnose-config --map --listen 127.0.0.1:6172 --config ./config.json
./oixcloud-external-proxy-program --map --listen 127.0.0.1:6172 --bind 127.0.0.1 --config ./config.json
```

逐条确认检查成功后再执行下一条；最后一条会持续运行。检查配置返回 `0` 表示通过、`2` 表示配置问题，不会登录账户。端口诊断会短暂绑定后释放端口，不代表后台已运行，也不会验证上游网络或防火墙

如果配置包含固定 `listeners`，同时核对每项监听地址；命令行默认绑定值不应替代逐项检查

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
