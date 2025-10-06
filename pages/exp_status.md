# ESTADO DE EXPEDIENTES Y COMPONENTES
Aqui de describen los siguientes codigos de estados de expedientes que maneja el OPE

| #  | CO_ESTA_EXPD | Descripción | Comentario |Secuencia|
|----|:--------:|------------|------------||
| 1  | AMP    |Aprobación de migración a PRD            |            |7|
| 2  | ANU    |Anulado     |Anula un expediente en DES/SIT/UAT            |Eventual (E)|
| 3  | EMP    |Enviado a migrar a producción|            |8|
| 4  | EMS    |Enviado a migrar a SIT|            |2|
| 5  | EMU    |Enviado a migrar a UAT|            |4|
| 6  | ING    |Ingresado            |            |1|
| 7  |<span class="text-error">MEP</span>|<span class="text-error">Migrado con error a producción</span>|Si alguno de los componentes no migró a prod.|9|
| 8  |<span class="text-error">MES</span>|<span class="text-error">Migrado con error a SIT</span>|Si alguno de los componentes no migró a SIT|3|
| 9  |<span class="text-error">MEU</span>|<span class="text-error">Migrado con error a UAT</span>|Si alguno de los componentes no migró a UAT|5|
| 10 |<span class="text-success">MGP</span>|<span class="text-success">Migrado a Producción</span>|Si todos los componentes migrarón OK a producción|9|
| 11 |<span class="text-success">MGS</span>|<span class="text-success">Migrado a SIT</span>|Si todos los componentes migrarón OK a SIT|3|
| 12 |<span class="text-success">MGU</span>|<span class="text-success">Migrado a UAT</span>|Si todos los componentes migrarón OK a UAT|5|
| 13 | RET    |Retornar a desarrollo|            |Eventual (E)|
| 14 | SMP    |Solicitud migración a PRD            |            |6|


<div class="important">
<b>IMPORTANTE:</b>

* En el caso que un expediente no cambie su estado de EMS a MGS o MES (cuando se migra a SIT) o de EMU a MGU o MEU (cuando se migra a UAT), luego que se hayan ejecutado los JOBs de migración, avisar al Administrador para su regularización.
</div>
