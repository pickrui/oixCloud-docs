import { mkdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

// Chinese simulations drawn from the maintained SwiftUI/Material/Merlin screen structure.
// Data is fictional. Only public UI labels and drawing primitives belong here.
const out = fileURLToPath(new URL('../docs/public/illustrations/', import.meta.url))
mkdirSync(out, { recursive: true })
const E = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')
const R = (x,y,w,h,c='#fff',r=12,stroke='none') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${c}" stroke="${stroke}"/>`
const T = (x,y,s,z=20,c='#202124',weight=400,anchor='start') => `<text x="${x}" y="${y}" font-size="${z}" fill="${c}" font-weight="${weight}" text-anchor="${anchor}">${E(s)}</text>`
const L = (x,y,x2,y2,c='#dedee3',w=1) => `<path d="M${x} ${y}H${x2}" stroke="${c}" stroke-width="${w}"/>`
const circ=(x,y,r,c,stroke='none',w=1)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" stroke="${stroke}" stroke-width="${w}"/>`
function wrap(s,max=24){let result=[],line='',width=0;for(const token of s.match(/[A-Za-z0-9]+(?:[./_-][A-Za-z0-9]+)*|[^A-Za-z0-9]/g)||[]){let u=[...token].reduce((n,c)=>n+(/[\u2e80-\uffff]/.test(c)?1:.56),0);if(token==='\n'||(width+u>max&&line)){result.push(line.trimEnd());line='';width=0;if(token==='\n')continue}line+=token;width+=u}if(line)result.push(line.trimEnd());return result}
const lines=(x,y,s,size=19,color='#667085',max=24)=>wrap(s,max).map((s,i)=>T(x,y+i*(size*1.55),s,size,color)).join('')
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
 else{s+=T(69,215,'‹ '+back,18,'#007aff')+T(270,215,title,21,'#111',600,'middle');if(action)s+=T(470,215,action,18,'#007aff',600,'end')}
 if(tab){s+=R(49,854,442,63,'#fcfcfd',27,'#e4e4e9');['首页','代理','活动','oixCloud','设置'].forEach((n,i)=>{let x=93+i*87;s+=icon(x,880,['⌂','▤','◴','☁','⚙'][i],n===tab?'#007aff':'#8b8b93')+T(x,900,n,12,n===tab?'#007aff':'#8b8b93',500,'middle')})}
 s+=R(210,924,120,5,'#19191b',3)
 return s
}
function group(y,rows,{title='',w=404,x=68}={}){
 let h=rows.reduce((sum,r)=>sum+(r.sub?68:53),0),s=title?T(x+14,y-12,title,15,'#727279'):''
 s+=R(x,y,w,h,'#fff',14)
 let yy=y
 rows.forEach((r,i)=>{let rh=r.sub?68:53;s+=T(x+16,yy+(r.sub?27:33),r.label,20,r.blue?'#007aff':'#202124',r.bold?600:400);if(r.sub)s+=T(x+16,yy+51,r.sub,14,'#85858d');if(r.value)s+=T(x+w-(r.chev?28:16),yy+33,r.value,r.valueSize||18,'#85858d',400,'end');if(r.chev)s+=chevron(x+w-18,yy+23);if(r.on!==undefined)s+=toggle(x+w-66,yy+12,r.on);if(i<rows.length-1)s+=L(x+16,yy+rh,x+w,yy+rh);if(r.n)s+=mark(x+4,yy+4,w-8,rh-8,r.n);yy+=rh})
 return s
}
function segmented(x,y,w,labels,sel=0,fl=false){let s=R(x,y,w,39,fl?'#f7edef':'#e4e4e9',fl?20:8,fl?'#a8959a':'none');labels.forEach((l,i)=>{let iw=w/labels.length;if(sel===i)s+=R(x+i*iw+3,y+3,iw-6,33,fl?'#f0d9df':'#fff',fl?17:6);s+=T(x+iw*(i+.5),y+25,l,16,fl?'#593c44':'#222',i===sel?600:400,'middle')});return s}
function field(x,y,w,label,value,{n,fl=true}={}){return R(x,y,w,58,'#fffbfc',7,'#9d8d92')+R(x+10,y-9,label.length*15+14,18,'#fffbfc',0)+T(x+17,y+4,label,14,'#756067')+T(x+17,y+38,value,19,'#2f272a')+(n?mark(x,y,w,58,n):'')}
function material(title,active='工具'){
 let s=R(28,128,1064,657,'#e3dbde',16)+R(30,130,1060,653,'#fffbfc',15)
 s+=R(30,130,1060,35,'#f2eaed',15)+circ(49,148,5,'#df8e94')+circ(66,148,5,'#e7c87c')+circ(83,148,5,'#95bda4')+T(560,152,'FlClash for oixCloud',14,'#68575e',500,'middle')
 s+=R(31,165,90,617,'#f7f0f2',0)
 ;['仪表盘','代理','配置','oixCloud','请求','连接','工具'].forEach((n,i)=>{let y=191+i*72,c=n===active?'#754651':'#72676b';if(n===active)s+=R(40,y,71,35,'#edd9df',18);s+=icon(76,y+24,['▦','▤','▱','☁','≡','⇄','⚒'][i],c)+T(76,y+51,n,12,c,500,'middle')})
 s+=T(153,205,title,27,'#2d2528',500)+icon(1050,202,'⋮','#715f66')
 return s
}
function mrow(y,label,{sub='',value='',on,n,x=154,w=898}={}){let h=sub?70:59,s=T(x+16,y+29,label,20,'#332b2e');if(sub)s+=T(x+16,y+53,sub,15,'#7e7176');if(value)s+=R(x+w-122,y+9,106,37,'#f0dce2',20)+T(x+w-69,y+33,value,16,'#784f5b',500,'middle');if(on!==undefined)s+=toggle(x+w-67,y+13,on,true);s+=L(x,y+h,x+w,y+h,'#ede5e8');if(n)s+=mark(x,y+2,w,h-6,n);return s}
const mhead=(y,t)=>T(166,y,t,16,'#885461',600)
const button=(x,y,w,label,n)=>R(x,y,w,43,'#8a5260',23)+T(x+w/2,y+28,label,17,'#fff',500,'middle')+(n?mark(x,y,w,43,n):'')
function modal(title,w=490,h=410){let x=(1120-w)/2,y=235;return {x,y,s:R(30,165,1060,618,'#00000044',0)+R(x,y,w,h,'#fff6f8',27,'#ddcbd2')+T(560,y+48,title,26,'#332b2e',500,'middle')}}
function chips(x,y,names,selected=0,fl=false){const selectedSet=new Set(Array.isArray(selected)?selected:[selected]);return names.map((v,i)=>{const active=selectedSet.has(i);return R(x+i*123,y,113,36,active?(fl?'#f0d9df':'#dfebff'):'#f4f5f8',18,active?(fl?'#bd8d9b':'#8db7ff'):'#dbdce2')+T(x+i*123+56,y+24,v,15,active?(fl?'#794c59':'#0068d8'):'#646771',500,'middle')}).join('')}

