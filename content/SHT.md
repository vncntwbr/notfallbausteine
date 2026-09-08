---
tags:
  - Probleme/Trauma
  - Status/Done
  - Fach/Neurologie
  - Fach/OrthoTrauma
  - Diagnosen
  - Flowchart/Done
aliases:
  - Schädel-Hirn-Trauma
title: Schädel-Hirn-Trauma (SHT)
ICD: S06
config:
  layout: elk
  elk:
    mergeEdges: "true"
---
> [!flowchart]-
> ```mermaid
> flowchart TD
>     A("**V.a. SHT**"):::mStart --> ABCDE
>     ABCDE("**ABCDE 'Normo'**<br>Normokapnie, Normoxie,<br>Normotonie,<br>Normoglykämie,<br>Normothermie"):::mCritical --> GCS{{**GCS**<br>Doku: A?/V?/M?}}:::mImportant
>     GCS -->|13-15| C{{"**Canadian CT-Head-Rule**<br>(<16 J.: PECARN)"}}
>     GCS -->|≤12| RSI(**ggf. RSI**<br>insb. wenn GCS-M ≤4)
>     RSI --> CT(**cCT nativ** + CT-HWS)
>     C -->|pos| HWS{{**Canadian C-Spine-Rule**}}
>     HWS -->|pos| CT
>     HWS -->|neg| CT2(**cCT nativ**)
>     C -->|neg| Dispo(**Disposition<br>+Aufklärung**<br>ambulant möglich?)
>     
>     click C "https://www.mdcalc.com/calc/608/canadian-ct-head-injury-trauma-rule" _blank
>     click HWS "https://www.mdcalc.com/calc/696/canadian-c-spine-rule" _blank
>     click ABCDE "/ABCDE"
>     click RSI "/RSI"
> ```

> [!danger]+ Schweres SHT
> 1. **"Normo" [[ABCDE]]:** Normotonie RRsys >90, Normoxie, Normokapnie, Normothermie, Normoglykämie
> 2. **[[RSI]]** bei [[GCS]] ≤8 / beeinträchtigten Schutzreflexen mit tiefer Narkose
> 3. **Venöser Abfluss:** Stifneck entfernen, OK-Hochlage, VJI meiden
> 4. **[[Hirndruck]]-Management**
> 5. **[[Blutungsmanagement]]** bei intrakranieller Blutung

> [!stadien]-
> - **Leicht:** GCS 13-15
> - **Mittel:** GCS 9-12
> - **Schwer:** GCS 3-8
> - **Offen**

> [!bildgebung]+ cCT ja/nein?
> - **Verfahren:** ==cCT nativ== +HWS (≥65 J.), ggf. +NNH, ggf. +cCT-A
> - **Harte Kriterien:**
> 	- [[GCS]] ≤14 nach 2h
> 	- [[Krampfanfall]]
> 	- [[Ü+E|Erbrechen]] ≥2x
> 	- Klinisch V.a. Fraktur (z.B. Battle-Sign, Liquorrhoe)
> 	- [[Intox]]
> 	- Alter ≥65 J.
> 	- [[AK]] (OAK, TAH, Koagulopathie)
> - **Weiche Kriterien:**
> 	- Retrograde Amnesie ≥30 min
> 	- Gefährlicher Mechanismus
> - **Decision Rule:** [Canadian CT Head](https://www.mdcalc.com/calc/608/canadian-ct-head-injury-trauma-rule) / [PECARN](https://www.mdcalc.com/calc/589/pecarn-pediatric-head-injury-trauma-algorithm) (pädiatrisch)

> [!note]- Textbaustein SHT Ambulant
> ```
> - Für 24h Überwachung im privaten Umfeld sicherstellen, Merkblatt ausgehändigt.
> - Jederzeit sofortige Wiedervorstellung bei Auftreten von Warnzeichen (Sehstörungen, reduzierte Erweckbarkeit, Wesensveränderung, Verwirrung, zunehmenden Kopfschmerzen, Erbrechen, Lähmungen).
> - Bei Persistenz von milden Beschwerden über einige Tage hinaus (z.B. Kopfschmerzen, Schwindel, Konzentrationsstörungen) ambulante neurologische Vorstellung zur Abklärung eines Postkommotiosyndroms empfohlen.
> ```

## Pathophysiologie
- **Primärer Hirnschaden**
	- [[Intrakranielle Blutung]] durch Gefäßrupturen
	- Kontusionen + Lazerationen
	- Coup + Contrecoup
	- [[Hirnödem]]
	- Diffuse axonale Schädigung
- **Sekundärer Hirnschaden** (z.B.)
	- [[Hypoxie]]
	- [[Resp. Azidose|Hyperkapnie]], lang anhaltende [[Resp. Alkalose|Hypokapnie]]
	- [[Hypoglykämie]]
	- [[HypoNa+]]

## Literatur
- [S2e-Leitlinie Schädel-Hirn-Trauma im Erwachsenenalter](https://register.awmf.org/de/leitlinien/detail/008-001)
- Post-[[RSI]] Hypotonie tötet (30d-Mortalität 43% vs. 27%)[^1]
- Shah SN, Chizuk HM, Fong H, Hannon M, Mannix RC. Does This Child Have a Concussion? The Rational Clinical Examination Systematic Review. _JAMA._ 2026;335(17):1515–1524. doi:10.1001/jama.2026.1233
	- „Mental fog“ als Red Flag: Stark erhöhter diagnostischer Wert (LR ~12) → eines der spezifischsten Symptome
	- Licht/Lärmempfindlichkeit: Hohe Spezifität (~0,93–0,94) → klinisch sehr hilfreich zur Bestätigung  
	- Übelkeit:Ebenfalls mit hoher diagnostischer Aussagekraft (LR ~6,7)  
	- Okulomotorische Auffälligkeiten: gestörte Nahpunktkonvergenz, auffällige Sakkaden, unruhige Smooth-Pursuits → hohe Spezifität, aber geringe Sensitivität → selten, aber wenn vorhanden, sehr aussagekräftig  
	- Kein Kopfschmerz? Senkt die Wahrscheinlichkeit deutlich (LR ~0,20)  
	- Wichtig: Kein einzelnes Symptom reicht zur sicheren Diagnose oder zum Ausschluss → Kombination entscheidend

[^1]: Price J, Lachowycz K, Major R, McLachlan S, Keeliher C, Finbow B, et al. Prehospital postintubation hypotension and survival in severe traumatic brain injury. JAMA Netw Open. 2025;8(11):e2544057. doi:10.1001/jamanetworkopen.2025.44057.
	
	
