# TIPOS DE MENSAJE EMITIDOS POR EL COMPILADOR
**Descripción:**  
Esta información corresponde a los tipos de mensajes que emite el compilador y el peso asignado cuando se compila un programa

<div class="important">
<b>Importante</b>
 Los pesos de los mensajes mostrados a continuación, se tomaron al dia 2025/10/06, eso quiere decir que si en algun momento estos pesos no son iguales que la base de datos, es porque lo pesos son configurables y pueden cambiar en función del tiempo.
</div>

### Lista de mensajes
| # | CODIGO | DESCRIPCION | CLASIFICACION | PESO |
|---|---------|---------|:---------------:|----------|
| 1 | IGYCB7300-W | THE REMOVED CODE MAY BE UNREACHABLE NOT CHANGE THE OPERATION | <a href="index.html#/pages/classification_msg.md" target="_blank"></a> |0|
| 2 | IGYCB7309-W | POSIBLE LOOP EN UN PARRAFO INVOCADO VIA PERFORM | <a href="index.html#/pages/classification_msg.md" target="_blank">C</a> | 2 |
| 3 | IGYCB7310-W | STOP RUN EN RUTINAS INVOCADAS VIA PERFORM | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 0 |
| 4 | IGYCB7311-W | USO DE DATOS ANTES DE QUE SEA INICIALIZADO | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 5 | IGYCB7312-I | PROCEDURE WAS COPIED ONE OR MORE TIMES TO BE INLINED | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 6 | IGYDS0118-W | CONSTANTES EN AREA "A" | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 7 | IGYDS1027-I | THE "BLOCK CONTAINS" CLAUSE WAS FOUND IN AN "SD" ENTRY. COMENTARIO | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 8 | IGYDS1073-I | REDEFINICION DE DIFERENTE TAMA-ÐO | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 9 | IGYDS1128-W | "AUTHOR" PARAGRAPH COMMENTARY WAS FOUND IN AREA "A". | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 10 | IGYDS1154-W | REDEFINICION DE DIFERENTE TAMA-ÐO | <a href="index.html#/pages/classification_msg.md" target="_blank">P</a> | 3 |
| 11 | IGYDS1158-W | THE INTEGER THAT WAS SPECIFIED WAS INTERPRETED AS MAXI +æ OF ELEMENTS | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 12 | IGYDS1298-I | DEFINICION INCORRECTA DE FD | <a href="index.html#/pages/classification_msg.md" target="_blank">C</a> | 3 |
| 13 | IGYDS1348-W | NUMERO PAR DE DIGITOS EN COMP-3 | <a href="index.html#/pages/classification_msg.md" target="_blank">P</a> | 0 |
| 14 | IGYDS1353-W | DATA ITEM "WI-X" CAUSED THE COMPILER TO ADD 1 SLACK BYTES | <a href="index.html#/pages/classification_msg.md" target="_blank">P</a> | 2 |
| 15 | IGYDS1479-W | I-REMARKS EN AREA A | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 16 | IGYGR1130-I | LLAVE ALTERNA NO DEFINIDA COMO ALFANUMERICA | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 17 | IGYGR1213-I | THE "LABEL" CLAUSE WAS PROCESSED AS COMMENTS FOR THIS FILE DEFINITION. | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 18 | IGYGR1216-I | A "RECORDING MODE" OF "F" WAS ASSUMED FOR FILE | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 19 | IGYGR1241-I | FILE "XXXXXXX" WAS ELIGIBLE FOR THE "AWO" COMPILER OPTION. "APPLY | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 20 | IGYGR1261-I | THE "BLOCK CONTAINS" CLAUSE WAS PROCESSED AS COMMENTS FOR THIS FILE | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 21 | IGYGR1275-I | THE VALUE "X" WAS ASSUMED FOR "BLOCK CONTAINS". | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 22 | IGYGR1299-I | THE FILE WAS PROCESSED AS ORGANIZATION SEQUENTIAL. | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 23 | IGYGR1401-W | NO "SELECT" STATEMENT FOUND FOR FILE. | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 24 | IGYGR1420-W | FD NO ASOCIADO A UN SELECT | <a href="index.html#/pages/classification_msg.md" target="_blank">C</a> | 2 |
| 25 | IGYPS2015-I | UN PARÁMETRO NO FUE USADO | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 26 | IGYPS2020-W | SE REDEFINIÓ UNA VARIABLE SIN USO | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 27 | IGYPS2033-W | PARÁMETRO SIN PASAR AL LLAMADO | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 28 | IGYPS2051-I | SENTENCIA DISPLAY FUERA DE LUGAR | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 29 | IGYPS2065-W | CONDICIÓN SIEMPRE VERDADERA | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 30 | IGYPS2074-I | FIN DE PARÁGRAFO NO USADO | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 31 | IGYPS2080-W | NO SE ALCANZA UN PERFORM | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 32 | IGYPS2099-W | VARIABLE SIN ASIGNACIÓN INICIAL | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 33 | IGYPS2101-W | SE DETECTÓ UN STOP RUN DENTRO DE SUBRUTINA | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 34 | IGYPS2111-W | CAMPO REDEFINIDO SIN USO | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 35 | IGYPS2130-I | EL ARCHIVO NO TIENE REGLA DE SORT | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 36 | IGYPS2140-W | LONGITUD DE CAMPO DIFERENTE EN MOVE | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 37 | IGYPS2152-I | PARÁGRAFO SIN REFERENCIAS | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 38 | IGYPS2188-W | SENTENCIA GO TO SIN REFERENCIA | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 39 | IGYPS2200-I | EL PROGRAMA NO TIENE SECCIÓN LINKAGE | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 40 | IGYPS2212-W | CONSTANTE SIN USO EN EXPRESIÓN | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 41 | IGYPS2224-W | VARIABLE NO REFERENCIADA | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 42 | IGYPS2246-W | PARÁGRAFO SIN EJECUCIÓN | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 43 | IGYPS3324-W | ELEMENTO NO COMPATIBLE EN MOVE | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 44 | IGYSC0185-I | CONSTANTE DUPLICADA EN 88 LEVEL | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 45 | IGYSC0205-W | ESTRUCTURA SIN FINAL "END-IF" | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 46 | IGYSC2025-W | CAMPO DEMASIADO LARGO | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 47 | IGYSC2250-W | SENTENCIA READ SIN AT END | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 48 | IGYSC2251-W | LLAMADO A SUBPROGRAMA NO DECLARADO | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 49 | IGYSC2252-W | PARÁGRAFO SIN END DECLARATION | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 50 | IGYSC2253-W | SENTENCIA INCOMPLETA | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 51 | IGYSC2255-W | VALOR NO COMPATIBLE CON PICTURE | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 52 | IGYSC2256-W | VARIABLE SIN VALOR INICIAL | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 53 | IGYSC2257-W | MOVE ENTRE CAMPOS DE TAMAÑO DISTINTO | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 54 | IGYSC2259-W | ESTRUCTURA IF NO CERRADA | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 55 | IGYSC2262-W | IDENTIFICADOR NO DECLARADO | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 2 |
| 56 | RW-001-I | INICIO DE PROCESO DE ANÁLISIS | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 57 | RW-008-I | FINALIZACIÓN DE PROCESO DE ANÁLISIS | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 58 | RW-019-W | CAMPO SIN DOCUMENTAR | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 59 | RW-030-I | PROCESO EXITOSO | <a href="index.html#/pages/classification_msg.md" target="_blank">I</a> | 0 |
| 60 | RW-031-W | VALOR NULO DETECTADO | <a href="index.html#/pages/classification_msg.md" target="_blank">W</a> | 1 |
| 61 | RW-064-W | LINE ENTRIES NESTED: PREVIOUS LINE ASSUMED LEVEL XX | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 2 |
| 62 | RW-069-W | COLUMN SHOULD BE SUBORDINATE TO LINE: LINE + 0 ASSUMED. | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 4 |
| 63 | RW-070-W | COLUMN ENTRIES FOLLOWING LINE ASSUMED TO BE SUBORDINATE TO IT | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 2 |
| 64 | RW-077-I | PICTURE UNNECESSARY WITH SIMPLE VALUE (FURTHER MESSAGES SUPPRESSED). | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 3 |
| 65 | RW-086-W | CF GROUP REFERS TO IDENTIFIER THAT IS NOT A CONTROL: AFTER-BREAK VALUE | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 0 |
| 66 | RW-094-W | FIRST LINE NUMBER WILL CAUSE GROUP TO BE POSITIONED HIGHER THAN TOP | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 3 |
| 67 | RW-096-W | LINE CLAUSES IN GROUP WILL CAUSE IT TO EXTEND BEYOND BOTTOM LIMIT. | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 2 |
| 68 | RW-107-W | THIS RF GROUP WILL HAVE OWN PAGE: NEXT PAGE ASSUMED | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 2 |
| 69 | RW-110-I | ELEMENTARY ITEM HAS NO SIZE: WILL NOT BE OUTPUT | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 1 |
| 70 | RW-142-W | NO INITIATE STATEMENT FOUND FOR THIS REPORT | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 4 |
| 71 | RW-143-W | NO TERMINATE STATEMENT FOUND FOR THIS REPORT | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 4 |
| 72 | RW-146-I | NO GENERATE ISSUED FOR THIS DETAIL. | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 4 |
| 73 | RW-146-W | NO GENERATE ISSUED FOR THIS DETAIL. | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 4 |
| 74 | RW-151-I | SUPERFLUOUS PERIOD: IGNORED. | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 1 |
| 75 | RW-151-W | SUPERFLUOUS PERIOD: IGNORED. | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 1 |
| 76 | RW-161-1 | SUM WILL BE TOTALLED UPON GENERATION OF DET-LISTA1O DUE TO SOURCE SUM | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 1 |
| 77 | RW-161-I | SUM WILL BE TOTALLED UPON GENERATION OF DET-LISTA1O DUE TO SOURCE SUM | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 1 |
| 78 | RW-162-I | SUM WILL BE TOTALLED ALSO UPON GENERATION OF DETALLE | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 1 |
| 79 | RW-163-W | DATOS NO REFERENCIADOS | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 3 |
| 80 | RW-202-W | NO ASSOCIATED FD: MODE PRNT ASSUMED. | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 4 |
| 81 | RW-213-I | VALUE 132 ASSUMED FOR MAXIMUM COLUMN POSITION. | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 1 |
| 82 | RW-250-W | ITEM OVERLAPS OR IS TO LEFT OF ITEM IN SAME LINE. | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 2 |
| 83 | RW-251-I | COLUMN OVERLAP MAY OCCUR IN THIS LINE. | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 3 |
| 84 | RW-253-1 | FINAL COLUMN POSITION MAY EXCEED LINE LIMIT. | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 2 |
| 85 | RW-253-I | FINAL COLUMN POSITION MAY EXCEED LINE LIMIT. | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 2 |
| 86 | RW-308-W | SCOPE OF OCCURS INCLUDES ABSOLUTE ENTRY: MINIMUM STEP (1) ASSUMED. | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 1 |
| 87 | RW-344-I | MENSAJE PENDIENTE DE DEFINIR EL PESO | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 1 |
| 88 | RW-347-I | LAST BODY GROUP ASSUMED TO BE 55 | <a href="index.html#/pages/classification_msg.md" target="_blank">R</a> | 2 |







