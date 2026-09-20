# Carlos Farro · Portafolio SPA

SPA estática en español, orientada a clientes freelance. HTML, CSS y JavaScript sin dependencias. Navegación por anclas sin recargas, filtros y casos en diálogos accesibles.

## Desarrollo

Ejecutar `npm start` y abrir http://127.0.0.1:4173. Comprobar sintaxis con `npm run check`.

Publicar únicamente la carpeta `public/` en cualquier hosting estático. No hay build, backend ni variables de entorno. El servidor de desarrollo solo expone `public/`.

## Contenido

- Catálogo original: `public/projects-data.js`; ampliación y capacidades: `public/projects-extra.js`; interacciones: `public/app.js`.
- Presentación, servicios, formación y contacto: `public/index.html`.
- Diseño responsive, accesibilidad y movimiento reducido: `public/styles.css`.
- Foto: colocar el archivo original en `public/assets/carlos-farro.jpg` y asignar `portraitPath = 'assets/carlos-farro.jpg'` en `public/app.js`. Mientras no exista, se muestran las iniciales CF. No se ha generado una cara sustituta.
- El formulario prepara un correo; no envía datos a un servidor ni afirma que el mensaje haya sido enviado.
- Los proyectos laborales están anonimizados. Las ilustraciones son representaciones gráficas, no capturas reales de clientes.
- Pixelify Sans se sirve localmente con su licencia OFL incluida.

La revisión de contenido está en `docs/revision-portafolio.md`. Confirmar vigencia de formación, aportes y contacto antes de publicar. No se ha desplegado ni publicado ningún repositorio.

La segunda versión incluye 12 casos, búsqueda, filtros con contadores, fichas con flujos, navegación entre casos y consulta contextual. Los componentes de impresión se presentan como un único caso operativo. Las vistas de las tarjetas son ilustraciones de interfaz, no capturas de clientes.

## CV integrado

## Idiomas

La SPA abre en inglés por defecto. El selector EN / ES guarda la preferencia en `localStorage` (`portfolio-language`) y funciona en la misma página sin recarga. Si el almacenamiento está bloqueado, el cambio funciona durante la sesión actual.

`translations.js` contiene los textos generales y `project-translations.js` las traducciones de los 12 casos. `i18n.js` actualiza texto, atributos accesibles, idioma HTML y metadatos. Los nombres propios y las tecnologías se conservan. Los valores del formulario permanecen estables; no se traduce ni sobrescribe texto escrito por el visitante. La búsqueda consulta ambos idiomas. La impresión del CV usa el idioma activo.

## Contenido del CV

## Experiencia y dominio

La portada incluye un explorador interactivo de tres escenarios: operaciones, trabajo de campo y atención. Cada escenario conecta un flujo ilustrativo, una decisión de arquitectura y el caso correspondiente del catálogo. Admite teclado y respeta la preferencia de movimiento reducido. `experience.css`, `experience.js` y `experience-translations.js` contienen esta experiencia.

IAMA aparece junto al contacto como marca cofundada por Carlos y respaldo para trabajar con facturación. El dominio previsto es `https://carlos.farro.iama.pe/`, configurado en canonical, Open Graph, robots y sitemap. El despliegue debe servir la carpeta `public` con HTTPS; no se ha publicado ni configurado DNS desde este proyecto.

La sección `#cv` incluye trayectoria cronológica, perfil, formación, cursos y competencias a partir del CV suministrado. El usuario confirmó funciones simultáneas: Arquitecto de Software de las soluciones de Laraigo desde septiembre de 2025 y liderazgo de área/técnico desde 2022, ambos vigentes. Los nombres de empleadores aparecen en la trayectoria; los casos de clientes siguen anónimos.

El botón «Imprimir / guardar CV» abre la impresión nativa del navegador. `public/cv.css` contiene estilos A4 que imprimen solo el CV con tipografía convencional y fondo blanco. Elegir «Guardar como PDF» para obtener un archivo; no hay un PDF pre-generado ni se publica el CV original con su domicilio.
