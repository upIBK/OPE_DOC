# TABLA: TA_OPE_MSG_RES

**Descripción:**  
Contiene todo el **RESUMEN.** del analisis y optimización de codigo hechas por el compilador al momento de compilar un programa. Esta tabla esta estrictamente relacionada con la tabla <a href="index.html#/pages/tables/TA_OPE_MSG_DET.md" target="_blank">TA_OPE_MSG_DET</a>. Esta tabla viene a ser el **MAESTRO**, mientras que <a href="index.html#/pages/tables/TA_OPE_MSG_DET.md" target="_blank">TA_OPE_MSG_DET</a> el **DETALLE**


## Estructura de la tabla
| #  | Columna               | Tipo de Dato     | Descripción |
|----|-----------------------|------------------|-------------|
| 1  | 🔑 **CO_PROG**        | CHAR(08)         | Código o  nombre del programa que fue compilado |
| 2  | 🔑 **CO_AMB**         | CHAR(01)         | <a href="index.html#/pages/msg_resume_env.md" target="_blank">Código de ambiente</a> |
| 3  | 🔑 **FE_MSG**         | CHAR(08)         | Fecha del resumen en formato YYYYMMDD |
| 4  | **CO_APLI**           | CHAR(03)         | <a href="index.html#/pages/applications.md" target="_blank">Codigo de Aplicación</a> |
| 5  | **CO_TIPO_COMP**      | CHAR(03)         | <a href="index.html#/pages/component_type.md" target="_blank">Tipo de componente</a> |
| 6  | **TI_MIGR**           | CHAR(01)         | <a href="index.html#/pages/how_com_migra.md" target="_blank">Tipo de Migración</a> |
| 7  | **CO_USER_MSG**       | CHAR(08)         | Usuario que esta generando la compilacióm, firma mainframe. |
| 8  | **NU_MSG_INFO**       | INTEGER          | Cantidad de mensajes de tipo **INFORMATIVOS** encontrados por el compilador |
| 9  | **NU_MSG_WARN**       | INTEGER          | Cantidad de mensajes **WARNINGS** encontrados por el compilador |
| 10 | **NU_MSG_PERF**       | INTEGER          | Cantidad de mensajes **PERFORMANCE** encontrados por el compilador|
| 11 | **NU_MSG_RWRI**       | INTEGER          | Cantidad de mensajes **REPORT WRITER** encontrados por el compilador |
| 12 | **NU_MSG_CANC**       | INTEGER          | Cantidad de mensajes **CANCELATORIOS** encontrados por el compilador |
| 13 | **NU_PESO_INFO**      | INTEGER          | Sumatoria de pesos asignados por <a href="index.html#/pages/classification_msg.md" target="_blank">clasificación de mensajes</a> **INFORMATIVOS**, el campo es **NU_MSG_PESO** de la tabla <a href="index.html#/pages/tables/TA_OPE_MSG_DET.md" target="_blank">TA_OPE_MSG_DET</a>. |
| 14 | **NU_PESO_WARN**      | INTEGER          | Sumatoria de pesos asignados por <a href="index.html#/pages/classification_msg.md" target="_blank">clasificación de mensajes</a> **WARNINGS**, el campo es **NU_MSG_PESO** de la tabla <a href="index.html#/pages/tables/TA_OPE_MSG_DET.md" target="_blank">TA_OPE_MSG_DET</a>. |
| 15 | **NU_PESO_PERF**      | INTEGER          | Sumatoria de pesos asignados por <a href="index.html#/pages/classification_msg.md" target="_blank">clasificación de mensajes</a> **PERFORMANCE**, el campo es **NU_MSG_PESO** de la tabla <a href="index.html#/pages/tables/TA_OPE_MSG_DET.md" target="_blank">TA_OPE_MSG_DET</a>. |
| 16 | **NU_PESO_RWRI**      | INTEGER          | Sumatoria de pesos asignados por <a href="index.html#/pages/classification_msg.md" target="_blank">clasificación de mensajes</a> **REPORT WRITER**, el campo es **NU_MSG_PESO** de la tabla <a href="index.html#/pages/tables/TA_OPE_MSG_DET.md" target="_blank">TA_OPE_MSG_DET</a>. |
| 17 | **NU_PESO_CANC**      | INTEGER          | Sumatoria de pesos asignados por <a href="index.html#/pages/classification_msg.md" target="_blank">clasificación de mensajes</a> **CANCELATORIOS**, el campo es **NU_MSG_PESO** de la tabla <a href="index.html#/pages/tables/TA_OPE_MSG_DET.md" target="_blank">TA_OPE_MSG_DET</a>. |
| 18 | **NU_DCTO_INFO_TIPO** | DECIMAL(5,2)     | Descuento aplicado para mensajes de tipo **INFORMATIVO** |
| 19 | **NU_DCTO_WARN_TIPO** | DECIMAL(5,2)     | Descuento aplicado para mensajes de tipo **WARNIGNS** |
| 20 | **NU_DCTO_PERF_TIPO** | DECIMAL(5,2)     | Descuento aplicado para mensajes de tipo **PERFORMANCE** |
| 21 | **NU_DCTO_RWRI_TIPO** | DECIMAL(5,2)     | Descuento aplicado para mensajes de tipo **REPORT WRITER** |
| 22 | **NU_DCTO_CANC_TIPO** | DECIMAL(5,2)     | Descuento aplicado para mensajes de tipo **CANCELATORIO** |
| 23 | **NU_DCTO_INFO_NLIN** | DECIMAL(5,2)     | Descuento aplicado por numero de linear para mensajes de tipo **INFORMATIVO** |
| 24 | **NU_DCTO_WARN_NLIN** | DECIMAL(5,2)     | Descuento aplicado por numero de linear para mensajes de tipo **WARNINGS** |
| 25 | **NU_DCTO_PERF_NLIN** | DECIMAL(5,2)     | Descuento aplicado por numero de linear para mensajes de tipo **PERFORMANCE**  |
| 26 | **NU_DCTO_RWRI_NLIN** | DECIMAL(5,2)     | Descuento aplicado por numero de linear para mensajes de tipo **REPORT WRITER**  |
| 27 | **NU_DCTO_CANC_NLIN** | DECIMAL(5,2)     | Descuento aplicado por numero de linear para mensajes de tipo **CANCELATORIOS**  |
| 28 | **NU_SOUR_RECO**      | INTEGER          | lineas de programa? preguntar a angel.... |
| 29 | **NU_PRDV_RECO**      | INTEGER          | preguntar a angel.... |
| 30 | **NU_FACT_CMPX**      | INTEGER          | preguntar a angel.... |
| 31 | **NU_PESO_TOTA**      | INTEGER          | preguntar a angel...., pense que el peso total, pero esta 0 |
| 32 | **NU_LIMI_INFO_BASE** | INTEGER          | Límite base de mensajes de tipo **INFORMATIVOS**, tomado del campo **NU_LIMI_INFO** en la tabla <a href="index.html#/pages/tables/TA_OPE_MSG_LIMI.md" target="_blank">TA_OPE_MSG_LIMI</a>, esto quiere decir que si en algun momento la configuración de limite cambia, estos valores se van a quedar como historicos. |
| 33 | **NU_LIMI_WARN_BASE** | INTEGER          | Límite base de mensajes de tipo **WARNINGS**, tomado del campo **NU_LIMI_WARN** en la tabla <a href="index.html#/pages/tables/TA_OPE_MSG_LIMI.md" target="_blank">TA_OPE_MSG_LIMI</a>, esto quiere decir que si en algun momento la configuración de limite cambia, estos valores se van a quedar como historicos. |
| 34 | **NU_LIMI_PERF_BASE** | INTEGER          | Límite base de mensajes de tipo **PERFORMANCE**, tomado del campo **NU_LIMI_PERF** en la tabla <a href="index.html#/pages/tables/TA_OPE_MSG_LIMI.md" target="_blank">TA_OPE_MSG_LIMI</a>, esto quiere decir que si en algun momento la configuración de limite cambia, estos valores se van a quedar como historicos. |
| 35 | **NU_LIMI_RWRI_BASE** | INTEGER          | Límite base de mensajes de tipo **REPORT WRITER**, tomado del campo **NU_LIMI_RWRI** en la tabla <a href="index.html#/pages/tables/TA_OPE_MSG_LIMI.md" target="_blank">TA_OPE_MSG_LIMI</a>, esto quiere decir que si en algun momento la configuración de limite cambia, estos valores se van a quedar como historicos. |
| 36 | **NU_LIMI_CANC_BASE** | INTEGER          | Límite base de mensajes de tipo **CANCELATORIOS**, tomado del campo **NU_LIMI_CANC** en la tabla <a href="index.html#/pages/tables/TA_OPE_MSG_LIMI.md" target="_blank">TA_OPE_MSG_LIMI</a>, esto quiere decir que si en algun momento la configuración de limite cambia, estos valores se van a quedar como historicos. |

🔑 **Indica que el campo forma parte de la clave primaria (PK)**

## Observaciones