add('oixcloud','login','登录账户','oixCloud → 登录',[
 ['选择登录方式','按实际凭据选择 Access Token 或邮箱与密码'],['填写凭据','图中邮箱为虚构示例，密码不展示'],['完成登录','登录后等待托管节点载入，再返回首页连接']
],()=>ios('oixCloud',{large:true,tab:'oixCloud'})+segmented(69,262,402,['Access Token','邮箱与密码'],1)+mark(69,262,402,39,1)+group(351,[{label:'reader@example.com'},{label:'••••••••',n:2},{label:'忘记密码？',blue:true}],{title:'账户'})+group(549,[{label:'登录',blue:true,n:3}])+group(630,[{label:'创建账户',blue:true}]))
add('oixcloud','connect','首页连接与当前出口','首页',[
 ['点圆形电源按钮','已有节点时启动 VPN，首次使用允许系统添加 VPN 配置'],['点当前出口','打开节点选择页，选择节点或自动优选'],['核对运行状态','连接成功后再看活动记录，确认目标网站实际走向']
],()=>ios('首页',{large:true,tab:'首页'})+R(67,264,406,226,'#fff',22)+T(89,298,'● 连接',15,'#82838c')+T(89,334,'未连接',29,'#202124',700)+T(89,365,'规则',18,'#7b7c85')+power(407,325)+badge(450,279,1)+R(85,396,370,69,'#f4f6fa',15)+T(104,425,'香港 · 示例 A',20,'#25262d',600)+T(104,448,'oixCloud',15,'#8b8c95')+chevron(431,423)+badge(449,397,2)+group(529,[{label:'运行模式',value:'规则',chev:true},{label:'兜底路由',value:'当前代理'},{label:'DNS',value:'默认'}],{title:'运行摘要'})+badge(451,541,3))
add('oixcloud','proxies','选择节点与自动优选','首页 → 当前出口 → 节点',[
 ['搜索节点','可以按节点名称查找'],['自动优选或策略组','需要自动选择时选择自动优选，也可选择自己创建的组'],['选择一个节点','勾选后返回首页，新建连接验证出口；延迟仅为示例']
],()=>ios('节点',{back:'取消',action:'完成'})+R(68,243,403,41,'#e5e5ea',11)+T(84,269,'⌕  搜索',18,'#94949c')+badge(466,245,1)+group(310,[{label:'ϟ  自动优选',blue:true,n:2},{label:'工作',chev:true}])+group(470,[{label:'香港 · 示例 A',value:'28 ms',n:3},{label:'日本 · 示例 B',value:'42 ms'},{label:'新加坡 · 示例 C',value:'56 ms'}],{title:'oixCloud'})+check(326,490)+group(679,[{label:'＋ 添加',blue:true}]))
add('oixcloud','filter','筛选线路、地区与名称','oixCloud → 节点筛选',[
 ['点选筛选条件','线路与地区在不筛选、仅保留、排除之间切换'],['检查节点预览','名称支持正则；预览搜索不会改动筛选条件'],['保存并刷新','至少保留一个节点；保存后刷新托管节点']
],()=>ios('节点筛选',{back:'oixCloud',action:'保存'})+badge(477,241,3)+T(82,266,'○ 不筛选    ✓ 仅保留    ⊖ 排除',15,'#697384')+T(81,312,'线路',15,'#767982')+chips(76,328,['Fusion','GIA','CIA'],0)+badge(468,327,1)+T(81,410,'地区',15,'#767982')+chips(76,426,['香港','日本','新加坡'],0)+group(503,[{label:'名称包含',value:'香港|日本',valueSize:16},{label:'名称排除',value:'测试|维护',valueSize:16}])+T(83,655,'节点预览',18,'#202124',600)+badge(467,647,2)+group(677,[{label:'香港 · 示例 A',value:'保留'},{label:'香港 · 示例 B',value:'保留'}])+T(83,824,'保留 2 / 12 个节点',17,'#007aff')+T(465,876,'恢复默认',17,'#007aff',500,'end'))
add('oixcloud','policies','创建策略组','代理 → 策略 → 添加策略组',[
 ['填写名称与类型','先明确手动选择、自动测速、故障转移或智能的用途'],['加入可用成员','成员可以来自已有节点；示例使用两个节点'],['保存并选用','保存后在首页或路由规则中选择这个组才会使用']
],()=>ios('工作',{back:'取消',action:'保存'})+badge(476,241,3)+group(266,[{label:'名称',value:'工作'},{label:'类型',value:'自动测速',chev:true,n:1}])+group(425,[{label:'香港 · 示例 A'},{label:'日本 · 示例 B'},{label:'＋ 添加成员',blue:true,n:2}],{title:'成员'})+group(650,[{label:'间隔',value:'300 秒'},{label:'容差',value:'50 ms'}],{title:'健康检查'}))
add('oixcloud','chains','按顺序创建代理链','代理 → 链式代理',[
 ['填写链的名称','使用能够辨认用途的名称'],['按转发顺序放置成员','入口在前、出口在后；每个节点先单独验证可用'],['选择已保存的链','在首页或规则中使用这条代理链，再检查实际请求']
],()=>ios('新建链式代理',{back:'取消',action:'保存'})+badge(475,241,3)+group(276,[{label:'名称',value:'工作代理链',n:1}])+group(390,[{label:'香港 · 示例 A',sub:'入口',value:'≡',n:2},{label:'日本 · 示例 B',sub:'出口',value:'≡'},{label:'＋ 添加代理',blue:true}],{title:'代理'}))
add('oixcloud','rules','为网站添加路由规则','代理 → 策略 → 路由规则',[
 ['选择域名尾缀','输入 example.com，不带协议或路径'],['选择实际目标','示例选用已有的「工作」策略组'],['点添加','回到规则模式，重新访问目标网站核对命中结果']
],()=>ios('路由规则',{back:'策略'})+R(45,234,450,688,'#00000022',20)+R(45,364,450,574,'#f2f2f7',26)+R(238,374,65,5,'#c6c6ce',3)+T(71,416,'取消',18,'#007aff')+T(270,416,'添加规则',21,'#111',600,'middle')+T(467,416,'添加',18,'#007aff',600,'end')+badge(482,438,3)+group(454,[{label:'类型',value:'域名尾缀',chev:true,n:1},{label:'example.com'},{label:'扩展匹配',on:false}])+group(668,[{label:'路由到',value:'工作',chev:true,n:2}])+lines(84,751,'规则自上而下匹配，命中第一条即生效',16,'#85858d',23))
add('oixcloud','dns','添加分流 DNS 规则','设置 → DNS → 新增 DNS 规则',[
 ['选匹配方式','示例使用后缀，匹配一个内部域名'],['选分流 DNS','仅将匹配的域名交给指定服务器解析'],['确认服务器可达','图中 192.0.2.53 是文档示例地址，需换成你可达的 DNS']
],()=>ios('DNS 规则',{back:'DNS',action:'保存'})+group(260,[{label:'已启用',on:true}])+T(82,366,'匹配方式',15,'#747780')+segmented(79,383,382,['精确','后缀','通配符'],1)+badge(467,379,1)+group(438,[{label:'corp.example.com'}])+group(544,[{label:'操作',value:'分流 DNS',chev:true,n:2},{label:'192.0.2.53',n:3}])+lines(84,698,'此规则只用于匹配的域名；其他请求继续按原有设置解析',16,'#85858d',22))
add('oixcloud','networks','为特定网络应用预设','设置 → 网络预设 → 网络',[
 ['核对网络名称','Wi-Fi 按准确 SSID 匹配，蜂窝网络单独设置'],['区分模式与兜底路由','直连模式与“只有未匹配流量直连”作用不同'],['继承或自定义','路由规则、DNS、IPv6 可分别继承全局设置']
],()=>ios('Home Wi-Fi',{back:'网络预设',action:'完成'})+group(270,[{label:'网络',value:'Home Wi-Fi',n:1}],{title:'网络'})+group(377,[{label:'模式',value:'规则',chev:true,n:2},{label:'兜底路由',value:'继承',chev:true}],{title:'路由'})+T(83,536,'路由规则',15,'#727279')+segmented(78,552,384,['继承','自定义'],0)+badge(468,552,3)+group(649,[{label:'DNS',value:'继承'},{label:'IPv6',value:'继承'},{label:'自动连接',on:false}]))
add('oixcloud','mitm','生成并安装 MITM 证书','设置 → MITM → MITM 证书',[
 ['核对此设备的证书','本图展示已经生成证书的状态'],['安装信任描述文件','生成证书后显示安装入口；随后到 iOS 设置完成安装与信任'],['区分本机与账户证书','账户证书操作和此设备的操作分开；不要随意替换正在使用的证书']
],()=>ios('MITM 证书',{back:'MITM'})+group(281,[{label:'oixCloud CA',sub:'根证书'},{label:'安装信任描述文件',blue:true,n:2},{label:'导出公钥证书',blue:true},{label:'替换此设备上的证书',blue:true}],{title:'此设备'})+badge(469,278,1)+group(598,[{label:'状态',value:'尚未获取'},{label:'将 PKCS#12 导入账号',blue:true}],{title:'oixCloud'})+badge(468,597,3))
add('oixcloud','modules','导入、更新与排列模块','代理 → 策略 → 模块',[
 ['选择导入或订阅','文件用导入，持续更新的资源可用订阅'],['核对模块状态','示例名称与内容均为虚构；按用途启用'],['检查生效顺序','多个模块影响相同域名时，顺序会影响 DNS、重写和脚本']
],()=>ios('模块',{back:'策略'})+group(271,[{label:'导入模块',blue:true,n:1},{label:'订阅模块',blue:true}])+group(429,[{label:'示例规则模块',sub:'订阅 · 上次更新：刚刚',on:true,n:2},{label:'示例脚本模块',sub:'文件 · 已停用',on:false}])+group(646,[{label:'生效顺序',chev:true,n:3},{label:'模块说明',chev:true}]))
add('oixcloud','sync','选择 iCloud 同步内容','设置 → iCloud 同步',[
 ['核对同步状态','先在设置首页开启 iCloud 同步；这里可查看上次同步并立即同步'],['核对同步类别','代理、规则、模块、证书及设置按需选择'],['Apple TV 单独开启','两台设备使用同一个 Apple 账户，电视端确认接收']
],()=>ios('iCloud 同步',{back:'设置'})+group(267,[{label:'上次同步',value:'刚刚'},{label:'立即同步',blue:true,n:1}])+group(415,[{label:'代理',on:true,n:2},{label:'规则',on:true},{label:'模块',on:true},{label:'MITM',on:false},{label:'自动化',on:false},{label:'设置',on:true},{label:'账户',on:true}])+group(824,[{label:'同步到 Apple TV',on:true,n:3}]))
add('oixcloud','tailscale','添加并授权 Tailscale 网络','设置 → Tailscale → 添加网络',[
 ['设置网络与设备名称','名称用于识别本网络和这台设备'],['保留交互式登录','点保存并登录后，在授权页批准此设备'],['核对自动路由与出口','自动路由处理设备和获批子网；互联网出口需要单独选择']
],()=>ios('添加网络',{back:'Tailscale',action:'保存'})+group(269,[{label:'网络名称',value:'Tailnet',n:1},{label:'设备名称',value:'My iPhone'},{label:'登录',value:'交互式登录',chev:true}])+group(470,[{label:'自动路由',on:true,n:3}])+group(570,[{label:'出口节点',value:'none'}])+group(674,[{label:'高级',chev:true}])+group(782,[{label:'保存并登录',blue:true,n:2}]))
add('oixcloud','automation','设置脚本触发方式','设置 → 自动化 → 新增脚本',[
 ['核对脚本来源与客户端','选择脚本实际针对的客户端格式'],['按需设置触发器','先手动验证，再开启定时或网络变化触发'],['检查运行记录','保存并运行后，检查最近运行的结果与错误']
],()=>ios('新增脚本',{back:'取消',action:'保存'})+group(267,[{label:'名称',value:'示例任务',n:1},{label:'客户端',value:'Surge',chev:true},{label:'参数',value:'可选'},{label:'超时',value:'10 秒'}])+group(534,[{label:'手动',on:true,n:2},{label:'间隔',on:false},{label:'Cron 定时',on:false},{label:'oixCloud 已启动',on:false},{label:'网络已更改',on:false}],{title:'触发器'})+group(838,[{label:'立即运行',blue:true,n:3}]))
add('oixcloud','requests','查看请求的路由判定','活动 → 请求 → 一条请求',[
 ['先找到目标域名','图中 example.com 为虚构请求'],['核对路由结果','查看该请求使用的路线与判定原因'],['检查匹配规则','修改规则后重新建立连接，再核对规则与出口']
],()=>ios('请求',{back:'请求'})+group(270,[{label:'域名',value:'example.com',n:1},{label:'端口',value:'443'},{label:'协议',value:'HTTPS'},{label:'时间',value:'09:41:00'}],{title:'连接'})+group(536,[{label:'结果',value:'代理',n:2},{label:'路由',value:'香港 · 示例 A'},{label:'原因',value:'规则匹配'},{label:'匹配规则',sub:'DOMAIN-SUFFIX,example.com',n:3}],{title:'判定'}))
add('oixcloud','mitm-generate','首次生成 MITM 证书','设置 → MITM → MITM 证书',[
 ['检查此设备','首次使用且没有证书时显示生成入口'],['点生成证书','生成后才会出现安装信任描述文件等操作'],['继续安装与信任','回到证书页安装描述文件，再到 iOS 的证书信任设置完成信任']
],()=>ios('MITM 证书',{back:'MITM'})+group(287,[{label:'生成证书',blue:true,n:2}],{title:'此设备'})+badge(469,268,1)+T(83,377,'此处的更改仅影响此设备',16,'#85858d')+group(454,[{label:'状态',value:'尚未获取'},{label:'将 PKCS#12 导入账号',blue:true}],{title:'oixCloud'}))

