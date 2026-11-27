# Edit account rules in oixClash {#_7-edit-account-custom-rules}

<span id="_7-编辑账号自定义规则"></span>

<span id="routing-rules"></span>

From oixClash 0.0.2, **自定义规则** (Custom Rules) edits the same [account rules](https://oixcloud.com/user/rule) as the website. These rules precede the defaults. Saving affects other clients that use this account rule list. Saving an empty editor deletes the entire account list, so keep a copy of anything you need first.

<figure class="guide-figure">
  <a href="/illustrations/oixclash-rules-en.svg?v=20261127-4" target="_blank" rel="noopener" aria-label="oixClash · Read and save shared account rules">
    <img src="/illustrations/oixclash-rules-en.svg?v=20261127-4" alt="oixClash · Read and save shared account rules" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English reference with Chinese control names · Chinese-only plugin UI</figcaption>
</figure>

1. Sign in and click **读取面板规则** (Read Panel Rules). Wait until the status confirms that the rules are ready to edit.
2. Enter one standard Surge-format rule per line, without `rules:` or a leading dash. Lines starting with `#` or `//` are comments. Use `DIRECT`, `REJECT`, or a policy group that exists in the configuration.
3. Click **保存到面板并更新** (Save to Panel and Update), then read the log. A running plugin updates and checks the configuration; a stopped plugin fetches and checks it when next enabled.
4. Make a new connection from a LAN device and verify the matched rule and outbound in the dashboard.

```text
DOMAIN,ads.example.com,REJECT
DOMAIN-SUFFIX,example.com,DIRECT
```

Put the specific domain first. This example rejects `ads.example.com` and sends the remaining `example.com` subdomains directly.

The router editor handles up to 8192 UTF-8 bytes. Some characters use multiple bytes. Edit longer lists on the website and then click **更新节点** (Update Nodes); do not truncate the list to fit the editor.

| Message or situation | What to do |
| --- | --- |
| Another page changed the rules | Keep a separate copy of your draft, read the latest rules, then merge your changes instead of overwriting the newer content. |
| Saved to the panel, but not applied on the router | The website list has changed. Fix the rule or network problem, then click **更新节点** and verify a connection. |
| Reading fails, or this version has no editor | Edit account rules on the website, then click **更新节点**. Reading and saving within the plugin also require support from the website. |

Reading again replaces unsaved edits, so review the confirmation first. Account rules and node filters have different sharing scopes; see [Subscriptions and filters](/en/account/subscriptions#account-rules).
