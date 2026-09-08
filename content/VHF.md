---
tags:
  - Fach/Kardiologie
  - Status/Started
  - Diagnosen
  - Flowchart
  - Interventionen/EKG
title: |-
  Vorhofflimmern (VHF) &
  Vorhofflattern (VHFla)
ICD: I48
aliases:
  - Vorhofflimmern
  - VHFla
  - Vorhofflattern
config:
  flowchart:
    defaultRenderer: elk
---
> [!flowchart]-
> ```mermaid
> flowchart TD
>     Start(**Tachykardes VHF/VHFla**):::mStart --> ABCDE{{"**ABC-Instabil?**<br>Schock, Vigilanz↓, AP, Lungenödem"}}:::mCritical
>     ABCDE -->|Ja| Bedarf{{**Bedarfstachykardie?**}}:::mImportant
>     Bedarf -->|Nein| eKV(**elektr. Kardioversion**<br>in Analgosedierung)
>     eKV --> SR{{**Sinusrhythmus?**}}
>     SR --> |Nein| Korrektur("Patches optimieren (AP),<br>Elyte hochnormal,<br>1x MgSO4 2g i.v.",<br>ggf. Amiodaron 150 mg KI)
>     Korrektur --> |max. 3x wiederholen<br>danach: RS Kardiologie| eKV
>     Bedarf -->|Ja| U(**Ursache behandeln**<br>Bedarfstachykardie<br>akzeptieren)
>     
>     ABCDE --> |Nein| Bedarf2{{**Bedarfstachykardie?**}}:::mImportant
>     Bedarf2 -->|Ja| U
>     Bedarf2 -->|Nein|HF{{**HF ≥110/min**}}
>     HF --> |Ja| FK(**Frequenzkontrolle**<br>Betablocker titriert p.o.)
>     HF --> |Nein| Dispo(**Disposition**<br>ambulant möglich?)
>     FK --> HF
>     
>     click ABCDE "/ABCDE"
>     click eKV "/eKV"
> ```

> [!danger]+ Rapid Reference Instabiles VHF
> 1. **VHF Ursache der Instabilität?** → [[eKV]] (nicht bei kompensatorischem VHF z.B. [[Sepsis]])
> 	- HF >>150[^4]
> 	- New-onset VHF
> 	- Atrial Kick dependent Erkrankungen ([[Pulmonale Hypertonie]], [[AS]], MS, HFpEF)
> 	- FBI ([[WPW]]+VHF)
> 2. **Frequenzkontrolle vs. Rhythmuskontrolle**
> 	- bei oligosympt. Älteren eher nur Frequenzkontrolle
> 3. **[[eKV]] bei stabilem VHF möglich?**
> 	- [[AK]] >3 Wochen (Adhärenz? Bei VKA: INR >2.0) oder
> 	- Onset <12h oder Onset <48h + CHADS65 ≤2 (HFrEF, [[HTN]], ≥65 J., [[Diabetes]]) oder
> 	- [[TEE]] LAA-Thrombus negativ
> 4. **[[Elektrolyte]]?**
> 5. **[[Volumenstatus]]?**
> 6. **Sympathikotonus?**
> 7. **Medikamente/[[Intox]]?**

> [!dd]+ DD TAA Trigger (PIRATES)
> Ursache aggressiv behandeln, Bedarfstachykardie akzeptieren
> - P–[[LAE|Pulmonary Embolism]]
> - I–[[ACS|Ischämie]]
> - R–Rheumatisches Fieber
> - A–[[Alkohol]], [[Anämie]]
> - T–[[Hyperthyreose|Thyreotoxikose]], [[Intox|Toxisch]]
> - E–[[Elektrolyte]] (insb. [[HypoK+]], [[HypoMg2+]]), Exsikkose
> - S–[[Sepsis]], Stress

> [!stadien]- Symptomlast n. EHRA
> - EHRA 1 asymptomatisch
> - EHRA 2a ADL nicht beeinflusst
> - EHRA 2b ADL nicht beeinflusst, aber Pat. fühlt sich belastet
> - EHRA 3 ADL beeinträchtigt
> - EHRA 4 Normale ADL nicht mehr möglich

