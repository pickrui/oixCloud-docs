# 自动续费、套餐接续与流量重置 {#续费与自动切换}

<span id="renewal-and-automatic-switching"></span>

套餐到期与流量提前用完走不同的接续流程。两种情况都优先激活队列中的可用套餐；没有可接续的待激活套餐时，**到期才尝试自动续费，尚未到期则尝试自动重置流量，不会提前自动续费**

下图适用于可正常接续的账户；封禁、欠费账户不自动接续，到期后结束当前套餐，已购买的待激活套餐保留

<div class="plan-flow" role="group" aria-label="套餐到期或流量用完后的接续顺序">
<div class="plan-flow-lane">
<p class="plan-flow-event"><span>套餐到期</span></p>
<div class="plan-flow-step">
<p class="plan-flow-check">待激活队列里有可接续的套餐？</p>
<p class="plan-flow-yes"><span class="plan-flow-label">是</span>按队列顺序激活第一份；原套餐若开着自动续费则转为「等待自动续费」</p>
</div>
<p class="plan-flow-no"><span class="plan-flow-label">否</span></p>
<div class="plan-flow-step">
<p class="plan-flow-check">续费队列中第一份符合资格的套餐，资金够付它的续费价吗？</p>
<p class="plan-flow-yes"><span class="plan-flow-label">是</span>按该记录的续费价扣款，新一期沿用它的续费顺序</p>
</div>
<p class="plan-flow-no"><span class="plan-flow-label">否</span></p>
<p class="plan-flow-end">套餐结束，需到商店重新购买</p>
</div>
<div class="plan-flow-lane">
<p class="plan-flow-event"><span>流量用完，尚未到期</span></p>
<div class="plan-flow-step">
<p class="plan-flow-check">待激活队列里有可接续的套餐？</p>
<p class="plan-flow-yes"><span class="plan-flow-label">是</span>按队列顺序激活第一份，原套餐剩余有效期不保留；若开着自动续费则转为「等待自动续费」</p>
</div>
<p class="plan-flow-no"><span class="plan-flow-label">否</span></p>
<div class="plan-flow-step">
<p class="plan-flow-check">当前记录开启了自动重置流量，本期支持重置、账户允许购买，且余额（含佣金）够重置价？</p>
<p class="plan-flow-yes"><span class="plan-flow-label">是</span>扣重置价，清零已用流量，到期时间不变</p>
</div>
<p class="plan-flow-no"><span class="plan-flow-label">否</span></p>
<p class="plan-flow-end">暂时保持低速，不提前自动续费；到期时按上方「套餐到期」处理</p>
</div>
</div>

普通套餐续费与流量重置都需余额（含佣金）足够支付当次费用；开发者账户续期开发者套餐免费

低速期间，若新增了可接续的待激活套餐，系统会优先自动切换；若没有待激活套餐，开启自动重置或补足资金后，满足本期重置条件的约 1 分钟内自动重置，不必一直等到到期

