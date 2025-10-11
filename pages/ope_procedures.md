# OPE PROCEDIMIENTOS
**Descripción:**  
Esta información describe a todos los procedimientos (JCL) que utiliza OPE y su función.

<div class="important">
<b>IMPORTANTE</b>
 El orden de ejecución de cada procedimiento está sujeto al <a href="index.html#/pages/proc_env.md" target="_blank">Código de ambiente</a> y al <a href="index.html#/pages/how_com_migra.md" target="_blank">Tipo de Migración</a>.
</div>

| # | **PROC** | Que Hace? |
|---|------------------|--------------|
| 1 | **BACKUP** |Se usa para hacer backup  antes de hacer una migración, el objetivo es que si sale algo mal con la migración se pueda hacer un **ROLLBACK** con estos backups. **Nota** los backups pueden de ser uno o mas componentes, <a href="index.html#/pages/comp_backup.md" target="_blank">VER AQUI</a> que abarca cada backup.|
| 2 | **COPDRA** |Copia los componentes de un PDS origen a un PDS destino, luego, borra los componentes en el origen, siempre y cuando la copia haya sido exitosa.|
| 3 | **CPYBIND** | |
| 4 | **DELSRC** | |
| 5 | **OPEP001** |Validación de N° SRT del expediente vs N° de SRT del componente(s) dentro del expediente. confirmar con angel ...|
| 6 | **OPEP002** | |
| 7 | **OPEP003** | |
| 8 | **OPEP004** | |
| 9 | **OPEP005** | |
| 10 | **OPEP006** | |
| 11 | **OPEP007** | |
| 12 | **OPEP010** | |
| 13 | **OPEP011** |se usar para **subir(ADD)** o **bajar(RETRIEVE)** codigo fuente de un determiando <a href="index.html#/pages/proc_env.md" target="_blank">entorno</a> |
| 14 | **OPEP012** |Actualiza el estado del expediente (TABLA <a href="index.html#/pages/tables/TA_OPE_EXPD.md" target="_blank">TA_OPE_EXPD</a>) al final de cada migración|
| 15 | **OPEP014** | |
| 16 | **OPEP017** |Analiza el codigo cobol y emite un reporte en base a la <a href="index.html#/pages/classification_msg.md" target="_blank">clasificación de mensajes</a> establecida.|
| 17 | **OPEP026** | |
| 18 | **OPEPSYSI** | |
| 19 | **TIPO03** ||
| 20 | **TIPO07** | |
| 21 | **TIPO08** | |
| 22 | **TIPO09** | |
| 23 | **TIPO12** |Compila y lenkedita <a href="index.html#/pages/component_type.md" target="_blank">componentes de tipo</a>  **012**|
| 24 | **TIPO13** | |
| 25 | **TIPO14** | |
| 26 | **TIPO16** | |
| 27 | **TIPO22** | |
| 28 | **TIPO23** | |
| 29 | **TIPO24** | |
| 30 | **TIPO25A** | |
| 31 | **TIPO25B** | |
| 32 | **TIPO26** | |
| 33 | **TIPO30** | |
| 34 | **TIPO32** | |
| 35 | **TIPO35** | |
| 36 | **TIPO36** | |
| 37 | **TIPO37** | |
| 38 | **TIPO42** | |
| 39 | **TIPO43** | |
| 40 | **TIPO44** | |
| 41 | **TIPO45** | |
| 42 | **TIPO46** | |
| 43 | **TIPO47** | |
| 44 | **TIPO49** | |
| 45 | **TIPO50** | |
| 46 | **TIPO51** | |
| 47 | **TIPO53** | |
| 48 | **TIPO5456** | |
| 49 | **TIPO55** | |
| 50 | **TIPO57** | |
| 51 | **TIPO58** | |
| 52 | **TIPO59** | |
| 53 | **TIPO60** | |
| 54 | **TIPO61** | |
| 55 | **TIPO62** | |
| 56 | **TIPO63** | |
| 57 | **TIPO64** | |
| 58 | **TIPO65** | |
| 59 | **TIPO66** | |
| 60 | **TIPO67A** | |
| 61 | **TIPO67B** | |
| 62 | **TIPO68** | |
| 63 | **TIPO71** | |
| 64 | **TIPO72** | |

