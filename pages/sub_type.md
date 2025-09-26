# SUB TIPOS DE COMPONENTES 
**Descripción:**  
Esta información es de los sub tipos que puede tener un componente, el sub tipo esta asociado con la **SEGURIDAD DE ALMACENAMIENTO EN EL MAINFRAME**,quiere deecir que algunos componentes seran almacenado de manera protegida, frente a los demas, a continuación se describe lo que representa cada valor.

| # | VALOR | Descripción              |
|---|:-------:|--------------------------|
| 1 | **4** | son lo mq protegidos, consultar con angel    |
| 2 | **D** | Representa el sub tipo mas común, el 90% de los componentes tiene este valor, son **NO PROTEGIDOS** y se guardan en la carpeta **PROGRAM** de endevor|
| 3 | **M** | Para componentes que usar MQ, con programas que trabajan con colas,son **NO PROTEGIDOS** y se guardan en la carpeta **PROGRAM** de endevor|
| 4 | **P** | Los componentes con este sub tipo contienen información sensible, son **PROTEGIDOS** y se guardan en la carpeta **PROTEGI** de endevor|