add('flclash','login','登录账户','侧栏 oixCloud → 登录',[
 ['选择凭据方式','支持 Access Token 与邮箱密码'],['填写后登录','示例不含真实账户或令牌'],['继续同步配置','返回账户页，等待配置同步完成']
],()=>{let m=modal('登录',490,424);return material('oixCloud','oixCloud')+m.s+segmented(m.x+28,m.y+82,434,['Access Token','邮箱与密码'],1,true)+mark(m.x+28,m.y+82,434,39,1)+field(m.x+28,m.y+156,434,'邮箱','reader@example.com',{n:2})+field(m.x+28,m.y+239,434,'密码','••••••••')+T(m.x+302,m.y+380,'取消',17,'#885461')+button(m.x+348,m.y+352,107,'登录',3)})
add('flclash','connect','仪表盘启动与接管','仪表盘',[
 ['确认接管方式','桌面可用系统代理或虚拟网卡'],['选择规则模式','节点在代理页的策略组中选择'],['点右下角播放按钮','启动后打开网站，并检查连接记录']
],()=>{let s=material('仪表盘','仪表盘');s+=R(151,235,901,145,'#f5e8ee',25)+T(178,273,'网络速度',18,'#6e555f')+T(183,322,'↓  0 B/s',32,'#483940',500)+T(625,322,'↑  0 B/s',32,'#483940',500)+T(185,353,'下载',15,'#8e7b83')+T(628,353,'上传',15,'#8e7b83');s+=R(151,396,438,110,'#f7edf1',24)+T(176,436,'系统代理',22)+toggle(510,429,true,true)+R(607,396,445,110,'#f7edf1',24)+T(633,436,'虚拟网卡',22)+toggle(972,429,false,true)+badge(577,410,1);s+=R(151,523,438,140,'#f7edf1',24)+T(175,562,'出站模式',21)+segmented(168,585,404,['规则','全局','直连'],0,true)+badge(578,588,2)+R(607,523,445,140,'#f7edf1',24)+T(633,562,'流量统计',21)+T(634,611,'↑ 0 B     ↓ 0 B',25,'#71515d');s+=R(975,695, 60,60,'#efd4df',19)+T(1005,735,'▶',29,'#6b4150',600,'middle')+badge(1040,697,3);return s})
add('flclash','proxies','在策略组中选择节点','侧栏 → 代理',[
 ['展开手动策略组','各组有自己的选择，按需要的组调整'],['点选节点卡片','选中状态用主题色显示'],['验证新连接','延迟是测试值，不代表所有网站或应用可用']
],()=>{let s=material('代理','代理')+R(152,241,899,48,'#f6ebef',14)+T(172,273,'⌕  搜索',18,'#93848b')+T(168,330,'⌄  节点选择',21,'#382b32',600)+T(1030,330,'测速',17,'#8a5260',500,'end')+badge(325,318,1);['香港 · 示例 A','日本 · 示例 B','新加坡 · 示例 C','台湾 · 示例 D'].forEach((n,i)=>{let x=153+i%2*458,y=362+Math.floor(i/2)*132;s+=R(x,y,438,112,i===0?'#efd7e1':'#f5eff2',18,i===0?'#b6778e':'none')+T(x+23,y+38,n,21)+T(x+23,y+82,['28 ms','42 ms','56 ms','49 ms'][i],17,i===0?'#855062':'#88818a');if(i===0)s+=badge(x+421,y+12,2)+check(x+387,y+36,'#8a5260')});return s})
add('flclash','profiles','更新与管理配置','侧栏 → 配置',[
 ['确认当前配置','配置被选中后才会应用'],['从菜单选择操作','更新、编辑、覆写与代理链是不同入口'],['托管配置在账户页同步','普通订阅则更新对应配置；避免直接修改生成内容']
],()=>{let s=material('配置','配置')+R(154,249,896,120,'#f4e2e9',22)+T(180,288,'oixCloud',23,'#493039',600)+T(180,320,'托管配置 · 已选中',16,'#95717e')+T(180,345,'上次更新：刚刚',14,'#a08490')+T(1015,287,'⋮',28,'#6d4c5b')+badge(1037,249,2)+badge(513,265,1)+R(154,391,896,109,'#f6f0f3',22)+T(179,431,'个人订阅（示例）',22)+T(179,466,'上次更新：今天',16,'#92818b');s+=R(782,291,245,314,'#fff8fb',14,'#decbd4');['更新','编辑','覆写','代理链','删除'].forEach((n,i)=>s+=T(804,335+i*54,n,19,n==='删除'?'#b14551':'#54424d'));return s+badge(102,411,3)})
add('flclash','filter','可视化节点筛选','oixCloud → 节点筛选',[
 ['设置线路与地区','每个标签可切换不筛选、仅保留和排除'],['核对保留节点','右侧预览按当前条件更新，搜索仅查找'],['等待自动同步','保存后会刷新账户并同步配置，完成后检查节点']
],()=>{let s=material('节点筛选','oixCloud')+R(153,241,485,462,'#fbf6f8',20,'#e7dce2')+R(657,241,395,462,'#fbf6f8',20,'#e7dce2')+T(175,278,'○ 不筛选   ✓ 仅保留   ⊖ 排除',17,'#796570')+T(177,337,'线路',18)+chips(177,354,['Fusion','GIA','CIA'],0,true)+badge(620,335,1)+T(177,445,'地区',18)+chips(177,463,['香港','日本','新加坡'],[0,1],true)+field(176,541,438,'名称包含','香港|日本')+field(176,625,438,'名称排除','测试|维护');s+=T(681,282,'节点预览',21)+T(681,319,'保留 2 / 12 个节点',16,'#8a5260')+badge(1032,275,2)+R(680,344,347,41,'#f0e7ec',10)+T(696,371,'⌕ 搜索节点',17,'#a08c95');['香港 · 示例 A','日本 · 示例 B'].forEach((n,i)=>s+=T(684,437+i*62,n,20)+check(988,430+i*62,'#8a5260'));return s+T(177,745,'恢复默认',17,'#8a5260')+button(916,718,134,'保存',3)})
add('flclash','chains','编辑代理链顺序','配置菜单 → 代理链',[
 ['添加至少两个节点','首个节点是入口，最后一个节点是出口'],['检查转发顺序','每个成员先单独验证连通'],['保存后选出口节点','这个功能不会另建一个可选的代理链节点']
],()=>material('代理链','配置')+T(166,267,'按转发顺序连接节点',18,'#89717d')+mrow(293,'香港 · 示例 A',{sub:'入口',value:'1',n:1})+mrow(378,'日本 · 示例 B',{sub:'出口',value:'2',n:2})+button(169,491,166,'添加节点')+button(911,699,135,'保存',3))
add('flclash','override','选择配置覆写模式','配置菜单 → 覆写',[
 ['按需求选择模式','标准、脚本、自定义、叠加保留内容的方式不同'],['叠加保留订阅规则','在订阅基础上添加个人分流与策略组'],['检查并保存','编辑完成检查配置，规则模式下验证实际请求']
],()=>material('覆写','配置')+mhead(268,'覆写模式')+segmented(162,292,878,['标准','脚本','自定义','叠加'],3,true)+badge(1046,294,1)+R(162,362,878,94,'#f4e7ed',17)+T(182,400,'保留订阅规则和策略组，再叠加个人设置',21,'#654554')+T(182,430,'个人规则优先于订阅规则，已有的附加规则保持优先',17,'#876675')+badge(1040,365,2)+mrow(487,'编辑自定义',{value:'编辑'})+mrow(557,'附加规则',{value:'添加'})+button(873,693,165,'检查配置',3))
add('flclash','rules','添加域名后缀规则','配置覆写 → 编辑自定义 → 规则',[
 ['使用表单编辑','常见规则在表单中设置，复杂表达式可编辑规则文本'],['输入匹配内容与目标','目标必须存在于当前配置；示例为已有的工作组'],['保存并检查配置','保持规则模式，新建请求验证命中']
],()=>{let m=modal('添加规则',555,455);return material('编辑自定义','配置')+m.s+segmented(m.x+27,m.y+79,500,['表单','规则文本'],0,true)+badge(m.x+531,m.y+82,1)+field(m.x+27,m.y+149,500,'规则类型','DOMAIN-SUFFIX  域名后缀')+field(m.x+27,m.y+230,500,'内容','example.com',{n:2})+field(m.x+27,m.y+311,500,'规则目标','工作')+T(m.x+360,m.y+423,'取消',17,'#8a5260')+button(m.x+409,m.y+395,117,'保存',3)})
add('flclash','capture','设置桌面接管方式','工具 → 进阶配置 → 网络',[
 ['系统代理','接管遵循系统 HTTP 代理设置的应用'],['虚拟网卡','需要平台支持与相应权限，启用后确认实际流量'],['按问题调整设置','排除域名只在系统代理开启时生效，避免同时修改多项']
],()=>material('网络','工具')+mhead(263,'系统')+mrow(284,'虚拟网卡',{sub:'仅在管理员模式生效',on:false,n:2})+mrow(364,'系统代理',{sub:'设置系统代理',on:true,n:1})+mrow(444,'自动设置系统DNS',{on:false})+mhead(553,'选项')+mrow(570,'栈模式',{value:'Mixed'})+mrow(638,'排除域名',{sub:'仅在系统代理启用时生效',value:'编辑',n:3}))
add('flclash','dns','配置 DNS 覆写','工具 → 进阶配置 → DNS',[
 ['先看覆写开关','不开启覆写时，配置文件中的 DNS 设置仍可能生效'],['一次修改一项','图中数值用于演示页面，不是推荐配置'],['应用后复查请求','使用同一个域名对比结果，无改善时恢复原值']
],()=>material('DNS','工具')+mrow(248,'覆写DNS',{sub:'开启后将覆盖配置中的DNS选项',on:true,n:1})+mrow(331,'状态',{sub:'关闭后将使用系统DNS',on:true})+mrow(414,'DNS模式',{value:'fake-ip',n:2})+mrow(484,'域名服务器',{sub:'用于解析域名',value:'编辑'})+mrow(564,'代理域名服务器',{sub:'用于解析代理节点的域名',value:'编辑'})+mrow(644,'遵守规则',{sub:'DNS连接跟随规则',on:false,n:3}))
add('flclash','backup','备份与恢复入口','工具 → 备份与恢复',[
 ['先备份本机数据','重大调整或恢复另一份备份前保留当前状态'],['核对恢复策略','兼容会更新相同记录；覆盖会移除备份中不存在的配置'],['再选择恢复范围','点击恢复后还需选择仅配置或所有数据']
],()=>material('备份与恢复','工具')+mhead(264,'远程')+mrow(282,'请绑定WebDAV',{value:'绑定'})+mhead(386,'本地')+mrow(403,'备份',{sub:'备份数据到本地',n:1})+mrow(485,'恢复',{sub:'通过文件恢复数据',n:3})+mhead(609,'选项')+mrow(629,'恢复策略',{value:'兼容',n:2}))
add('flclash','restore','选择恢复范围','备份与恢复 → 恢复',[
 ['仅恢复配置文件','恢复配置、脚本与规则，保留应用设置'],['恢复所有数据','会同时应用备份中的应用与网络设置'],['策略仍然生效','恢复范围和兼容／覆盖策略是两个独立选择']
],()=>{let m=modal('恢复',544,230);return material('备份与恢复','工具')+m.s+T(m.x+34,m.y+110,'仅恢复配置文件',21)+badge(m.x+511,m.y+105,1)+L(m.x+25,m.y+140,m.x+517,m.y+140)+T(m.x+34,m.y+189,'恢复所有数据',21)+badge(m.x+511,m.y+184,2)})
add('flclash','webdav','绑定 WebDAV 备份位置','备份与恢复 → 绑定',[
 ['使用完整服务地址','填写你自己的 WebDAV 服务地址，优先 HTTPS'],['填写账户凭据','密码不写入导出的便携备份，新设备需要重填'],['保存后做一次手动备份','确认远程记录出现，再设置保留数量']
],()=>{let m=modal('WebDAV配置',568,439);return material('备份与恢复','工具')+m.s+field(m.x+28,m.y+95,512,'地址','https://dav.example.com/backup/',{n:1})+field(m.x+28,m.y+180,512,'账号','reader',{n:2})+field(m.x+28,m.y+265,512,'密码','••••••••')+T(m.x+367,m.y+404,'取消',17,'#8a5260')+button(m.x+425,m.y+376,112,'保存',3)})
add('flclash','tailscale','授权 Tailscale 网络','工具 → Tailscale → 添加网络',[
 ['填写网络名称','每台设备需要单独授权'],['使用交互式登录','保存并登录后，完成浏览器中的授权'],['检查自动路由与出口','只选需要的出口节点，Tailnet 服务端权限仍需满足']
],()=>material('添加网络','工具')+field(171,258,864,'网络名称','Tailnet',{n:1})+field(171,348,864,'设备名称','My Desktop')+mrow(429,'登录方式',{value:'交互式登录',n:2})+mrow(496,'自动路由',{on:true,n:3})+mrow(563,'出口节点',{value:''})+mrow(625,'高级',{value:'展开'})+button(831,716,205,'保存并登录'))
add('flclash','android','选择进入 VPN 的应用','Android → 工具 → 应用访问控制',[
 ['先开启访问控制','白名单和黑名单的含义相反'],['按模式选择应用','白名单只让选中应用进入 VPN，黑名单排除选中应用'],['保存并重新验证','用目标应用新建连接，检查连接记录']
],()=>R(42,127,454,810,'#fffbfc',32,'#e4d8df')+T(69,164,'9:41',17,'#332b2e',600)+T(75,217,'‹',28,'#875366')+T(114,217,'访问控制设置',26)+T(464,217,'保存',18,'#875366',600,'end')+badge(480,196,3)+mrow(250,'应用访问控制',{on:true,n:1,x:66,w:406})+segmented(73,330,394,['白名单模式','黑名单模式'],0,true)+badge(467,330,2)+T(82,405,'只允许选中应用进入VPN',17,'#89717c')+R(72,435,399,44,'#f4e9ef',25)+T(91,464,'⌕ 搜索',18,'#a58c99')+group(511,[{label:'示例浏览器',value:'☑'},{label:'示例工作应用',value:'☑'},{label:'示例播放器',value:'□'}])+R(213,923,112,5,'#493f45',3))
add('flclash','diagnostics','运行网络自检','Windows / macOS → 工具 → 网络自检',[
 ['先保持当前配置','使用出现问题时的配置与网络运行自检'],['按检查项看结果','区分配置、内核、本地代理、系统接管与目标访问'],['结果是当次抽查','不代表所有节点、UDP、IPv6 或全部应用都通过']
],()=>material('网络自检','工具')+R(158,241,887,73,'#f5e5ed',19)+T(180,272,'检查当前连接并进行少量抽查',20,'#74525f')+T(180,299,'结果仅用于当前网络与本次检查',15,'#8e727f')+badge(1034,244,3)+['当前配置','内核响应','本地代理','系统代理','DNS','HTTPS 访问'].map((v,i)=>mrow(330+i*57,v,{value:i===4?'需要关注':'通过',n:i===4?2:undefined})).join('')+button(877,707,167,'开始自检',1))


