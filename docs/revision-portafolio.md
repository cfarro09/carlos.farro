# Revisión para el portafolio

Fecha: 2026-09-20. Objetivo: atraer clientes freelance con una SPA arcade vintage.

## Alcance y evidencia

Se revisaron las dos páginas del CV, los manifiestos y README de proyectos locales, estructura de archivos y hasta los últimos 100 autores de commits por checkout detectado bajo Projects (hasta tres niveles, excluyendo worktrees y dependencias). Esto permite seleccionar casos y contrastar tecnologías; no equivale a una auditoría funcional o de seguridad ni a haber compilado todos los sistemas.

La conexión autenticada de GitHub devolvió 45 repositorios accesibles de cfarro09 y 54 de vcadevelopteam. Es el inventario visible para esa conexión, no una afirmación de cobertura completa de toda la organización. Los checkouts locales incluyen proyectos que no aparecen en ese listado. Existen clones repetidos bajo L26, L26 Engine y Laraigo que no representan proyectos distintos.

Fuentes: https://github.com/cfarro09 y https://github.com/vcadevelopteam; CV en Downloads/CV - Carlos Farro.pdf; repositorios locales en Projects. Se contrastaron además los package.json remotos de smart-inventory, client-qayarix y last-mille. README.md de MochikLero devolvió 404: su descripción se basa en el CV, no en una revisión de su implementación.

## Selección de casos

| Caso público | Evidencia revisada | Observación |
| --- | --- | --- |
| Conversaciones conectadas | CV; client-laraigo, api-laraigo, broker_laraigo y servicios L26 | Aportes colectivos: describir participación y liderazgo, sin atribuir todo el producto a una sola persona. |
| La operación, en un lugar | CV; api_rintisa y aplicaciones de gestión locales | Confirmar métricas de impacto si se desean publicar. |
| Del pedido a la entrega | CV; client-qayarix remoto; riya-app y milla-api locales | No afirmar que todas las variantes pertenecen al mismo cliente. |
| Menos pasos. Más progreso. | README, CSS, manifiesto e historial del portal de ingeniería | Buen caso de automatización; descripción pública sin nombres, IDs ni detalles operativos. |
| Una clínica más organizada | README, manifiestos e historial de odontologico | El README documenta módulos y pendientes; no se ejecutó el sistema en esta revisión. |
| Mochiklero | CV y existencia del repositorio privado | Caso personal histórico. Sin prometer disponibilidad actual en Google Play. |

## Hallazgos

- Tu cuenta personal también contiene proyectos de clientes y trabajo: propietario del repositorio no equivale a autoría exclusiva ni permiso de publicación.
- Hay contribuciones con los nombres Carlos Farro, cfarro09 y carlos.farro. El historial aporta evidencia de participación, no mide la totalidad del aporte o liderazgo.
- cultured-laced-perfume documenta ser un ejemplo de WhatsApp Flows; mage-quickstart es una base de terceros. mothers-day conserva historial y referencias a otros autores. No presentarlos como creaciones originales completas.
- Varios README son plantillas genéricas (incluido el del dispatcher y el de Strapi). Para destacarlos conviene documentar problema, aporte propio y resultado.
- El CV menciona siete años de experiencia y un cargo 'actual' desde 2022; esas frases pueden estar desactualizadas. La SPA evita repetir una cifra sin confirmar.
- Educación extraída visualmente del CV: Ingeniería de Sistemas, UNPRG, 2011–2016; Maestría en Transformación Digital, UPC, 2020–2022. Confirmar estado del grado y vigencia del contenido.
- No se copiaron dirección de domicilio, teléfono, credenciales, capturas internas ni URLs privadas al sitio.

## Decisiones acordadas

Una sola página con navegación sin recarga. Estilo carbón/violeta, Pixelify Sans en titulares y texto de lectura convencional. Contacto orientado a freelance. Proyectos laborales anónimos. Sin estadísticas, testimonios ni logros cuantitativos inventados.

## Pendientes editoriales

1. Ruta del archivo original de la foto adjuntada, para incorporarla sin modificar el rostro.
2. Confirmar que el correo del CV sigue siendo el contacto comercial preferido.
3. Resultados comprobables de dos o tres casos (por ejemplo, tiempo ahorrado o proceso mejorado), si están disponibles.
4. Dominio y hosting cuando se decida publicar.

## Verificación de la SPA

- Sintaxis de app.js verificada con Node.
- Página, CSS, JavaScript y fuente local responden HTTP 200; documentos de revisión fuera del directorio público no se sirven.
- Revisión visual de escritorio y vista móvil de 390 px en Edge.
- Filtro Gestión muestra dos casos; Todos restaura los seis.
- Apertura de detalle y cierre con Escape verificados.
- Menú móvil abre y se cierra al seleccionar navegación.
- Sin desbordamiento horizontal en la vista móvil comprobada.
- Última recarga sin errores de consola capturados.
- No se enviaron correos ni se desplegó el sitio.
