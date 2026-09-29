---
description: Distinguish missing Visual C++ runtimes, incomplete app files and TUN startup errors
---

# FlClash for oixCloud: missing DLL repair

For Windows errors reporting a missing DLL/module or startup failure. Record the exact filename and error code first. If the app opens but traffic fails, start with [System Proxy and TUN](/en/flclash/capture).

## 1. Identify the missing file

| Message | First check |
| --- | --- |
| `VCRUNTIME140.dll`, `VCRUNTIME140_1.dll`, `MSVCP140.dll` | Microsoft Visual C++ runtime |
| `flutter_windows.dll` or a plugin DLL in the app folder | Complete app files; check whether only the `.exe` was moved |
| Error only when enabling TUN | Service, permissions or driver issue; not necessarily a missing runtime |
| `0xc000007b` or another code | Capture the full message and check app/system architecture; a code alone does not identify a damaged DLL |

## 2. Install or repair the Visual C++ runtime

1. Exit FlClash for oixCloud, including its tray process.
2. Open [Microsoft's official runtime page](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist) and select the v14 package matching the app package architecture.
3. Use the [x64 runtime](https://aka.ms/vc14/vc_redist.x64.exe) for an x64 app, or [ARM64 runtime](https://aka.ms/vc14/vc_redist.arm64.exe) for a native ARM64 app. Match the application architecture, not just the computer's name.
4. Run the installer. Use its **Repair** option when offered for an existing version, and restart if requested.
5. Reopen the app, confirm the original missing-file message has gone, then test the proxy connection.

Microsoft requires a runtime at least as recent as the app's build tools. Its page tracks current downloads and supported systems; avoid relying on an old saved installer.

## 3. Missing files shipped with the app

Download the complete package for your system and architecture from the [download center](https://oixcloud.com/client). Fully extract portable packages into a writable directory and start the app there, retaining adjacent DLLs and directories such as `data`.

If security software quarantined a file, check its source, path and detection result before handling that file. Do not disable all protection or collect individual DLLs from unknown download sites. Preserve an available [backup](/en/flclash/backup) before reinstalling; do not delete user data as a first step.

## 4. Original help link: DirectX Repair

The original external link points to the [DirectX Repair author's page](https://www.zysoftware.top/post/9.html). If using it, choose an edition and verify the published checksum. Enhanced Edition includes C++ repair; Standard and Online editions focus on DirectX.

Use **Check and Repair**, inspect its results and reopen the client to check the original error. Do not begin with force-repair options. Keep its log if normal repair fails. For a missing Visual C++ runtime, try Microsoft's installer above first.

## If it still fails

Include Windows version/architecture, client version, download filename, the complete error screenshot and whether it occurs at startup or when enabling TUN in a [support ticket](/en/help/support).

Use Microsoft's official page for runtime downloads and compatibility.
