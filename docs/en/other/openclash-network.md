# OpenClash traffic capture and DNS {#openclash-network}

## Switch proxy modes or enable TUN {#capture-mode}

<figure class="guide-figure">
  <a href="/illustrations/openclash-modes-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Proxy Mode, DNS mode and TUN on the OpenClash status page">
    <img src="/illustrations/openclash-modes-en.svg?v=20261127-5" alt="Proxy Mode, DNS mode and TUN on the OpenClash status page" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

1. In LuCI, open **Services → OpenClash → Overviews**. Under **Proxy Mode**, choose **Rule** for per-site routing, **Global** to send ordinary captured connections through the global group, or **Direct** for a direct exit.
2. To use the router’s virtual interface, select **TUN** under **Running Mode** on the same page. Wait for the service to resume. Fake-IP / Redir-Host controls the kind of DNS answer returned and can keep its current value.
3. On a device using this router as its gateway and included in access control, revisit a website. In the dashboard’s **Connections**, find the new record by hostname or device IP and check its exit. If it is missing, check the [port scope](/en/other/openclash#common-ports) and bypass settings.

## Set and verify the router’s DNS {#configure-dns}

<figure class="guide-figure">
  <a href="/illustrations/openclash-dns-en.svg?v=20261127-5" target="_blank" rel="noopener" aria-label="Set and apply a nameserver for ordinary domains in Overwrite Settings">
    <img src="/illustrations/openclash-dns-en.svg?v=20261127-5" alt="Set and apply a nameserver for ordinary domains in Overwrite Settings" width="1120" height="1100" loading="lazy">
  </a>
  <figcaption>English interface simulation · Fictional data</figcaption>
</figure>

1. For everyday use you can keep the profile’s DNS. In **Plugin Settings → DNS Settings → Redirect Local DNS Setting**, check how LAN DNS is forwarded to OpenClash. Use Dnsmasq or firewall forwarding as appropriate for your network.
2. To change resolvers, open **Overwrite Settings → DNS Settings** and enable **Custom DNS Setting**. In the DNS server table below, add or edit a `nameserver` entry, set a reachable address, protocol and port, enable the row, then select **Apply Settings**.
3. Once running, open the active profile’s **⋯** menu under **Config Manage** and select **Download Running Config** and check `dns.nameserver`. On a LAN client, run `nslookup example.com ROUTER_LAN_IP` with the router’s actual address and check for an answer. To verify a particular upstream received the query, use a resolver whose records you can inspect and query a fresh domain.