function helperDesktop(){return R(30,130,1060,653,'#dfe7f3',15)+R(30,130,1060,34,'#f5f6f9',14)+T(53,153,'●   Finder   文件   编辑   显示   前往   窗口',15,'#384052')+T(1049,153,'☁    09:41',15,'#384052',500,'end')}
function helperMenu(x,y,w,items){let s=R(x,y,w,items.length*37+18,'#fbfbfdee',10,'#c8ced8');items.forEach((item,i)=>{let yy=y+10+i*37;const active=item.active;s+=active?R(x+5,yy,w-10,34,'#2676df',6):'';s+=T(x+18,yy+24,item.label,17,active?'#fff':item.muted?'#89909b':'#303946');if(item.sub)s+=chevron(x+w-24,yy+13,active?'#fff':'#6e7885');if(item.n)s+=badge(x+w-8,yy,item.n)});return s}
add('helper','surge','从菜单栏接入 Surge','菜单栏 oixCloud → 连接设置',[
 ['先完成账户登录','等待账户与节点获取完成，再打开连接设置'],['核对接入模式','多端口模式在 Surge 选节点，单端口模式在 Helper 选'],['接入并核对配置','点接入 Surge 后，确认 Surge 已切换到生成的配置']
],()=>helperDesktop()+helperMenu(85,187,242,[{label:'oixCloud',muted:true},{label:'账户',sub:true,n:1},{label:'节点',sub:true},{label:'连接设置',sub:true,active:true},{label:'工具',sub:true}])+helperMenu(333,303,672,[{label:'SOCKS5 + HTTP  127.0.0.1:7100',muted:true},{label:'开机启动'},{label:'本地端口…'},{label:'允许局域网访问'},{label:'局域网访问鉴权…（未开启）'},{label:'接入模式…（当前：本地多端口映射）',n:2},{label:'节点筛选 · 智能优选'},{label:'精简规则'},{label:'复制本机节点列表 URL'},{label:'接入 Surge',active:true,n:3},{label:'导出 OpenSurge 配置'}]))
add('helper','lan','设置本地端口与局域网访问','菜单栏 oixCloud → 连接设置',[
 ['先核对端口用途','配置服务和代理是不同端口，填写时不要混用'],['先设置鉴权','局域网访问使用专用用户名与密码，不是账户登录密码'],['再开启局域网访问','其他设备填写这台电脑的局域网 IP，修改后更新配置']
],()=>helperDesktop()+helperMenu(155,219,815,[{label:'SOCKS5 + HTTP  127.0.0.1:7100',muted:true},{label:'开机启动'},{label:'本地端口…',n:1},{label:'允许局域网访问',n:3},{label:'局域网访问鉴权…（已开启）',active:true,n:2},{label:'接入模式…（当前：单端口）'},{label:'节点筛选 · 智能优选'},{label:'精简规则'},{label:'复制本机节点列表 URL'},{label:'接入 Surge'},{label:'导出 OpenSurge 配置'}]))

