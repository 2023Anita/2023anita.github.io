// 展示原站完整内容与交互，保留原站署名与数据来源。
(() => {
  const frame = document.getElementById('earth-frame');
  const section = document.getElementById('system');
  const names = {zh:'地球与生命', en:'Earth & Life', ja:'地球と生命'};
  const language = () => document.documentElement.lang.startsWith('zh') ? 'zh' : document.documentElement.lang.startsWith('ja') ? 'ja' : 'en';
  Object.entries(names).forEach(([lang, name]) => { content[lang].nav.system = name; });
  function sync() {
    const lang = language();
    document.querySelector('[data-i18n="nav.system"]').textContent = names[lang];
    const active = section.classList.contains('active');
    document.body.classList.toggle('earth-active', active && location.hash !== '#contact');
    if (active && !frame.hasAttribute('src')) frame.src = frame.dataset.src;
  }
  new MutationObserver(sync).observe(section, {attributes:true, attributeFilter:['class']});
  new MutationObserver(sync).observe(document.documentElement, {attributes:true, attributeFilter:['lang']});
  const nav = document.querySelector('nav');
  new ResizeObserver(() => document.documentElement.style.setProperty('--earth-nav-height', `${nav.getBoundingClientRect().height}px`)).observe(nav);
  window.addEventListener('hashchange', sync);
  sync();
})();
