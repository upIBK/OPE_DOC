# TABLA: TA_OPE_CTRL

**Descripción:**  
Estaba tabla contiene todos los <a href="index.html#/pages/components.md" target="_blank">componentes</a> resigstrados a travez de la opcion 1 en el menu principal del OPE.

## Estructura de la tabla
| #  | Nombre     | Tipo | Descripción |
|----|----------------|----------|------------|
| 1  | CO_COMP         | varchar(8)  |Nombre del <a href="index.html#/pages/components.md" target="_blank">componente</a>|
| 2  | CO_TIPO         | varchar(3)  |<a href="index.html#/pages/component_type.md" target="_blank">Tipo de componente</a>|
| 3  | CO_APL          | varchar(3)  |<a href="index.html#/pages/applications.md" target="_blank">Codigo de Aplicación</a>|
| 4  | FE_CREA         | date    |Fecha de creación del componente  **(yyyyMMdd)**|
| 5  | HO_CREA         | time    |Hora de creación del componente  **(HHmmss)**|
| 6  | CO_USER         | varchar(8)  |Usuario que creó el componente, firma mainframe|
| 7  | FL_RUT          | char(1)  |<a href="index.html#/pages/flag_rutine.md" target="_blank">Indica si es o no una rutina</a>, esto aplica sobre todo para los programas online, cuando se link del programa, las rutina se anexan al expediente, que cuando se haga a compilación, el programa reconozca dicha rutina.|
| 8  | CO_SUB_TIPO     | char(1)  |<a href="index.html#/pages/sub_type.md" target="_blank">Sub tipo del componente|</a> 
| 9  | CO_COMP_BATCH   | varchar  |            |
| 10 | CO_COMP_ONLIN   | varchar  |            |
| 11 | TI_MIGR_SIT     | varchar  |            |
| 12 | CO_USER_SIT     | varchar  |            |
| 13 | FE_ESTA_SIT     | varchar  |            |
| 14 | HO_ESTA_SIT     | varchar  |            |
| 15 | CO_EXPD_SIT     | varchar  |            |
| 16 | TI_MIGR_UAT     | varchar  |            |
| 17 | CO_USER_UAT     | varchar  |            |
| 18 | FE_ESTA_UAT     | varchar  |            |
| 19 | HO_ESTA_UAT     | varchar  |            |
| 20 | CO_EXPD_UAT     | varchar  |            |
| 21 | TI_MIGR_PRD     | varchar  |            |
| 22 | CO_USER_PRD     | varchar  |            |
| 23 | FE_ESTA_PRD     | varchar  |            |
| 24 | HO_ESTA_PRD     | varchar  |            |
| 25 | CO_EXPD_PRD     | varchar  |            |


## Observaciones