// Merlin software-center layout, checked against the oixClash 0.0.3 page.
function merlin(section) {
 let s=R(30,130,1060,653,'#20333e',15)+R(220,149,849,611,'#4d595d',4)
 s+=T(48,174,'ASUSWRT',20,'#d5e4e8',700)+T(241,181,'软件中心 - oixClash',24,'#fff',600)
 ;['网络地图','AiMesh','访客网络','流量分析','软件中心','无线网络','内部网络','外部网络','IPv6','系统管理'].forEach((n,i)=>{const y=205+i*51;s+=R(43,y,164,46,n==='软件中心'?'#387aa0':'#354247',3)+T(60,y+29,n,17,'#f2f6f8',n==='软件中心'?600:400)})
 s+=T(243,216,section,17,'#dbe7eb')
 return s
}
const oxHead=(y,label)=>R(239,y,811,33,'#73838a',0)+T(252,y+23,label,17,'#fff',600)
const oxRow=(y,label,h=53)=>R(239,y,811,h,'#465960',0,'#293b44')+R(239,y,164,h,'#2e3b41',0,'#293b44')+T(252,y+32,label,17,'#f4f6f8')
const oxButton=(x,y,w,label,n)=>R(x,y,w,36,'#17272e',7,'#637980')+T(x+w/2,y+24,label,16,'#fff',600,'middle')+(n?mark(x,y,w,36,n):'')
const oxCheck=(x,y,on=true)=>R(x,y,17,17,on?'#2ba5d0':'#fff',2)+(on?`<path d="M${x+3} ${y+9}l4 4 7-10" fill="none" stroke="#fff" stroke-width="2"/>`:'')

