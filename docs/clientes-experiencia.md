# Clientes y referencias de experiencia

Inventario interno, fuera del sitio público. Actualizado a partir de la lista suministrada por Carlos el 20 de septiembre de 2026. Tras su solicitud explícita de ver los clientes en la página, se añadió una sección pública «Clientes y colaboraciones» con acceso desde el menú. Los casos detallados mantienen títulos anónimos. Se muestran colegio, Crossland, Praxis, Segelim Perú, Petroperú y Laraigo; SUNAT y OEFA aparecen como apoyo especializado, con el alcance confirmado. Las referencias no confirmadas siguen fuera del sitio.

| Nombre indicado por Carlos | Referencia de proyecto | Estado del alcance |
| --- | --- | --- |
| Colegio San José Maristas Huacho | asistencia.iama.pe; checkout zyx-assistence | Gestión de horarios, asistencia y administración académica. Sitio público y módulos del código revisados. |
| Crossland | printing-agent / stickers-web-app | Portal operativo, etiquetas e impresión. |
| Praxis | praxis | Facturación electrónica mediante OpenFact y gestión de comprobantes y guías. |
| Segelim Perú | segelimperu | Personal, asistencia y contratos. |
| Petroperú | PetroPeruApp | Aplicación Android para lecturas, evidencias y sincronización. |
| SUNAT | Chatbot Sofía | Carlos confirmó participación de apoyo en el chatbot Sofía. Es una experiencia distinta de la integración tributaria de Praxis. No se atribuye desarrollo completo ni una contratación directa no confirmada. |
| OEFA | Chatbot Rufo | Carlos confirmó soporte técnico de su parte al trabajo de apoyo realizado por su esposa. Participación indirecta; no se presenta como cliente directo ni como desarrollo completo de Carlos. |
| Laraigo | Plataforma omnicanal y portal de ingeniería | Experiencia laboral de arquitectura y liderazgo ya confirmada. Carlos también la incluye en su lista freelance; falta distinguir el encargo independiente. |

## Otras referencias por confirmar

Rintisa (api_rintisa), Eterna (eterna-fronted), Ochoa (erpochoa) y Qayarix (client-qayarix) aparecen en los proyectos previamente revisados. No se afirman como clientes freelance confirmados ni se publican sus nombres. Pueden ser productos, clientes finales o trabajos realizados mediante otra empresa.

VCA Perú, Bitinka, Gobierno Regional de Ica e I.S.T.P. Nuestra Señora del Carmen figuran como experiencia laboral en el CV, no como nuevos clientes freelance.

## Evidencia del sistema escolar

- La página pública redirige a /login y muestra la identidad del colegio. No se inició sesión.
- `src/pages/Login/components/Copyright.tsx` vincula el checkout con el colegio.
- `src/routes/routes.tsx` incluye usuarios, colaboradores, perfiles, asistencia, gestión académica, docentes, secciones, asignaciones y horarios.
- `src/pages/ConfiguracionHorarios/README.md` y componente: bloques por nivel educativo, clases y recreos.
- `src/pages/Cursos/SchedulesTab.tsx`: vistas por docente/sección y exportaciones a Excel/PDF.
- Se añadió un único caso público anónimo, «Un colegio, mejor coordinado», en inglés y español. No se atribuyen módulos de notas, matrícula o pensiones sin evidencia.
