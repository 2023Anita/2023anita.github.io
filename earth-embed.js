// 仅在打开地球页时加载同源 3D 模块，离开时暂停渲染与播放。
(() => {
  const frame = document.getElementById('earth-frame');
  const section = document.getElementById('system');
  const names = {zh:'地球与生命', en:'Earth & Life', ja:'地球と生命'};
  const language = () => document.documentElement.lang.startsWith('zh') ? 'zh' : document.documentElement.lang.startsWith('ja') ? 'ja' : 'en';
  Object.entries(names).forEach(([lang, name]) => { content[lang].nav.system = name; });
  function sync() {
    const lang = language();
    document.querySelector('[data-i18n="nav.system"]').textContent = names[lang];
    frame.title = names[lang];
    const active = section.classList.contains('active');
    if (active && !frame.hasAttribute('src')) frame.src = `${frame.dataset.src}?lang=${lang}&v=20260909`;
    if (frame.hasAttribute('src')) {
      frame.contentWindow.postMessage({type:'earth-language', lang}, location.origin);
      frame.contentWindow.postMessage({type:'earth-active', active}, location.origin);
    }
  }
  new MutationObserver(sync).observe(section, {attributes:true, attributeFilter:['class']});
  new MutationObserver(sync).observe(document.documentElement, {attributes:true, attributeFilter:['lang']});
  frame.addEventListener('load', sync);
  window.addEventListener('message', event => {
    if (event.origin !== location.origin || event.source !== frame.contentWindow) return;
    if (event.data?.type === 'earth-height' && Number.isFinite(event.data.height)) frame.style.height = `${Math.max(700, Math.min(4000, event.data.height))}px`;
  });
  sync();
})();
