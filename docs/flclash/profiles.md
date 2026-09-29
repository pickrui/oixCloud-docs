---
description: "配置、订阅与更新的操作步骤、适用范围与常见问题"
---

# 配置、订阅与更新

## 托管配置与普通配置

登录 oixCloud 后自动导入的是托管配置。自己的订阅或本地文件通过「配置 → 添加配置」导入；填写完整 URL，或选择本地文件

选择配置并启动后，确认代理列表已经变为这份配置的内容。列表中有配置并不代表它已经应用

## 手动与自动更新

<figure class="guide-figure">
  <a href="/illustrations/flclash-profiles-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 更新与管理配置">
    <img src="/illustrations/flclash-profiles-zh.svg?v=20260929-2" alt="FlClash for oixCloud · 更新与管理配置" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

打开配置操作菜单，使用「同步」更新。编辑配置时可设置自动更新及间隔；更新后检查结果，下载失败不等于已经应用了新节点

托管配置的账号、节点筛选和套餐信息从「oixCloud」入口管理。更新账户信息与同步配置不是同一件事

## 托管订阅选项

<figure class="guide-figure">
  <a href="/illustrations/flclash-filter-zh.svg?v=20260929-2" target="_blank" rel="noopener" aria-label="FlClash for oixCloud · 可视化节点筛选">
    <img src="/illustrations/flclash-filter-zh.svg?v=20260929-2" alt="FlClash for oixCloud · 可视化节点筛选" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>中文模拟界面 · 虚构数据 · 点击查看大图</figcaption>
</figure>

在「oixCloud → 节点筛选」按线路、地区和名称调整，检查预览并保存。保存后会自动刷新账户并同步托管配置，等待完成后检查节点；失败时按提示处理，再在账户页「同步」。恢复默认会使用智能优选；同一账户的同款客户端共享筛选，详见 [订阅与筛选](/account/subscriptions)

配置编辑页仍可调整精简规则、TCP Fast Open 等支持项，没明确需求时保持默认。筛选不会提升套餐权限，不能保存保留节点数为零的条件

## 修改配置前

普通配置可预览或编辑内容，但订阅更新可能覆盖直接修改。希望长期保留个人规则和策略组时，使用 [覆写与附加规则](/flclash/rules)

托管配置保留专用管理方式，不能假定与普通 YAML 文件具有同样的导出或编辑入口

## 更新后核对四件事

1. 同步结果是否成功，而不是只看按钮已结束转动
2. 当前选中的配置是否就是刚更新的配置
3. 代理页是否出现筛选后应保留的节点，原来的节点选择是否还有效
4. 新连接是否使用预期规则与出口；旧连接可能仍沿用原先的路径

URL 配置依赖订阅服务可达，本地文件配置没有远程地址可供刷新。下载失败时先保留错误和旧配置，检查订阅有效期、账户权限及网络；反复新建同一个配置会增加排查难度
