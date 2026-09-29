# WARP and streaming regions

Both features change the outbound behavior of supported remote nodes. Identify the node in the [node list](https://oixcloud.com/user/node) before changing its settings.

## Enable WARP for a node

1. Open [WARP settings](https://oixcloud.com/user/warp) and locate the node.
2. Enable WARP and choose whether to enable **Smart fallback**.
3. Read the conflict notice before saving: enabling WARP removes internal relays using this logical node as source or destination, and external relays using it as their source. Record settings you still need first.
4. Update the client profile and establish a new connection through that node, then check the target website.

| Setting | When WARP is unavailable |
| --- | --- |
| Smart fallback on | Uses the remote node's ordinary outbound; its IP or region may change. |
| Smart fallback off | Rejects the connection instead of switching to the ordinary outbound. |

This does not switch your device to Direct mode. Consider the fallback behavior if you require a particular exit.

## Select regions by streaming service

1. Open [Streaming unlock](https://oixcloud.com/user/unlock) and check supported nodes and services.
2. Choose a region for the service you need; leave other services at their defaults.
3. Save, establish a new connection through the corresponding node, and verify the region and playback in that service.

This feature is in public beta and supports only some nodes. Unconfigured services follow the node default. Region selection does not replace the platform's account, membership or content requirements.

## If the result is unexpected

- Confirm you selected the modified node and a routing rule did not send the service elsewhere.
- Check for WARP fallback and whether the streaming setting supports that service and node.
- Close the target app's old connections before retrying. A connected client or successful latency test alone does not prove streaming access.
- Include the node, service, selected region, error time and message when contacting support, without passwords or full subscription URLs.
