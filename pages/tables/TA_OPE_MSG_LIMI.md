# TABLA: TA_OPE_MSG_LIMI

**Descripción:**  
Contiene la configuración de los limites perimitidos cuando se ejecuta el procedimiento de omptimización de codigo de los programas, la optimización se enfoca en mensajes que lanza el compilador estos pueden ser: informativos,warnings,performance,rep.writer y cancelatorios.

<div class="important">
<b>Importante</b>
 Si durante la compilación de un programa este supera los limites permitidos, la salida del job será con un tipo 16, en estos casos debe optimizar el programa para poder continuar. <a href="assets/img/lim_error.png" target="_blank">Ver imagen de referencia</a>
</div>

## Estructura de la tabla
| #  | **CAMPO**      | Tipo de Dato    | Descripción |
|----|------------------|-----------------|-------------|
| 1  | 🔑 **TI_PROG**      | CHAR(03)        | <a href="index.html#/pages/applications.md" target="_blank">Tipo de programa</a>, sobre cual se hace la optimización |
| 2  | **NU_LIMI_INFO** | INTEGER         | N° límite de **mensajes informativos** que se pueden admitir. |
| 3  | **NU_LIMI_WARN** | INTEGER         | N° límite de **mensajes warnings** que se pueden admitir. |
| 4  | **NU_LIMI_PERF** | INTEGER         | N° límite de **mensajes performace** que se pueden admitir. |
| 5  | **NU_LIMI_RWRI** | INTEGER         | N° límite de **mensajes rep writter** que se pueden admitir. |
| 6  | **NU_LIMI_CANC** | INTEGER         | N° límite de **mensajes cancelatorios** que se pueden admitir. |
| 7  | **NU_PORC_INFO** | DECIMAL(5,2)    | % de ajuste de peso para **mensajes informativos** |
| 8  | **NU_PORC_WARN** | DECIMAL(5,2)    | % de ajuste de peso para **mensajes warnings** |
| 9  | **NU_PORC_PERF** | DECIMAL(5,2)    | % de ajuste de peso para **mensajes performance** |
| 10 | **NU_PORC_RWRI** | DECIMAL(5,2)    | % de ajuste de peso para **mensajes rep writter** |
| 11 | **NU_PORC_CANC** | DECIMAL(5,2)    | % de ajuste de peso para **mensajes cancelatorios** |
| 12 | **NU_PORC_LIN1** | DECIMAL(5,2)    | % de ajuste de linea, este dato esta asociado al numero de lineas que tiene un programa.|
| 13 | **NU_PORC_LIN2** | DECIMAL(5,2)    | % de ajuste de linea, este dato esta asociado al numero de lineas que tiene un programa. |
| 14 | **NU_PORC_LIN3** | DECIMAL(5,2)    | % de ajuste de linea, este dato esta asociado al numero de lineas que tiene un programa. |
| 15 | **NU_PORC_LIN4** | DECIMAL(5,2)    | % de ajuste de linea, este dato esta asociado al numero de lineas que tiene un programa. |
| 16 | **NU_PORC_LIN5** | DECIMAL(5,2)    | % de ajuste de linea, este dato esta asociado al numero de lineas que tiene un programa. |
| 17 | **NU_LINE_LIN1** | INTEGER         | Este es el **PRIMER NIVEL** e indica el n° lineas que puede tener un programa, este es el rango maximo es decir, si un programa tiene un numero de lineas < a este valor,no tendra ajuste alguno. **IMPORTANTE** ver que es el unico rango, que si es menor no recibe descuentos se asigna 100%, el desarrollador tiene que corregir todo|
| 18 | **NU_LINE_LIN2** | INTEGER         | Este es el **SEGUNDO NIVEL** e indica el n°lineas que puede tener un programa, este es el rango maximo es decir, si un programa tiene un numero de lineas < a este valor, se aplicará el % de ajuste del campo **NU_PORC_LIN1** |
| 19 | **NU_LINE_LIN3** | INTEGER         | Este es el **TERCER NIVEL** e indica el n°lineas que puede tener un programa, este es el rango maximo es decir, si un programa tiene un numero de lineas < a este valor, se aplicará el % de ajuste del campo **NU_PORC_LIN2** |
| 20 | **NU_LINE_LIN4** | INTEGER         | Este es el **CUARTO NIVEL** e indica el n° lineas que puede tener un programa, este es el rango maximo es decir, si un programa tiene un numero de lineas < a este valor, se aplicará el % de ajuste del campo **NU_PORC_LIN3** |
| 21 | **NU_LINE_LIN5** | INTEGER         | Este es el **QUINTO NIVEL** e indica el n° lineas que puede tener un programa, este es el rango maximo es decir, si un programa tiene un numero de lineas < a este valor, se aplicará el % de ajuste del campo **NU_PORC_LIN4**. **A considerar**, obervar que hasta este punto no se usado el **NU_PORC_LIN5**, **el quinto nivel (NU_PORC_LIN5) solo se aplica cuando el n° de lineas del programa supera al quinto nivel** |

