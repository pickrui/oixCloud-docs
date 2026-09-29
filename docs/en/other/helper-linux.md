# Helper on Linux and runtime diagnostics

Download the binary for your Linux architecture from [public releases](https://github.com/pickrui/oixcloud-external-proxy-program/releases). Its filename remains `oixcloud-external-proxy-program`. The public container image is `ghcr.io/pickrui/oixcloud-external-proxy-program`; use the [public deployment documentation](https://github.com/pickrui/oixcloud-external-proxy-program) for release-specific parameters.

## Validate before starting

Fill in your credentials using the release's example configuration and restrict `config.json` to your user. The default directory is `~/.config/oixcloud-external-proxy-program/`, or pass an explicit path.

Run these in the extracted program directory, starting with local-only access:

```sh
chmod 600 ./config.json
./oixcloud-external-proxy-program --check-config --config ./config.json
./oixcloud-external-proxy-program --diagnose-config --map --listen 127.0.0.1:6172 --config ./config.json
./oixcloud-external-proxy-program --map --listen 127.0.0.1:6172 --bind 127.0.0.1 --config ./config.json
```

Check each result before continuing; the final command keeps running. Configuration checks return `0` for success or `2` for configuration errors and do not sign in. Port diagnostics briefly bind and release ports; they neither start a background service nor test upstream connectivity/firewalls.

If you configure fixed `listeners`, inspect each entry's address too; do not treat a command-line default bind address as a substitute for that check.

## Read back runtime status

With the process running, use another terminal:

```sh
curl --fail http://127.0.0.1:6172/health
curl --fail http://127.0.0.1:6172/status
```

`ok` from `/health` only means the HTTP service is alive. `/status` reports version, mode, uptime, last refresh, node/mapping counts, readiness and binding errors. `ready` does not prove every upstream node works, and reading status does not refresh subscriptions.

Import the appropriate configuration or node list into the consuming client, select a node and visit a target to verify the complete path.

## Container checklist

| Item | Requirement |
| --- | --- |
| Configuration | Mount at `/config/config.json`, preferably read-only; container UID/GID `10001` must be able to read it. |
| State | Persist `/data` and make it writable by that user. |
| Subscription | Publish the actual HTTP port, `6172` by default. |
| Proxy | Publish fixed TCP listener ports or the actual automatic mapping range. Publishing only `6172` cannot forward proxy traffic. |
| UDP | Configure `udpPortRange` and publish the same UDP port numbers. |
| NAT / bridge | Set `udpAdvertiseAddress` to a host IPv4 address reachable by clients; this changes advertisement, not binding or port publication. |
| Health check | Update `OIXCLOUD_SERVE_PORT` if the HTTP port changes. |

Configure LAN authentication before non-loopback access. Subscription and proxy listeners are separate (`--listen` and `--bind` in the CLI); also check fixed-listener addresses. Limit published host addresses and firewall scope to the LAN access you need.

## Filters and troubleshooting

Linux has no menu-bar filter editor. Change the filter on the website or in macOS Helper on the same account; it is applied when a client next fetches a configuration or node list, with up to 30 seconds of node caching. Polling `/status` does not cause a refresh.

| Symptom | Check |
| --- | --- |
| Configuration check fails | Field format, port ranges and paths; retain the original error. |
| HTTP works but no mappings | Account/plan, retained nodes, `listeners: []`, exact fixed node names and port conflicts. |
| Non-loopback `/status` returns 403 | Configured LAN authentication and supplied credentials. |
| TCP works but UDP fails | UDP publication, advertised address, firewall and client reachability. |
| Node DNS or TLS fails | Current DNS, system time, captive portal and full error; do not bypass certificate validation. |

Reports should include version, launch method, mode, port-check results and a status summary, without a credential-bearing configuration file.