| 操作或阶段 | 行为与条件 |
| --- | --- |
| 待激活队列 | 可调整顺序；当前套餐结束或流量耗尽时优先按顺序切换 |
| 自动续费 | 到期且没有可接续的待激活套餐时，才按[续费队列](#auto-renew)顺序尝试第一份符合资格的记录 |
| 自动重置流量 | 流量用完时按重置价清零已用流量，到期时间不变，见 [自动重置流量](#traffic-reset) |
| 提前准备下一期 | 从商店加购套餐，按当次新购价格和库存条件购买，生成待激活记录，不立即增加当前套餐流量；新记录默认不开自动续费，原续费对象不因加购改变 |

## 自动续费 {#auto-renew}

<figure class="guide-figure">
  <a href="/illustrations/account-renewal-zh.svg?v=20261127-1" target="_blank" rel="noopener" aria-label="在续费队列查看首选、备选和续费价格">
    <img src="/illustrations/account-renewal-zh.svg?v=20261127-1" alt="在续费队列查看首选、备选和续费价格" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>同类套餐的两条购买记录，金额为示例</figcaption>
</figure>

1. 打开[套餐管理](https://oixcloud.com/user/bought)，在要续的购买记录上开启「续费队列」。新购默认关闭，套餐类型、等级、节点权限和计费周期都相同的记录可以一起加入，新加入的排在末尾
2. 在下方「续费队列」核对「首选」和续费价。拖动记录或用上下方向键调整顺序，也可点「低价优先排序」排一次。只想停续一份就点它的「移出」，要停止所有自动续费就清空队列
3. 到期前准备足够余额（含佣金）。普通入队直接保存。若当前已到期、没有待激活套餐，且这条记录将成为第一份可扣款的记录，页面会先请你确认非零金额，最快在下一次系统检查时扣款

**先用已购套餐，再按优先级续费**。系统跳过已失去资格的记录，尝试第一份仍符合资格的套餐。若它余额不足，不会改扣较便宜的备选。续费成功后新记录继承原顺序，其他记录继续等待。到期后可在「使用中」记录核对新期限与流量

被待激活套餐接替的记录若已入队，会显示「等待自动续费」。移出后不影响正在使用的服务或已购套餐，记录结束前仍可按当时资格重新加入。要提前买好下一期，可从商店加购并核对当次新购价

## 自动重置流量 {#traffic-reset}

<figure class="guide-figure">
  <a href="/illustrations/account-traffic-reset-zh.svg?v=20261127-1" target="_blank" rel="noopener" aria-label="开启自动重置前核对每次费用">
    <img src="/illustrations/account-traffic-reset-zh.svg?v=20261127-1" alt="开启自动重置前核对每次费用" width="1120" height="975" loading="lazy">
  </a>
  <figcaption>界面示意 · 虚构数据</figcaption>
</figure>

1. 打开 [套餐管理](https://oixcloud.com/user/bought)，在目标记录中找到「自动重置流量」，核对开关下方的每次费用；待激活记录的设置在激活后才适用
2. 点击开关并阅读确认框。当前流量已经用完且满足立即处理条件时，会提示「开启并扣款」，确认后约 1 分钟内可能发生扣款
3. 重置后刷新用户中心，核对已用流量清零、余额扣减和到期时间不变；若连接仍慢，等待节点同步后重新连接
4. 不希望以后继续自动付费重置时，关闭该记录的开关；这不会关闭自动续费，也不会取消已经完成的重置扣款

可在购买记录里为每条记录单独开启「自动重置流量」，默认关闭，续费生成的新记录沿用原记录的设置。开启后，当前套餐尚未到期、流量用完且没有可接续的待激活套餐，本期支持重置、账户允许购买并且资金足够时，系统按重置价清零已用流量，到期时间不变；重置价显示在购买记录的开关下方，不享折扣代码；它按当前商品对应周期的重置价计算，未单独设置时使用该周期当前售价，不是原记录的续费价

流量已用完时再开启，满足上述条件的约 1 分钟内扣款并重置；仅因余额（含佣金）不足而未重置的，保持低速，充值补足后自动重置。到期前任何时候用完，满足条件都可重置；临近到期重置不会延长有效期，到期后仍先检查待激活队列，没有可接续套餐时才按自动续费设置处理。开发者套餐与按量付费套餐不提供

自动重置不是一次性购买：开关保持开启时，同一期再次耗尽流量且条件满足，仍会再次按重置价扣款。本期付费重置后不发放到期权益额度，见 [权益额度发放](/account/benefit-credits)

<span id="if-automatic-continuation-did-not-happen"></span>

## 自动接续没有发生

核对耗尽原因并分别检查对应的接续条件：

- **套餐到期时**，先查待激活队列。没有可接续套餐时，到「续费队列」核对首选记录、续费资格、计费周期和余额（含佣金）。首选余额不足时不会改扣备选
- **流量用尽时**：优先检查待激活队列中是否有可激活套餐；没有待激活套餐时，检查当前购买记录是否开启了「自动重置流量」、本期是否支持重置、账户是否允许购买，以及余额（含佣金）是否足够支付重置价。注意自动续费只在套餐到期时执行，流量用完不会提前触发自动续费

手动激活、升级和退款入口按订单状态显示；没有入口时不要用新建订单模拟同一操作
