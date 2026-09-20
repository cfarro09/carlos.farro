# Revisión de facturación y retrato

Se incorporó la foto suministrada por Carlos (1708232117212.jpeg) como archivo local `public/assets/carlos-farro.jpg`, sin alterar el original. Aparece en la presentación y en Sobre mí.

## Evidencia de funcionalidades

Repositorio revisado: `cfarro09/praxis`, rama `master`.

- `CatalogoDA/GeneradorOpenFact.cs`: generación de facturas/boletas, notas, bajas y recuperación de PDF/XML/CDR mediante OpenFact; envío automático a SUNAT a través del proveedor. Manejo de series, correlativos, impuestos y cuotas.
- `PraxisProject0/Facturacion.aspx`: accesos a facturas, boletas, notas de crédito y débito; consulta de últimos documentos y estado.
- `PraxisProject0/CrearGuiaRemitente.aspx`: generación de guías de remisión y detalle de ítems.
- `PraxisProject0/GenerarGuia.aspx`: guías de transportista con búsqueda por cliente, fechas y estado completo/pendiente.
- `PraxisProject0/ModificacionTransportistas.aspx`: mantenimiento de transportistas.

El caso público se presenta anónimamente como «De la operación al comprobante», con traducción completa al inglés. No se afirma homologación vigente, integración directa con SUNAT ni emisión electrónica de guías cuando la evidencia revisada no permite demostrarlo. La descripción representa experiencia de implementación, no validación actual de cumplimiento tributario.

## Hallazgo interno

Se observó un token de renovación incrustado en `CatalogoDA/GeneradorOpenFact.cs`. No se utilizó, comprobó ni copió al sitio. Se informó a Carlos para que revoque o rote la credencial si sigue activa. Este documento no contiene el valor ni datos de clientes.
