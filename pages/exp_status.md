# ESTADO DE EXPEDIENTES
Aqui de describen los siguientes codigos de estados de expedientes que maneja el OPE

| #  | CO_ESTA_EXPD | Descripción | Comentario |
|----|:--------:|------------|------------|
| 1  | AMP    |            |            |
| 2  | ANU    |Anulado     |            |
| 3  | EMP    |Enviado a migrar a producción|            |
| 4  | EMS    |Enviado a migrar a SIT|            |
| 5  | EMU    |Enviado a migrar a UAT|            |
| 6  | ING    |            |            |
| 7  |<span class="text-error">MEP</span>|<span class="text-error">Migrado con error a producción</span>|Si alguno de los componentes no migró a prod.|
| 8  |<span class="text-error">MES</span>|<span class="text-error">Migrado con error a SIT</span>|Si alguno de los componentes no migró a SIT|
| 9  |<span class="text-error">MEU</span>|<span class="text-error">Migrado con error a UAT</span>|Si alguno de los componentes no migró a UAT|
| 10 |<span class="text-success">MGP</span>|<span class="text-success">Migrado a Producción</span>|Si todos los componentes migrarón OK a producción|
| 11 |<span class="text-success">MGS</span>|<span class="text-success">Migrado a SIT</span>|Si todos los componentes migrarón OK a SIT|
| 12 |<span class="text-success">MGU</span>|<span class="text-success">Migrado a UAT</span>|Si todos los componentes migrarón OK a UAT|
| 13 | RET    |            |            |
| 14 | SMP    |            |            |


<div class="important">
<b>IMPORTANTE:</b>

* En el caso que un expediente no cambie su estado de EMS a MGS o MES (cuando se migra a SIT) o de EMU a MGU o MEU (cuando se migra a UAT), luego que se hayan ejecutado los JOBs de migración, avisar al Administrador para su regularización.
</div>
