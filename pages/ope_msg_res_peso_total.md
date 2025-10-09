# PESO TOTAL DE UN PROGRAMA
El peso total de un programa, esta dado por 5 caracteres, que solo pueden 0 o 1. Estos carcateres estan dado por las <a href="index.html#/pages/classification_msg.md" target="_blank">clasificaciones de mensajes</a> que existen al momento de compilar un programa.

**IMPORTANTE =>** Si ninguna de las <a href="index.html#/pages/classification_msg.md" target="_blank">clasificaciones de mensajes</a> supera el limite el valor del peso es solo un  0:

 **0 =>** Indica que el n° de mensaje no supero el limite permitido <br/>
 **1 =>** Indica que el n° de mensajes supero el limite permitido


### Ejemplo:

|                 | INFORMATIVOS | WARNINGS | PERFORMANCE | REPORT WRITER | CANCELATORIOS |
|-----------------|:-----------:|:--------:|:-----------:|:-------------:|:-------------:|
| **Límite**          | 6            | 8         | 7            | 10             | 5              |
| **N° de mensajes**  |       4       |    5       |     8         |       0         |      9          |


1. **MENSAJES INFORMATIVOS =>** Limite 6, N° de mensajes 4, el numero de mensajes no superó el limite entonces es un **0**
2. **MENSAJES WARNINGS =>** Limite 8, N° de mensajes 5, el numero de mensajes no superó el limite entonces es un **0**
3. **MENSAJES PERFORMANCE =>** Limite 7, N° de mensajes 8, el numero de mensajes no superó el limite entonces es un **1**
4. **MENSAJES REPORT WRITER =>** Limite 10, N° de mensajes 0, el numero de mensajes no superó el limite entonces es un **0**
5. **MENSAJES CANCELATORIOS =>** Limite 5, N° de mensajes 9, el numero de mensajes no superó el limite entonces es un **1**
   
**RESULTADO FINAL=>** 00101

<div class="important">
<b>IMPORTANTE:</b>
 Los limites tomados para este ejemplo fueron del 2025/10/09, estos valores pueden cambiar en funcion del tiempo. Considerarlo en el futuro
</div>