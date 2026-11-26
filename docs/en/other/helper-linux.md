# Helper on Linux and runtime diagnostics

For Linux / NAS, use the public container image `ghcr.io/pickrui/oixcloud-external-proxy-program:latest`. It supports `linux/amd64` and `linux/arm64` and requires Docker Engine and Docker Compose. The `-amd64`, `-arm64` and `-legacy` files on GitHub Releases are macOS executables, not standalone Linux programs.

## Validate before starting


<figure class="guide-figure">
  <a href="/illustrations/helper-linux-en.svg?v=20261127-3" target="_blank" rel="noopener" aria-label="oixCloud Helper · Run and diagnose Helper on Linux or Docker">
    <img src="/illustrations/helper-linux-en.svg?v=20261127-3" alt="oixCloud Helper · Run and diagnose Helper on Linux or Docker" width="1120" height="1100" :loading="$isGuidePage ? 'eager' : 'lazy'" :fetchpriority="$isGuidePage ? 'high' : 'auto'">
  </a>
  <figcaption>Interface simulation based on the maintained version · Fictional data</figcaption>
</figure>

Follow the [public Docker guide](https://github.com/pickrui/oixcloud-external-proxy-program/blob/main/docs/docker.md#english) for `compose.yaml`, `config.example.json` and the custom rules file. Copy the example to `config.json`. Set `accessToken` to the [full Access Token shown when you create it](/en/account/security#manual-token), or use `email` and `password`. Set LAN credentials separately. Allow container UID/GID `10001` to read the file and restrict other users’ access.

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

The container loads managed nodes after it starts, without device approval. The first sign-in sends a new-device alert to your account; see [New devices and sign-in alerts](/en/account/security#device-approval).

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

1. In [Subscription Management](https://oixcloud.com/user/sub_manage), edit the URL the container actually uses, or change the filter in macOS Helper using **that same URL**. For a manually created Access Token, check its [subscription binding](/en/account/subscriptions).
2. Save, then fetch the local profile or node list again in the client using Helper. Repeated requests can reuse a successful result for 30 seconds. Mapping mode also refreshes periodically in the background.
3. Read `lastSuccessAt`, `nodeCount` and `mappingCount` under `/status`, then connect through a retained node. Reading status shows the last result.

| Symptom | Check |
| --- | --- |
| Configuration check fails | Field format, port ranges and paths; retain the original error. |
| HTTP works but no mappings | Account/plan, retained nodes, `listeners: []`, exact fixed node names and port conflicts. |
| Non-loopback `/status` returns 403 | Configured LAN authentication and supplied credentials. |
| TCP works but UDP fails | UDP publication, advertised address, firewall and client reachability. |
| Node DNS or TLS fails | Current DNS, system time, captive portal and full error; do not bypass certificate validation. |

Reports should include version, launch method, mode, port-check results and a status summary, without a credential-bearing configuration file.
