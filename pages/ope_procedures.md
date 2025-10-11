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
| 3 | **CPYBIND** |Para programas que incluyen DB2, copia el plan de un ambiente origen hacia el ambiente destino. El plan copiado en el destino es personalizado|
| 4 | **DELSRC** |Borra el componente de la libreria PDS fuente de la que se está migrando, vale decir, que solo borra alguno tipos de componentes como son: **COPYBOOK,PROGRAMAS,PROCEDIMIENTO**. Esta eliminación se hace para evitar tener las fuentes duplicadas en ambos entornos. **NOTA** hay agunos componentes que no son eliminados y se mantienen en la libreria fuente estos son: **PARAMETROS,JCL,PLAN DB2** estos componentes si deben estar en todos los ambientes.|
| 5 | **OPEP001** |Validación de N° SRT del expediente vs N° de SRT del componente(s) dentro del expediente. Este procedimiento trabaja directamente con el programa **OPEB011** que lo que hace es validar la **NOMENCLATURA DE PROGRAMAS**. <a href="../assets/docs/ope_validador_estandares_ajuste_220816_v1.docx" download="ope_validador_estandares_ajuste_220816_v1.docx"> Ver estandares de nomenclatura</a>|
| 6 | **OPEP002** |Validación de N° SRT del expediente vs N° de SRT del componente(s) dentro del expediente. Este procedimiento trabaja directamente con el programa **OPEB012** que lo que hace es validar la **NOMENCLATURA DE PROCEDIMIENTOS**. <a href="../assets/docs/ope_validador_estandares_ajuste_220816_v1.docx" download="ope_validador_estandares_ajuste_220816_v1.docx"> Ver estandares de nomenclatura</a>|
| 7 | **OPEP003** |Validación de N° SRT del expediente vs N° de SRT del componente(s) dentro del expediente. Este procedimiento trabaja directamente con el programa **OPEB003** que lo que hace es validar la **NOMENCLATURA DE MAPAS**. <a href="../assets/docs/ope_validador_estandares_ajuste_220816_v1.docx" download="ope_validador_estandares_ajuste_220816_v1.docx"> Ver estandares de nomenclatura</a>|
| 8 | **OPEP004** |Validación de N° SRT del expediente vs N° de SRT del componente(s) dentro del expediente. Este procedimiento trabaja directamente con el programa **OPEB004** que lo que hace es validar la **NOMENCLATURA DE COPYS**. <a href="../assets/docs/ope_validador_estandares_ajuste_220816_v1.docx" download="ope_validador_estandares_ajuste_220816_v1.docx"> Ver estandares de nomenclatura</a>|
| 9 | **OPEP005** |Validación de N° SRT del expediente vs N° de SRT del componente(s) dentro del expediente. Este procedimiento trabaja directamente con el programa **OPEB005** que lo que hace es validar la **NOMENCLATURA DE PARAMETROS**. <a href="../assets/docs/ope_validador_estandares_ajuste_220816_v1.docx" download="ope_validador_estandares_ajuste_220816_v1.docx"> Ver estandares de nomenclatura</a>|
| 10 | **OPEP006** |Validación de N° SRT del expediente vs N° de SRT del componente(s) dentro del expediente. Este procedimiento trabaja directamente con el programa **OPEB006** que lo que hace es validar la **NOMENCLATURA DE JCL**. <a href="../assets/docs/ope_validador_estandares_ajuste_220816_v1.docx" download="ope_validador_estandares_ajuste_220816_v1.docx"> Ver estandares de nomenclatura</a>|
| 11 | **OPEP007** |Solo aplica cuando se esta migrando JCL, genera un JOB que envia a INTRDR para actualizar las librerias destino con las variables que le corresponden. <a href="../assets/docs/ope_validador_estandares_ajuste_220816_v1.docx" download="ope_validador_estandares_ajuste_220816_v1.docx"> Ver estandares de nomenclatura</a> en el apartado **Reglas de Customización Automática de JCL**. **Nota** esta customización se entre la libreria  *.LIB.JCL sobre *.LIB.JOB|
| 12 | **OPEP010** |Actualiza a los <a href="index.html#/pages/component_type.md" target="_blank">tipos de componente</a> **003** que corresponde a parametros, se le asigna el prefijo correspondinte al entorno destino. |
| 13 | **OPEP011** |se usar para **subir(ADD)** o **bajar(RETRIEVE)** codigo fuente de un determiando <a href="index.html#/pages/proc_env.md" target="_blank">entorno</a> |
| 14 | **OPEP012** |Actualiza el estado de los componentes y expedientes (TABLA <a href="index.html#/pages/tables/TA_OPE_EXPD.md" target="_blank">TA_OPE_EXPD</a>) al final de cada migración|
| 15 | **OPEP014** |Solo se ejecuta cuando se esta migrando al ambiente de PRODUCCION, crea un job que se ejecuta en el IB33, esto es por que la db existe en ese LPAR|
| 16 | **OPEP017** |Analiza el codigo cobol y emite un reporte en base a la <a href="index.html#/pages/classification_msg.md" target="_blank">clasificación de mensajes</a> establecida.|
| 17 | **OPEP026** |Este procedimiento es similar al procedimiento **OPEP007** pero se ejecuta en cuando se va a migrar a PRODUCCION |
| 18 | **OPEPSYSI** |Genera tarjeta de control, que se usan en pasos posteriores, el contenido de la tarjeta de control puede ser variado en su mayoria son comandos.|
| 19 | **TIPO03** |Copia <a href="index.html#/pages/component_type.md" target="_blank">componentes de tipo</a> **003** ue corresponse a parametros y le asigna el prefijo del ambiente destino.|
| 20 | **TIPO07** |Compila y lenkedita <a href="index.html#/pages/component_type.md" target="_blank">componentes de tipo</a>  **007** correspondiente a **MAPAS**|
| 21 | **TIPO08** |Compila  <a href="index.html#/pages/component_type.md" target="_blank">componentes de tipo</a>  **008** correspondiente a **ASSEMBLER** de tipo batch, este procedimiento no genera archivos de salida, poco uso a nivel compilación.|
| 22 | **TIPO09** |Compila  <a href="index.html#/pages/component_type.md" target="_blank">componentes de tipo</a>  **008** correspondiente a **ASSEMBLER** de tipo online, este procedimiento generas archivos de salida, poco uso a nivel compilación.|
| 23 | **TIPO12** |Compila y lenkedita <a href="index.html#/pages/component_type.md" target="_blank">componentes de tipo</a>  **012** BATCH COBOL|
| 24 | **TIPO13** |Compila y lenkedita <a href="index.html#/pages/component_type.md" target="_blank">componentes de tipo</a>  **013** BATCH RW COBOL|
| 25 | **TIPO14** |Compila y lenkedita <a href="index.html#/pages/component_type.md" target="_blank">componentes de tipo</a>  **014** ONLINE COBOL|
| 26 | **TIPO16** |Compila y lenkedita <a href="index.html#/pages/component_type.md" target="_blank">componentes de tipo</a>  **016** ONLINE COBOL|
| 27 | **TIPO22** |Compila y lenkedita <a href="index.html#/pages/component_type.md" target="_blank">componentes de tipo</a>  **022** BATCH DB2 COBOL|
| 28 | **TIPO23** |Compila y lenkedita <a href="index.html#/pages/component_type.md" target="_blank">componentes de tipo</a>  **023** BATCH DB2 RW COBOL|
| 29 | **TIPO24** |Compila y lenkedita <a href="index.html#/pages/component_type.md" target="_blank">componentes de tipo</a>  **024** ONLINE DB2 COBOL|
| 30 | **TIPO25A** |Se usa para migrar <a href="index.html#/pages/component_type.md" target="_blank">componentes de tipo</a>  **025** PLAN DB2 DE TX|
| 31 | **TIPO25B** |Se usa para hacer BIND del plan generado en el PROC **TIPO25A**. **IMPORTANTE** el bind de los programas online se hace next day|
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

