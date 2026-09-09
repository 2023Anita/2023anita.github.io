// 兼容旧 #system 入口，直接打开本站地球应用，不使用 iframe。
(() => {
  const names = {zh:'地球与生命', en:'Earth & Life', ja:'地球と生命'};
  const language = () => document.documentElement.lang.startsWith('zh') ? 'zh' : document.documentElement.lang.startsWith('ja') ? 'ja' : 'en';
  Object.entries(names).forEach(([lang, name]) => { content[lang].nav.system = name; });
  function sync() {
    const lang = language();
    document.querySelector('[data-i18n="nav.system"]').textContent = names[lang];
    if (location.hash === '#system') location.replace(new URL('earth/index.html', location.href));
  }
  new MutationObserver(sync).observe(document.documentElement, {attributes:true, attributeFilter:['lang']});
  window.addEventListener('hashchange', sync);
  sync();
})();
