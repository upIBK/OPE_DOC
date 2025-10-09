# PESO TOTAL DE UN PROGRAMA
El peso total de un programa, esta dado por 5 caracteres, que solo pueden 0 o 1. Estos carcateres estan dado por las <a href="index.html#/pages/classification_msg.md" target="_blank">clasificaciones de mensajes</a> que existen al momento de compilar un programa.


<div class="important">
<b>IMPORTANTE:</b>
 Si ninguna de las <a href="index.html#/pages/classification_msg.md" target="_blank">clasificaciones de mensajes</a> supera el limite permitido el valor del peso es solo un  <b>0</b>
</div>

 **0 =>** Indica que el n° de mensaje no superó el limite permitido <br/>
 **1 =>** Indica que el n° de mensajes superó el limite permitido


### Ejemplo:

| <a href="index.html#/pages/classification_msg.md" target="_blank">Clasificación </a>       | N° de mensajes | Límite | **PESO** |
|-----------------|:---------------:|:------:|:--------:|
| INFORMATIVOS    | 4               | 6      | **0** |
| WARNINGS        | 5               | 8      | **0** |
| PERFORMANCE     | 8               | 7      | **1** |
| REPORT WRITER   | 0               | 10     | **0** |
| CANCELATORIOS   | 9               | 5      | **1** |

   
**RESULTADO FINAL=>** 00101

<div class="warning">
<b>ADVERTENCIA:</b>
 Los limites tomados para este ejemplo fueron del 2025/10/09, estos valores pueden cambiar en funcion del tiempo. Considerarlo en el futuro.
</div>