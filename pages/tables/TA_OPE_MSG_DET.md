# TABLA: TA_OPE_MSG_DET

**Descripción:**  
Esta tabla contiente todo el detalle de la compilación de un programa, este detalle se muestra uno a uno, por tipo de mensaje. Esta tabla esta estrictamente relacionada con la tabla <a href="index.html#/pages/tables/TA_OPE_MSG_RES.md" target="_blank">TA_OPE_MSG_RES</a>. Esta tabla viene a ser el **DETALLE**, mientras que <a href="index.html#/pages/tables/TA_OPE_MSG_RES.md" target="_blank">TA_OPE_MSG_RES</a> el **MAESTRO**

## Estructura de la tabla
| # | **CAMPO** | Tipo de Datos | Descripción |
|---|--------|----------------|-------------|
| 1 | 🔑 **CO_PROG** | CHAR(08) | Código o  nombre del programa que fue compilado |
| 2 | 🔑 **CO_AMB** | CHAR(01) | <a href="index.html#/pages/msg_resume_env.md" target="_blank">Código de ambiente</a>  |
| 3 | 🔑 **FE_MSG** | CHAR(08) | Fecha del resumen en formato YYYYMMDD  |
| 4 | 🔑 **CO_MSG_SEQ** | INTEGER | Secuencia en la pila de compilación, en lectura de arriba hacia abajo. Confirmar con angel  |
| 5 | **CO_APLI** | CHAR(03) | <a href="index.html#/pages/applications.md" target="_blank">Codigo de Aplicación</a> |
| 6 | **CO_MSG** | CHAR(11) | <a href="index.html#/pages/compiler_msg.md" target="_blank">Codigo de mensaje</a> que emite el comilador al momento de compilar un programa |
| 7 | **DE_MSG_PGM** | CHAR(255) | Descripción o detalle del mensaje del programa |
| 8 | **CO_TIPO_COMP** | CHAR(03) | <a href="index.html#/pages/component_type.md" target="_blank">Tipo de componente</a> |
| 9 | **TI_MIGR** | CHAR(01) | <a href="index.html#/pages/how_com_migra.md" target="_blank">Tipo de Migración</a> |
|10 | **CO_CLASI_MSG** | CHAR(01) | <a href="index.html#/pages/classification_msg.md" target="_blank">Clasificación del mensaje</a> |
|11 | **NU_MSG_PESO** | INTEGER | Peso asignado por codigo de mensaje  |
|12 | **CO_USER_MSG** | CHAR(08) | Usuario que esta generando la compilacióm, firma mainframe. |


🔑 **Indica que el campo forma parte de la clave primaria (PK)**

## Observaciones