add('oixclash','login','登录 oixCloud 账号','软件中心 → oixClash → oixCloud 账号',[
 ['选择登录方式','可用登录令牌，也可选择邮箱和密码'],['填写账户凭据','令牌从网站或 App 复制，不是订阅地址'],['登录后再启用','确认套餐信息，再打开开关并保存']
],()=>merlin('登录后，主局域网设备使用 oixCloud 的节点和分流规则')+oxHead(239,'oixCloud 账号')+oxRow(272,'登录方式')+circ(425,298,8,'#fff')+circ(425,298,4,'#169ccb')+T(443,304,'登录令牌',18,'#fff')+circ(592,298,8,'#fff')+T(610,304,'邮箱和密码',18,'#fff')+mark(415,282,335,32,1)+oxRow(325,'登录令牌',81)+R(420,344,600,41,'#263941',1,'#8ba1a9')+T(434,371,'在 oixCloud 网站或 App 中复制',18,'#aebfc7')+badge(1018,343,2)+oxRow(406,'',53)+oxButton(420,414,105,'登录',3)+oxHead(482,'运行')+oxRow(515,'开启')+toggle(421,529,false)+T(503,547,'插件版本：0.0.3',17,'#e2ecf0')+T(729,547,'检查更新',16,'#41b6d5')+oxRow(568,'运行状态')+T(421,600,'未运行',18,'#ffce55')+oxButton(445,675,150,'保存并应用')+T(242,737,'示例为未登录状态，令牌输入框尚未填写',16,'#c8d7dd'))

