# TABLA: TA_OPE_COMP

**Descripción:**  
Estaba tabla contiene todos los <a href="index.html#/pages/components.md" target="_blank">Recursos CICS</a> resigstrados, estos <a href="index.html#/pages/components.md" target="_blank">Recursos CICS</a> pertenecen a un determinado paquete. Los paquetes se registran en la tabla <a href="index.html#/pages/tables/TA_OPE_PQTE.md" target="_blank">TA_OPE_PQTE</a>.

## Estructura de la tabla
| #  | Nombre        | Tipo    | Descripción                                           |
|----|---------------|---------|------------------------------------------------------ |
| 1  | CO_APLI       | varchar | <a href="index.html#/pages/applications.md" target="_blank">Código de la aplicación</a>|
| 2  | CO_PQTE       | varchar | Código del paquete, que proviene de la tabla <a href="index.html#/pages/tables/TA_OPE_PQTE.md" target="_blank">TA_OPE_PQTE</a>                                     |
| 3  | CO_COMP       | varchar | Nombre del componente que se esta registrando.        |
| 4  | TI_COMP       | varchar | <a href="index.html#/pages/components.md" target="_blank">Tipo de componente</a>                                    |
| 5  | CO_ESTA       | varchar | <a href="index.html#/pages/codigos_estado.md" target="_blank">Código de estado</a>                                      |
| 6  | FE_REGI       | varchar | Fecha de registro del componente  **(yyyyMMdd)**                                  |
| 7  | HO_REGI       | varchar | Hora de registro del componente  **(HHmmss)**                                      |
| 8  | CO_USER_REGI  | varchar | Usuario que registró el componente (FIRMA/MATRICULA)                                  |
| 9  | FE_MODI       | varchar | Fecha de modificación componente  **(yyyyMMdd)**                                |
| 10 | HO_MODI       | varchar | Hora de modificación  del componente  **(HHmmss)**                                   |
| 11 | CO_USER_MODI  | varchar | Usuario que modificó el componente (FIRMA/MATRICULA)                                 |
| 12 | FE_MIGR_SIT   | varchar | Fecha de migración a SIT   **(yyyyMMdd)**                            |
| 13 | HO_MIGR_SIT   | varchar | Hora de migración a SIT   **(HHmmss)**                              |
| 14 | CO_USER_SIT   | varchar | Usuario que migró a SIT  (FIRMA/MATRICULA)                               |
| 15 | FE_MIGR_UAT   | varchar | Fecha de migración a UAT  **(yyyyMMdd)**                               |
| 16 | HO_MIGR_UAT   | varchar | Hora de migración a UAT   **(HHmmss)**                               |
| 17 | CO_USER_UAT   | varchar | Usuario que migró a UAT   (FIRMA/MATRICULA)                              |
| 18 | FE_MIGR_PRD   | varchar | Fecha de migración a PRD  **(yyyyMMdd)**                              |
| 19 | HO_MIGR_PRD   | varchar | Hora de migración a PRD   **(HHmmss)**                              |
| 20 | CO_USER_PRD   | varchar | Usuario que migró a PRD   (FIRMA/MATRICULA)                               |


## Observaciones

