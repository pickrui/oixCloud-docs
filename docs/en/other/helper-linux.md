# Helper on Linux and runtime diagnostics

For Linux / NAS, use the public container image `ghcr.io/pickrui/oixcloud-external-proxy-program:latest`. It supports `linux/amd64` and `linux/arm64` and requires Docker Engine and Docker Compose. The `-amd64`, `-arm64` and `-legacy` files on GitHub Releases are macOS executables, not standalone Linux programs.

## Validate before starting

Follow the [public Docker guide](https://github.com/pickrui/oixcloud-external-proxy-program/blob/main/docs/docker.md#english) to obtain `compose.yaml`, `config.example.json` and the custom rules file. Copy the example to `config.json` and set your credentials and LAN authentication. Keep real configurations out of Git. Permissions must let container UID/GID `10001` read the file while restricting other users.

In the Compose directory, run:

```sh
docker compose pull
docker compose run --rm --no-deps helper --check-config --config /config/config.json
docker compose run --rm --no-deps helper --diagnose-config --map --listen 127.0.0.1:6172 --config /config/config.json
docker compose up -d
docker compose ps
```

Confirm success before proceeding to each command. Configuration checks return `0` for success or `2` for configuration problems, without signing in. Port diagnostics briefly bind and release ports inside the temporary container; they do not check host port conflicts, upstream connectivity or the firewall. Verify container status and a real connection after startup.

The published Compose exposes ports on all host interfaces by default. Configure LAN authentication and restrict the firewall before starting; for local use only, bind the host side of `ports` to `127.0.0.1`. Also review every fixed `listeners` address, if configured.

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
