# TABLA: TA_OPE_COMP

**Descripción:**  
Estaba tabla contiene todos los <a href="index.html#/pages/components.md" target="_blank">Recursos CICS</a> resigstrados, estos <a href="index.html#/pages/components.md" target="_blank">Recursos CICS</a> pertenecen a un determinado paquete. Los paquetes se registran en la tabla <a href="index.html#/pages/tables/TA_OPE_PQTE.md" target="_blank">TA_OPE_PQTE</a>.

## Estructura de la tabla
| #  | **CAMPO**       | Tipo      | Descripción                                                                 |
|----|-----------------|-----------|-----------------------------------------------------------------------------|
| 1  | 🔑 **CO_APLI**     | CHAR(3)   | <a href="index.html#/pages/applications.md" target="_blank">Código de la aplicación</a> |
| 2  | 🔑 **CO_PQTE**     | CHAR(6)   | Código del paquete, que proviene de la tabla <a href="index.html#/pages/tables/TA_OPE_PQTE.md" target="_blank">TA_OPE_PQTE</a> |
| 3  | 🔑 **CO_COMP**     | CHAR(8)   | Nombre del componente que se está registrando.                              |
| 4  | **TI_COMP**     | CHAR(4)   | <a href="index.html#/pages/components.md" target="_blank">Código de componente asociado</a> |
| 5  | **CO_ESTA**     | CHAR(3)   | <a href="index.html#/pages/comp_status.md" target="_blank">Código de estado</a> |
| 6  | **FE_REGI**     | CHAR(8)   | Fecha de registro del componente **(yyyyMMdd)**                             |
| 7  | **HO_REGI**     | CHAR(6)   | Hora de registro del componente **(HHmmss)**                                |
| 8  | **CO_USER_REGI**| CHAR(8)   | Usuario que registró el componente, firma mainframe                         |
| 9  | **FE_MODI**     | CHAR(8)   | Fecha de modificación del componente **(yyyyMMdd)**                         |
| 10 | **HO_MODI**     | CHAR(6)   | Hora de modificación del componente **(HHmmss)**                            |
| 11 | **CO_USER_MODI**| CHAR(8)   | Usuario que modificó el componente, firma mainframe                         |
| 12 | **FE_MIGR_SIT** | CHAR(8)   | Fecha de migración a SIT **(yyyyMMdd)**                                     |
| 13 | **HO_MIGR_SIT** | CHAR(6)   | Hora de migración a SIT **(HHmmss)**                                        |
| 14 | **CO_USER_SIT** | CHAR(8)   | Usuario que migró a SIT, firma mainframe                                    |
| 15 | **FE_MIGR_UAT** | CHAR(8)   | Fecha de migración a UAT **(yyyyMMdd)**                                     |
| 16 | **HO_MIGR_UAT** | CHAR(6)   | Hora de migración a UAT **(HHmmss)**                                        |
| 17 | **CO_USER_UAT** | CHAR(8)   | Usuario que migró a UAT, firma mainframe                                    |
| 18 | **FE_MIGR_PRD** | CHAR(8)   | Fecha de migración a PRD **(yyyyMMdd)**                                     |
| 19 | **HO_MIGR_PRD** | CHAR(6)   | Hora de migración a PRD **(HHmmss)**                                        |
| 20 | **CO_USER_PRD** | CHAR(8)   | Usuario que migró a PRD, firma mainframe                                    |

🔑 **Indica que el campo forma parte de la clave primaria (PK)**

## Observaciones