add('oixclash','running','开启代理与低内存模式','软件中心 → oixClash → 运行',[
 ['打开开关并保存','等运行状态显示运行中，再验证局域网连接'],['按需开启 UDP','游戏或语音需 UDP；是否生效以状态为准'],['小内存设备','勾选低内存模式后保存，检查 JFFS 提示']
],()=>merlin('已登录：reader@example.com  ·  示例套餐')+oxHead(239,'运行')+oxRow(272,'开启')+toggle(421,284,true)+T(502,304,'插件版本：0.0.3',17,'#e2ecf0')+T(733,304,'检查更新',16,'#41b6d5')+oxButton(923,280,112,'查看日志')+badge(474,282,1)+oxRow(325,'运行状态')+T(421,357,'运行中  ·  内核 alpha-oix-示例  ·  UDP 已转发',17,'#b7e46e')+oxRow(378,'节点切换')+oxButton(421,386,150,'打开控制面板')+oxRow(431,'UDP 转发')+oxCheck(421,450)+T(450,462,'游戏、语音通话等 UDP 流量也走代理',17,'#fff')+badge(1017,443,2)+oxRow(484,'屏蔽 QUIC')+oxCheck(421,503,false)+T(450,515,'未开启 UDP 转发时建议开启',17,'#fff')+oxRow(537,'低内存模式',110)+oxCheck(421,557)+T(450,570,'适合 256MB 内存的路由器',17,'#fff')+T(421,599,'内核放在 JFFS 上运行，使用精简 GeoIP 库',16,'#dce6eb')+T(421,628,'本机内存 256MB  ·  内核在 JFFS 上运行',16,'#b7e46e')+badge(1017,549,3)+oxButton(422,681,150,'保存并应用')+oxButton(596,681,133,'更新节点')+oxButton(753,681,107,'自检'))

