---
description: "Sign in and connect \u2014 setup, practical steps and troubleshooting"
---

# Sign in and connect

For iPhone / iPad. See the separate [Apple TV guide](/en/oixcloud/apple-tv).

## Illustrated steps

[![oixCloud · First connection](/illustrations/oixcloud-connect-zh.svg)](/illustrations/oixcloud-connect-zh.svg)

*Simulated interface in Chinese, with fictional nodes and data. Layout varies by version; open the image for a larger view.*

## Managed account

1. Open the App Store or TestFlight link in our download center to install oixCloud, then sign in on the app's oixCloud account page.
2. Use an Access Token from the website, or switch to email and password sign-in. Once your plan is active, wait for the client to load your managed nodes.
3. Select a node or policy group on the home screen, keep Rule mode selected, and tap Connect. Allow the system to add a VPN configuration when prompted on your first connection.

## Your own nodes

You can also use compatible private nodes or subscriptions without a managed account. In **Proxies**, choose Add and import a link, file or QR code. See [nodes and subscriptions](/en/oixcloud/proxies).

## Refresh and verify

Pull down on the oixCloud account page to refresh account information. Use Refresh Nodes to fetch the managed nodes again after a plan or node change. Policy groups choose the exit, while routing rules decide which requests use it. Keep Rule mode enabled to apply your routing settings.

Open a destination after connecting and check the actual outbound in [requests and diagnostics](/en/oixcloud/diagnostics). If sign-in works but the node list is empty, check your plan and node filters.

Signing out removes local sign-in state without revoking the login token shared by the same client type. Revoke tokens on the website when necessary, and account for enabled account sync on other devices.
