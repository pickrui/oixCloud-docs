---
description: "Sign in and connect \u2014 setup, practical steps and troubleshooting"
---

# Sign in and connect

For iPhone / iPad. See the separate [Apple TV guide](/en/oixcloud/apple-tv).

## Installation and system requirements

| Device | Minimum OS | Download |
| --- | --- | --- |
| iPhone | iOS 18.0 | [App Store](https://apps.apple.com/us/app/oixcloud/id6782528093) |
| iPad | iPadOS 18.0 | The same App Store app |

App Store installation requires an Apple Account outside mainland China. For beta builds, open TestFlight from the [download center](https://oixcloud.com/client#apple); slots must be available and the build must not have expired. Check that build's requirements in TestFlight; beta access does not bypass OS requirements.

## Illustrated steps

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-connect-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="First connection">
    <img src="/illustrations/oixcloud-connect-zh.svg?v=20261030-2" alt="First connection" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

## Managed account

<figure class="guide-figure">
  <a href="/illustrations/oixcloud-login-zh.svg?v=20261030-2" target="_blank" rel="noopener" aria-label="Sign in to oixCloud">
    <img src="/illustrations/oixcloud-login-zh.svg?v=20261030-2" alt="Sign in to oixCloud" width="1120" height="982" loading="lazy">
  </a>
  <figcaption>Chinese simulated interface with fictional data · Click to view full size</figcaption>
</figure>

1. Open the App Store or TestFlight link in our download center to install oixCloud, then sign in on the app's oixCloud account page.
2. Choose email/password, an existing Access Token, or **Sign in with Google** when available. Google sign-in is for existing accounts and needs client and website support; follow the [Google sign-in steps](/en/account/security#google-client-login). Wait for the active plan and managed nodes to load before connecting.
3. Select a node or policy group on the home screen, keep Rule mode selected, and tap the power button in the status card. Allow the system to add a VPN configuration when prompted on your first connection.

## Your own nodes

You can also use compatible private nodes or subscriptions without a managed account. In **Proxies**, choose Add and import a link, file or QR code. See [nodes and subscriptions](/en/oixcloud/proxies).

## Refresh and verify

Pull down on the oixCloud account page to refresh account information. Use Refresh Nodes to fetch the managed nodes again after a plan or node change. Policy groups choose the exit, while routing rules decide which requests use it. Keep Rule mode enabled to apply your routing settings.

Open a destination after connecting and check the actual outbound in [requests and diagnostics](/en/oixcloud/diagnostics). If sign-in works but the node list is empty, check your plan and node filters.

Signing out removes local sign-in state without revoking the login token shared by the same client type. Revoke tokens on the website when necessary, and account for enabled account sync on other devices.

## Google sign-in troubleshooting

If the button is missing, check your installed version; a feature in the maintained source may not yet be in your App Store or stable build. If the browser remains open, use its Return to App link. Restart an expired flow from the client. For an unregistered-email message, sign in with the Google account matching your existing account or complete website registration first. Do not repeatedly reset tokens to troubleshoot a browser return.
