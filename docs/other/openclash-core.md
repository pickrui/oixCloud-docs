# 更新 OpenClash 的 oix 内核 {#kernel-update}

<figure class="guide-figure">
  <a href="/illustrations/openclash-version-zh.svg?v=20261105-3" target="_blank" rel="noopener" aria-label="OpenClash · 在版本更新中升级或更换 oix 内核">
    <img src="/illustrations/openclash-version-zh.svg?v=20261105-3" alt="OpenClash · 在版本更新中升级或更换 oix 内核" width="1120" height="975" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>按维护版本绘制的界面示意 · 虚构数据</figcaption>
</figure>

oix 内核是支持 oixCloud 托管节点的 Mihomo 构建，不能用普通 Mihomo 包替代。维护版本登录账户后会优先使用它；插件更新、内核更新和订阅更新是三个不同操作

<span id="online-core-update"></span>

## 在线更新内核

1. 打开「服务 → OpenClash → 插件设置 → 版本更新」，先导出包含内核的备份并保存到电脑
2. 核对 CPU「编译版本」，例如 `linux-arm64`、`linux-amd64-v1` 或 `linux-armv7`
3. 在内核列点击版本号链接，等待日志确认下载、校验和替换成功；使用与编译版本匹配的专用内核包
4. 返回「运行状态」，如尚未运行则启动 OpenClash，确认版本包含 `oix`，再用局域网设备验证实际连接

安装路径通常是 `/etc/openclash/core/clash_meta`；启用小闪存模式时是 `/tmp/etc/openclash/core/clash_meta`。更新程序按实际模式选择路径并设置执行权限

<span id="manual-core-replacement-via-ssh"></span>

## 手动上传与替换内核

在线更新失败时，可从 [mihomo-oix 的 Pre-Alpha 发行页](https://github.com/vernesong/mihomo-oix/releases/tag/Pre-Alpha) 下载与「编译版本」匹配的 `.gz` 文件。不要使用普通 Mihomo、其他 CPU 架构或桌面安装包

::: warning 替换前备份并确认空间
先导出包含旧内核的备份，记录当前编译版本与安装路径。内核大小随架构和版本变化，以下载文件解压后的实际大小为准；用 `df -h` 检查临时目录及目标分区的可用空间。下面以普通模式、路由器地址 `192.168.1.1` 为例；按实际地址操作，小闪存模式须把目标路径改为 `/tmp/etc/openclash/core/clash_meta`
:::

1. 在电脑上解压，先将占位文件名替换为实际下载的文件名：
   ```sh
   gzip -dc 'mihomo-<arch>-<version>.gz' > clash_meta
   ```
2. 在 LuCI「运行状态」停止 OpenClash，再将新文件上传到临时位置：
   ```sh
   scp clash_meta root@192.168.1.1:/tmp/clash_meta.new
   ```
3. 登录路由器 SSH，核对新文件可以运行且版本包含 `oix`：
   ```sh
   chmod 755 /tmp/clash_meta.new
   /tmp/clash_meta.new -v
   ```
   如果不能运行，先检查架构、文件完整性和具体报错，不要继续替换
4. 核对目标路径后复制新文件，并按插件的方式设置权限：
   ```sh
   cp /tmp/clash_meta.new /etc/openclash/core/clash_meta
   chmod 4755 /etc/openclash/core/clash_meta
   /etc/openclash/core/clash_meta -v
   ```
5. 回到网页启动 OpenClash，检查运行日志，并用局域网设备测试。失败时停止服务，从备份取出旧内核，按同样的上传与校验步骤恢复；不要通过反复更新订阅来解决内核无法启动的问题

确认运行正常后，可以删除本次上传的 `/tmp/clash_meta.new`；保留电脑上的备份用于回退