🔑 **Indica que el campo forma parte de la clave primaria (PK)**

## <div class="text-sucess">SALIDA DE UN PROGRAMA QUE FUE COMPILADO Y ANALIZADO</div>

**<a href="assets/img/opebres_log.png" target="_blank">ver imagen de referencia</a>**

**Información de log**


<pre>
<span title="Inicio del proceso y nombre del programa">** INICIO PROGRAMA OPEBRES **</span>
<span title="Fecha de ejecución del proceso en formato YYYYMMDD">FECHA DE PROCESO:20250929</span>
<span title="Programa ejecutado, su tipo y usuario">PROGRAMA EN PROCESO:CDCINPLZ,TIPO:012,USER:B45617</span>
<span title="Número de mensajes a depurar">MENSAJES A DEPURAR:000000000</span>
----------------------------------------------------------
<span title="Ajustes según el tipo de programa (ejemplo: batch)">---AJUSTES-POR-TIPO-DE-PROGRAMA-(BAT)----------------------</span>
<span title="%AJ.PESO: de izquierda a derecha ajustes para msg: INFORMATIVOS/WARNINGS/PERFORMANCE/REP.WTRITER/CANCELATORIOS. en este ejmplo para todos es 100, pero no es siempre asi">%AJ.PESO: 100.00/ 100.00/ 100.00/ 100.00/ 100.00</span>
<span title="RNG.LINE: de izquierda derecha los niveles: NIVEL 1/NIVEL 2/NIVEL 3/NIVEL 4/NIVEL 5">RNG.LINE:0000001000/0000002000/0000005000/0000010000/0000050000</span>
<span title="%AJ.LINE: de izquierda a derecha % de dscto, depende a la cantidad de lineas de programa">%AJ.LINE: 040.00/ 035.00/ 030.00/ 025.00/ 020.00</span>
----------------------------------------------------------
<span title="Total de líneas procesadas y % de ajuste aplicado">NRO DE LINEAS DEL PROGRAMA:0000000209,% DE AJUSTE:00100%</span>
-------------------------------------------------
<span title="Análisis de límites para el programa en ejecución">ANALISIS-LIMITES,PROG:CDCINPLZ</span>
-------------------------------------------------
<span title="Tabla de detalle por tipo de mensaje">-TIPO MENSAJE--PESO-ACUM  DSCT.TIPO  DSCT.LINE  LIMITE   OBSERVACION      EXCEPCIONES</span>
<span title="Mensajes informativos con acumulados y límites"> INFORMATIVOS  0000000000   000.00     000.00   0000000006</span>
<span title="Mensajes de advertencia con acumulados y límites"> WARNINGS      0000000000   000.00     000.00   0000000008</span>
<span title="Mensajes de performance con acumulados y límites"> PERFORMANCE   0000000000   000.00     000.00   0000000007</span>
<span title="Mensajes de reescritura con acumulados y límites"> REP.WRITTER   0000000000   000.00     000.00   0000000010</span>
<span title="Mensajes cancelatorios, exceden límite"> CANCELATORIOS 0000000021   021.00     021.00   0000000005 EXCEDE LIMITE</span>
-------------------------------------------------
<span title="Resultado final: el proceso se cancela por exceso de peso">*** CANCELA POR EXCESO DE PESO LIMITE ***</span>
</pre>

**Reemplazando valores**
1. No vamos a ubicar con la cantidad de mensajes que tienen valor, en este caso los cancelatorios que son 21 (columna PESO-ACUM), esto quiere decir que le compilador detectó, 21 mensajes de este tipo.
2. Calcular la columna DSCT.TIPO, para esto tenemos que multiplicar la cantidad de mensajes encontrados(21) por el porcentaje de ajuste de peso establecido / 100, si miramos en la linea %AJ.PESO de log, podemos ver que para mensajes cancelatorios el % de AJ.PESO, es 100 entonces:
   21 * (100 / 100) = 21 , esto quiero decir que nuestro programa no recibió descuento alguno y el desarrollador tiene que corregir dichos logs.
   
   **DSCT.TIPO=21**

3. Calcular la columa DSCT.LINE , para calcular esta columna tenemos que ver el %AJ.LINE que recibira nuestro programa, y esto es relativo al numero de lineas que tiene, en este ejemplo el programa  CDCINPLZ tiene,209 lineas de codigo,eso quiere decir que esta en el  **PRIMER NIVEL**, por lo tanto no tendra descuento y se tiene que refactorizar el 100% del programa, entonces el %AJ.LINE es 100. **IMPORTANTE** la columna  DSCT.LINE , se calcula en base a resultado obtenido en  DSCT.TIPO en el paso 2. Entonces DSCT.LINE = DSCT.TIPO * (100/100) = 21.
   
   **DSCT.LINE=21**


**Conclusión**
  El limite permitido para mensajes cancelatorios es 5 (COLUMNA LIMITE), y aplicando la formula, siguen siendo 21, entonces este programa se execede el limite la salida es un ABEND 016.
