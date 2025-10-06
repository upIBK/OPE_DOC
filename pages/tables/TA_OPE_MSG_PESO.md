# TABLA: TA_OPE_MSG_PESO

**Descripción:**  
Esta tabla alamacena todos los mensajes que emite el compilador al momento de hacer una compilación de un programa.

## Estructura de la tabla
| # | Campo | Tipo de Datos | Descripción |
|---|--------|----------------|--------------|
| 1 | 🔑 **CO_MSG** | CHAR(11) |Codigo del mensaje que emite el compilador|
| 2 | **DE_MSG** | CHAR(80) |Descripcion del mensaje|
| 3 | **CO_CLASI_MSG** | CHAR(01) |<a href="index.html#/pages/classification_msg.md" target="_blank">Clasificación del mensaje</a>|
| 4 | **IL_ESTA_PESO** | CHAR(01) |<a href="index.html#/pages/peso_status.md" target="_blank">Estado del peso</a>|
| 5 | **NU_PESO** | INTEGER |Peso establecido para el mensaje|
| 6 | **FE_MODI** | CHAR(08) |Fecha de modificación del registro, en formato YYYYMMDD|
| 7 | **CO_USER_MODI** | CHAR(08) |Usuario que modificó el registro|


🔑 **Indica que el campo forma parte de la clave primaria (PK)**

## Observaciones
