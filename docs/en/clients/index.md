---
pageClass: guide-index
description: Find connection and settings guides for your device and app
---

# Client guides

If you have not installed an app, visit the [download center](https://oixcloud.com/client) first.

| Device | App and guide |
| --- | --- |
| <span class="platform gi-apple">iPhone / iPad</span> | [<span class="gi gi-oixflow" aria-hidden="true"></span>oixFlow](/en/oixflow/) |
| <span class="platform gi-apple">Apple TV</span> | [<span class="gi gi-oixflow" aria-hidden="true"></span>oixFlow: Apple TV setup and sync](/en/oixflow/apple-tv) |
| <span class="platform gi-windows">Windows</span> <span class="platform gi-apple">macOS</span> <span class="platform gi-android">Android</span> <span class="platform gi-linux">Linux</span> | [<span class="gi gi-flclash" aria-hidden="true"></span>FlClash for oixCloud](/en/flclash/) |
| <span class="platform gi-openwrt">OpenWrt router</span> | [<span class="gi gi-openclash" aria-hidden="true"></span>OpenClash](/en/other/openclash) |
| <span class="platform gi-router">Merlin router</span> | [<span class="gi gi-oixclash" aria-hidden="true"></span>oixClash](/en/other/oixclash) |
| <span class="platform gi-apple">Mac running Surge</span> | [<span class="gi gi-helper" aria-hidden="true"></span>oixCloud Helper and Surge](/en/other/surge) |

## Downloads and system requirements {#requirements}

| Client and device | Current requirements | Download |
| --- | --- | --- |
| oixFlow: iPhone / iPad | iOS / iPadOS 18.0 or later | [App Store](https://apps.apple.com/app/id6838819085) · [TestFlight installation and updates](/en/oixflow/connect#testflight) |
| oixFlow: Apple TV | tvOS 18.0 or later; account and configuration sync also needs a compatible iPhone / iPad | [App Store](https://apps.apple.com/app/id6838819085) · [Installation and sync](/en/oixflow/apple-tv) |
| FlClash for oixCloud: desktop and Android | Windows 10+; macOS 13.0+; Android 7.0+; Linux needs a desktop and compatible runtime libraries | [Packages, architectures and compatibility builds](/en/flclash/connect#downloads) |
| oixCloud Helper: Mac | Main builds for macOS 14+; Legacy for macOS 12 / 13 | [Downloads and Surge setup](/en/other/surge#downloads) |
| oixCloud Helper: Linux / NAS | Docker Engine and Compose; amd64 / arm64 | [Container deployment](/en/other/helper-linux) |
| OpenClash / oixClash: routers | Compatible OpenWrt / LuCI, or Merlin firmware with the KoolCenter software center, respectively | [OpenClash](/en/other/openclash), [oixClash platform packages](/en/other/oixclash) |

Checked against public releases on 2026-10-30. Download entries follow current releases. Matching version numbers do not make a standard package suitable for an older OS. TestFlight also depends on available slots, build expiry and that build's system requirements.

## Find an operation

| I want to… | Guide |
| --- | --- |
| Get started | [Your first connection](/en/start/quick-start) |
| Import my own subscription URL | [oixFlow](/en/oixflow/proxies#third-party-subscription) · [FlClash for oixCloud](/en/flclash/profiles#other-subscription) · [OpenClash](/en/other/openclash#import-url) |
| Filter or refresh managed oixCloud nodes | [Find the controls for each client](/en/account/subscriptions#apply-filter) |
| Import a subscription into another compatible client | [Subscriptions and filters](/en/account/subscriptions) |
| Switch modes or enable a system proxy, VPN or TUN | [iPhone / iPad](/en/oixflow/connect#capture-mode) · [Apple TV](/en/oixflow/apple-tv#capture-dns) · [FlClash for oixCloud](/en/flclash/capture#mode) · [OpenClash](/en/other/openclash#capture-mode) · [oixClash](/en/other/oixclash#capture-mode) · [Surge Mac](/en/other/surge#capture-mode) |
| Change DNS and verify the resolver | [iPhone / iPad](/en/oixflow/dns#configure-dns) · [Apple TV](/en/oixflow/apple-tv#capture-dns) · [FlClash for oixCloud](/en/flclash/dns#configure-dns) · [OpenClash](/en/other/openclash#configure-dns) · [oixClash](/en/other/oixclash#configure-dns) · [Surge Mac](/en/other/surge#configure-dns) |
| Choose a node or switch groups | [iPhone / iPad](/en/oixflow/policies#choose-outbound) · [Apple TV](/en/oixflow/apple-tv#routing) · [FlClash for oixCloud](/en/flclash/proxies#choose-outbound) · [OpenClash](/en/other/openclash#routing) · [oixClash](/en/other/oixclash#routing) · [Helper with Surge](/en/other/surge#routing) |
| Route a website | [oixFlow](/en/oixflow/routing#website-rule) · [FlClash for oixCloud](/en/flclash/rules#website-rule) · [OpenClash router rules](/en/other/openclash#routing-rules) · [oixClash account rules](/en/other/oixclash#routing-rules) · [Surge profile](/en/other/surge#routing-rules) |
| Create a proxy chain | [oixFlow](/en/oixflow/policies#create-chain) · [FlClash for oixCloud](/en/flclash/proxies#create-chain) · [OpenClash](/en/other/openclash#create-chain) · [Internal relays for managed nodes](/en/account/relay#internal-relay) |
| Understand nodes, groups and traffic capture | [Core concepts](/en/start/concepts) |
| Fix browsing after connecting | [Connection and speed troubleshooting](/en/help/troubleshooting) |
| Repair missing DLLs on Windows | [FlClash for oixCloud: missing DLL repair](/en/flclash/windows-dll) |
| Replace or update the OpenClash oix core | [Replace or update the oix core](/en/other/openclash#kernel-update) |
| Use Home ISP residential exits via relays or chains | [Home ISP user guide](/en/account/home-isp) |
| Find Helper ports and LAN settings | [Helper local ports and LAN access](/en/other/helper-mapping) |
| Run Helper on Linux | [Helper on Linux and diagnostics](/en/other/helper-linux) |

::: info Follow your platform's guide
Features vary by app and platform. For plans, traffic and account settings, see [Account & service](/en/account/).
:::
