# ORDEN DE COMPILACION DE LOS COMPONENTES EN UN EXPEDIENTE
Aqui se muestra, la orden de compilación de los componentes que pertenecen a un expediente, la columna a utilizar es ORDEN.


| #  | **ORDEN** | Tipo | Descripción                      | Lenguaje |
|----|:-----------------:|:---------:|-----------------------------------|:-------------:|
| 1  | **000**| 000     | CABECERA DE JCL-INTRDR            | JCL         |
| 2  | **000**| 100     | CABECERA DE JCL-INTRDR            | JCL         |
| 3  | **010**| 001     | COPYBOOK COBOL                    | COB         |
| 4  | **010**| 002     | PROC                              | JCL         |
| 5  | **010**| 003     | PARM                              | DAT         |
| 6  | **010**| 004     | JCL                               | JCL         |
| 7  | **010**| 005     | COPYBOOK ASSEMBLER                | ASM         |
| 8  | **010**| 006     | MACRO                             | ASM         |
| 9  | **010**| 049     | COPYBOOK CICS COBOL               | COB         |
| 10 | **010**| 050     | COPYBOOK CICS ASM                 | ASM         |
| 11 | **020**| 007     | MAPA                              | BMS         |
| 12 | **020**| 062     | MAPA BMS                          | ASM         |
| 13 | **030**| 063     | ONLINE ASM                        | ASM         |
| 14 | **030**| 064     | ONLINE COBOL                      | COB         |
| 15 | **030**| 065     | BATCH OBJETO ASM                  | ASM         |
| 16 | **030**| 066     | ONLINE OBJETO COBOL               | ASM         |
| 17 | **030**| 067     | BATCH / ONLINE COBOL (APA)        | COB         |
| 18 | **030**| 068     | BATCH / COBOL (APB)               | COB         |
| 19 | **030**| 071     | ONLINE COBOL (APC)                | COB         |
| 20 | **030**| 072     | BATCH-RPI-COBOL                   | COB         |
| 21 | **030**| 046     | BATCH / ONLINE DB2 COBOL EX44R    | COB         |
| 22 | **030**| 047     | BATCH / ONLINE COBOL  EX  45R     | COB         |
| 23 | **030**| 008     | BATCH ASM                         | ASM         |
| 24 | **030**| 009     | ONLINE ASM                        | ASM         |
| 25 | **030**| 012     | BATCH COBOL                       | COB         |
| 26 | **030**| 013     | BATCH RW COBOL                    | COB         |
| 27 | **030**| 014     | ONLINE COBOL                      | COB         |
| 28 | **030**| 016     | ONLINE COBOL                      | COB         |
| 29 | **030**| 022     | BATCH DB2 COBOL                   | COB         |
| 30 | **030**| 023     | BATCH DB2 RW COBOL                | COB         |
| 31 | **030**| 024     | ONLINE DB2 COBOL                  | COB         |
| 32 | **030**| 051     | BATCH RELOCATABLE PROGRAM ASM     | ASM         |
| 33 | **030**| 053     | ONLINE RELOCATABLE PROGRAM ASM    | ASM         |
| 34 | **030**| 054     | BATCH ASM                         | ASM         |
| 35 | **030**| 055     | BATCH COBOL                       | COB         |
| 36 | **030**| 056     | BATCH TABLA ASM                   | ASM         |
| 37 | **030**| 057     | BATCH / ONLINE TABLA ASM          | ASM         |
| 38 | **030**| 058     | BATCH / ONLINE TABLA COB          | COB         |
| 39 | **030**| 059     | ONLINE TABLA ASM                  | ASM         |
| 40 | **030**| 060     | EXCI COBOL                        | COB         |
| 41 | **030**| 061     | BATCH / ONLINE ASM                | ASM         |
| 42 | **030**| 030     | ONLINE COBOL                      | COB         |
| 43 | **030**| 032     | ONLINE ASM                        | ASM         |
| 44 | **030**| 035     | ONLINE COBOL                      | COB         |
| 45 | **030**| 036     | EXCI                              | COB         |
| 46 | **030**| 037     | BATCH COBOL                       | COB         |
| 47 | **030**| 042     | BATCH DB COBOL                    | COB         |
| 48 | **030**| 043     | BATCH COBOL                       | COB         |
| 49 | **030**| 044     | ONLINE DB2 COBOL                  | COB         |
| 50 | **030**| 045     | ONLINE COBOL                      | COB         |
| 51 | **040**| 026     | STORE PROCEDURE                   | COB         |
| 52 | **050**| 025     | PLAN DB2 DE TX                    | DB2         |
