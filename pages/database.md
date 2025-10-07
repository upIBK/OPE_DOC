# Descripción
El sistema de control de pases(OPE) trabaja con tablas en el gestor de base de datos DB2, a continuación, se describe las tablas y el funcionamiento en relación al OPE.

## Tablas DB2
Relacion de tablas que interactuan con el OPE.

| N° | Tabla| Recurso | Descripción| 
|----|-------|-------------|---------|
| 1  | <a href="index.html#/pages/tables/TA_OPE_COMP.md" target="_blank">TA_OPE_COMP</a>|CICS| Sirve para la gestion de paquetes de <a href="index.html#/pages/components.md" target="_blank">Recursos CICS</a>, aqui se registran los diferentes <a href="index.html#/pages/components.md" target="_blank">Recursos CICS</a> correspondientes a un determinado paquete. |
| 2  | <a href="index.html#/pages/tables/TA_OPE_CTRL.md" target="_blank">TA_OPE_CTRL</a>| | Sirve para el registro de <a href="index.html#/pages/components.md" target="_blank">componentes</a> mediante la opción 1 del menu principal del OPE |
| 3  | <a href="index.html#/pages/tables/TA_OPE_EXPD.md" target="_blank">TA_OPE_EXPD</a>| | Sirve para la migracion de componentes entre los diferentes entornos: SIT/UAT/PRD |
| 4  | <a href="index.html#/pages/tables/TA_OPE_EXPD_DETA.md" target="_blank">TA_OPE_EXPD_DETA</a>| | Contiene el detalle de la migración de todos los componentes que pertenecen a un determinado expediente. |
| 5  | <a href="index.html#/pages/tables/TA_OPE_FILE.md" target="_blank">TA_OPE_FILE</a>|CICS| Pendiente... |
| 6  | <a href="index.html#/pages/tables/TA_OPE_LOTE.md" target="_blank">TA_OPE_LOTE</a>| | Esta tabla sirve para hacer una compilación o recompilación masiva de 1 o N programas |
| 7  | <a href="index.html#/pages/tables/TA_OPE_MSG_DET.md" target="_blank">TA_OPE_MSG_DET</a>| | Esta tabla contiente todo el detalle de la compilación de un programa, este detalle se muestra uno a uno, por tipo de mensaje. Esta tabla esta estrictamente relacionada con la tabla <a href="index.html#/pages/tables/TA_OPE_MSG_RES.md" target="_blank">TA_OPE_MSG_RES</a>. Esta tabla viene a ser el **DETALLE**, mientras que <a href="index.html#/pages/tables/TA_OPE_MSG_RES.md" target="_blank">TA_OPE_MSG_RES</a> el **MAESTRO** |
| 8  | <a href="index.html#/pages/tables/TA_OPE_MSG_EXCE.md" target="_blank">TA_OPE_MSG_EXCE</a>| | Esta tabla sirve para gestionar excepciones cuando se esta migrando un programa, digamos sin un programa en su compilación se execede los limites mensajes permitidos, se crea una excepción, para omitir todos los mensajes y programa pueda compilar para su posterior migración. |
| 9  | <a href="index.html#/pages/tables/TA_OPE_MSG_LIMI.md" target="_blank">TA_OPE_MSG_LIMI</a>| | Contiene la configuración de los limites perimitidos cuando se ejecuta el procedimiento de omptimización de codigo de los programas, la optimización se enfoca en mensajes que lanza el compilador estos pueden ser: informativos,warnings,performance,rep.writer y cancelatorios.  |
| 10 | <a href="index.html#/pages/tables/TA_OPE_MSG_PESO.md" target="_blank">TA_OPE_MSG_PESO</a>| | Esta tabla alamacena <a href="index.html#/pages/compiler_msg.md" target="_blank">todos los mensajes </a> que emite el compilador al momento de hacer una compilación de un programa. |
| 11 | <a href="index.html#/pages/tables/TA_OPE_MSG_RES.md" target="_blank">TA_OPE_MSG_RES</a>| |Contiene todo el **RESUMEN.** del analisis y optimización de codigo hechas por el compilador al momento de compilar un programa. Esta tabla esta estrictamente relacionada con la tabla <a href="index.html#/pages/tables/TA_OPE_MSG_DET.md" target="_blank">TA_OPE_MSG_DET</a>. Esta tabla viene a ser el **MAESTRO**, mientras que <a href="index.html#/pages/tables/TA_OPE_MSG_DET.md" target="_blank">TA_OPE_MSG_DET</a> el **DETALLE**|
| 12 | <a href="index.html#/pages/tables/TA_OPE_MSG_VALI.md" target="_blank">TA_OPE_MSG_VALI</a>| | Pendiente...|
| 13 | <a href="index.html#/pages/tables/TA_OPE_PARM.md" target="_blank">TA_OPE_PARM</a>| | Pendiente... |
| 14 | <a href="index.html#/pages/tables/TA_OPE_PQTE.md" target="_blank">TA_OPE_PQTE</a>|CICS| Pendiente... |
| 15 | <a href="index.html#/pages/tables/TA_OPE_PQTE_MIGR.md" target="_blank">TA_OPE_PQTE_MIGR</a>|CICS|Pendiente... |
| 16 | <a href="index.html#/pages/tables/TA_OPE_PROC.md" target="_blank">TA_OPE_PROC</a>| | Esta tabla es **IMPORTANTE** almacena, todos los procedimiento que usa el OPE cuando se va se hacer una migración entre ambientes, cada <a href="index.html#/pages/component_type.md" target="_blank">tipo de componente tiene una secuencia de procedimiento diferente</a>. |
| 17 | <a href="index.html#/pages/tables/TA_OPE_PROG.md" target="_blank">TA_OPE_PROG</a>|CICS| Pendiente... |
| 18 | <a href="index.html#/pages/tables/TA_OPE_TIPO.md" target="_blank">TA_OPE_TIPO</a>| | Pendiente... |
| 19 | <a href="index.html#/pages/tables/TA_OPE_TRAX.md" target="_blank">TA_OPE_TRAX</a>|CICS| Pendiente... |
| 20 | <a href="index.html#/pages/tables/TA_OPE_VAR.md" target="_blank">TA_OPE_VAR</a>| | Pendiente... |

### OBSERVACIONES
<div class="important">
<b>1. Recursos CICS:</b>
 Todas las tablas que tienen asignado este recurso, son las unicas tablas que intervienen para la definición, registro y migración CICS
</div>

