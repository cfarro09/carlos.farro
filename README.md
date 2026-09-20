# Carlos Farro · Portafolio SPA

SPA estática en español, orientada a clientes freelance. HTML, CSS y JavaScript sin dependencias. Navegación por anclas sin recargas, filtros y casos en diálogos accesibles.

## Desarrollo

Ejecutar `npm start` y abrir http://127.0.0.1:4173. Comprobar sintaxis con `npm run check`.

Publicar únicamente la carpeta `public/` en cualquier hosting estático. No hay build, backend ni variables de entorno. El servidor de desarrollo solo expone `public/`.

## Contenido

- Proyectos y descripciones: `public/app.js`.
- Presentación, servicios, formación y contacto: `public/index.html`.
- Diseño responsive, accesibilidad y movimiento reducido: `public/styles.css`.
- Foto: colocar el archivo original en `public/assets/carlos-farro.jpg` y asignar `portraitPath = 'assets/carlos-farro.jpg'` en `public/app.js`. Mientras no exista, se muestran las iniciales CF. No se ha generado una cara sustituta.
- El formulario prepara un correo; no envía datos a un servidor ni afirma que el mensaje haya sido enviado.
- Los proyectos laborales están anonimizados. Las ilustraciones son representaciones gráficas, no capturas reales de clientes.
- Pixelify Sans se sirve localmente con su licencia OFL incluida.

La revisión de contenido está en `docs/revision-portafolio.md`. Confirmar vigencia de formación, aportes y contacto antes de publicar. No se ha desplegado ni publicado ningún repositorio.
