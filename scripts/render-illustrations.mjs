import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

// Simulations drawn from the maintained SwiftUI/Material/Merlin screen structure.
// Data is fictional. Only public UI labels and drawing primitives belong here.
const out = fileURLToPath(new URL('../docs/public/illustrations/', import.meta.url))
mkdirSync(out, { recursive: true })
const english = process.argv.includes('--en')
const translations = JSON.parse(readFileSync(new URL('./illustrations.en.json', import.meta.url), 'utf8'))
let drawingUI = false
let currentScene
const hasChinese = s => /[\u4e00-\u9fff]/.test(s)
function ui(s) {
 const value = String(s)
 if (!english || !drawingUI || !hasChinese(value)) return value
 const key = `${currentScene.client}-${currentScene.id}`
 const translated = translations.overrides[key]?.[value] ?? translations.ui[currentScene.client]?.[value]
 if (!translated) throw new Error(`Missing English UI text in ${key}: ${value}`)
 return translated
}
function textWidth(s, size) { return [...String(s)].reduce((w,c) => w + (hasChinese(c) ? 1 : /[MW@]/.test(c) ? .85 : /[il.,:;'!| ]/.test(c) ? .3 : .57) * size, 0) }
const E = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')
const R = (x,y,w,h,c='#fff',r=12,stroke='none') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${c}" stroke="${stroke}"/>`
const T = (x,y,s,z=20,c='#202124',weight=400,anchor='start',maxWidth) => {
 const original = String(s), text = ui(original)
 const bilingual = english && drawingUI && currentScene.client === 'oixclash' && hasChinese(original)
 const phone = currentScene?.client === 'oixcloud' || currentScene?.id === 'android'
 if (english && drawingUI && !maxWidth) maxWidth = anchor === 'start' ? (phone ? 480 : 1060) - x : undefined
 const size = english && maxWidth ? Math.min(z, z * maxWidth / Math.max(1,textWidth(text,z))) : z
 let result = `<text x="${x}" y="${y-(bilingual?6:0)}" font-size="${size}" fill="${c}" font-weight="${weight}" text-anchor="${anchor}">${E(text)}</text>`
 if (bilingual) {
  const width = maxWidth || 1060-x
  const secondarySize = Math.min(10.5, 10.5 * width / Math.max(1,textWidth(original,10.5)))
  result += `<text x="${x}" y="${y+10}" font-size="${secondarySize}" fill="${c}" font-weight="400" text-anchor="${anchor}">${E(original)}</text>`
 }
 return result
}
const L = (x,y,x2,y2,c='#dedee3',w=1) => `<path d="M${x} ${y}H${x2}" stroke="${c}" stroke-width="${w}"/>`
const circ=(x,y,r,c,stroke='none',w=1)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" stroke="${stroke}" stroke-width="${w}"/>`
function wrap(s,max=24){let result=[],line='',width=0;for(const token of s.match(/[A-Za-z0-9]+(?:[./_-][A-Za-z0-9]+)*|[^A-Za-z0-9]/g)||[]){let u=[...token].reduce((n,c)=>n+(/[\u2e80-\uffff]/.test(c)?1:.56),0);if(token==='\n'||(width+u>max&&line)){result.push(line.trimEnd());line='';width=0;if(token==='\n')continue}line+=token;width+=u}if(line)result.push(line.trimEnd());return result}
const lines=(x,y,s,size=19,color='#667085',max=24)=>wrap(ui(s),max).map((s,i)=>T(x,y+i*(size*1.55),s,size,color)).join('')
const check=(x,y,c='#007aff')=>`<path d="M${x} ${y}l5 5 11-13" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`
const chevron=(x,y,c='#aaa')=>`<path d="M${x} ${y}l5 5-5 5" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/>`
const toggle=(x,y,on=true,fl=false)=>R(x,y,50,29,on?(fl?'#8a5260':'#34c759'):'#d3d3d8',16)+circ(x+(on?35:15),y+14.5,11,'#fff')
const badge=(x,y,n)=>circ(x,y,15,'#c55a18','#fff',2)+T(x,y+5,n,16,'#fff',700,'middle')
const mark=(x,y,w,h,n)=>R(x-4,y-4,w+8,h+8,'none',10,'#d27336')+badge(x+w,y,n)
const power=(x,y)=>circ(x,y,40,'#e3edff')+`<path d="M${x-17} ${y-15}a25 25 0 1 0 34 0M${x} ${y-27}v28" fill="none" stroke="#007aff" stroke-width="6" stroke-linecap="round"/>`
const icon=(x,y,label,c='#75808b')=>T(x,y,label,23,c,500,'middle')
const scenes=[]
function add(client,id,title,route,notes,draw){scenes.push({client,id,title,route,notes,draw})}
function ios(title,{tab,back='设置',action='',large=false}={}){
 let s=R(38,121,464,823,'#e6e8ed',39)+R(44,127,452,811,'#f2f2f7',34)+T(72,164,'9:41',17,'#161617',650)+T(456,164,'▮▮▮  ▰',15,'#161617',600,'end')
 if(large){s+=T(67,234,title,37,'#111',700);if(action)s+=T(470,224,action,22,'#007aff',500,'end')}
 else{s+=(back?T(69,215,back==='取消'?'取消':'‹ '+back,18,'#007aff',400,'start',english?270-textWidth(ui(title),21)/2-87:undefined):'')+T(270,215,title,21,'#111',600,'middle');if(action)s+=T(470,215,action,18,'#007aff',600,'end')}
 if(tab){s+=R(49,854,442,63,'#fcfcfd',27,'#e4e4e9');['主页','代理','活动','oixCloud','设置'].forEach((n,i)=>{let x=93+i*87;s+=icon(x,880,['⌂','▤','◴','☁','⚙'][i],n===tab?'#007aff':'#8b8b93')+T(x,900,n,12,n===tab?'#007aff':'#8b8b93',500,'middle')})}
 s+=R(210,924,120,5,'#19191b',3)
 return s
}
function group(y,rows,{title='',w=404,x=68}={}){
 let h=rows.reduce((sum,r)=>sum+(r.sub?68:53),0),s=title?T(x+14,y-12,title,15,'#727279'):''
 s+=R(x,y,w,h,'#fff',14)
 let yy=y
 rows.forEach((r,i)=>{let rh=r.sub?68:53;s+=T(x+16,yy+(r.sub?27:33),r.label,20,r.disabled?'#a5a5ad':r.danger?'#d23d3d':r.blue?'#007aff':'#202124',r.bold?600:400,'start',english ? w-32-(r.on!==undefined?62:r.value?Math.min(190,textWidth(ui(r.value),r.valueSize||18)+28):r.chev?20:0) : undefined);if(r.sub)s+=T(x+16,yy+51,r.sub,14,'#85858d',400,'start',english?w-36:undefined);if(r.value)s+=T(x+w-(r.chev?28:16),yy+33,english&&currentScene.client==='oixcloud'&&r.value==='代理'?'Proxy':r.value,r.valueSize||18,'#85858d',400,'end');if(r.chev)s+=chevron(x+w-18,yy+23);if(r.on!==undefined)s+=toggle(x+w-66,yy+12,r.on);if(i<rows.length-1)s+=L(x+16,yy+rh,x+w,yy+rh);if(r.n)s+=mark(x+4,yy+4,w-8,rh-8,r.n);yy+=rh})
 return s
}
function segmented(x,y,w,labels,sel=0,fl=false){let s=R(x,y,w,39,fl?'#f7edef':'#e4e4e9',fl?20:8,fl?'#a8959a':'none');labels.forEach((l,i)=>{let iw=w/labels.length;if(sel===i)s+=R(x+i*iw+3,y+3,iw-6,33,fl?'#f0d9df':'#fff',fl?17:6);s+=T(x+iw*(i+.5),y+25,l,16,fl?'#593c44':'#222',i===sel?600:400,'middle')});return s}
function field(x,y,w,label,value,{n,fl=true}={}){return R(x,y,w,58,'#fffbfc',7,'#9d8d92')+R(x+10,y-9,(english?textWidth(ui(label),14)+14:label.length*15+14),18,'#fffbfc',0)+T(x+17,y+4,label,14,'#756067')+T(x+17,y+38,value,19,'#2f272a')+(n?mark(x,y,w,58,n):'')}
function material(title,active='工具'){
 let s=R(28,128,1064,657,'#e3dbde',16)+R(30,130,1060,653,'#fffbfc',15)
 s+=R(30,130,1060,35,'#f2eaed',15)+circ(49,148,5,'#df8e94')+circ(66,148,5,'#e7c87c')+circ(83,148,5,'#95bda4')+T(560,152,'FlClash for oixCloud',14,'#68575e',500,'middle')
 s+=R(31,165,90,617,'#f7f0f2',0)
 ;['仪表盘','代理','配置','oixCloud','请求','DNS 查询','连接','工具'].forEach((n,i)=>{let y=191+i*72,c=n===active?'#754651':'#72676b';if(n===active)s+=R(40,y,71,35,'#edd9df',18);s+=icon(76,y+24,['▦','▤','▱','☁','≡','⌕','⇄','⚒'][i],c)+T(76,y+51,n,12,c,500,'middle')})
 s+=T(153,205,title,27,'#2d2528',500)
 return s
}
function mrow(y,label,{sub='',value='',on,n,x=154,w=898}={}){let h=sub?70:59,vw=Math.max(106,Math.min(270,english?textWidth(ui(value),16)+32:value.length*12+32)),s=T(x+16,y+29,label,20,'#332b2e');if(sub)s+=T(x+16,y+53,sub,15,'#7e7176');if(value)s+=R(x+w-vw-16,y+9,vw,37,'#f0dce2',20)+T(x+w-vw/2-16,y+33,value,16,'#784f5b',500,'middle');if(on!==undefined)s+=toggle(x+w-67,y+13,on,true);s+=L(x,y+h,x+w,y+h,'#ede5e8');if(n)s+=mark(x,y+2,w,h-6,n);return s}
const mhead=(y,t)=>T(166,y,t,16,'#885461',600)
const button=(x,y,w,label,n)=>R(x,y,w,43,'#8a5260',23)+T(x+w/2,y+28,label,17,'#fff',500,'middle',english?w-22:undefined)+(n?mark(x,y,w,43,n):'')
function modal(title,w=490,h=410){let x=(1120-w)/2,y=235;return {x,y,w,s:R(30,165,1060,618,'#00000044',0)+R(x,y,w,h,'#fff6f8',27,'#ddcbd2')+(title?T(560,y+48,title,26,'#332b2e',500,'middle'):'')}}
const sheetHead=(m,title,saveMark)=>T(m.x+24,m.y+42,'‹',26,'#8a5260')+T(m.x+m.w/2,m.y+43,title,23,'#332b2e',600,'middle',english?m.w-110:undefined)+T(m.x+m.w-28,m.y+43,'✓',24,'#8a5260',600,'end')+(saveMark?badge(m.x+m.w-13,m.y+18,saveMark):'')

function chips(x,y,names,selected=0,fl=false){const selectedSet=new Set(Array.isArray(selected)?selected:[selected]);return names.map((v,i)=>{const active=selectedSet.has(i);return R(x+i*123,y,113,36,active?(fl?'#f0d9df':'#dfebff'):'#f4f5f8',18,active?(fl?'#bd8d9b':'#8db7ff'):'#dbdce2')+T(x+i*123+56,y+24,v,15,active?(fl?'#794c59':'#0068d8'):'#646771',500,'middle')}).join('')}

add('oixcloud','login','登录账户','oixCloud → 登录',[
 ['选择登录方式','支持 Access Token、邮箱密码及已有账户的 Google 登录'],['填写凭据','图中邮箱为虚构示例，密码不展示'],['完成登录','登录后等待托管节点载入，再返回主页连接']
],()=>ios('oixCloud',{large:true,tab:'oixCloud'})+segmented(69,262,402,['Access Token','邮箱密码'],1)+mark(69,262,402,39,1)+group(351,[{label:'reader@example.com'},{label:'••••••••',n:2},{label:'忘记密码？',blue:true}])+group(549,[{label:'登录',blue:true,n:3}])+group(630,[{label:'使用 Google 登录',blue:true}])+group(711,[{label:'创建账号',blue:true}]))

add('oixcloud','connect','主页连接与节点选择','主页 → 当前节点卡片',[
 ['点电源按钮','已有节点时启动 VPN，首次使用允许系统添加 VPN 配置'],['点节点选择卡片','打开节点列表；预设指定出口时先调整网络预设'],['核对模式与新请求','状态、模式、兜底路由是不同设置；连接后验证实际出口']
],()=>ios('主页',{large:true,tab:'主页'})+R(67,264,406,227,'#fff',22)+T(89,297,'状态',17,'#727279',600)+R(149,278,88,27,'#eeeef2',14)+T(193,297,'未连接',14,'#727279',500,'middle')+T(89,342,'已运行',15,'#85858d')+T(89,375,'—',24,'#333',600)+T(221,342,'连接数',15,'#85858d')+T(221,375,'—',24,'#333',600)+power(406,353)+badge(450,279,1)+T(89,433,'↑  —     上传',16,'#85858d')+T(265,433,'↓  —     下载',16,'#85858d')+group(515,[{label:'香港 · 示例 A',sub:'oixCloud',chev:true,n:2}])+segmented(69,618,402,['规则','全局','直连'],0)+badge(467,618,3)+group(704,[{label:'自动优选',value:'延迟优先',chev:true},{label:'兜底路由',value:'代理',chev:true}]))

add('oixcloud','proxies','选择节点与自动优选','主页 → 当前节点卡片 → 节点',[
 ['搜索节点','可以按节点名称查找'],['自动优选或策略组','自动条目直接选择；不是进入一个新的编辑页面'],['选择一个节点','点完成返回，使用新连接验证；延迟仅为示例']
],()=>ios('节点',{back:'',action:'完成'})+R(68,243,403,41,'#e5e5ea',11)+T(84,269,'⌕  搜索',18,'#94949c')+badge(466,245,1)+group(310,[{label:'ϟ  自动优选',blue:true,n:2},{label:'工作'}])+group(470,[{label:'香港 · 示例 A',value:'28 ms',n:3},{label:'日本 · 示例 B',value:'42 ms'},{label:'新加坡 · 示例 C',value:'56 ms'}],{title:'oixCloud'})+check(311,494)+group(679,[{label:'＋ 添加',blue:true}]))

add('oixcloud','filter','筛选线路、地区与名称','oixCloud → 节点筛选',[
 ['点选筛选条件','线路与地区可切换不筛选、仅保留、排除；标签随账户变化'],['检查节点预览','名称支持正则；预览搜索只查找，不改变条件'],['保存并刷新','图为部分可用线路；保存后等待托管节点刷新']
],()=>ios('节点筛选',{back:'oixCloud',action:'保存'})+badge(477,241,3)+T(82,266,'○ 不筛选  →  ✓ 仅保留  →  ⊖ 排除',14,'#697384')+T(81,312,'线路',15,'#767982')+chips(76,328,['Edge','CIA','IXP'],-1)+chips(76,375,['Fusion','GIA'],-1)+badge(468,327,1)+T(81,440,'地区',15,'#767982')+chips(76,455,['香港','日本','新加坡'],[0,1])+group(517,[{label:'名称包含',value:'香港|日本',valueSize:16},{label:'名称排除',value:'测试|维护',valueSize:16}])+T(83,656,'节点预览',18,'#202124',600)+badge(467,647,2)+group(677,[{label:'⌕  搜索节点',disabled:true},{label:'香港 · 示例 A',value:'✓'},{label:'日本 · 示例 B',value:'✓'}])+T(83,876,'恢复默认',17,'#007aff')+T(468,876,'保留 2 / 12 个节点',15,'#727279',400,'end'))

add('oixcloud','policies','创建策略组','代理 → 策略 → 添加策略组',[
 ['填写名称与类型','按用途选择手动、自动测速、故障转移、负载均衡或智能'],['加入成员并核对底层代理','示例使用两个节点；不需要中继时保留未选择'],['保存并选用','健康检查在下方继续；保存后在主页或规则中选用']
],()=>ios('工作',{back:'取消',action:'保存'})+badge(476,241,3)+group(266,[{label:'名称',value:'工作'},{label:'类型',value:'自动测速',chev:true,n:1}])+group(425,[{label:'香港 · 示例 A'},{label:'日本 · 示例 B'},{label:'＋ 添加成员',blue:true,n:2}],{title:'成员'})+group(621,[{label:'底层代理',value:'无',chev:true}])+group(735,[{label:'测试 URL',value:'https://example.com',valueSize:13},{label:'预期 HTTP 状态',value:'200',valueSize:16}],{title:'健康检查'}))

add('oixcloud','chains','按顺序创建代理链','代理 → 链式代理 → 添加',[
 ['填写链的名称','使用能够辨认用途的名称'],['按转发顺序放置成员','策略组只可作为第一跳；节点需先单独验证可用'],['保存后选择代理链','路线预览核对方向；在主页或规则中选用保存的链']
],()=>ios('新建链式代理',{back:'取消',action:'✓'})+badge(475,241,3)+group(276,[{label:'名称',value:'工作代理链',n:1}])+group(390,[{label:'香港 · 示例 A',sub:'入口',value:'≡',n:2},{label:'日本 · 示例 B',sub:'出口',value:'≡'},{label:'＋ 添加代理',blue:true}],{title:'代理'})+T(83,625,'策略组只能作为第一跳',15,'#85858d')+group(707,[{label:'香港 · 示例 A'},{label:'↓  日本 · 示例 B'}],{title:'路由预览'}))

add('oixcloud','rules','为网站添加路由规则','代理 → 策略 → 路由规则',[
 ['选择域名尾缀','输入 example.com，不带协议或路径'],['选择实际目标','示例选用已有的「工作」策略组'],['点添加','回到规则模式，重新访问目标网站核对命中结果']
],()=>ios('路由规则',{back:'策略'})+R(45,234,450,688,'#00000022',20)+R(45,364,450,574,'#f2f2f7',26)+R(238,374,65,5,'#c6c6ce',3)+T(71,416,'取消',18,'#007aff')+T(270,416,'添加规则',21,'#111',600,'middle')+T(467,416,'添加',18,'#007aff',600,'end')+badge(482,438,3)+group(454,[{label:'类型',value:'域名尾缀',chev:true,n:1},{label:'example.com'},{label:'扩展匹配',on:false}])+group(668,[{label:'路由到',value:'工作',chev:true,n:2}])+lines(84,751,'规则自上而下匹配，命中第一条即生效',16,'#85858d',23))
add('oixcloud','dns','添加分流 DNS 规则','设置 → DNS → 新增 DNS 规则',[
 ['选匹配方式','示例使用后缀，匹配一个内部域名'],['选分流 DNS','仅将匹配的域名交给指定服务器解析'],['确认服务器可达','图中 192.0.2.53 是文档示例地址，需换成你可达的 DNS']
],()=>ios('DNS 规则',{back:'DNS',action:'保存'})+group(260,[{label:'已启用',on:true}])+T(82,366,'匹配方式',15,'#747780')+segmented(79,383,382,['精确','后缀','通配符'],1)+badge(467,379,1)+group(438,[{label:'corp.example.com'}])+group(544,[{label:'操作',value:'分流 DNS',chev:true,n:2},{label:'192.0.2.53',n:3}])+lines(84,698,'此规则只用于匹配的域名；其他请求继续按原有设置解析',16,'#85858d',22))
add('oixcloud','networks','为特定网络应用预设','设置 → 网络预设 → 网络名称',[
 ['核对网络名称','Wi-Fi 按准确 SSID 匹配，蜂窝网络单独设置'],['区分模式与兜底路由','直连模式与只有未匹配流量直连，作用不同'],['保存后验证','DNS 留空表示继承；路由规则与 IPv6 可分别继承']
],()=>ios('Home Wi-Fi',{back:'网络预设',action:'保存'})+group(270,[{label:'网络',value:'Home Wi-Fi',n:1}],{title:'网络'})+group(377,[{label:'模式',value:'规则',chev:true,n:2},{label:'兜底路由',value:'继承',chev:true}])+T(83,536,'路由规则',15,'#727279')+segmented(78,552,384,['继承','自定义'],0)+badge(468,552,3)+group(660,[{label:'继承',disabled:true}],{title:'DNS'})+group(770,[{label:'IPv6',value:'继承',chev:true},{label:'自动连接',on:false}]))

add('oixcloud','mitm','安装本机 MITM 证书','设置 → MITM → MITM 证书',[
 ['核对此设备的证书','本图展示已生成证书、尚未登录账户的状态'],['安装信任描述文件','安装后到 iOS 设置完成安装与完全信任'],['账户证书另行管理','未登录时账户操作不可用；不要随意替换本机证书']
],()=>ios('MITM 证书',{back:'MITM'})+group(281,[{label:'oixCloud CA',sub:'根证书',n:1},{label:'安装信任描述文件',blue:true,n:2},{label:'导出公钥证书',blue:true},{label:'替换此设备上的证书',blue:true},{label:'从此设备删除',danger:true}],{title:'此设备'})+T(83,595,'此处的更改仅影响此设备',15,'#85858d')+group(662,[{label:'状态',value:'尚未登录'},{label:'创建并用于此设备',disabled:true},{label:'将 PKCS#12 导入账号',disabled:true}],{title:'oixCloud'})+badge(468,662,3))

add('oixcloud','modules','导入、更新与排列模块','代理 → 策略 → 模块',[
 ['选择导入或订阅','新建、文件导入、订阅与可莉插件中心是不同入口'],['核对模块状态','名称与内容均为虚构；按用途启用，长按可查看操作'],['检查生效顺序','多个模块影响相同域名时，在生效顺序中调整']
],()=>ios('模块',{back:'策略'})+group(267,[{label:'新建模块',blue:true},{label:'导入模块',blue:true,n:1},{label:'订阅模块',blue:true},{label:'可莉插件中心',blue:true}])+group(528,[{label:'示例规则模块',sub:'订阅 · 上次更新：刚刚',on:true,n:2},{label:'示例脚本模块',sub:'文件 · 已停用',on:false}])+group(717,[{label:'生效顺序',chev:true,n:3}])+group(819,[{label:'模块说明',chev:true}]))

add('oixcloud','sync','选择 iCloud 同步内容','设置 → iCloud 同步',[
 ['核对同步状态','设置主页先开启同步；这里查看状态并立即同步'],['按类别选择','MITM 同步规则集；本机证书不随此开关同步'],['电视单独开启','两端使用同一个 Apple 账户，电视端确认接收']
],()=>ios('iCloud 同步',{back:'设置'})+group(267,[{label:'上次同步',value:'刚刚'},{label:'立即同步',blue:true,n:1}])+group(416,[{label:'代理',sub:'节点、订阅、链式代理、策略组与文件夹',on:true,n:2},{label:'规则',on:false},{label:'模块',on:false},{label:'MITM',sub:'规则集；每台设备保留自己的证书',on:false},{label:'自动化',on:false},{label:'设置',on:false},{label:'账户',on:true}])+group(864,[{label:'同步到 Apple TV',on:true,n:3}]))

add('oixcloud','tailscale','添加并授权 Tailscale 网络','设置 → Tailscale → 添加网络',[
 ['设置网络与设备名称','名称用于识别本网络和这台设备'],['保留交互式登录','点保存并登录后，在授权页批准此设备'],['核对自动路由与出口','自动路由处理设备和获批子网；互联网出口需要单独选择']
],()=>ios('添加网络',{back:'Tailscale',action:'保存'})+group(269,[{label:'网络名称',value:'Tailnet',n:1},{label:'设备名称',value:'My iPhone'},{label:'登录',value:'交互式登录',chev:true}])+group(470,[{label:'自动路由',on:true,n:3}])+group(570,[{label:'出口节点',value:'none'}])+group(674,[{label:'高级',chev:true}])+group(782,[{label:'保存并登录',blue:true,n:2}]))
add('oixcloud','automation','设置脚本触发方式','设置 → 自动化 → 新增脚本',[
 ['核对来源与客户端','选择脚本针对的客户端；名称填写后会显示在页标题'],['按需设置触发器','先选手动验证，再开启定时或网络事件'],['填写代码后再运行','JavaScript 与立即运行在触发器下方，向下滚动查看']
],()=>ios('示例任务',{back:'取消',action:'保存'})+group(267,[{label:'示例任务',n:1},{label:'客户端',value:'Surge',chev:true},{label:'参数',value:'可选'},{label:'超时',value:'10 秒'}])+group(534,[{label:'手动',on:true,n:2},{label:'间隔',on:false},{label:'Cron 定时',on:false},{label:'oixCloud 已启动',on:false},{label:'网络已更改',on:false}],{title:'触发器'})+T(83,858,'JavaScript',15,'#727279')+R(68,872,404,32,'#fff',12)+T(84,895,'// 示例脚本代码…',14,'#85858d')+badge(468,872,3))

add('oixcloud','requests','查看请求的路由判定','活动 → 请求 → 一条请求',[
 ['先找到目标域名','图中 example.com 为虚构请求'],['核对路由结果','查看该请求使用的路线与判定原因'],['检查匹配规则','修改规则后重新建立连接，再核对规则与出口']
],()=>ios('请求',{back:'请求'})+group(270,[{label:'主机',value:'example.com',n:1},{label:'端口',value:'443'},{label:'协议',value:'HTTPS'},{label:'时间',value:'09:41:00'}],{title:'连接'})+group(536,[{label:'结果',value:'代理',n:2},{label:'路由',value:'香港 · 示例 A'},{label:'原因',value:'规则匹配'},{label:'匹配规则',sub:'DOMAIN-SUFFIX,example.com',n:3}],{title:'判定'}))
add('oixcloud','mitm-generate','首次生成 MITM 证书','设置 → MITM → MITM 证书',[
 ['检查此设备','没有本机证书时显示生成入口'],['点生成证书','生成后才出现安装信任描述文件等操作'],['继续安装与信任','安装本机描述文件，再到 iOS 设置完成完全信任']
],()=>ios('MITM 证书',{back:'MITM'})+group(287,[{label:'生成证书',blue:true,n:2}],{title:'此设备'})+badge(469,268,1)+T(83,377,'此处的更改仅影响此设备',15,'#85858d')+group(454,[{label:'状态',value:'尚未登录'},{label:'创建并用于此设备',disabled:true},{label:'将 PKCS#12 导入账号',disabled:true}],{title:'oixCloud'})+T(83,661,'示例：尚未登录，账户证书操作不可用',15,'#85858d'))

add('flclash','login','登录账户','侧栏 oixCloud → 登录',[
 ['选择凭据方式','支持 Google、Access Token 与邮箱密码'],['填写后点右上角勾号','这是表单确认入口；示例不含真实账户或令牌'],['继续同步配置','关闭表单返回账户页，等待配置同步完成']
],()=>{let m=modal('',548,482);return material('oixCloud','oixCloud')+m.s+sheetHead(m,'登录',2)+button(m.x+28,m.y+74,492,'使用 Google 登录')+segmented(m.x+28,m.y+151,492,['Access Token','邮箱密码'],1,true)+mark(m.x+28,m.y+151,492,39,1)+field(m.x+28,m.y+225,492,'邮箱','reader@example.com')+field(m.x+28,m.y+308,492,'密码','••••••••')+T(m.x+28,m.y+412,'忘记密码？',17,'#8a5260')})

add('flclash','connect','仪表盘启动与接管','仪表盘 → 状态卡片',[
 ['确认接管方式','桌面端按需求启用系统代理或虚拟网卡'],['选择规则模式','节点在代理页对应策略组中选择'],['点状态卡片的播放按钮','启动按钮已移入状态卡片，不再固定在页面右下角']
],()=>{let s=material('仪表盘','仪表盘');s+=R(151,243,438,202,'#f5e8ee',25)+T(175,277,'状态  ·  未连接',20,'#6e555f')+T(175,334,'—',31,'#493740')+T(175,408,'运行时间  —',16,'#8e7b83')+R(486,292,72,72,'#efd4df',28)+T(522,340,'▶',29,'#6b4150',600,'middle')+badge(558,292,3);s+=R(607,243,445,202,'#f7edf1',24)+T(633,278,'网络速度',20)+T(633,338,'↑  —',29,'#71515d')+T(633,399,'↓  —',29,'#71515d');s+=R(151,465,901,69,'#f7edf1',20)+T(174,507,'出站模式',20)+segmented(451,478,582,['规则','全局','直连'],0,true)+badge(1036,476,2);s+=R(151,554,438,81,'#f7edf1',22)+T(176,603,'系统代理',21)+toggle(510,578,true,true)+R(607,554,445,81,'#f7edf1',22)+T(633,603,'虚拟网卡',21)+toggle(972,578,false,true)+badge(577,566,1);s+=R(151,655,901,91,'#f7edf1',22)+T(175,691,'配置',19)+T(175,724,'oixCloud  ·  示例托管配置',18,'#8a6a78');return s})

add('flclash','proxies','在策略组中选择节点','侧栏 → 代理',[
 ['展开手动策略组','各组有自己的选择，按需要的组调整'],['点选节点卡片','选中状态用主题色显示'],['验证新连接','延迟是测试值，不代表所有网站或应用可用']
],()=>{let s=material('代理','代理')+R(152,241,899,48,'#f6ebef',14)+T(172,273,'⌕  搜索',18,'#93848b')+T(168,330,'⌄  节点选择',21,'#382b32',600)+T(1030,330,'测速',17,'#8a5260',500,'end')+badge(325,318,1);['香港 · 示例 A','日本 · 示例 B','新加坡 · 示例 C','台湾 · 示例 D'].forEach((n,i)=>{let x=153+i%2*458,y=362+Math.floor(i/2)*132;s+=R(x,y,438,112,i===0?'#efd7e1':'#f5eff2',18,i===0?'#b6778e':'none')+T(x+23,y+38,n,21)+T(x+23,y+82,['28 ms','42 ms','56 ms','49 ms'][i],17,i===0?'#855062':'#88818a');if(i===0)s+=badge(x+421,y+12,2)+check(x+387,y+36,'#8a5260')});return s})
add('flclash','profiles','更新与管理配置','侧栏 → 配置 → 普通订阅操作菜单',[
 ['确认当前配置','图中选中普通 URL 订阅；托管配置在账户页管理同步'],['菜单顺序已更新','编辑、覆写、同步、链式代理、更多、删除分别操作'],['区分配置类型','更多包含运行配置等操作；托管配置不提供相同导出入口']
],()=>{let s=material('配置','配置')+R(154,249,896,120,'#f4e2e9',22)+T(180,288,'个人订阅（示例）',23,'#493039',600)+T(180,320,'远程',16,'#95717e')+T(947,286,'刚刚',15,'#95717e')+check(1015,276,'#8a5260')+badge(513,265,1)+R(154,391,896,109,'#f6f0f3',22)+T(179,431,'oixCloud',22)+T(179,466,'托管配置',16,'#92818b')+T(1018,432,'⋮',25,'#6d4c5b')+R(770,294,268,370,'#fff8fb',14,'#decbd4');['编辑','覆写','同步','链式代理','更多  ›','删除'].forEach((n,i)=>s+=T(794,335+i*54,n,19,n==='删除'?'#b14551':'#54424d'));return s+badge(1037,298,2)+badge(513,407,3)})

add('flclash','filter','可视化节点筛选','oixCloud → 节点筛选',[
 ['设置线路与地区','每个标签可切换不筛选、仅保留和排除；标签随账户变化'],['核对节点预览','右侧预览按条件更新；搜索只查找'],['右上角勾号保存','恢复默认在顶部；保存后等待账户刷新与配置同步']
],()=>{let s=material('节点筛选','oixCloud')+T(975,205,'↺',25,'#8a5260')+T(1037,205,'✓',26,'#8a5260',600,'end')+badge(1052,177,3)+R(153,241,485,479,'#fbf6f8',20,'#e7dce2')+R(657,241,395,479,'#fbf6f8',20,'#e7dce2')+T(175,278,'○ 不筛选 → ✓ 仅保留 → ⊖ 排除',16,'#796570')+T(177,337,'线路',18)+chips(177,354,['Edge','CIA','IXP'],-1,true)+chips(177,399,['Fusion','GIA'],-1,true)+badge(620,335,1)+T(177,479,'地区',18)+chips(177,495,['香港','日本','新加坡'],[0,1],true)+field(176,563,438,'名称包含','香港|日本')+field(176,647,438,'名称排除','测试|维护');s+=T(681,282,'节点预览',21)+T(681,319,'保留 2 / 12 个节点',16,'#8a5260')+badge(1032,275,2)+R(680,344,347,41,'#f0e7ec',10)+T(696,371,'⌕ 搜索节点',17,'#a08c95');['香港 · 示例 A','日本 · 示例 B'].forEach((n,i)=>s+=T(684,437+i*62,n,20)+check(988,430+i*62,'#8a5260'));return s})

add('flclash','chains','编辑代理链顺序','配置菜单 → 链式代理 → 添加或编辑',[
 ['先命名，再选择成员','编辑器下方列出可用节点与受支持策略组'],['检查入口到出口顺序','在代理链区域排序；各跳延迟不代表完整链路'],['右上角勾号保存','节点出口选带 (via …) 的派生项，原节点仍保留原路线']
],()=>material('链式代理','配置')+T(1037,205,'✓',26,'#8a5260',600,'end')+badge(1052,177,3)+R(155,242,895,60,'#f6e4e9',15)+T(176,278,'请确认各跳可用，链越长不代表越快',18,'#8a5260')+field(170,325,864,'名称','工作代理链',{n:1})+mhead(423,'代理链')+button(911,397,126,'新增')+mrow(448,'香港 · 示例 A',{sub:'入口  ·  拖动排序',value:'≡',n:2})+mrow(531,'日本 · 示例 B',{sub:'出口  ·  拖动排序',value:'≡'})+mhead(657,'可用节点与策略组')+mrow(678,'节点选择',{sub:'策略组',value:'＋'}))

add('flclash','override','选择配置覆写模式','配置菜单 → 覆写',[
 ['按需求选择模式','顺序为标准、叠加、自定义、脚本；示例选择叠加'],['编辑自定义','在订阅基础上维护个人分流与策略组'],['检查并应用','顶部检查配置与待应用时的立即应用，负责验证和应用']
],()=>material('覆写','配置')+button(771,176,139,'立即应用',3)+T(950,205,'预览',16,'#8a5260')+T(1033,205,'✓',24,'#8a5260')+mhead(268,'覆写模式')+segmented(162,292,878,['标准','叠加','自定义','脚本'],1,true)+badge(1046,294,1)+R(162,362,878,94,'#f4e7ed',17)+T(182,400,'保留订阅规则和策略组，再叠加个人设置',21,'#654554')+T(182,430,'个人规则优先于订阅规则，已有附加规则保持优先',17,'#876675')+T(182,499,'编辑自定义',19,'#8a5260')+badge(1037,474,2)+mhead(579,'链式代理')+R(162,598,878,96,'#f8eff3',17)+T(183,638,'工作代理链',21)+T(183,670,'香港 · 示例 A  →  日本 · 示例 B',17,'#8d7180'))

add('flclash','rules','添加域名后缀规则','配置覆写 → 编辑自定义 → 规则 → 添加',[
 ['使用表单编辑','表单与规则文本仍是两个编辑方式'],['填写内容并选目标','基本信息中依次选择规则类型、内容与已有目标'],['右上角勾号保存','下方有规则预览；保存后检查并应用，再验证新请求']
],()=>{let m=modal('',608,503);return material('编辑自定义','配置')+m.s+sheetHead(m,'添加规则',3)+segmented(m.x+24,m.y+73,560,['表单','规则文本'],0,true)+badge(m.x+590,m.y+73,1)+T(m.x+35,m.y+150,'基础信息',16,'#885461')+mrow(m.y+164,'规则类型',{value:'DOMAIN-SUFFIX',x:m.x+25,w:558})+mrow(m.y+230,'内容',{sub:'example.com',n:2,x:m.x+25,w:558})+mrow(m.y+313,'规则目标',{value:'工作',x:m.x+25,w:558})+T(m.x+35,m.y+410,'预览',16,'#885461')+T(m.x+35,m.y+448,'DOMAIN-SUFFIX,example.com,工作',17,'#715564')})

add('flclash','capture','设置桌面接管方式','macOS → 工具 → 进阶配置 → 网络',[
 ['系统代理与排除域名','同属系统分区；只接管遵循系统代理的软件'],['选项中的虚拟网卡','启用后确认授权、路由与实际流量'],['macOS 的系统 DNS','此项仅在 macOS 显示；不要把此图套用于 Windows']
],()=>material('网络','工具')+mhead(261,'系统')+mrow(277,'系统代理',{on:true,n:1})+mrow(341,'排除域名',{value:'编辑'})+T(171,433,'排除域名仅在系统代理启用时生效',15,'#8e727f')+mhead(493,'选项')+mrow(510,'虚拟网卡',{on:false,n:2})+mrow(574,'自动设置系统DNS',{on:true,n:3})+mrow(638,'栈模式',{value:'mixed'}))

add('flclash','dns','配置 DNS 覆写','工具 → 进阶配置 → DNS',[
 ['顶部加号添加覆写项','未添加的字段沿用配置；每项左侧可移除覆写'],['一次修改一项','图中值仅演示；右上角还提供快速编辑'],['应用后复查请求','自定义配置自己的设置优先；无改善时恢复原值']
],()=>material('DNS','工具')+T(976,205,'＋',25,'#8a5260')+T(1035,205,'✎',25,'#8a5260')+badge(988,177,1)+mhead(253,'选项')+mrow(278,'⊖  状态',{on:true})+mrow(343,'⊖  遵守规则',{on:false,n:3})+mrow(408,'⊖  DNS模式',{value:'fake-ip',n:2})+mhead(516,'域名服务器')+mrow(537,'⊖  域名服务器',{sub:'https://resolver.example.com/dns-query'})+mrow(622,'⊖  代理域名服务器',{sub:'192.0.2.53'}))

add('flclash','backup','备份与恢复入口','工具 → 备份与恢复',[
 ['先备份本机数据','重大调整或恢复另一份备份前保留当前状态'],['核对恢复策略','兼容会更新同一记录；覆盖会移除备份中不存在的配置'],['再选择恢复范围','点击恢复后还需选择仅配置或所有数据']
],()=>material('备份与恢复','工具')+mhead(264,'远程')+mrow(282,'暂无信息',{sub:'请绑定WebDAV',value:'绑定'})+mhead(403,'本地')+mrow(421,'备份',{sub:'备份数据到本地',n:1})+mrow(503,'恢复',{sub:'通过文件恢复数据',n:3})+mhead(626,'选项')+mrow(646,'恢复策略',{value:'兼容',n:2}))

add('flclash','restore','选择恢复范围','备份与恢复 → 恢复',[
 ['仅恢复配置文件','恢复配置、脚本与规则，保留应用设置'],['恢复所有数据','会同时应用备份中的应用与网络设置'],['策略仍然生效','恢复范围和兼容／覆盖策略是两个独立选择']
],()=>{let m=modal('恢复',544,230);return material('备份与恢复','工具')+m.s+T(m.x+34,m.y+110,'仅恢复配置文件',21)+badge(m.x+511,m.y+105,1)+L(m.x+25,m.y+140,m.x+517,m.y+140)+T(m.x+34,m.y+189,'恢复所有数据',21)+badge(m.x+511,m.y+184,2)})
add('flclash','webdav','绑定 WebDAV 备份位置','工具 → 备份与恢复 → 绑定',[
 ['使用完整服务地址','填写自己的 WebDAV 服务地址，优先 HTTPS'],['填写账户凭据','密码不写入便携备份，新设备需要重填'],['右上角勾号保存','返回后执行手动备份，确认远程记录出现']
],()=>{let m=modal('',608,424);return material('备份与恢复','工具')+m.s+sheetHead(m,'WebDAV配置',3)+mrow(m.y+92,'地址',{sub:'https://dav.example.com/backup/',n:1,x:m.x+24,w:560})+mrow(m.y+184,'账号',{sub:'reader',n:2,x:m.x+24,w:560})+mrow(m.y+276,'密码',{sub:'••••••••',x:m.x+24,w:560})})

add('flclash','tailscale','授权 Tailscale 网络','工具 → Tailscale → 添加网络',[
 ['填写网络与设备名称','每台设备需要单独授权'],['选择交互式登录','当前登录方式用分段选项选择，不是下拉菜单'],['保存并登录在下方','自动路由、出口和高级设置之后，向下滚动完成授权']
],()=>material('添加网络','工具')+T(1037,205,'✓',26,'#8a5260',600,'end')+mhead(258,'Tailnet')+mrow(274,'网络名称',{sub:'Tailnet',n:1})+mrow(357,'设备名称',{sub:'my-desktop'})+mhead(472,'登录方式')+segmented(170,490,865,['交互式登录','认证密钥'],0,true)+badge(1038,490,2)+mrow(554,'自动路由',{on:true})+mrow(620,'出口节点',{sub:'留空'})+mhead(744,'高级')+badge(1038,720,3))

add('flclash','android','选择进入 VPN 的应用','Android → 工具 → 访问控制',[
 ['在更多菜单开启','右上角更多菜单选择开启或关闭访问控制'],['设置中选择模式','更多 → 设置 → 模式；白名单只允许所选应用进入 VPN'],['勾选后保存','右上角勾号保存；底部状态栏提示当前模式与选择数']
],()=>R(42,127,454,810,'#fffbfc',32,'#e4d8df')+T(69,164,'9:41',17,'#332b2e',600)+T(75,217,'‹',28,'#875366')+T(114,217,'应用访问控制',24)+T(426,217,'✓',24,'#875366',600)+T(466,217,'⋮',26,'#875366')+badge(482,190,1)+R(73,250,395,43,'#f4e9ef',22)+T(91,279,'⌕ 搜索',18,'#a58c99')+group(327,[{label:'示例浏览器',value:'☑'},{label:'示例工作应用',value:'☑'},{label:'示例播放器',value:'□'}])+R(191,510,280,210,'#fff5f8',16,'#dfcad4')+T(215,549,'开启  ✓',18,'#875366')+T(215,592,'关闭',18,'#6b5b63')+T(215,635,'刷新',18,'#6b5b63')+T(215,681,'设置  ›  白名单模式',17,'#875366')+badge(468,658,2)+R(72,819,400,82,'#f3e3ea',20)+T(91,852,'只允许选中应用进入VPN',16,'#7f5c6b')+T(91,881,'已选 2',15,'#8a5260')+badge(467,819,3)+R(213,923,112,5,'#493f45',3))

add('flclash','diagnostics','运行网络自检','Windows / macOS → 工具 → 网络自检',[
 ['从顶部开始自检','在标题栏使用自检按钮；旁边可复制诊断报告'],['按检查项看结果','区分配置、内核、本地入口、系统接管与 DNS'],['结果仅为当次抽查','后续 DNS、HTTPS 检查在下方，不代表全部应用或节点']
],()=>material('网络自检','工具')+T(974,205,'⧉',25,'#8a5260')+T(1034,205,'↻',25,'#8a5260')+badge(1051,177,1)+R(158,241,887,89,'#f5e5ed',19)+T(180,275,'检查当前连接并进行少量抽查',20,'#74525f')+T(180,307,'系统网络路径也可能经过虚拟网卡',16,'#8e727f')+badge(1034,244,3)+['已应用配置','内核响应','本地代理入口','系统代理','虚拟网卡与路由','内核 DNS'].map((v,i)=>mrow(345+i*62,v,{value:i===5?'需要关注':'通过',n:i===5?2:undefined})).join(''))

function helperDesktop(){return R(30,130,1060,653,'#dfe7f3',15)+R(30,130,1060,34,'#f5f6f9',14)+T(53,153,'●   Finder   文件   编辑   显示   前往   窗口',15,'#384052')+T(1049,153,'☁    09:41',15,'#384052',500,'end')}
function helperMenu(x,y,w,items){let s=R(x,y,w,items.length*37+18,'#fbfbfdee',10,'#c8ced8');items.forEach((item,i)=>{let yy=y+10+i*37;const active=item.active;s+=active?R(x+5,yy,w-10,34,'#2676df',6):'';s+=T(x+18,yy+24,item.label,17,active?'#fff':item.muted?'#89909b':'#303946',400,'start',english?w-52:undefined);if(item.sub)s+=chevron(x+w-24,yy+13,active?'#fff':'#6e7885');if(item.n)s+=badge(x+w-8,yy,item.n)});return s}
add('helper','surge','从菜单栏接入 Surge','菜单栏 oixCloud → 连接设置',[
 ['先完成账户登录','等待账户与节点获取完成，再打开连接设置'],['核对接入模式','多端口模式在 Surge 选节点，单端口模式在 Helper 选'],['接入并核对配置','点接入 Surge 后，确认 Surge 已切换到生成的配置']
],()=>helperDesktop()+helperMenu(85,187,242,[{label:'oixCloud',muted:true},{label:'账户',sub:true,n:1},{label:'节点',sub:true},{label:'连接设置',sub:true,active:true},{label:'工具',sub:true}])+helperMenu(333,303,672,[{label:'SOCKS5 + HTTP  127.0.0.1:7100',muted:true},{label:'开机启动'},{label:'本地端口…'},{label:'允许局域网访问'},{label:'局域网访问鉴权…（未开启）'},{label:'接入模式…（当前：本地多端口映射）',n:2},{label:'节点筛选 · 智能优选'},{label:'精简规则'},{label:'复制本机节点列表 URL'},{label:'接入 Surge',active:true,n:3},{label:'导出 OpenSurge 配置'}]))
add('helper','lan','设置本地端口与局域网访问','菜单栏 oixCloud → 连接设置',[
 ['先核对端口用途','配置服务和代理是不同端口，填写时不要混用'],['先设置鉴权','局域网访问使用专用用户名与密码，不是账户登录密码'],['再开启局域网访问','其他设备填写这台电脑的局域网 IP，修改后更新配置']
],()=>helperDesktop()+helperMenu(155,219,815,[{label:'SOCKS5 + HTTP  127.0.0.1:7100',muted:true},{label:'开机启动'},{label:'本地端口…',n:1},{label:'允许局域网访问',n:3},{label:'局域网访问鉴权…（已开启）',active:true,n:2},{label:'接入模式…（当前：单端口）'},{label:'节点筛选 · 智能优选'},{label:'精简规则'},{label:'复制本机节点列表 URL'},{label:'接入 Surge'},{label:'导出 OpenSurge 配置'}]))

// Merlin software-center sections, checked against the maintained oixClash page.
function merlin(section) {
 let s=R(30,130,1060,653,'#20333e',15)+R(220,149,849,611,'#4d595d',4)
 s+=T(48,174,'ASUSWRT',20,'#d5e4e8',700)+T(241,181,'软件中心 - oixClash',24,'#fff',600)
 ;['网络地图','AiMesh','访客网络','流量分析','软件中心','无线网络','内部网络','外部网络','IPv6','系统管理'].forEach((n,i)=>{const y=205+i*51;s+=R(43,y,164,46,n==='软件中心'?'#387aa0':'#354247',3)+T(60,y+29,n,17,'#f2f6f8',n==='软件中心'?600:400,'start',english?137:undefined)})
 s+=T(243,216,section,17,'#dbe7eb')
 return s
}
const oxHead=(y,label)=>R(239,y,811,33,'#73838a',0)+T(252,y+(english?20:23),label,english?15:17,'#fff',600)
const oxRow=(y,label,h=53)=>R(239,y,811,h,'#465960',0,'#293b44')+R(239,y,164,h,'#2e3b41',0,'#293b44')+T(252,y+32,label,17,'#f4f6f8',400,'start',english?139:undefined)
const oxButton=(x,y,w,label,n)=>R(x,y,w,36,'#17272e',7,'#637980')+T(x+w/2,y+24,label,16,'#fff',600,'middle',english?w-14:undefined)+(n?mark(x,y,w,36,n):'')
const oxCheck=(x,y,on=true)=>R(x,y,17,17,on?'#2ba5d0':'#fff',2)+(on?`<path d="M${x+3} ${y+9}l4 4 7-10" fill="none" stroke="#fff" stroke-width="2"/>`:'')

add('oixclash','login','登录 oixCloud 账号','软件中心 → oixClash → oixCloud 账号',[
 ['选择登录方式','可用登录令牌，也可选择邮箱和密码'],['填写账户凭据','令牌从网站或 App 复制，不是订阅地址'],['登录后再启用','确认套餐信息，开启后到页面底部保存并应用']
],()=>merlin('登录后，主局域网设备使用 oixCloud 的节点和分流规则')+oxHead(239,'oixCloud 账号')+oxRow(272,'登录方式')+circ(425,298,8,'#fff')+circ(425,298,4,'#169ccb')+T(443,304,'登录令牌',18,'#fff')+circ(592,298,8,'#fff')+T(610,304,'邮箱和密码',18,'#fff')+mark(415,282,335,32,1)+oxRow(325,'登录令牌',81)+R(420,344,600,41,'#263941',1,'#8ba1a9')+T(434,371,'在 oixCloud 网站或 App 中复制',18,'#aebfc7')+badge(1018,343,2)+oxRow(406,'',53)+oxButton(420,414,105,'登录',3)+oxHead(482,'运行')+oxRow(515,'开启')+toggle(421,529,false)+T(503,547,'插件版本：0.0.14',17,'#e2ecf0')+T(729,547,'检查更新',16,'#41b6d5')+oxRow(568,'运行状态')+T(421,600,'未运行',18,'#ffce55')+T(242,737,'示例为未登录状态，令牌输入框尚未填写',16,'#c8d7dd'))

add('oixclash','running','开启代理与内存优化','软件中心 → oixClash → 运行',[
 ['打开开关并保存','等运行状态显示运行中，再验证局域网连接'],['核对常用端口与 UDP','非常用端口默认直连，按需求调整后再验证'],['内存优化位于下方','设备策略、DNS 和自定义规则在后，页末保存并应用']
],()=>merlin('已登录：reader@example.com  ·  示例套餐')+oxHead(239,'运行')+oxRow(272,'开启')+toggle(421,284,true)+T(502,304,'插件版本：0.0.14',17,'#e2ecf0')+T(733,304,'检查更新',16,'#41b6d5')+oxButton(923,280,112,'查看日志')+badge(474,282,1)+oxRow(325,'运行状态')+T(421,357,'运行中  ·  内核 alpha-oix-示例  ·  UDP 已转发',17,'#b7e46e')+oxRow(378,'节点切换')+oxButton(421,386,150,'打开控制面板')+oxRow(431,'仅代理常用端口',83)+oxCheck(421,449)+T(450,464,'仅接管常用端口，其他端口直连',17,'#fff')+T(421,496,'游戏或语音需非常用端口时，可按需关闭',16,'#dce6eb')+badge(1017,443,2)+oxRow(514,'UDP 转发')+oxCheck(421,532)+T(450,547,'将符合端口设置的 UDP 流量交给代理',16,'#fff')+oxRow(567,'屏蔽 QUIC')+oxCheck(421,585,false)+T(450,600,'未开启 UDP 转发时建议开启',17,'#fff')+oxRow(620,'内存优化',90)+oxCheck(421,639)+T(450,652,'适合小内存设备',17,'#fff')+T(421,684,'本机内存 256MB  ·  内核在 JFFS 上运行',16,'#b7e46e')+badge(1017,631,3)+T(242,737,'向下查看设备、DNS 与自定义规则；在页面底部「保存并应用」',16,'#c8d7dd'))

add('oixclash','rules','读取并保存账号规则','软件中心 → oixClash → 自定义规则',[
 ['先读取面板规则','读取会替换未保存的草稿，先保留需要的内容'],['每行一条规则','策略使用 DIRECT、REJECT 或已有策略组'],['保存并检查结果','保存影响同账号其他客户端，再验证新连接']
],()=>merlin('账号规则与网站共用，排在面板默认规则之前')+oxHead(239,'自定义规则')+oxRow(272,'账号规则',385)+R(420,289,609,180,'#22343d',0,'#8fa3ad')+T(435,324,'DOMAIN-SUFFIX,example.com,DIRECT',19,'#e6edf2')+T(435,360,'DOMAIN,ads.example.com,REJECT',19,'#e6edf2')+badge(1018,286,2)+T(420,english?496:500,'每行一条，无需 rules: 或行首短横线',16,'#e2ecf0')+T(420,531,'留空并保存可清除面板账号规则',16,'#ffce55')+T(420,english?566:562,'管理面板账号规则',17,'#41b6d5')+oxButton(420,589,166,'读取面板规则',1)+oxButton(613,589,211,'保存到面板并更新',3)+T(421,648,'已读取面板规则，可编辑后保存',16,'#b7e46e')+T(242,705,'示例域名不对应真实服务；请按实际需求填写',16,'#c8d7dd')+T(242,737,'保存成功后，检查日志并在控制面板核对规则命中',16,'#c8d7dd'))


for(const original of scenes){
 currentScene=original
 const key=`${original.client}-${original.id}`
 const localized=english?translations.scenes[key]:null
 if(english&&!localized)throw new Error(`Missing English scene: ${key}`)
 const sc=localized?{...original,title:localized[0],route:localized[1],notes:localized[2]}:original
 const phone=sc.client==='oixcloud'||sc.id==='android'
 const h=english?(phone?1120:1100):(phone?982:975)
 const brand=sc.client==='oixcloud'?'oixCloud':sc.client==='helper'?'oixCloud Helper':sc.client==='oixclash'?'oixClash':'FlClash for oixCloud'
 const description=english?(sc.client==='oixclash'?'English reference with bilingual labels for the Chinese-only plugin UI; fictional data, not a screenshot.':'English interface simulation based on maintained client labels; fictional data, not a screenshot. Layout varies by OS, platform and theme.'):'按维护版本的菜单与表单绘制，非客户端截图；中文界面与虚构数据；界面细节随系统、平台与主题变化'
 let s=`<svg xmlns="http://www.w3.org/2000/svg" width="1120" height="${h}" viewBox="0 0 1120 ${h}" role="img" aria-labelledby="title desc"><title id="title">${E(brand+' · '+sc.title)}</title><desc id="desc">${E(description)}</desc><g font-family="-apple-system,BlinkMacSystemFont,'PingFang SC','Segoe UI',Arial,sans-serif">`
 const platform=sc.client==='oixcloud'?'oixCloud · iPhone / iPad':sc.client==='helper'?'oixCloud Helper · macOS':sc.client==='oixclash'?('oixClash · '+(english?'Merlin router':'Merlin 路由器')):'FlClash for oixCloud'+(sc.id==='android'?' · Android':english?' · Desktop':' · 桌面端')
 s+=R(0,0,1120,h,'#f3f5f8',0)+T(34,38,platform,18,'#697386',600)+T(1085,38,english?(sc.client==='oixclash'?'English guide · Chinese-only plugin UI':'Illustration · Fictional data'):'操作示意 · 虚构数据',16,'#788392',500,'end')+T(34,87,sc.title,31,'#263245',700)
 drawingUI=true
 s+=sc.draw()
 drawingUI=false
 if(phone){
  s+=T(552,175,english?'Where to go':'操作位置',17,'#748092',600)+lines(552,214,sc.route,21,'#233955',24)
  sc.notes.forEach(([title,body],i)=>{let y=336+i*(english?220:176);s+=badge(568,y,i+1)
   const titleLines=english?wrap(title,20):[title]
   s+=titleLines.map((v,j)=>T(598,y+7+j*31,v,english?23:24,'#273952',600)).join('')+lines(552,y+(english?Math.max(46,titleLines.length*31+15):46),body,20,'#64748b',24)
  })
 }else{
  sc.notes.forEach(([title,body],i)=>{let x=42+i*365
   const titleLines=english?wrap(title,15):[title]
   s+=badge(x+12,829,i+1)+titleLines.map((v,j)=>T(x+38,835+j*30,v,english?20:21,'#273952',600)).join('')+lines(x,english?850+titleLines.length*30:868,body,17,'#64748b',19)
  })
  s+=T(34,english?h-20:966,(english?'Where to go: ':'入口：')+sc.route,14,'#7c8797')
 }
 s+='</g></svg>\n'
 writeFileSync(path.join(out,`${sc.client}-${sc.id}-${english?'en':'zh'}.svg`),s)
}
console.log(`Rendered ${scenes.length} ${english?'English':'Chinese'} client illustrations`)
