# Use managed and third-party nodes together {#managed-mix}

Standalone nodes, third-party subscriptions and the oixCloud managed subscription can coexist in the proxy list. You do not need to insert another provider's nodes into the managed subscription. Add the third-party source as described above, keep the managed subscription, and open the group named after the subscription in Home's node picker and select the outbound you want.

In Rule mode, the Home selection handles traffic targeting **Proxy**. Rules explicitly targeting a node, group, Direct or Reject keep their own destinations. Adding a third-party node to the list does not automatically send every website through it.

If you use the built-in **Best Available** group, check **Include All Proxies** and its members under **Proxies → Policies → Best Available**. With include-all enabled, third-party nodes can become candidates too. To keep everyday traffic on managed nodes, turn off include-all and select only the managed members you want before adding website exceptions below.

## Use a third-party outbound for selected websites {#route-third-party}

1. On Home, select your usual managed node or a group containing only managed members, and keep **Rule** mode.
2. Open **Proxies → Policies → Routing Rules → + → Add Rule**, choose **Domain Suffix** and enter the actual destination, such as `example.com`.
3. Target the imported third-party node directly, or choose a group containing third-party nodes, and save.
4. Make a new request to the destination. In **Activity → Requests**, confirm the matched rule and third-party outbound. Check that a destination without an exception still follows the original routing.

Enter a hostname rather than a complete page URL. A simple website exception does not need a proxy chain. Other traffic follows the remaining rules and Final Route; source priority and [network profiles](/en/oixflow/networks) can also affect the result. See [routing rules](/en/oixflow/routing) for diagnosis.

## Combine both sources in a policy group {#mixed-group}

To choose automatically between managed and third-party nodes, create your own URL-test group:

1. Open **Proxies → Policies → Add Policy Group**, enter a distinct name such as `Mixed exit`, and select **URL Test** as its type.
2. Choose **Add Member**, group by **Subscriptions**, expand oixCloud and the third-party subscription, and select the nodes you want from each. Standalone nodes are available in their own list or folder.
3. Choose **Done**, check the members and a reachable health-check URL, then **Save**.
4. Select `Mixed exit` on Home, or target it with a website rule, and use new requests to verify the selected member. To use a fixed outbound, you can instead choose the concrete node directly on Home or in a rule.

**All** in the member picker selects currently available nodes. **It does not mean future nodes added to that subscription automatically join this personal group.** After subscription updates, check added, removed or unusable members. Existing imported groups with dynamic provider sources follow those sources; that does not establish equivalent behavior for manually selected members.

Putting nodes in one group does not forward traffic through each of them in turn. Configure a [proxy chain or underlying proxy](/en/oixflow/proxy-chains#underlying-proxy) only when you need multiple hops.

Hollow nodes come from your managed account. The app does not import them from third-party subscriptions or share links, or offer local editing or export for them. To change which managed nodes you receive, adjust the node filter on the account page and refresh.

To add a source, [import a third-party node or subscription](/en/oixflow/import-nodes); for an unexpected result, [check the symptoms](/en/oixflow/proxies#import-troubleshooting).
