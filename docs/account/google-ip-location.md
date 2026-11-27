---
description: 如何减少 Google 误判独享 IP 地区的风险，在电脑和手机关闭定位，核对搜索结果的位置来源，并向 Google 申请纠正
---

# 独享 IP 防送中指南

“送中”是指境外出口 IP 被 Google 识别为中国大陆。该 IP 在持有期间由您独占。请爱惜使用，尽量避免与他人共用，并关闭 Google 定位权限

## 第一步：关闭 Google 的定位权限 {#permissions}

在每台常用设备上设置一次。只需调整用来搜索的浏览器或 Google App，其他应用可以继续使用系统定位

| 使用方式 | 在哪里设置 |
| --- | --- |
| 电脑或 Android 版 Chrome | 打开 `google.com`，点地址栏旁的「网站信息」→「网站设置」或「权限」，将「位置信息」设为「阻止」 |
| Android 版 Google App | 打开手机「设置」→「应用」→「Google」→「权限」→「位置信息」，选「不允许」 |
| iPhone 或 iPad | 打开「设置」→「隐私与安全性」→「定位服务」，找到「Safari 浏览器网站」、Chrome 或 Google，按实际使用的应用选「永不」 |

关闭定位可减少设备位置对搜索结果的影响，Google 仍可根据出口 IP 估算地区。[Google 定位说明](https://support.google.com/websearch/answer/179386) · [Apple 定位设置](https://support.apple.com/zh-cn/102647)

如果已经在用 Location Guard，它的「Use fixed location」只会改变网页通过浏览器定位接口读到的位置。要纠正 Google 对 IP 的地区标注，仍需使用下方的反馈表单。[Location Guard 说明](https://github.com/chatziko/location-guard#what-is-a-fixed-location)

## 第二步：确认 Google 看到的出口 {#verify}

登录面板，打开「节点列表 → 独享 IP」，在地址下查看「Google 地区检测」。若检测到中国大陆地区信号，例如从 `google.com` 自动跳转到 `google.com.hk`，面板会显示「疑似送中」。若显示「地区待核实」「无法判断」「待检测」或「结果已过期」，可以按下面的步骤自行核对。[查看我的独享 IP](https://oixcloud.com/user/node?node_level=Exclusive)

1. 在客户端选择自己的独享 IP，打开一个未登录 Google 的无痕窗口，拒绝定位请求并搜索一次。到客户端的连接记录中确认 Google 请求确实走了这个独享出口
2. 查看**搜索结果页最底部**的地区和位置来源。若来源是设备、账号中的家庭或工作地址，或过去的活动，它们都可能影响结果。Google 也可能用 Cookie 保留上次的设备位置约 6 小时
3. 如果来源是**「根据您的 IP 地址」**，而显示的地区仍是中国大陆，再向 Google 反馈。仅凭 YouTube Premium 或 Gemini 无法使用，不能确定 IP 的地区标注

## 第三步：趁仍持有 IP 时申请纠正 {#report}

保持连接该独享出口，登录 [Google IP 地区纠正表单](https://support.google.com/websearch/workflow/9308722)，如实填写出口的实际国家或地区并提交。Google 表示更新可能超过一个月，建议发现误判时尽早反馈

经核实，Google 将独享 IP 判定为中国大陆，视为轻度违规。**自 IP 回收之日起满 14 天、地区仍未恢复正确时，可能酌情扣除部分保证金**。[独享 IP 保证金规则](/account/dedicated-ip#ip-deposit)
