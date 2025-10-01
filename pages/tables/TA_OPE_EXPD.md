# TABLA: TA_OPE_EXPD

**Descripción:**  
Esta tabla guarda los expedientes que se usan para la migración de componentes en los diferentes entornos SIT/UAT/PRD. Conceptualmente sería, una vez que se creado el programa(s), se crea un expediente para su migración entre entornos, un expediente puede tener uno o mas recursos.

## Estructura de la tabla
| #  | CAMPO        | Tipo de Dato | Descripción |
|----|----------------|---------------|-------------|
| 1  | 🔑 **CO_APL**     | CHAR(03)      | <a href="index.html#/pages/applications.md" target="_blank">Codigo de Aplicación</a> |
| 2  | 🔑 **CO_EXPD**    | CHAR(06)      | Numero correlativo del expediente, este numero es correlativo por cada <a href="index.html#/pages/applications.md" target="_blank">codigo de aplicación</a> es decir, cada aplicación tiene su correlativo. |
| 3  | **TI_MIGR**    | CHAR(01)      | Describe el <a href="index.html#/pages/how_com_migra.md" target="_blank">tipo de migración de expediente</a>. |
| 4  | **CO_ORIG**    | CHAR(01)      | Describe el <a href="index.html#/pages/exp_origen.md" target="_blank">Código de origen</a>.|
| 5  | **NU_REGS**    | CHAR(04)      | Indica el numero de componentes que hay en el expediente |
| 6  | **CO_SRS**     | CHAR(06)      | Código de SRT generado por rational. **IMPORTANTE** este valor, de acuerdo a la documentación standard, debe coincidir con el valor en el comentario del componente, <a href="assets/img/srt_comp.png" target="_blank">ver imagen de referencia</a>. El valor en el componente es importante, puesto se hace una validación, para que haya coherencia entre el expediente y los componentes que contiene |
| 7  | **CO_WFLW**    | CHAR(06)      | Código de workflow, en la mayoría de casos este valor será  igual a  CO_SRS, si embargo cuando la aplicación es diferente, ambos serán diferentes. |
| 8  | **CO_MOTIVO**  | CHAR(60)      | Motivo por el cual se crea el expediente ejemplo: "AUTOMATICACION PROCESO TOLD"|
| 9  | **CO_USER**    | CHAR(08)      |Usuario que registró el componente, firma mainframe|
| 10 | **CO_USER_NAME** | CHAR(30)    |El campo existe, pero no se usa, actualmente en todos los datos esta vacio|
| 11 | **FE_EXPD_CREA** | CHAR(08)    | Fecha de creación del expediente (AAAAMMDD) |
| 12 | **HO_EXPD_CREA** | CHAR(06)    | Hora de creación del expediente (HHMMSS) |
| 13 | **CO_ESTA_EXPD** | CHAR(03)    | <a href="index.html#/pages/exp_status.md" target="_blank">Estado del expediente</a>|
| 14 | **FE_EXPD_MOD**  | CHAR(08)    | Fecha de modificación (AAAAMMDD) |
| 15 | **HO_EXPD_MOD**  | CHAR(06)    | Hora de modificación (HHMMSS) |
| 16 | **CO_USER_MOD**  | CHAR(08)    | Usuario que modificó el componente, firma mainframe|

🔑 **Indica que el campo forma parte de la clave primaria (PK)**

## Observaciones

