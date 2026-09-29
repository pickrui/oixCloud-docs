import { mkdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

// Schematic interfaces with fictional data, not captured client screenshots.
const out = fileURLToPath(new URL('../docs/public/illustrations/', import.meta.url))
mkdirSync(out, { recursive: true })
const esc = s => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
const rect = (x,y,w,h,fill='#fff',r=14,stroke='none') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`
const text = (x,y,s,size=22,color='#162d39',weight=400) => `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${color}">${esc(s)}</text>`
const lines = (x,y,rows,size=20,color='#526772') => rows.map((s,i)=>text(x,y+i*30,s,size,color)).join('')
const badge = (x,y,n) => `<circle cx="${x}" cy="${y}" r="17" fill="#16765b"/>${text(x-6,y+7,n,21,'#fff',700)}`
const highlight = (x,y,w,h,n) => rect(x,y,w,h,'none',12,'#16765b')+badge(x+w,y,n)
const choices = (x,y,w,labels,selected=0) => labels.map((s,i)=>rect(x+i*w/labels.length,y,w/labels.length-5,42,i===selected?'#d9eee5':'#eef2f3',10)+text(x+i*w/labels.length+12,y+28,s,18,i===selected?'#13543e':'#526772',i===selected?650:400)).join('')
const locale = {
  zh:{mock:'模拟界面 · 示例数据',subtitle:'操作位置与流程示意，具体界面以所用版本为准',home:'首页',dashboard:'仪表盘',proxies:'代理',settings:'设置',requests:'请求',profile:'配置',tools:'工具',rule:'规则',global:'全局',direct:'直连',connect:'连接',start:'启动',connected:'已连接',account:'账户已登录',node:'香港 · 示例 A',jp:'日本 · 示例 B',sg:'新加坡 · 示例 C',mode:'运行模式',selected:'当前选择',policy:'策略组：手动选择',save:'保存',type:'规则类型',suffix:'域名后缀',value:'匹配值',target:'目标策略',check:'保存后重新发起请求',title:{connect:'首次连接',proxies:'选择节点',rules:'为网站指定路线'},notes:{
    connect:[['确认账户与配置',['先完成登录并等待节点加载','普通订阅需先导入并选中配置']],['选择规则模式',['从一个可用节点开始','保持默认设置，先验证连接']],['启动并检查',['允许系统添加 VPN 配置','打开目标网站，再看连接记录']]],
    proxies:[['打开节点选择',['oixCloud：首页点当前出口','桌面客户端：打开「代理」']],['选中可用节点',['手动策略组中选择一个节点','延迟数字只表示示例测试结果']],['重新发起连接',['已建立的连接可能继续使用旧出口','重新访问网站，核对实际出口']]],
    rules:[['选择匹配类型',['用域名后缀匹配 example.com','无需填写 https:// 或网页路径']],['设置目标策略',['选择已有节点或策略组','示例将匹配流量送往「工作」组']],['保存并验证',['保持规则模式','重新访问目标网站，检查命中记录']]]}},

}
for (const [lang,L] of Object.entries(locale)) {
  for (const client of ['oixcloud','flclash']) {
    for (const scene of ['connect','proxies','rules']) {
      const mobile = client==='oixcloud'
      const brand = mobile?'oixCloud':'FlClash for oixCloud'
      const x = mobile?132:36, y=168, w=mobile?448:708, h=570
      let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" role="img" aria-labelledby="title desc"><title id="title">${esc(brand+' · '+L.title[scene])}</title><desc id="desc">${esc(L.subtitle)}</desc><g font-family="-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans SC',Arial,sans-serif">`
      svg+=rect(0,0,1200,800,'#f2f6f5',24)+text(38,43,brand,23,'#526772',600)+text(38,102,L.title[scene],40,'#162d39',750)+text(38,136,L.subtitle,20,'#526772')
      svg+=text(795,44,L.mock,18,'#526772',600)
      svg+=rect(x,y,w,h,'#fff',mobile?30:16,'#cfdbd7')+rect(x+1,y+1,w-2,62,'#e8eeeb',mobile?29:15)
      const page=scene==='connect'?(mobile?L.home:L.dashboard):scene==='proxies'?L.proxies:(lang==='zh'?'添加规则':'Add rule')
      svg+=text(x+25,y+40,page,25,'#162d39',700)
      let cx=x+24,cw=w-48
      if(!mobile){
        svg+=rect(x+14,y+78,133,h-95,'#f3f6f4',12)
        ;[L.dashboard,L.proxies,L.profile,L.tools,L.settings].forEach((label,i)=>{
          const active=(scene==='connect'&&i===0)||(scene==='proxies'&&i===1)||(scene==='rules'&&i===3)
          svg+=rect(x+22,y+94+i*68,117,48,active?'#d9eee5':'#f3f6f4',10)+text(x+32,y+125+i*68,label,18,active?'#13543e':'#526772',active?650:400)
        })
        cx=x+169;cw=w-192
      }
      const cy=y+88
      if(scene==='connect'){
        svg+=rect(cx,cy,cw,65,'#f3f6f4')+text(cx+18,cy+29,L.account,20,'#16765b',650)+text(cx+18,cy+53,mobile?'oixCloud':(lang==='zh'?'托管配置已应用':'Managed profile selected'),18,'#526772')+highlight(cx-3,cy-3,cw+6,71,1)
        svg+=text(cx,cy+110,L.mode,19,'#526772')+choices(cx,cy+124,cw,[L.rule,L.global,L.direct])+highlight(cx-3,cy+121,cw+6,48,2)
        svg+=text(cx,cy+215,L.selected,19,'#526772')+rect(cx,cy+229,cw,64,'#f3f6f4')+text(cx+16,cy+270,L.node,20,'#162d39',650)
        svg+=rect(cx,cy+324,cw,62,'#16765b',31)+text(cx+cw/2-38,cy+364,mobile?L.connect:L.start,24,'#fff',650)+badge(cx+cw,cy+324,3)
        svg+=text(cx+10,cy+438,lang==='zh'?'示例：准备连接':'Example: ready to connect',19,'#526772')
      } else if(scene==='proxies'){
        svg+=text(cx,cy+25,mobile?(lang==='zh'?'选择出口':'Select an exit'):L.policy,20,'#526772')+highlight(cx-3,cy-5,cw+6,47,1)
        ;[L.node,L.jp,L.sg].forEach((node,i)=>{
          const top=cy+65+i*103
          svg+=rect(cx,top,cw,87,i===0?'#e0f0e7':'#f3f6f4')+text(cx+18,top+33,node,20,'#162d39',650)+text(cx+18,top+65,[lang==='zh'?'已选中 · 示例 28 ms':'Selected · example 28 ms','42 ms','56 ms'][i],18,'#526772')
          if(i===0)svg+=highlight(cx-3,top-3,cw+6,93,2)
        })
        svg+=rect(cx,cy+391,cw,62,'#e8eeeb')+text(cx+14,cy+431,lang==='zh'?'新连接 → 所选节点':'New connection → selected node',18,'#13543e',600)+badge(cx+cw,cy+391,3)
      } else {
        const work=lang==='zh'?'工作':'Work'
        ;[[L.type,L.suffix],[L.value,'example.com'],[L.target,work]].forEach(([label,value],i)=>{
          const top=cy+i*111
          svg+=text(cx,top+20,label,19,'#526772')+rect(cx,top+34,cw,58,'#f3f6f4')+text(cx+16,top+71,value,22,'#162d39',600)
          if(i===0||i===2)svg+=highlight(cx-3,top+31,cw+6,64,i===0?1:2)
        })
        svg+=rect(cx,cy+356,cw,60,'#16765b',14)+text(cx+cw/2-27,cy+395,L.save,23,'#fff',650)+badge(cx+cw,cy+356,3)+text(cx+5,cy+451,L.check,19,'#526772')
      }
      const notes = L.notes[scene].map(([title,body])=>[title,[...body]])
      if(scene==='proxies') notes[0][1]=mobile?(lang==='zh'?['在首页点当前出口','进入节点或策略组选择列表']:['Tap the current exit on Home','Open the node or policy selection list']):(lang==='zh'?['进入「代理」','找到需要调整的手动策略组']:['Open Proxies','Find the manual group to change'])
      if(scene==='proxies' && mobile) notes[1][1][0]=lang==='zh'?'在出口列表选择一个节点':'Choose a node from the exit list'
      if(scene==='connect' && mobile) notes[0][1][1]='自有节点可从「代理」导入'
      if(scene==='connect' && !mobile) notes[2][1][0]=lang==='zh'?'按平台允许必要的网络权限':'Allow network permissions for your platform'
      notes.forEach(([title,body],i)=>{
        const top=205+i*167
        svg+=badge(801,top,i+1)+text(834,top+8,title,23,'#162d39',700)+lines(782,top+48,body,18)
      })
      svg+='</g></svg>\n'
      writeFileSync(path.join(out,`${client}-${scene}-${lang}.svg`),svg)
    }
  }
}
console.log('Rendered 6 Chinese guide illustrations')
