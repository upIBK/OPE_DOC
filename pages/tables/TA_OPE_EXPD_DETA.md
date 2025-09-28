# TABLA: TA_OPE_EXPD_DETA

**Descripción:**  
Esta tabla guarda el detalle de los componetes que pertenecen a un determinado expediente.

## Estructura de la tabla
| #  | Columna          | Tipo de Datos | Descripción |
|----|------------------|---------------|-------------|
| 1  | **CO_APL**       | CHAR(03)      | <a href="index.html#/pages/applications.md" target="_blank">Codigo de Aplicación</a> |
| 2  | **CO_EXPD**      | CHAR(06)      | N° correlativo del expediente es el campo **CO_EXPD** de la tabla  <a href="index.html#/pages/tables/TA_OPE_EXPD.md" target="_blank">TA_OPE_EXPD</a> |
| 3  | **CO_COMP**      | CHAR(08)      | Nombre del componente que fue incluido en el expediente.|
| 4  | **CO_TIPO_COMP** | CHAR(03)      | <a href="index.html#/pages/applications.md" target="_blank">Codigo de Aplicación</a> |
| 5  | **CO_ESTA_COMP** | CHAR(03)      | <a href="index.html#/pages/exp_status.md" target="_blank">Estado del componente</a>| |
| 6  | **FL_RUT**       | CHAR(01)      | <a href="index.html#/pages/flag_rutine.md" target="_blank">Indica si es o no una rutina</a>, esto aplica sobre todo para los programas online, cuando se link del programa, las rutina se anexan al expediente, que cuando se haga a compilación, el programa reconozca dicha rutina. **IMPORTANTE** este valor viene del campo **FL_RUT** de la tabla <a href="index.html#/pages/tables/TA_OPE_CTRL.md" target="_blank">TA_OPE_CTRL</a> cuando se registra el componente|
| 7  | **CO_SEQ_EXPD**  | CHAR(03)      | Indica el <a href="index.html#/pages/exp_deta_sequence.md" target="_blank">orden de compilación</a> del componente |
| 8  | **CO_SUB_TIPO**  | CHAR(01)      | <a href="index.html#/pages/sub_type.md" target="_blank">Sub tipo del componente</a>, este dato esta asociado a la seguridad de almacenamiento del componente en el mainframe. **IMPORTANTE** este valor viene del campo **CO_SUB_TIPO** de la tabla <a href="index.html#/pages/tables/TA_OPE_CTRL.md" target="_blank">TA_OPE_CTRL</a> cuando se registra el componente |
| 9  | **CO_COMP_BATCH**| CHAR(08)      | Hay algunos programas por ejemplo de systematics, durante el paso de linkeditar hacen una doble linkedición, una para programa batch y otra para programa online, **EN ESTE CAMPO VA EL NOMBRE DEL EJECUTABLE DE SALIDA DEL PROGRAMA BATCH**. **IMPORTANTE** este valor viene del campo **CO_COMP_BATCH** de la tabla <a href="index.html#/pages/tables/TA_OPE_CTRL.md" target="_blank">TA_OPE_CTRL</a> cuando se registra el componente |
| 10 | **CO_COMP_ONLIN**| CHAR(08)      | Hay algunos programas por ejemplo de systematics, durante el paso de linkeditar hacen una doble linkedición, una para programa batch y otra para programa online, **EN ESTE CAMPO VA EL NOMBRE DEL EJECUTABLE DE SALIDA DEL PROGRAMA ONLINE** **IMPORTANTE** este valor viene del campo **CO_COMP_ONLIN** de la tabla <a href="index.html#/pages/tables/TA_OPE_CTRL.md" target="_blank">TA_OPE_CTRL</a> cuando se registra el componente |
| 11 | **FE_ESTA_SIT**  | CHAR(08)      | Fecha se que se hizo la migración a SIT (yyyyMMdd) |
| 12 | **HO_ESTA_SIT**  | CHAR(06)      | Hora se que se hizo la migración a SIT |
| 13 | **FE_ESTA_UAT**  | CHAR(08)      | Fecha se que se hizo la migración a UAT |
| 14 | **HO_ESTA_UAT**  | CHAR(06)      | Hora se que se hizo la migración a UAT (HHmmss) |
| 15 | **FE_ESTA_PRD**  | CHAR(08)      | Fecha se que se hizo la migración a PRD |
| 16 | **HO_ESTA_PRD**  | CHAR(06)      | Hora se que se hizo la migración a PRD (HHmmss) |
| 17 | **FE_CREA**      | CHAR(08)      | Fecha de creación (AAAAMMDD) |
| 18 | **HO_CREA**      | CHAR(06)      | Hora de creación (HHMMSS) |
| 19 | **CO_USER_CREA** | CHAR(08)      | Usuario que creó el registro, firma mainframe| |
| 20 | **FE_RECU**      | CHAR(08)      | Fecha de recuperación (AAAAMMDD), este campo se usa cuando por algun motivo se incluye un componente que no se incluyo inicialmente en el expediente |
| 21 | **HO_RECU**      | CHAR(06)      | Hora de recuperación (HHMMSS),este campo se usa cuando por algun motivo se incluye un componente que no se incluyo inicialmente en el expediente |
| 22 | **CO_USER_RECU** | CHAR(08)      | Usuario de recuperación, firma mainframe, este campo se usa cuando por algun motivo se incluye un componente que no se incluyo inicialmente en el expediente |


## Observaciones

