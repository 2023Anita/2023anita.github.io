import {rows} from './i18n-data.js';
import {stories} from './i18n-stories.js';
const normalize=s=>s.replace(/\s+/g,' ').trim();
const exact=new Map(),prefix=[];
for(const line of (rows+'\n'+stories).split('\n')){
 const [en,zh,ja]=line.split('|');if(!en||!zh||!ja)continue;
 const entry={en,zh,ja};if(en.startsWith('~'))prefix.push({...entry,en:normalize(en.slice(1)).toLowerCase()});else exact.set(normalize(en).toLowerCase(),entry);
}
prefix.sort((a,b)=>b.en.length-a.en.length);
let lang;
try{lang=new URLSearchParams(location.search).get('lang')||localStorage.getItem('earth-language')||localStorage.getItem('preferred-language')||'en';}catch{lang='en';}
if(!['zh','ja','en'].includes(lang))lang='en';
const records=new WeakMap(),attrs=new WeakMap(),headings=new WeakMap();
const skip='script,style,svg,canvas,code,.earth-language,.portfolio-return,.mobile-context';
const unknown=new Set();
function translate(source){
 const text=normalize(source),key=text.toLowerCase();
 if(lang==='en'||!/[a-z]/i.test(text))return source;
 const found=exact.get(key)||exact.get(key.replace(/[.↗↑↓]+$/,'').trim())||prefix.find(p=>key.startsWith(p.en));
 if(found)return found[lang];
 // 数字和单位由数据生成，不将它们写成固定值。
 const patterns=[
  [/^(▶|Ⅱ|❚❚)?\s*(Play|Pause)$/,(_,icon='',word)=>`${icon} ${lang==='zh'?(word==='Play'?'播放':'暂停'):(word==='Play'?'再生':'一時停止')}`],
  [/^(Story & controls|Show controls|Clear view)\s*([↑↓])?$/i,(_,word,arrow='')=>`${exact.get(word.toLowerCase())?.[lang]||word} ${arrow}`],
  [/^([\d,.~–\-]+)\s*(Ga|Ma)$/i,(_,n,u)=>`${n} ${u.toLowerCase()==='ga'?(lang==='zh'?'十亿年前':'十億年前'):(lang==='zh'?'百万年前':'百万年前')}`],
  [/^(~?[\d,–—]+) YEARS AGO$/i,(_,n)=>`${n}${lang==='zh'?' 年前':'年前'}`],
  [/^([~\d,–—-]+) BCE(?:–([\d,–—-]+) CE)?$/i,(_,a,b)=>lang==='zh'?`公元前 ${a}${b?'—公元 '+b:''}`:`紀元前${a}${b?'～紀元'+b:''}`],
  [/^([~\d,–—-]+) CE$/i,(_,n)=>lang==='zh'?`公元 ${n}`:`西暦${n}`],
  [/^Through (\d+)$/i,(_,n)=>lang==='zh'?`截至 ${n} 年`:`${n}年まで`],
  [/^(\d+) matches in this time period$/i,(_,n)=>lang==='zh'?`该时段找到 ${n} 个结果`:`この期間に${n}件の一致`],
  [/^Motion · (.+)$/i,(_,n)=>lang==='zh'?`运动速度 · ${n}`:`移動速度・${n}`],
  [/^PREPARING ORBIT PATHS · (.+)$/i,(_,n)=>lang==='zh'?`正在计算轨道 · ${n}`:`軌道を計算中・${n}`],
  [/^CATALOGED PAYLOADS · (.+)$/i,(_,n)=>`${lang==='zh'?'已编目有效载荷':'登録ペイロード'} · ${translate(n)}`],
  [/^(\d+) persistent calculated paths · select any point$/i,(_,n)=>lang==='zh'?`${n} 条已计算轨道 · 点击任意光点`:`${n}本の計算済み軌道・任意の点を選択`],
  [/^(.+?) · Snapshot replay · bright: calculated \/ muted: schematic$/i,(_,n)=>lang==='zh'?`${n} · 快照回放 · 亮色：计算轨道／暗色：示意`:`${n}・スナップショット再生・明：計算／暗：模式表示`],
  [/^CHAPTER (\d+)(.*)$/i,(_,n,rest)=>`${lang==='zh'?'第':'第'} ${n} ${lang==='zh'?'章':'章'}${rest}`],
  [/^(?:Timeline playback speed|Playback speed): (.+?) times$/i,(_,n)=>lang==='zh'?`播放速度：${n} 倍`:`再生速度：${n}倍`],
  [/^([\d,]+) plotted objects$/i,(_,n)=>lang==='zh'?`${n} 个已绘制目标`:`${n}個の表示物体`],
  [/^(\d+) persistent (calculated|illustrative) paths(?: · select any point)?$/i,(_,n,kind)=>lang==='zh'?`${n} 条${kind==='calculated'?'计算':'示意'}轨道`:`${n}本の${kind==='calculated'?'計算':'模式'}軌道`],
  [/^(.+?), (.+? (?:Ga|Ma)|Today)$/i,(_,a,b)=>translate(a)+'，'+translate(b)],
  [/^(.+?)\. Depth ruler is schematic\.$/i,(_,coordinates)=>coordinates+(lang==='zh'?'。深度标尺为示意。':'。深さの目盛りは模式的です。')],
  [/^([\d,.]+) km deep$/i,(_,n)=>lang==='zh'?`深度 ${n} 千米`:`深さ${n} km`],
  [/^([\d,]+) years of becoming$/i,(_,n)=>lang==='zh'?`${n} 年的演变历程`:`${n}年にわたる歩み`],
 ];
 for(const [pattern,fn]of patterns)if(pattern.test(text))return text.replace(pattern,fn);
 if(/^(?:\d{1,2}\s+[A-Z]{3,9}\s+\d{4}|[A-Z][a-z]{2}\s+\d{1,2},\s+\d{4}(?:,.*)?)$/.test(text)){
  const value=Date.parse(text+' UTC');if(Number.isFinite(value))return new Intl.DateTimeFormat(lang==='zh'?'zh-CN':'ja-JP',{timeZone:'UTC',dateStyle:'medium',...(text.includes(':')?{timeStyle:'short'}:{})}).format(value)+(text.includes(':')?' UTC':'');
 }
 if(text.includes(' · ')){const i=text.lastIndexOf(' · ');return translate(text.slice(0,i))+' · '+translate(text.slice(i+3));}
 if(/^\d+\. /.test(text)){const m=text.match(/^(\d+\. )(.*)$/);return m[1]+translate(m[2]);}
 if(text.includes(': ')&&text.length<150){const i=text.indexOf(': ');return translate(text.slice(0,i))+'：'+translate(text.slice(i+2));}
 if(/[A-Za-z]{3}\s+[A-Za-z]{3}/.test(text))unknown.add(text);
 return source;
}
function nodeText(node){
 const current=node.nodeValue;if(!current?.trim())return;
 let rec=records.get(node);if(!rec||current!==rec.output)rec={source:current};
 const output=translate(rec.source);rec.output=output;records.set(node,rec);if(current!==output)node.nodeValue=output;
}
function mobileLabel(el){
 const text=translate(el.textContent);if(el.dataset.localizedContext!==text)el.dataset.localizedContext=text;
 if(el.getAttribute('aria-label')!==text)el.setAttribute('aria-label',text);
 el.setAttribute('role','status');el.setAttribute('aria-live','off');
}
function scan(root){
 const context=(root.nodeType===3?root.parentElement:root)?.closest?.('.mobile-context');if(context){mobileLabel(context);return;}
 const heading=(root.nodeType===3?root.parentElement:root)?.closest?.('h1,h2,h3');if(heading)root=heading;
 if(root.nodeType===3){if(!root.parentElement?.closest(skip))nodeText(root);return;}
 if(root.nodeType!==1||root.closest(skip))return;
 for(const el of root.querySelectorAll('.mobile-context'))mobileLabel(el);
 // 标题中的换行是排版，不应拆断一句译文。
 for(const h of [root,...root.querySelectorAll('h1,h2,h3')].filter(e=>e.matches('h1,h2,h3'))){
  let rec=headings.get(h);if(!rec||h.innerHTML!==rec.output){const temp=document.createElement('div');temp.innerHTML=h.innerHTML.replace(/<br\s*\/?>/gi,' ').replace(/<\/span>/gi,'</span> ');rec={html:h.innerHTML,text:temp.textContent};}
  const translated=translate(rec.text);
  if(lang==='en'){if(h.innerHTML!==rec.html)h.innerHTML=rec.html;}
  else if(translated!==rec.text&&h.textContent!==translated)h.textContent=translated;
  rec.output=h.innerHTML;headings.set(h,rec);
 }
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;
 while(n=walker.nextNode())if(!n.parentElement?.closest(skip))nodeText(n);
 for(const el of [root,...root.querySelectorAll('[title],[aria-label],[placeholder]')]){
  if(el.closest('script,style,code,.earth-language,.portfolio-return,.mobile-context'))continue;
  const cache=attrs.get(el)||{};
  for(const name of ['title','aria-label','placeholder']){
   const value=el.getAttribute(name);if(!value)continue;
   const rec=cache[name]?.output===value?cache[name]:{source:value};
   rec.output=translate(rec.source);cache[name]=rec;if(value!==rec.output)el.setAttribute(name,rec.output);
  }attrs.set(el,cache);
 }
}
const controls=document.createElement('div');controls.className='earth-language';controls.setAttribute('role','group');controls.setAttribute('aria-label','Language / 语言 / 言語');
for(const [code,label]of [['zh','中文'],['en','EN'],['ja','日本語']]){
 const b=document.createElement('button');b.type='button';b.textContent=label;b.dataset.lang=code;b.onclick=()=>setLanguage(code);controls.append(b);
}document.body.append(controls);
function setLanguage(next){
 lang=next;unknown.clear();document.documentElement.lang=lang==='zh'?'zh-CN':lang;
 try{localStorage.setItem('earth-language',lang);}catch{}
 const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState(history.state,'',url);
 for(const b of controls.children)b.setAttribute('aria-pressed',String(b.dataset.lang===lang));
 const back=document.querySelector('.portfolio-return');if(back){const href=new URL(back.href);href.searchParams.set('lang',lang);back.href=href;back.textContent={zh:'← 作品集',en:'← Portfolio',ja:'← 作品集'}[lang];back.setAttribute('aria-label',{zh:'返回个人作品集',en:'Back to portfolio',ja:'ポートフォリオに戻る'}[lang]);}
 scan(document.body);document.title={zh:'地球与生命 — 地球家园的演变',ja:'地球と生命 — 私たちの故郷の歩み',en:'EARTH — The making of home'}[lang];
}
const pending=new Set();let scheduled=false;
new MutationObserver(changes=>{
 for(const c of changes){if(c.type==='childList')for(const n of c.addedNodes)pending.add(n);else pending.add(c.target);}
 if(scheduled)return;scheduled=true;queueMicrotask(()=>{scheduled=false;const nodes=[...pending];pending.clear();for(const n of nodes)if(n.isConnected)scan(n);});
}).observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['aria-label','title','placeholder']});
setLanguage(lang);
window.earthI18n={setLanguage,translate,unknown:()=>[...unknown],language:()=>lang};
