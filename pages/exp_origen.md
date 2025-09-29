# CODIGOS DE ORIGEN

**Descripción:**  
Esta información describe el entorno desde donde se está migrando, el valor mas importante es la columna ORIGEN, ya que es la se guarda en base de datos

<div class="important">
<b>IMPORTANTE:</b>
El codigo del origen es proporcional, al <a href="index.html#/pages/how_com_migra.md" target="_blank">estado del campo TI_MIGR</a>  de la tabla <a href="index.html#/pages/tables/TA_OPE_EXPD.md" target="_blank">TA_OPE_EXPD</a>, cuando el estado es recompilación(R), el valor del origen es de un entorno superior a desarrollo (S/U/P), cuando el estado es Cambio o Creación (C), el origen siempre es desarrollo(D) 
</div>

| #  | **ORIGEN** | Entorno |
|----|:-------:|-------------|
| 1  | **D** | DESARROLLO |
| 2  | **P** | PRODUCCION |
| 3  | **S** | SIT |
| 4  | **U** | UAT |
