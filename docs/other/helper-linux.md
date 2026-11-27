# Helper Linux 与运行诊断

Linux / NAS 使用公开容器镜像 `ghcr.io/pickrui/oixcloud-external-proxy-program:latest`，支持 `linux/amd64` 与 `linux/arm64`，需要 Docker Engine 与 Docker Compose。GitHub Release 中的 `-amd64`、`-arm64` 和 `-legacy` 文件均用于 macOS，不是 Linux 独立程序

## 先验证配置，再启动


<figure class="guide-figure">
  <a href="/illustrations/helper-linux-zh.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="oixCloud Helper · Linux / Docker Helper 运行与状态检查">
    <img src="/illustrations/helper-linux-zh.svg?v=20261127-3" alt="oixCloud Helper · Linux / Docker Helper 运行与状态检查" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据</figcaption>
</figure>

按[公开 Docker 教程](https://github.com/pickrui/oixcloud-external-proxy-program/blob/main/docs/docker.md)取得 `compose.yaml`、`config.example.json` 和自定义规则文件，将示例复制为 `config.json`。在 `accessToken` 填入网站[新增时显示的完整 Access Token](/account/access-tokens#manual-token)，也可用 `email` 和 `password` 登录。局域网鉴权另行设置。让容器 UID/GID `10001` 可读，并限制其他用户访问

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

容器启动后直接获取托管节点，不需要批准设备；首次登录时账户会收到新设备登录提醒，见 [新设备登录与提醒](/account/client-sign-in#device-approval)

## 核对运行结果

保持进程运行，在另一个终端检查：

```sh
curl --fail http://127.0.0.1:6172/health
curl --fail http://127.0.0.1:6172/status
```

`/health` 返回 `ok` 仅表示 HTTP 服务存活。`/status` 显示版本、模式、运行时长、最近刷新、节点与映射数量、就绪状态和绑定错误；`ready` 不代表所有节点都已测通，也不会触发订阅刷新

### 在哪里选择节点和设置规则 {#routing}

- **选择节点**：默认 Compose 使用多端口映射。在使用这些映射的客户端中，打开手动策略组，选择映射节点；只接入固定端口的应用使用该端口对应的节点。使用固定 `listeners` 时，按[监听项与节点的对应关系](/other/helper-mapping)核对端口
- **给网站指定出口**：导入 Helper 生成的 Surge 配置时，可在 Compose 挂载到 `/config/custom.conf` 的文件中[添加规则](/other/surge-routing#routing-rules)，保存后让客户端重新获取配置。只导入节点列表时，在接收客户端设置分流规则和策略组
- **多跳**：需要托管中继时，在网站[设置内部中继](/account/relay#内部中继)，回到接收客户端选入口节点。完成后重新访问目标，在接收客户端查看命中的规则和出口

### 验证使用代理的应用 {#capture-dns}

在使用代理的应用里填入宿主机地址和已发布的代理端口，打开一个网站验证。默认的 `6172` 提供配置和状态。要让整台设备走代理、切换规则模式或更改网站 DNS，在实际接管流量的客户端设置，例如 [FlClash for oixCloud](/flclash/capture) 或 [Surge Mac](/other/surge-routing#capture-mode)，在那里也能核对新请求和出口


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

1. 在网站[订阅管理](https://oixcloud.com/user/sub_manage)编辑容器实际使用的订阅地址，或在使用**同一条地址**的 macOS Helper 调整筛选。手动 Access Token 可在网站的[订阅配置](/account/subscriptions)核对绑定
2. 保存后，在使用 Helper 的客户端重新获取本地配置或节点列表。短时间重复请求可能沿用最近 30 秒的成功结果；映射模式也会在后台定期更新
3. 用 `/status` 查看 `lastSuccessAt`、`nodeCount` 和 `mappingCount`，再连接一个保留的节点。读取状态只显示上次结果

| 现象 | 核对 |
| --- | --- |
| 配置检查失败 | 字段格式、端口范围、路径；保留错误原文 |
| HTTP 正常但没有映射 | 账户与套餐、保留节点数、`listeners: []`、固定节点名称与端口冲突 |
| 非回环 `/status` 返回 403 | 是否已配置局域网鉴权并随请求提交正确凭据 |
| TCP 可用但 UDP 失败 | UDP 端口发布、宣告地址、防火墙及客户端来源是否可达 |
| 节点域名解析或 TLS 失败 | 当前网络 DNS、系统时间、登录门户及完整错误，不要通过关闭证书校验绕过 |

反馈时说明版本、启动方式、接入模式、端口检查与状态摘要；不要粘贴带密码的配置文件
