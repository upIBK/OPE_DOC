# TABLA: TA_OPE_MSG_EXCE

**Descripción:**  
Esta tabla sirve para gestionar excepciones cuando se esta migrando un programa, digamos sin un programa en su compilación se execede los limites mensajes permitidos, se crea una excepción, para omitir todos los mensajes y programa pueda compilar para su posterior migración.

**Casos mas comunes de cuando se crean excepciones**
1. Digamos que un desarrollador, crea o modifica un programa que consume un recurso externo (copybook) que esta causando que el compilador genere mensajes que no permiten la migración, se crea una execepción para evitar estos mensajes.

## Estructura de la tabla
| # | Campo | Tipo de Datos | Descripción |
|---|--------|----------------|--------------|
| 1 | 🔑 **CO_PROG** | CHAR(08) |Codigo o nombre de programa|
| 2 | 🔑 **TI_EXCE** | CHAR(01) |<a href="index.html#/pages/classification_msg.md" target="_blank">Clasificación del mensaje</a> sobre cual se hace la execepción.|
| 3 | **IL_ESTA_EXCE** | CHAR(01) |<a href="index.html#/pages/exception_status.md" target="_blank">Estado de la excepción</a>|
| 4 | **CO_TIPO_COMP** | CHAR(03) |preguntar a angel.. |
| 5 | **FE_SOLI** | CHAR(08) |Fecha en la solicita la excepción, en formato YYYYMMDD|
| 6 | **CO_USER_SOLI** | CHAR(08) |Usuario que solicita la excepción|
| 7 | **FE_COMPROMISO** | CHAR(08) |Fecha limite hasta cuando estará vigente la excepción|
| 8 | **CO_MOTI** | CHAR(120) |Motivo por el cual se solicta la excepción|
| 9 | **FE_MODI** | CHAR(08) |Campo de audtoria, cuando se modica el registro, en formato YYYYMMDD |
| 10 | **CO_USER_MODI** | CHAR(08) |Usuario que modifica el registro|

🔑 **Indica que el campo forma parte de la clave primaria (PK)**

## Observaciones