add('oixclash','rules','读取并保存账号规则','软件中心 → oixClash → 自定义规则',[
 ['先读取面板规则','读取会替换未保存的草稿，先保留需要的内容'],['每行一条规则','策略使用 DIRECT、REJECT 或已有策略组'],['保存并检查结果','保存影响同账号其他客户端，再验证新连接']
],()=>merlin('账号规则与网站共用，排在面板默认规则之前')+oxHead(239,'自定义规则')+oxRow(272,'账号规则',385)+R(420,289,609,180,'#22343d',0,'#8fa3ad')+T(435,324,'DOMAIN-SUFFIX,example.com,DIRECT',19,'#e6edf2')+T(435,360,'DOMAIN,ads.example.com,REJECT',19,'#e6edf2')+badge(1018,286,2)+T(420,500,'每行一条，无需 rules: 或行首短横线',16,'#e2ecf0')+T(420,531,'留空并保存可清除面板账号规则',16,'#ffce55')+T(420,562,'管理面板账号规则',17,'#41b6d5')+oxButton(420,589,166,'读取面板规则',1)+oxButton(613,589,211,'保存到面板并更新',3)+T(421,648,'已读取面板规则，可编辑后保存',16,'#b7e46e')+T(242,705,'示例域名不对应真实服务；请按实际需求填写',16,'#c8d7dd')+T(242,737,'保存成功后，检查日志并在控制面板核对规则命中',16,'#c8d7dd'))


for(const sc of scenes){const phone=sc.client==='oixcloud'||sc.id==='android';const h=phone?982:975;let s=`<svg xmlns="http://www.w3.org/2000/svg" width="1120" height="${h}" viewBox="0 0 1120 ${h}" role="img" aria-labelledby="title desc"><title id="title">${E((sc.client==='oixcloud'?'oixCloud':sc.client==='helper'?'oixCloud Helper':sc.client==='oixclash'?'oixClash':'FlClash for oixCloud')+' · '+sc.title)}</title><desc id="desc">根据当前客户端页面结构模拟渲染；中文界面与虚构数据；界面细节随版本、平台与主题变化</desc><g font-family="-apple-system,BlinkMacSystemFont,'PingFang SC','Segoe UI',Arial,sans-serif">`
 s+=R(0,0,1120,h,'#f3f5f8',0)+T(34,38,sc.client==='oixcloud'?'oixCloud · iPhone / iPad':sc.client==='helper'?'oixCloud Helper · macOS':sc.client==='oixclash'?'oixClash · Merlin 路由器':'FlClash for oixCloud'+(sc.id==='android'?' · Android':' · 桌面端'),18,'#697386',600)+T(1085,38,'模拟渲染 · 虚构数据',16,'#788392',500,'end')+T(34,87,sc.title,31,'#263245',700)+sc.draw()
 if(phone){s+=T(552,175,'操作位置',17,'#748092',600)+lines(552,214,sc.route,21,'#233955',24);sc.notes.forEach(([title,body],i)=>{let y=336+i*176;s+=badge(568,y,i+1)+T(598,y+7,title,24,'#273952',600)+lines(552,y+46,body,20,'#64748b',24)})}
 else{sc.notes.forEach(([title,body],i)=>{let x=42+i*365;s+=badge(x+12,829,i+1)+T(x+38,835,title,21,'#273952',600)+lines(x,868,body,17,'#64748b',19)});s+=T(34,966,'入口：'+sc.route,14,'#7c8797')}
 s+='</g></svg>\n';writeFileSync(path.join(out,`${sc.client}-${sc.id}-zh.svg`),s)
}
console.log(`Rendered ${scenes.length} Chinese client illustrations`)
