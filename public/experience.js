(() => {
  const scenarios={
    printing:{title:'De una orden a una etiqueta.',subtitle:'La operación digital llega al mundo físico.',symbols:['▤','▦','⌘','▧'],nodes:['Orden de trabajo','Portal operativo','Agente local','Etiqueta impresa'],notes:['El punto de entrada de la operación.','Coordina órdenes y solicitudes de supervisión.','Conecta la aplicación con la impresora física.','Genera la identificación que acompaña al producto.'],decision:'Control de reimpresiones',explanation:'Separar coordinación e impresión permite conectar el portal con dispositivos locales y mantener un flujo de supervisión.',stack:'.NET / SIGNALR / SQL SERVER'},
    field:{title:'La información empieza en campo.',subtitle:'Capturar, conservar y sincronizar.',symbols:['⌖','▣','↻','▥'],nodes:['Lectura móvil','Datos locales','Sincronización','Servicio central'],notes:['Registra el medidor, la lectura y la evidencia.','Conserva información en el dispositivo.','Gestiona el intercambio de datos y su estado.','Integra la información con los servicios de la plataforma.'],decision:'Persistencia local',explanation:'El registro de lecturas y fotos se apoya en almacenamiento local y estados de sincronización para acompañar el trabajo del equipo.',stack:'KOTLIN / ANDROID / ROOM'},
    omnichannel:{title:'Cada conversación tiene contexto.',subtitle:'Canales, asistentes y personas conectados.',symbols:['◫','⑂','✳','♙'],nodes:['Canal de entrada','Flujo conversacional','Asistente IA','Equipo de atención'],notes:['Recibe el contacto desde un canal digital.','Organiza los pasos de la conversación.','Integra capacidades de asistencia inteligente.','Conecta la experiencia con las personas del equipo.'],decision:'Integración por capas',explanation:'La interfaz, los flujos y los servicios de IA se conectan para dar continuidad a la experiencia de atención.',stack:'REACT / NODE.JS / AI'}
  };
  let selected='printing',nodeIndex=0;
  const panel=document.querySelector('#scenario-panel');
  const tabs=[...document.querySelectorAll('[data-scenario]')];
  function render(){
    const scenario=scenarios[selected];
    panel.setAttribute('aria-labelledby',`tab-${selected}`);
    panel.innerHTML=`<div class="system-map"><div class="map-coordinates" aria-hidden="true">SYSTEM / ${selected==='printing'?'01':selected==='field'?'02':'03'}<span>INPUT → OUTCOME</span></div><h3>${scenario.title}</h3><p class="map-subtitle">${scenario.subtitle}</p><div class="system-nodes" role="group" aria-label="Ver componente">${scenario.nodes.map((label,index)=>`<button type="button" data-node="${index}" aria-pressed="${index===nodeIndex}"><span class="node-icon" aria-hidden="true">${scenario.symbols[index]}</span><span class="node-label">${label}</span><small>0${index+1}</small></button>`).join('')}</div><p class="node-note" role="status">${scenario.notes[nodeIndex]}</p><span class="map-stack">${scenario.stack}</span></div><div class="design-decision"><span class="decision-symbol" aria-hidden="true">↳</span><div><span class="decision-label">UNA DECISIÓN DE DISEÑO</span><h4>${scenario.decision}</h4><p>${scenario.explanation}</p></div></div>`;
    tabs.forEach(tab=>{const active=tab.dataset.scenario===selected;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
    i18n.apply(panel);
  }
  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>{selected=tab.dataset.scenario;nodeIndex=0;render();});
    tab.addEventListener('keydown',event=>{
      let next=index;
      if(event.key==='ArrowRight')next=(index+1)%tabs.length;
      else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;
      else if(event.key==='Home')next=0;
      else if(event.key==='End')next=tabs.length-1;
      else return;
      event.preventDefault();tabs[next].click();tabs[next].focus();
    });
  });
  panel.addEventListener('click',event=>{const button=event.target.closest('[data-node]');if(!button)return;nodeIndex=Number(button.dataset.node);render();panel.querySelector(`[data-node="${nodeIndex}"]`).focus({preventScroll:true});});
  document.querySelector('#scenario-case').addEventListener('click',event=>{previousFocus=event.currentTarget;showProject(projects.find(project=>project.id===selected));});
  document.addEventListener('languagechange',render);
  render();
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const consoleElement=document.querySelector('.solution-console');
  consoleElement.addEventListener('pointermove',event=>{if(motion.matches||event.pointerType!=='mouse')return;const rect=consoleElement.getBoundingClientRect();consoleElement.style.setProperty('--pointer-x',`${((event.clientX-rect.left)/rect.width-.5)*3}deg`);consoleElement.style.setProperty('--pointer-y',`${((event.clientY-rect.top)/rect.height-.5)*-3}deg`);});
  consoleElement.addEventListener('pointerleave',()=>{consoleElement.style.setProperty('--pointer-x','0deg');consoleElement.style.setProperty('--pointer-y','0deg');});
})();
