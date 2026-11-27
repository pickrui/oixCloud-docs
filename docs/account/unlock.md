# IPv4 Only、WARP 与流媒体解锁

在用户中心的「流量路由」中，可以按节点调整 IPv4 Only、WARP 和流媒体地区。先在 [节点列表](https://oixcloud.com/user/node) 确认实际使用的节点，再进入相应分类；这些设置在服务端生效，账户级开关另有作用范围。[总览页](https://oixcloud.com/user/route)汇总已单独设置的节点，账户级开关也在这里

| 设置 | 生效范围 | 默认状态 |
| --- | --- | --- |
| IPv4 Only | 所选支持节点处理的目标网站连接 | 关闭 |
| WARP、[流媒体地区](/account/streaming) | 所设置的支持节点与服务 | 以该节点页面为准 |
| 屏蔽 STUN 连接 | 当前账户在支持节点上的所有设备 | 开启 |
| YouTube 后台播放兼容 | 当前账户的所有节点 | 关闭 |

配置 IPv4 Only、WARP 或流媒体解锁时，选择对应页面列出的可用节点。节点或同组后端被管理员限制时，页面会标记[流量路由限制](/account/home-isp#isp-routing)

## 只让目标网站看到 IPv4 出口 {#ipv4-only}

IPv4 Only 让所选节点仅通过 IPv4 连接目标网站，适用于需要 IPv4 出口或节点 IPv6 出口访问异常的场景

<figure class="guide-figure">
  <a href="/illustrations/account-ipv4-only-zh.svg?v=20261107-1" target="_blank" rel="noopener" aria-label="oixCloud · 搜索并批量开启 IPv4 Only">
    <img src="/illustrations/account-ipv4-only-zh.svg?v=20261107-1" alt="oixCloud · 搜索并批量开启 IPv4 Only" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据</figcaption>
</figure>

1. 打开 [IPv4 Only](https://oixcloud.com/user/ipv4-only)，搜索节点名称，按需筛选「未开启」
2. 打开该行的「IPv4 Only」开关，等待自动保存结果；多个节点可按下方 [批量操作](#bulk-settings) 处理
3. 等待节点同步，关闭目标应用的旧连接，再通过该节点建立新连接并核对网站看到的出口 IP，**无需更新订阅**

此功能不删除中继规则。内部中继路径经过已开启 IPv4 Only 的节点时，限制会继续作用于该路径的最终目标连接；设备到节点、内部中继链路和 WARP 隧道本身仍可使用 IPv6。[HTTP/3](/account/http3) 调整的是客户端到节点的传输方式，也不决定网站看到的地址族

仅有 IPv6 地址的网站及直接指定的 IPv6 目标将无法访问；如果客户端已经把域名解析成 IPv6 地址再提交，也可能因此失败。限制只覆盖节点处理的目标连接，不能控制外部转发服务器或后续第三方代理的最终出口。独享 IP 节点不在此设置范围内，可配置范围以页面列表为准

IPv4 Only 不保证提速，实际速度取决于 IPv4 线路质量，部分流媒体解锁效果也可能改变。建议先在一个节点上对比同一目标，出现问题时关闭该节点的开关、等待同步并重新连接

## 为节点开启 WARP

<figure class="guide-figure">
  <a href="/illustrations/account-warp-zh.svg?v=20261107-1" target="_blank" rel="noopener" aria-label="oixCloud · 核对 WARP 回退与 IPv4 Only 联动">
    <img src="/illustrations/account-warp-zh.svg?v=20261107-1" alt="oixCloud · 核对 WARP 回退与 IPv4 Only 联动" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据</figcaption>
</figure>

1. 打开 [WARP](https://oixcloud.com/user/warp)，找到需要调整的节点
2. 开启前先记录仍需保留的中继：启用 WARP 会移除以该逻辑节点为来源或目标的内部中继，以及以它为来源的外部中继
3. 切换 WARP 开关，若出现清理中继的提示，阅读影响后再确认。开关会自动提交，等待保存结果；再按需求调整「智能回退」和「出口偏好」并核对结果
4. 若移除了中继，更新客户端配置；等待节点同步后，断开旧连接并重新连接该节点，用目标网站核对结果

关闭 WARP 不会恢复已删除的中继规则。WARP 可能改变出口 IP 和地区，增加的转发路径也可能提高延迟或降低速度，不能保证提速或解锁成功

| 选项 | WARP 不可用时 |
| --- | --- |
| 智能回退开启 | 使用远程节点自身的普通出口，出口 IP 或地区可能改变 |
| 智能回退关闭 | 拒绝连接，不自动换用普通出口 |

这里的回退不是把本机切换到「直连模式」。若必须保持特定出口，先评估回退行为再选择开关

### WARP 出口偏好与 IPv4 Only {#warp-ip-preference}

「出口偏好」中的 IPv4 / IPv6 是优先选择，目标只有另一种地址时仍可使用另一种；需要严格的 IPv4 出口时使用 IPv4 Only

| IPv4 Only | WARP | 目标网站连接 |
| --- | --- | --- |
| 关闭 | 关闭 | 使用节点默认出口策略 |
| 关闭 | 开启 | 按 WARP 出口偏好优先使用 IPv4 或 IPv6 |
| 开启 | 关闭 | 节点仅使用 IPv4 |
| 开启 | 开启 | WARP 及允许的智能回退均只使用 IPv4 |

开启 IPv4 Only 后，WARP 行内的出口偏好换成可点击的「IPv4 Only」管理入口。**原 WARP 偏好保留，关闭 IPv4 Only 后恢复**；例如原本选择 IPv6，恢复后仍是 IPv6 优先。它不会替你关闭 WARP 或智能回退，也不会自动打开原本关闭的 WARP

若从另一个页面修改了 IPv4 Only，刷新已打开的 WARP 页后再核对。批量修改 WARP 出口偏好也会跳过开启 IPv4 Only 的节点

## 多节点搜索与批量操作 {#bulk-settings}

「流量路由」各分类不分页。HTTP/3、WARP、IPv4 Only 提供节点搜索、状态筛选和批量设置；流媒体地区按节点、服务分别设置，也可筛选并批量恢复默认。内部、外部中继的[批量删除](/account/relay#bulk-delete)操作另有范围

1. 在目标分类搜索节点，按需筛选「已开启」「未开启」等状态
2. 勾选节点，或勾选表头的复选框选中**符合当前搜索与筛选条件的全部可用节点**，包括屏幕下方尚未滚动到的行。修改搜索或筛选条件会清空选择
3. 选择批量操作，核对「应用到 N 个节点」后执行。不可用节点及已经是目标状态的节点会跳过，因此应用数量可能少于已选数量
4. 等待保存结果；批量开启 WARP 若提示清理中继，先确认影响范围。WARP 的智能回退只修改已开启 WARP 的节点，出口偏好还会跳过 IPv4 Only 节点

批量保存前会检查所有提交的节点。如果有节点无法修改，整批都不会写入。请求超时且没有显示结果时，先刷新页面核对，再决定是否重试

## 语音、远程连接与 STUN {#stun}

在 [流量路由总览](https://oixcloud.com/user/route) 的「账户通用设置」里核对「屏蔽 STUN 连接」的当前状态。默认开启；遇到语音视频通话、远程连接或设备互联异常时，可记录原值并尝试关闭

保存后等待节点同步，再关闭目标应用的旧连接并重新测试。此开关作用于账户在支持节点上的所有设备，不只影响当前浏览器或客户端；没有改善时恢复原设置，再检查客户端的 UDP、规则及网络接管

## 设置后仍不符合预期

- 先确认实际选中的是修改过的节点，目标服务没有被分流到另一个出口
- 检查 IPv4 Only 是否开启、目标是否只有 IPv6，以及 WARP 是否发生智能回退；流媒体设置还需支持该服务和节点
- 关闭目标应用的旧连接后重试；客户端已连接或延迟正常都不能单独证明解锁成功
- 提交问题时附节点、服务、所选地区、出错时间和提示，不要附账户密码或完整订阅链接
