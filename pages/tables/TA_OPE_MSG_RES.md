# TABLA: TA_OPE_MSG_RES

**Descripción:**  
Contiene todo el **RESUMEN.** del analisis y optimización de codigo hechas por el compilador al momento de compilar un programa. Esta tabla esta estrictamente relacionada con la tabla <a href="index.html#/pages/tables/TA_OPE_MSG_DET.md" target="_blank">TA_OPE_MSG_DET</a>. Esta tabla viene a ser el **MAESTRO**, mientras que <a href="index.html#/pages/tables/TA_OPE_MSG_DET.md" target="_blank">TA_OPE_MSG_DET</a> el **DETALLE**


## Estructura de la tabla
| #  | Columna               | Tipo de Dato     | Descripción |
|----|-----------------------|------------------|-------------|
| 1  | 🔑 **CO_PROG**        | CHAR(08)         | Código o  nombre del programa que fue compilado |
| 2  | 🔑 **CO_AMB**         | CHAR(01)         | <a href="index.html#/pages/msg_resume_env.md" target="_blank">Código de ambiente</a> |
| 3  | 🔑 **FE_MSG**         | CHAR(08)         | Fecha del resumen en formato YYYYMMDD |
| 4  | **CO_APLI**           | CHAR(03)         | Código de la aplicación que genera el mensaje |
| 5  | **CO_TIPO_COMP**      | CHAR(03)         | Tipo de componente relacionado con el mensaje |
| 6  | **TI_MIGR**           | CHAR(01)         | Indicador de migración |
| 7  | **CO_USER_MSG**       | CHAR(08)         | Usuario que generó el mensaje |
| 8  | **NU_MSG_INFO**       | INTEGER          | Cantidad de mensajes de tipo informativo |
| 9  | **NU_MSG_WARN**       | INTEGER          | Cantidad de mensajes de advertencia |
| 10 | **NU_MSG_PERF**       | INTEGER          | Cantidad de mensajes de performance |
| 11 | **NU_MSG_RWRI**       | INTEGER          | Cantidad de mensajes de reescritura |
| 12 | **NU_MSG_CANC**       | INTEGER          | Cantidad de mensajes cancelatorios |
| 13 | **NU_PESO_INFO**      | INTEGER          | Peso asignado a mensajes informativos |
| 14 | **NU_PESO_WARN**      | INTEGER          | Peso asignado a mensajes de advertencia |
| 15 | **NU_PESO_PERF**      | INTEGER          | Peso asignado a mensajes de performance |
| 16 | **NU_PESO_RWRI**      | INTEGER          | Peso asignado a mensajes de reescritura |
| 17 | **NU_PESO_CANC**      | INTEGER          | Peso asignado a mensajes cancelatorios |
| 18 | **NU_DCTO_INFO_TIPO** | DECIMAL(5,2)     | Descuento por tipo de mensaje informativo |
| 19 | **NU_DCTO_WARN_TIPO** | DECIMAL(5,2)     | Descuento por tipo de mensaje de advertencia |
| 20 | **NU_DCTO_PERF_TIPO** | DECIMAL(5,2)     | Descuento por tipo de mensaje de performance |
| 21 | **NU_DCTO_RWRI_TIPO** | DECIMAL(5,2)     | Descuento por tipo de mensaje de reescritura |
| 22 | **NU_DCTO_CANC_TIPO** | DECIMAL(5,2)     | Descuento por tipo de mensaje cancelatorio |
| 23 | **NU_DCTO_INFO_NLIN** | DECIMAL(5,2)     | Descuento por número de líneas informativas |
| 24 | **NU_DCTO_WARN_NLIN** | DECIMAL(5,2)     | Descuento por número de líneas de advertencia |
| 25 | **NU_DCTO_PERF_NLIN** | DECIMAL(5,2)     | Descuento por número de líneas de performance |
| 26 | **NU_DCTO_RWRI_NLIN** | DECIMAL(5,2)     | Descuento por número de líneas de reescritura |
| 27 | **NU_DCTO_CANC_NLIN** | DECIMAL(5,2)     | Descuento por número de líneas cancelatorias |
| 28 | **NU_SOUR_RECO**      | INTEGER          | Fuente de reconocimiento utilizada |
| 29 | **NU_PRDV_RECO**      | INTEGER          | Ponderación del reconocimiento |
| 30 | **NU_FACT_CMPX**      | INTEGER          | Factor de complejidad aplicado |
| 31 | **NU_PESO_TOTA**      | INTEGER          | Peso total acumulado |
| 32 | **NU_LIMI_INFO_BASE** | INTEGER          | Límite base de mensajes informativos |
| 33 | **NU_LIMI_WARN_BASE** | INTEGER          | Límite base de mensajes de advertencia |
| 34 | **NU_LIMI_PERF_BASE** | INTEGER          | Límite base de mensajes de performance |
| 35 | **NU_LIMI_RWRI_BASE** | INTEGER          | Límite base de mensajes de reescritura |
| 36 | **NU_LIMI_CANC_BASE** | INTEGER          | Límite base de mensajes cancelatorios |

🔑 **Indica que el campo forma parte de la clave primaria (PK)**

## Observaciones