> [!stadien] [?Antikoagulation mit CHA2DS2VA](https://www.mdcalc.com/calc/10583/cha2ds2-va-score-atrial-fibrillation-stroke-risk)

> [!workup]-
> - *Ätiologie:* 
> 	- [[Herzinsuffizienz]]
> 	- Ischämisch ([[KHK]])
> 	- [[Kardiomyopathie]]
> 	- [[Elektrolyte]] (insb. [[HypoK+]])
> 	- [[RHB]] ([[LAE]], [[COPD]], [[Pulmonale Hypertonie]])
> 	- [[Perimyokarditis|Myokarditis]]
> 	- **Valvuläres VHF:** insb. [[Mitralklappenstenose]]
> 	- **Holiday-Heart-Syndrom:** Paroxysmales VHF nach Alkoholexzess
> - **[[Labor]]:** [[HypoK+]]? [[HypoMg2+]]? [[Hyperthyreose]]? ggf. [[Digitalis]]-Spiegel?

> [!management]+ Frequenzkontrolle
> - **[[MgSO4]]** 2g in [[Volumentherapie|VEL]]
> - **[[HypoK+|Kalium]]** hochnormal >4.0 mmol/l
> - **[[Betablocker]]**
> 	- *KI:* Hausmed Verapamil, LVEF <30%, [[Hypotonie]], schweres Asthma
> 	- Metoprolol 2.5-5.0 mg-weise i.v. bis ∑15 mg
> 	- plus Metoprolol 47.5-95 mg p.o. (oder bei Hausmed Bisoprolol 5 mg p.o.) zur Prävention Rebound
> 	- Option Esmolol 0.5 mg/kg langsam i.v. + [[Perfusor]] 50-300 μg/kg/min (kürzere HWZ bei Instabilität)
> - **Alternative [[Calciumantagonisten]]** bei KI [[Betablocker]]
> 	- *KI:* Hausmed Betablocker, LVEF <40%, [[Schock|Hypotonie]]
> 	- Verapamil 2.5 mg-weise i.v. bis ∑10 mg
> 	- Last Resort Kombination mit Betablocker unter ITS-Monitoring (entgegen Fachinformation, klare KI, in RS OA)
> - **Alternative [[Digitalis]]** (z.B. Hypotonie, stark reduzierte LVEF)
> 	- *KI:* [[HypoK+]]
> 	- Digoxin (Lanicor) 0.25 mg langsam i.v. 1x wdh nach 4h


> [!management]+ Antikoagulation bei VHF
> - **Indikation [[AK]] bei CHA2DS2VA-Score ≥2 Pkt.**
> 	- Chronische [[Herzinsuffizienz]]
> 	- [[HTN]]
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


> [!note]- Textbaustein Stationär
> ```
> Zusammenfassend Tachyarrhythmia absoluta bei ### ED/Rezidiv eines Vorhofflimmerns. Kontinuierliches Monitoring. Substitution von Kalium und Magnesium. Frequenzkontrolle mit kumulativ ### mg Metoprolol ### i.v./p.o., hierunter HF von ### auf ### stabilisiert.
> 
> Bei CHA2DS2VA-Score ###≥2 Pkt. und HAS-BLED ###≤2 Pkt. Indikation zur therapeutischen Antikoagulation. Diese nach Aufklärung (insb. Blutungszeichen und Verhalten bei Verletzungen) mit Apixaban p.o. initiiert. ### Reduzierte Dosis?
> 
> Kardiologische normalstationäre Aufnahme.
> ```

> [!note]- Textbaustein Ambulant in nfVHF
> ```
> Zusammenfassend Tachyarrhythmia absoluta bei ### ED/Rezidiv eines Vorhofflimmerns. Kontinuierliches Monitoring. Substitution von Kalium und Magnesium. Frequenzkontrolle mit kumulativ ### mg Metoprolol ### i.v./p.o., hierunter HF von ### auf ### stabilisiert.
> 
> Bei CHA2DS2VA-Score ###≥2 Pkt. und HAS-BLED ###≤2 Pkt. Indikation zur therapeutischen Antikoagulation. Diese nach Aufklärung (insb. Blutungszeichen und Verhalten bei Verletzungen) mit Apixaban p.o. initiiert. ### Reduzierte Dosis?
> 
> Bei geringer Symptomlast und suffizienter Frequenzkontrolle Entlassung in gebessertem AZ. ### Elektive Wiedervorstellung zur Rhythmisierung terminiert.
> 
> Erklärung für Patient:innen:
> Ursache Ihrer Beschwerden ist eine Herz-Rhythmusstörung (”Vorhofflimmern”), die zu einem unregelmäßigen Herzschlag führt und Herzrasen verursachen kann. Bei Vorhofflimmern besteht ein erhöhtes Risiko für Schlaganfälle durch die Bildung von Blutgerinnseln, weswegen das Blut medikamentös “verdünnt” werden sollte. Durch die Einnahme des Gerinnungshemmers (Apixaban/Eliquis) wird das Schlaganfall-Risiko deutlich gesenkt. Durch ### Metoprolol/Bisoprolol wird der Herz-Rhythmus regelmäßig gehalten und dem Auftreten von Herzrasen vorgebeugt.
> 
> Empfehlungen:
> - "Blutverdünner": Apixaban 5 mg 1-0-1
> 	- Immer Ärztliche Vorstellung bei Blut im Stuhl oder schwarzem Stuhlgang sowie bei Kopfverletzung
> 	- Bei Wunden oder Nasenbluten lässt sich die Blutung i.d.R. dennoch durch kräftigen, ununterbrochenen Druck für min. 5 min stoppen
> - Für den Herzrhythmus: Bisoprolol 2.5 mg 1-0-0
> - Kardiologische Vorstellung ### Ambulanz/Station # am ### um ###; Versichertenkarte und hausärztliche Einweisung mitbringen
> - Bei Brustschmerzen, Schwindel oder Luftnot Wiedervorstellung über eine Notaufnahme
> ```

> [!note]- Textbaustein Ambulant spontan konvertiert
> ```
> Zusammenfassend Tachyarrhythmia absoluta bei ### ED/Rezidiv eines Vorhofflimmerns. Kontinuierliches Monitoring. Substitution von Kalium und Magnesium. Frequenzkontrolle mit kumulativ ### mg Metoprolol ### i.v./p.o., hierunter HF von ### auf ### stabilisiert.
> 
> Bei CHA2DS2VA-Score ###≥2 Pkt. und HAS-BLED ###≤2 Pkt. Indikation zur therapeutischen Antikoagulation. Diese nach Aufklärung (insb. Blutungszeichen und Verhalten bei Verletzungen) mit Apixaban p.o. initiiert. ### Reduzierte Dosis?
> 
> Im Verlauf Spontankonversion in den normofrequenten Sinusrhythmus. Entlassung in gebessertem AZ.
> 
> Erklärung für Patient:innen:
> Ursache Ihrer Beschwerden ist eine Herz-Rhythmusstörung (”Vorhofflimmern”), die zu einem unregelmäßigen Herzschlag führt und Herzrasen verursachen kann. Bei Vorhofflimmern besteht ein erhöhtes Risiko für Schlaganfälle durch die Bildung von Blutgerinnseln, weswegen das Blut medikamentös “verdünnt” werden sollte. Durch die Einnahme des Gerinnungshemmers (Apixaban/Eliquis) wird das Schlaganfall-Risiko deutlich gesenkt. Durch ### Metoprolol/Bisoprolol wird der Herz-Rhythmus regelmäßig gehalten und dem Auftreten von Herzrasen vorgebeugt.
> 
> Empfehlungen:
> - "Blutverdünner": Apixaban 5 mg 1-0-1
> 	- Immer Ärztliche Vorstellung bei Blut im Stuhl oder schwarzem Stuhlgang sowie bei Kopfverletzung
> 	- Bei Wunden oder Nasenbluten lässt sich die Blutung i.d.R. dennoch durch kräftigen, ununterbrochenen Druck für min. 5 min stoppen
> - Für den Herzrhythmus: Bisoprolol 2.5 mg 1-0-0
> - Bei erneutem Herzrasen/Herzstolpern kardiologische Vorstellung; bei zusätzlich Brustschmerzen, Schwindel oder Luftnot über eine Notaufnahme
> ```

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

![[Pasted image 20251103072621.png]]

[^1]: Stiell, I.G., de Wit, K., Scheuermeyer, F.X. _et al._ 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. _Can J Emerg Med_ **23**, 604–610 (2021). https://doi.org/10.1007/s43678-021-00167-y

[^2]: CHADS-65: Chron. HFrEF, [[HTN]], Alter ≥65, Diabetes

[^4]: HF 120-180 normalerweise maximal ohne [[AV-Block]] / neg. Dromotropie, bei >200/FBI DD VHF + WPW


[^5]: Wong CX. Caffeinated Coffee Consumption or Abstinence to Reduce Atrial Fibrillation: The DECAF Randomized Clinical Trial. JAMA. 2025 Nov 9:e2521056. doi: 10.1001/jama.2025.21056. Epub ahead of print. PMID: 41206802; PMCID: PMC12598581.
