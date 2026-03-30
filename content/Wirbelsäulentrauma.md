---
tags:
  - Probleme/Trauma
  - Status/ToDo
  - Fach/OrthoTrauma
  - Fach/Neurologie
  - Flowchart
aliases:
  - Wirbelsäulenverletzung
  - HWS
---
> [!flowchart]-
> ```mermaid
> flowchart TD
>     Start(**Trauma**<br>Generalisiert,<br>Wirbelsäule oder SHT):::mStart --> B{{Hochrisiko-Mechanismus?<br>GCS ≤14?<br>DS/Fehlstellung WS?<br>Neuro-Defizit?}}:::mImportant
>     B -->|Alles Nein| Keine(Keine Immobilisation)
>     Keine --> C{{**Canadian C-Spine-Rule**}}:::mImportant
>     C -->|pos| CT(**CT HWS**<br>bzw. ±BWS/LWS)
>     C -->|neg| KB(Keine WS-Bildgebung)
>     B -->|≥1x Ja| MILS(MILS HWS)
>     MILS --> ABCDE{{**ABCDE-Kritisch?**}}:::mCritical
>     ABCDE -->|Ja| Z(**Zeitkritische Immo**<br>Spineboard + Headblocks) --> CT
>     ABCDE -->|Nein| R(**Reguläre Immo**<br>Vakuummatratze + Headblocks) --> CT
> 
>     click ABCDE "/ABCDE"
>     click C "https://www.mdcalc.com/calc/696/canadian-c-spine-rule"
> ```



> [!stadien] [Canadian C-Spine-Rule](https://www.mdcalc.com/calc/696/canadian-c-spine-rule)
> 
> 