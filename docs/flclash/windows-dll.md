---
description: 按缺失文件区分 Visual C++ 运行库、客户端安装文件和虚拟网卡问题
---

# FlClash for oixCloud 缺少 DLL 修复

适用于 Windows 启动时提示缺少 DLL、找不到模块或无法启动的情况。先记下弹窗中的完整文件名和错误码；已经打开客户端但无法联网，应先看 [系统代理与虚拟网卡](/flclash/capture)

## 1. 按缺失文件判断

| 弹窗内容 | 优先检查 |
| --- | --- |
| `VCRUNTIME140.dll`、`VCRUNTIME140_1.dll`、`MSVCP140.dll` | Microsoft Visual C++ 运行库 |
| `flutter_windows.dll` 或客户端目录中的插件 DLL | 安装或解压是否完整，是否只移动了 `.exe` |
| 开启虚拟网卡时才报错 | 客户端服务、权限和驱动问题，不一定是运行库缺失 |
| `0xc000007b` 或其他错误码 | 记录完整提示，核对客户端与系统架构，不要仅凭错误码认定某个 DLL 损坏 |

## 2. 安装或修复 Visual C++ 运行库

1. 关闭 FlClash for oixCloud，包括系统托盘中的进程
2. 打开 [Microsoft 官方运行库下载页](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist)，选择与客户端安装包架构一致的 v14 包
3. x64 客户端选择 [x64 运行库](https://aka.ms/vc14/vc_redist.x64.exe)；原生 ARM64 客户端选择 [ARM64 运行库](https://aka.ms/vc14/vc_redist.arm64.exe)。运行库需匹配应用架构，不是只看电脑名称
4. 运行安装程序；已有同版本时按安装器提供的「修复」操作，按提示完成并在要求时重启
5. 重新打开客户端，确认原来的缺失文件提示消失，再验证代理连接

Microsoft 说明运行库版本应不早于应用所用构建工具；下载页会更新系统支持范围和版本，不要固定使用多年以前的安装包

## 3. 客户端自带 DLL 丢失

从 [软件中心](https://oixcloud.com/client) 重新下载对应系统与架构的完整安装包。便携版应完整解压到可写目录，从该目录启动，保留程序旁的 DLL 和 `data` 等目录

若安全软件隔离了文件，先核对下载来源、文件路径和检测结果，再处理该文件；不要关闭全部防护或从不明 DLL 下载站逐个补文件。重装前先保留可用的 [备份](/flclash/backup)，不要直接删除用户数据

## 4. 原帮助入口：DirectX 修复工具

原来的外部链接实际指向 [DirectX 修复工具作者页面](https://www.zysoftware.top/post/9.html)。需要使用该工具时，从作者页面选择版本并核对校验信息；其中增强版包含 C++ 修复，标准版与在线版侧重 DirectX

按工具的「检测并修复」查看具体结果，完成后重新启动客户端并核对原错误；不要一开始就启用强力修复。保存工具日志，以便常规修复无效时继续定位原因。缺少 Visual C++ 运行库时可先使用上面的 Microsoft 安装器

## 仍然失败时

记录 Windows 版本与架构、客户端版本与下载包名称、完整错误截图，以及错误发生在启动还是开启虚拟网卡时，再 [提交服务单](/help/support)

运行库下载和兼容信息以 Microsoft 官方页面为准
