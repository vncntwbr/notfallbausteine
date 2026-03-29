---
tags:
  - Fach/Kardiologie
  - Status/Started
  - Diagnosen
title: |-
  Vorhofflimmern (VHF) &
  Vorhofflattern (VHFla)
ICD: I48
---
> [!flowchart]+
> ```mermaid
> flowchart TD
>     Start(**TAA VHF**) --> ABCDE{{"**ABC-Instabil?**<br>Schock, Vigilanz↓, AP, Lungenödem"}}:::mCritical
>     ABCDE -->|Ja| Bedarf{{**Bedarfstachykardie?**}}:::mImportant
>     ABCDE -->|Nein| D[End]
>     Bedarf -->|Ja| U(**Ursache behandeln**<br>VHF/Bedarfstachykardie akzeptieren)
>     C --> D
>     
>     click ABCDE "/ABCDE"
> ```


> [!danger]+ Rapid Reference
> 1. **VHF Ursache der Instabilität?** → [[eKV]] (nicht bei kompensatorischem VHF z.B. [[Sepsis]])
> 	- HF >>150[^4]
> 	- New-onset VHF
> 	- Atrial Kick dependent Erkrankungen ([[Pulmonale Hypertonie]], [[AS]], MS, HFpEF)
> 	- FBI ([[WPW]]+VHF)
> 2. **Frequenzkontrolle vs. Rhythmuskontrolle**
> 	- bei oligosympt. Älteren eher nur Frequenzkontrolle
> 3. **[[eKV]] bei stabilem VHF möglich?**
> 	- [[AK]] >3 Wochen (Adhärenz? Bei VKA: INR >2.0) oder
> 	- Onset <12h oder Onset <48h + CHADS65 ≤2 (HFrEF, HTN, ≥65 J., [[Diabetes]]) oder
> 	- [[TEE]] LAA-Thrombus negativ
> 4. **[[Elektrolyte]]?**
> 5. **[[Volumenstatus]]?**
> 6. **Sympathikotonus?**
> 7. **Medikamente/[[Intox]]?**

> [!stadien] [CHA2DS2VA](https://www.mdcalc.com/calc/10583/cha2ds2-va-score-atrial-fibrillation-stroke-risk)

> [!workup]+
> - **[[Labor]]:** [[HypoK+]]? [[HypoMg2+]]? [[Hyperthyreose]]? ggf. [[Digitalis]]-Spiegel?

> [!management]+ Antikoagulation bei VHF
> - **Indikation [[AK]] bei CHA2DS2VA-Score ≥2 Pkt.**
> 	- Chronische [[Herzinsuffizienz]]
> 	- [[Hypertonie]]
> 	- Alter >75 J. (2 Pkt.)
> 	- [[Diabetes]]
> 	- [[Stroke]] / TIA / Thromboembolie (2 Pkt.)
> 	- Vaskuläre Vorerkrankung: [[KHK]], [[pAVK]]
> 	- Alter 65-75 J. 
> - **Indikation [[AK]]:** HCM oder kardiale Amyloidose
> - **Indikation VKA:** Valvuläres [[VHF]] (Mitralklappenstenose ≥2° oder MK-Ersatz)
> - **Nach [[eKV]]:** CHA2DS2VA ≥1 oder VHF >24h: [[AK]] 4 Wochen, dann Reevaluation
> - HAS-BLED nicht mehr empfohlen


- **T**
	- [[eKV]]
	- [[MgSO4]] 2 g empirisch
	- *[[AK]]:* DOAK min. 4 Wochen, länger wenn CHADS-65 pos.


## Antikoagulation
![[Pasted image 20251103072621.png]]
> [!note]- Textbaustein Diagnose VHF
> ```
> Aktuell: Intermittierendes/Persistierendes/Permanentes, bradykardes/normofrequentes/tachykardes Vorhofflimmern (VHF), ED ###
> - ##.##.####: CHA2DS2-VASc: ###
> - ##.##.####: eKV
> - ##.##.####: Ablation
> - OAK mit 
> ```

## Literatur
- [S3-Leitlinie Vorhofflimmern](https://register.awmf.org/de/leitlinien/detail/019-014)
- Koffein verursacht wahrscheinlich zumindest kein VHF, in 1 RCT sogar geringere Recurrence[^5]

[^1]: Stiell, I.G., de Wit, K., Scheuermeyer, F.X. _et al._ 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. _Can J Emerg Med_ **23**, 604–610 (2021). https://doi.org/10.1007/s43678-021-00167-y

[^2]: CHADS-65: Chron. HFrEF, [[Hypertonie]], Alter ≥65, Diabetes

[^4]: HF 120-180 normalerweise maximal ohne [[AV-Block]] / neg. Dromotropie, bei >200/FBI DD VHF + WPW


[^5]: Wong CX. Caffeinated Coffee Consumption or Abstinence to Reduce Atrial Fibrillation: The DECAF Randomized Clinical Trial. JAMA. 2025 Nov 9:e2521056. doi: 10.1001/jama.2025.21056. Epub ahead of print. PMID: 41206802; PMCID: PMC12598581.
