const i18n = (() => {
  let language = 'en';
  try { if(localStorage.getItem('portfolio-language') === 'es') language = 'es'; } catch {}
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const t = (text, target = language) => target === 'en' ? (english[text] ?? text) : text;
  function apply(root = document.body) {
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    let node;
    while((node=walker.nextNode())){
      if(node.parentElement?.closest('script,style,textarea,[data-no-translate]'))continue;
      if(!originalText.has(node))originalText.set(node,node.nodeValue);
      const source=originalText.get(node);
      const phrase=source.trim();
      if(phrase)node.nodeValue=source.replace(phrase,t(phrase));
    }
    const elements=[...(root instanceof Element ? [root] : []),...root.querySelectorAll('[aria-label],[placeholder],[title]')];
    for(const element of elements){
      if(!originalAttributes.has(element))originalAttributes.set(element,{});
      const originals=originalAttributes.get(element);
      for(const attribute of ['aria-label','placeholder','title']){
        if(!element.hasAttribute(attribute))continue;
        originals[attribute] ??= element.getAttribute(attribute);
        element.setAttribute(attribute,t(originals[attribute]));
      }
    }
  }
  function setLanguage(next, persist = true){
    if(!['en','es'].includes(next))return;
    language=next;
    document.documentElement.lang=language;
    document.title=t('Carlos Farro · Software con propósito');
    document.querySelector('meta[name="description"]').content=t('Carlos Farro. Desarrollo de software, arquitectura e inteligencia artificial para convertir procesos complejos en soluciones simples.');
    if(persist){try{localStorage.setItem('portfolio-language',language);}catch{}}
    apply();
    document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));
    document.dispatchEvent(new CustomEvent('languagechange',{detail:{language}}));
  }
  // Stable form values keep service selection intact when option labels change.
  document.querySelectorAll('#service option').forEach(option=>option.value=option.textContent);
  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
  return {t,apply,setLanguage,get language(){return language;}};
})();
