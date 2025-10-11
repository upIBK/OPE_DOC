# TABLA: TA_OPE_PROC

**Descripción:**  
Esta tabla es **IMPORTANTE**, almacena todos los procedimiento que usa el OPE cuando se va se hacer una migración entre ambientes, cada <a href="index.html#/pages/component_type.md" target="_blank">tipo de componente</a> tiene una secuencia de procedimiento diferente.



## Estructura de la tabla
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>CAMPO</th>
      <th>TIPO DE DATO</th>
      <th>DESCRIPCIÓN</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><b>🔑 CO_TIPO</b></td>
      <td>CHAR(03)</td>
      <td><a href="index.html#/pages/component_type.md" target="_blank">Tipo de componente</a></td>
    </tr>
    <tr>
      <td>2</td>
      <td><b>🔑 CO_SUB_TIPO</b></td>
      <td>CHAR(01)</td>
      <td><a href="index.html#/pages/sub_type.md" target="_blank">Sub tipo del componente</a></td>
    </tr>
    <tr>
      <td>3</td>
      <td><b>🔑 CO_AMB</b></td>
      <td>CHAR(03)</td>
      <td><a href="index.html#/pages/proc_env.md" target="_blank">Código de ambiente</a></td>
    </tr>
    <tr>
      <td>4</td>
      <td><b>🔑 TI_MIGR</b></td>
      <td>CHAR(01)</td>
      <td><a href="index.html#/pages/how_com_migra.md" target="_blank">Tipo de Migración</a></td>
    </tr>
    <tr>
      <td>5</td>
      <td><b>🔑 CO_SEQ_PROC</b></td>
      <td>CHAR(03)</td>
      <td><a href="index.html#/pages/proc_sequence.md" target="_blank">Secuencia de procedimiento</a></td>
    </tr>
    <tr>
      <td>6</td>
      <td><b>CO_PROC_NAME</b></td>
      <td>CHAR(08)</td>
      <td>Nombre del procedimiento asociado.</td>
    </tr>
    <tr>
      <td>7</td>
      <td><b>CO_ESTA_PROC</b></td>
      <td>CHAR(01)</td>
      <td><a href="index.html#/pages/proc_status.md" target="_blank">Estado del procedimiento</a></td>
    </tr>
  </tbody>
</table>


🔑 **Indica que el campo forma parte de la clave primaria (PK)**



## Observaciones

