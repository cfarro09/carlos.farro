projects.forEach(project => Object.assign(project, projectDetails[project.id]));
projects.unshift(...additionalProjects);
const grid = document.querySelector('#projects');
const search = document.querySelector('#project-search');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const filterNames = Object.fromEntries(filterButtons.map(button => [button.dataset.filter, button.textContent]));
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
let activeFilter = 'todos', previousFocus, activeProject;
let visibleProjects = [];
function illustration(project) {
  const common = '<div class="mini-chrome"><i></i><i></i><i></i><span>WORKSPACE</span></div>';
  const drawings = {
    school:'<div class="mini-school"><div><strong>HORARIO ACADÉMICO</strong><span>DOCENTE / SECCIÓN</span></div><div class="school-week"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><small>EXCEL / PDF ↗</small></div>',

    billing:'<div class="mini-billing"><div class="billing-document"><span>COMPROBANTE</span><b>≡</b><div><i></i><i></i><i></i></div><small>PDF · XML · CDR</small></div><div class="billing-connection"><span>GUÍA DE REMISIÓN</span><b>↔</b><span>OPENFACT → SUNAT</span></div></div>',

    printing:'<div class="mini-print"><div class="mini-qr">▦</div><div><b>ETIQUETA QR</b><span>ORDEN → ESTACIÓN</span><em>LISTA PARA IMPRIMIR</em></div></div><div class="mini-progress"><i></i></div>',
    field:'<div class="mini-phone"><span>LECTURA DE MEDIDOR</span><b>0 1 2 8 4</b><div class="mini-photo">＋ EVIDENCIA</div><em>↻ Sincronización</em></div><div class="mini-pin">⌖</div>',
    people:'<div class="mini-table"><span>COLABORADOR</span><span>CONTRATO</span><b>● Equipo A</b><em>Vigente</em><b>● Equipo B</b><em>En revisión</em><b>● Equipo C</b><em>Vigente</em></div>',
    sales:'<div class="mini-stats"><span>VENTAS<b>↗</b></span><span>INVENTARIO<b>▦</b></span></div><div class="mini-bars"><i></i><i></i><i></i><i></i><i></i><i></i></div>',
    landing:'<div class="mini-site"><span>STUDIO / DESIGN</span><strong>Una marca.<br>Todo un mundo.</strong><i>CONOCE MÁS ↗</i><div class="mini-orb"></div></div>',
    documents:'<div class="mini-docs"><div>EXPEDIENTE<br><b>≡</b><span>01 / SERVICIO</span></div><div>PROPUESTA<br><b>≡</b><span>02 / DOCUMENTOS</span></div></div>',
    chat:'<div class="mini-chat"><span>Hola, ¿cómo puedo ayudarte?</span><span>Quiero conocer sus servicios.</span><span>Conectando con tu equipo…</span></div>',
    route:'<div class="mini-route"><b>⌖</b><i></i><b>⌖</b><i></i><b>⚑</b></div><div class="mini-route-label">ORIGEN → RECORRIDO → DESTINO</div>',
    workflow:'<div class="mini-flow"><span>REQUERIMIENTO</span><b>↓</b><div><span>WEB</span><span>API</span><span>DATOS</span></div><b>↓</b><span>REVISIÓN</span></div>',
    clinical:'<div class="mini-calendar"><strong>AGENDA / SEMANA</strong><div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span>＋ Paciente · Tratamiento · Cita</span></div>'
  };
  return `<div class="case-visual visual-${project.art}" aria-hidden="true"><span class="visual-label">${escapeHtml(project.sector)}</span><div class="mini-app">${common}${drawings[project.art] || drawings.sales}</div><span class="visual-caption">VISTA CONCEPTUAL</span></div>`;
}
function renderProjects() {
  const query = normalize(search.value.trim());
  const matches = project => {
    const phrases=[project.title,project.description,project.sector,...project.tags,...project.capabilities];
    return normalize([...phrases,...phrases.map(phrase=>i18n.t(phrase,'en'))].join(' ')).includes(query);
  };
  visibleProjects = projects.filter(project => matches(project) && (activeFilter === 'todos' || project.category === activeFilter));
  filterButtons.forEach(button => {
    const filter = button.dataset.filter;
    const count = projects.filter(project => matches(project) && (filter === 'todos' || project.category === filter)).length;
    button.innerHTML = `${filterNames[filter]} <span>${String(count).padStart(2,'0')}</span>`;
    button.classList.toggle('active', filter === activeFilter);
    button.setAttribute('aria-pressed', String(filter === activeFilter));
  });
  grid.innerHTML = visibleProjects.map(project => `<article class="project">${illustration(project)}<div class="project-body"><div class="project-kicker">${escapeHtml(project.label)}</div><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.description)}</p><ul class="card-capabilities">${project.capabilities.slice(0,2).map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ul><div class="tags">${project.tags.map(tag=>`<span>${escapeHtml(tag)}</span>`).join('')}</div><button data-project="${project.id}" aria-label="Ver caso: ${escapeHtml(project.title)}">Conocer la solución <span>↗</span></button></div></article>`).join('');
  document.querySelector('#filter-status').textContent = `${visibleProjects.length} ${i18n.language==='en'?'of':'de'} ${projects.length} ${i18n.language==='en'?'projects':'proyectos'}${query ? ` · “${search.value.trim()}”` : ''}`;
  document.querySelector('#empty-state').hidden = visibleProjects.length !== 0;
  document.querySelector('#clear-search').hidden = !search.value;
  i18n.apply(grid);
  i18n.apply(document.querySelector('.filters'));
  grid.querySelectorAll('[data-project]').forEach(button=>{
    const project=projects.find(item=>item.id===button.dataset.project);
    button.setAttribute('aria-label',`${i18n.language==='en'?'View case':'Ver caso'}: ${i18n.t(project.title)}`);
  });
}
filterButtons.forEach(button=>button.addEventListener('click',()=>{activeFilter=button.dataset.filter;renderProjects();}));
search.addEventListener('input',renderProjects);
document.querySelector('#clear-search').addEventListener('click',()=>{search.value='';renderProjects();search.focus();});
document.querySelector('#reset-filters').addEventListener('click',()=>{activeFilter='todos';search.value='';renderProjects();search.focus();});
const dialog = document.querySelector('#project-dialog');
function showProject(project) {
  activeProject = project;
  document.querySelector('#dialog-category').textContent = project.label;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-content').innerHTML = `${illustration(project)}<p class="case-intro">${escapeHtml(project.description)}</p><div class="case-flow" aria-label="Flujo de la solución">${project.flow.map((step,index)=>`<span><small>0${index+1}</small>${escapeHtml(step)}</span>`).join('')}</div><h3>El reto</h3><p>${escapeHtml(project.challenge)}</p><h3>Mi aporte</h3><p>${escapeHtml(project.contribution)}</p><h3>Qué permite hacer</h3><ul class="case-capabilities">${project.capabilities.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ul><h3>La solución</h3><p>${escapeHtml(project.solution)}</p><div class="tags">${project.tags.map(tag=>`<span>${escapeHtml(tag)}</span>`).join('')}</div>`;
  document.querySelector('#next-project').hidden=visibleProjects.length<2;
  if(!dialog.open){dialog.showModal();document.body.classList.add('dialog-open');}
  dialog.scrollTop=0;
  i18n.apply(dialog);
}
grid.addEventListener('click',event=>{const button=event.target.closest('[data-project]');if(!button)return;previousFocus=button;showProject(projects.find(project=>project.id===button.dataset.project));});
document.querySelector('#next-project').addEventListener('click',()=>{const index=visibleProjects.indexOf(activeProject);showProject(visibleProjects[(index+1)%visibleProjects.length]);document.querySelector('.close-dialog').focus();});
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
let contactFromDialog=false;
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');if(contactFromDialog){document.querySelector('#name').focus({preventScroll:true});contactFromDialog=false;}else previousFocus?.focus({preventScroll:true});});
document.querySelector('#dialog-contact').addEventListener('click',()=>{
  document.querySelector('#service').value=activeProject.service;
  const message=document.querySelector('#message');
  if(!message.value.trim())message.value=i18n.language==='en'?`I am interested in a solution similar to “${i18n.t(activeProject.title)}”. My project involves: `:`Me interesa una solución similar a “${activeProject.title}”. Mi proyecto consiste en: `;
  contactFromDialog=true;dialog.close();
});
const menu=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}
menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(expanded));navigation.classList.toggle('open',expanded);});
navigation.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){if(navigation.classList.contains('open'))menu.focus();closeMenu();}});
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#service').value=link.dataset.service;}));
document.querySelector('#contact-form').addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  const service=i18n.t(data.get('service'));
  const body=i18n.language==='en'?`Hi Carlos, I am ${String(data.get('name')).trim()}.\n\nI am interested in: ${service}.\n\n${String(data.get('message')).trim()}\n`:`Hola Carlos, soy ${String(data.get('name')).trim()}.\n\nMe interesa: ${service}.\n\n${String(data.get('message')).trim()}\n`;
  window.location.href=`mailto:fdcarlosd1@gmail.com?subject=${encodeURIComponent(`${i18n.language==='en'?'Project':'Proyecto'}: ${service}`)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status').textContent='Mensaje preparado para tu aplicación de correo. Si no se abre, copia mi correo y escríbeme directamente.';
  i18n.apply(document.querySelector('#form-status'));
});
document.querySelector('#copy-email').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('fdcarlosd1@gmail.com');document.querySelector('#form-status').textContent='Correo copiado: fdcarlosd1@gmail.com';}catch{document.querySelector('#form-status').textContent='Puedes copiar este correo: fdcarlosd1@gmail.com';}i18n.apply(document.querySelector('#form-status'));});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navigation.querySelectorAll('a').forEach(link=>{if(link.hash===`#${entry.target.id}`)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}}),{rootMargin:'-15% 0px -60% 0px'});
document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));
document.querySelector('#year').textContent=new Date().getFullYear();
renderProjects();
document.querySelector('#print-cv').addEventListener('click',()=>window.print());
document.addEventListener('languagechange',()=>{
  const focusedProject=previousFocus?.dataset.project;
  renderProjects();
  if(focusedProject)previousFocus=grid.querySelector(`[data-project="${focusedProject}"]`);
  if(dialog.open){const scroll=dialog.scrollTop;showProject(activeProject);dialog.scrollTop=scroll;}
});
i18n.setLanguage(i18n.language,false);
