# Revisión para el portafolio

## Segunda revisión: catálogo ampliado

Se amplió la SPA de 6 a 12 casos. Se mantuvo la instrucción de anonimizar proyectos de trabajo y clientes, incluso cuando un repositorio sea público. Las referencias siguientes son internas y este documento no se sirve desde el sitio.

| Caso agregado | Repositorios / archivos contrastados | Alcance confirmado |
| --- | --- | --- |
| Del almacén a la etiqueta | cfarro09/printing-agent (checkout local, README); GabbrM/stickers-web-app (árbol remoto y Controllers/SupervisorController.cs) | Impresión local, QR, estaciones, historial y aprobación de reimpresiones a través de SignalR. Se presenta como una solución con dos componentes, no dos proyectos inflados. |
| Lecturas desde el terreno | cfarro09/PetroPeruApp: árbol, model/Reading.kt y manage/ManageReadingActivity.kt | Android/Kotlin, lecturas, fotos, observaciones, mapas y modelo local Room. No se afirma un despliegue vigente o una cifra de usuarios. |
| Equipos y contratos, conectados | cfarro09/segelimperu: application/controllers/Personal.php y Contratos.php | Personal, asistencia, fichas PDF, renovaciones e historial contractual. |
| Ventas con visión de negocio | cfarro09/erpochoa: estructura de archivos | Ventas, compras, kardex, proformas, cuentas y stock por sucursal identificados en módulos. No se ejecutó el ERP ni se auditó cada flujo. |
| Tu negocio, bien presentado | cfarro09/eterna-fronted: index.html | Presentación de marca, categorías y atención al cliente. Representa experiencia en sitios comerciales; no se atribuyen mejoras de conversión no medidas. |
| Cada expediente, bajo control | cfarro09/sistema-trazabilidad: estructura y README | Gestión documental, hitos, servicios, experiencia y expedientes PDF. Capacidades documentadas, no pruebas de producción. |

También se revisó el README de nery-fernandez; se dejó fuera del catálogo por ahora para mantener el foco comercial solicitado. La lectura remota de tourscixpro/index.html devolvió 404: no se utilizó como evidencia de funcionalidades.

### Experiencia de usuario

- Búsqueda por problema, sector, capacidad y tecnología, sin distinguir acentos o mayúsculas.
- Seis filtros con contadores actualizados según la búsqueda; estado vacío con recuperación en una acción.
- 12 casos visibles por defecto; el catálogo no esconde el resto tras un límite de seis.
- Ilustraciones específicas para impresión, app de campo, personal, ventas, landing, documentos, chat, rutas, flujos y agenda. Se rotulan como vistas conceptuales.
- Fichas con problema, aporte, capacidades, flujo y tecnología; siguiente caso dentro del filtro actual.
- Paso de caso a contacto que selecciona el servicio y propone contexto sin sobrescribir un mensaje ya escrito.
- Servicios explícitos de landing y gestión de operaciones; opción de copiar correo.
- Controles táctiles, menú móvil, navegación por teclado, devolución de foco y movimiento reducido.

### Observación de repositorios

El README público de sistema-trazabilidad contiene una cadena de conexión con una contraseña aparente. No se copió a la SPA ni se intentó usarla. Conviene revisar su vigencia, rotarla si corresponde y retirar ese contenido del repositorio y su historial. Esto es un hallazgo de lectura, no una auditoría de secretos completa.

### Validación de la segunda versión

Verificados en navegador: 12 casos iniciales; búsqueda de etiquetas; filtro Operaciones con 3 casos; búsqueda sin resultados y restablecimiento; apertura de ficha; siguiente caso dentro del filtro; cierre por Escape; paso a contacto con servicio y contexto; vista móvil de 390 px sin desbordamiento horizontal. Sintaxis de los tres archivos JavaScript verificada. Ningún correo enviado ni despliegue ejecutado.

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
