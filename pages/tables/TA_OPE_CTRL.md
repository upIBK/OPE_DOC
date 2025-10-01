# TABLA: TA_OPE_CTRL

**Descripción:**  
Estaba tabla contiene todos los <a href="index.html#/pages/components.md" target="_blank">componentes</a> resigstrados a travez de la opcion 1 en el menu principal del OPE.

## Estructura de la tabla
| #  | CAMPO            | Tipo     | Descripción |
|----|------------------|----------|-------------|
| 1  | 🔑 **CO_COMP**       | CHAR(8)  |Nombre del <a href="index.html#/pages/components.md" target="_blank">componente</a>|
| 2  | **CO_TIPO**       | CHAR(3)  |<a href="index.html#/pages/component_type.md" target="_blank">Tipo de componente</a>|
| 3  | **CO_APL**        | CHAR(3)  |<a href="index.html#/pages/applications.md" target="_blank">Codigo de Aplicación</a>|
| 4  | **FE_CREA**       | CHAR(8)  |Fecha de creación del componente  **(yyyyMMdd)**|
| 5  | **HO_CREA**       | CHAR(6)  |Hora de creación del componente  **(HHmmss)**|
| 6  | **CO_USER**       | CHAR(8)  |Usuario que creó el componente, firma mainframe|
| 7  | **FL_RUT**        | CHAR(1)  |<a href="index.html#/pages/flag_rutine.md" target="_blank">Indica si es o no una rutina</a>, esto aplica sobre todo para los programas online, cuando se link del programa, las rutina se anexan al expediente, que cuando se haga a compilación, el programa reconozca dicha rutina.|
| 8  | **CO_SUB_TIPO**   | CHAR(1)  |<a href="index.html#/pages/sub_type.md" target="_blank">Sub tipo del componente</a>, este dato esta asociado a la seguridad de almacenamiento del componente en el mainframe.| 
| 9  | **CO_COMP_BATCH** | CHAR(8)  |Hay algunos programas por ejemplo de systematics, durante el paso de linkeditar hacen una doble linkedición, una para programa batch y otra para programa online, **EN ESTE CAMPO VA EL NOMBRE DEL EJECUTABLE DE SALIDA DEL PROGRAMA BATCH**|
| 10 | **CO_COMP_ONLIN** | CHAR(8)  |Hay algunos programas por ejemplo de systematics, durante el paso de linkeditar hacen una doble linkedición, una para programa batch y otra para programa online, **EN ESTE CAMPO VA EL NOMBRE DEL EJECUTABLE DE SALIDA DEL PROGRAMA ONLINE**|
| 11 | **TI_MIGR_SIT**   | CHAR(1)  |Describe <a href="index.html#/pages/how_com_migra.md" target="_blank">como migró el componente</a> la ultima vez a SIT, importante saber que con cada migración de expediente, este valor se sobreescribe.|
| 12 | **CO_USER_SIT**   | CHAR(8)  |Indica que usuario hizo la migración a SIT, importante saber que con cada migración de expediente, este valor se sobreescribe.|
| 13 | **FE_ESTA_SIT**   | CHAR(8)  |Fecha se que se hizo la migración a SIT (yyyyMMdd), importante saber que con cada migración de expediente, este valor se sobreescribe.|
| 14 | **HO_ESTA_SIT**   | CHAR(6)  |Hora se que se hizo la migración a SIT (HHmmss), importante saber que con cada migración de expediente, este valor se sobreescribe.|
| 15 | **CO_EXPD_SIT**   | CHAR(6)  |Codigo del ultimo expediente que migró SIT, importante saber que con cada migración de expediente, este valor se sobreescribe.|
| 16 | **TI_MIGR_UAT**   | CHAR(1)  |Describe <a href="index.html#/pages/how_com_migra.md" target="_blank">como migró el componente</a> la ultima vez a UAT, importante saber que con cada migración de expediente, este valor se sobreescribe.|
| 17 | **CO_USER_UAT**   | CHAR(8)  |Indica que usuario hizo la migración a UAT, importante saber que con cada migración de expediente, este valor se sobreescribe.|
| 18 | **FE_ESTA_UAT**   | CHAR(8)  |Fecha se que se hizo la migración a UAT (yyyyMMdd, importante saber que con cada migración de expediente, este valor se sobreescribe.)|
| 19 | **HO_ESTA_UAT**   | CHAR(6)  |Hora se que se hizo la migración a UAT (HHmmss), importante saber que con cada migración de expediente, este valor se sobreescribe.|
| 20 | **CO_EXPD_UAT**   | CHAR(6)  |Codigo del ultimo expediente que migró UAT, importante saber que con cada migración de expediente, este valor se sobreescribe.|
| 21 | **TI_MIGR_PRD**   | CHAR(1)  |Describe <a href="index.html#/pages/how_com_migra.md" target="_blank">como migró el componente</a> la ultima vez a PRD, importante saber que con cada migración de expediente, este valor se sobreescribe.|
| 22 | **CO_USER_PRD**   | CHAR(8)  |Indica que usuario hizo la migración a PRD, importante saber que con cada migración de expediente, este valor se sobreescribe.|
| 23 | **FE_ESTA_PRD**   | CHAR(8)  |Fecha se que se hizo la migración a PRD (yyyyMMdd), importante saber que con cada migración de expediente, este valor se sobreescribe.|
| 24 | **HO_ESTA_PRD**   | CHAR(6)  |Hora se que se hizo la migración a PRD (HHmmss), importante saber que con cada migración de expediente, este valor se sobreescribe.|
| 25 | **CO_EXPD_PRD**   | CHAR(6)  |Codigo del ultimo expediente que migró PRD, importante saber que con cada migración de expediente, este valor se sobreescribe.|

🔑 **Indica que el campo forma parte de la clave primaria (PK)**

## Observaciones

