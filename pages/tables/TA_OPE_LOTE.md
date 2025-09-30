# TABLA: TA_OPE_LOTE

**Descripción:**  
Esta tabla sirve para hacer una compilación o recompilación masiva de N programas, es decir, para no estar compilando programas 1 a 1, se crea un lote que contenga los N programas y se envia a compilar o recompilar.

## **Descripción del uso en IDZ**

1. **Primer paso:** en IDZ el usuario debe tener un PDS con la siguiente nomenclatura **[USERID].LIB.LOTE**, ejemplo, si mi usuario es B45617, el PDS debe llamarse: **B45617.LIB.LOTE**  
2. **Segundo paso:** En el PDS creado en el paso 1, crear un member, el member debe tener la siguiente nomenclatura **LOTE[N° DE LOTE[100-900]]**, ejemplo, si quiero crear el lote 101 el member debe llamarse: **LOTE101**. El N° de lote solo debe tener valores entre 100 - 900. **<a href="assets/img/pds_lote_member.png" target="_blank">ver imagen de referencia</a>** 
3. **Tercer paso:** En el member creado en el paso 2, se debe colocar todos los nombres de los programas a compilar, el nombre de los programas, debe seguir la siguiente nomenclatura: **[<a href="index.html#/pages/applications.md" target="_blank">CODIGO DE APLICACION</a>][NOMBRE DE PROGRAMA]**, ejemplo, **OPEOPEB002**, donde **OPE** el codigo de 3 digitos de la aplicación y **OPEB002** es el nombre del programa. **<a href="assets/img/lote_member_content.png" target="_blank">ver imagen de referencia</a>**  



## Estructura de la tabla
| #  | **CAMPO** | Tipo de Dato | Descripción                                    |
|----|-------------|--------------|------------------------------------------------|
| 1  | **CO_APLI** | CHAR(03)     | <a href="index.html#/pages/applications.md" target="_blank">Codigo de Aplicación</a>|
| 2  | **CO_USER** | CHAR(08)     | Usuario que crea el lote, firma mainframe|
| 3  | **FE_LOTE** | CHAR(08)     | Fecha de creación del lote (formato YYYYMMDD)              |
| 4  | **CO_LOTE** | CHAR(03)     | Código identificador del lote, tomando el ejemplo de los pasos en idz, este valor sería 101|
| 5  | **CO_PROG** | CHAR(08)     | Nombre del programa asociado al lote,tomando el ejemplo de los pasos en idz, este valor sería OPEB002|
| 6  | **CO_ORIG** | CHAR(01)     | <a href="index.html#/pages/exp_origen.md" target="_blank">Origen del entorno </a>desde donde esta haciendo la compilación|
| 7  | **NO_LIBP** | CHAR(25)     | Nombre de la librería(PDS) donde se encuentran los componentes que se van a compilar|
| 8  | **DE_MENS** | CHAR(65)     | Descripción del resultado de compilación|
| 9  | **CO_ESTA** | CHAR(01)     | Estado del lote|


## Observaciones
<div class="important">
<b>IMPORTANTE:</b>
Los lotes generados, solo tiene vigencia durante el día, lo ideal es tener un job que borre los lotes generados durante el día.
</div>

