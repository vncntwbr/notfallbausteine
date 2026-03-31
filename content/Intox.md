---
tags:
  - Probleme/Allgemein
  - Status/Started
  - Druck
  - Fach/Toxikologie
  - Flowchart
title: Intoxikation
ICD: X49.9!, R78
---
> [!flowchart]-
> ```mermaid
> flowchart TD
>     A(**V.a. Intoxikation**):::mStart --> P{{**Pupillen**}}:::mImportant
>     P --->|eng| DG{{**Darmgeräusche**}}
>     DG --> |hyperaktiv| C(Cholinerg)
>     DG --> |hypoaktiv| O(Opioide)
>     P -->|normal/weit| KT{{**Temperatur**}}
>     KT --> |hoch| DG2{{**Darmgeräusche**}}
>     DG2 -->|hyperaktiv| AD(Antidepressiva)
>     DG2 --> |hypoaktiv| SAC(Sympathomimetisch/<br>Parasympatholytisch)
>     KT -->|normal/niedrig|DG3{{**Darmgeräusche**}}
>     DG3 -->|hyperaktiv| H(Halluzinogene)
>     DG3 --> |hypoaktiv| S(Sedativa)
>     
>     click C "/Cholinerg"
>     click O "/Opioide"
>     click AD "/Serotonerg"
>     click SAC "/Anticholinerg"
>     click S "/Benzos"
> ```

> [!danger] Rapid Reference
> - **[[Betablocker]]/[[Calciumantagonisten]]:** [[Adrenalin]], Insulin/Glucose ([[High-Dose Insulin-Therapie]]), ggf. Ca2+
> - **[[TCA]]:** [[Bicarbonat|NaBic]] 8.4% 100 ml, Kohle, [[EKG]]
> - **Cyanid/CO:** Hydroxycobalamin (Cyanokit®) 5 g KI
> - **[[Anticholinerg]]:** [[Physostigmin]] 2 mg
> - **[[Cholinerg]]:** Atropin 3 mg i.v., alle 5 min verdoppeln
> - **[[Flusssäure HF]]:** Calciumgluconat 10-20 ml i.v. + 1-2.5% Gel topisch, bei Ingestion Milch p.o. 

> [!untersuchung]+ Klinische Zeichen der Toxidrome
> | Toxidrom              | Vigilanz      | Pupillen | Haut/Temp.            | VP                                          | GI                               |
| --------------------- | ------------- | -------- | --------------------- | ------------------------------------------- | -------------------------------- |
| **[[Opioide]]**       | [[Vigilanz↓]] | ⊙[^1]    | =/❄︎                  | AF↓                                         | [[Obstipation]]                  |
| **Sedativa**          | [[Vigilanz↓]] | =/◉      | =/❄︎                  | AF↓                                         | ±                                |
| **Halluzinogen**      | [[Delir]]     | ◉        | =                     | [[Tachykardie\|Tachy]]                      | ±                                |
| **Sympathomim.**      | [[Delir]]     | ◉        | ♨︎, schweißig         | [[Tachykardie\|Tachy]], [[Hypertonie\|HTN]] | ±                                |
| **[[Cholinerg]]**     | [[Vigilanz↓]] | ⊙        | schweißig, Salivation | [[Lungenödem]], [[Bradykardie\|Brady]]      | [[Diarrhoe]], Inkontinenz        |
| **[[Anticholinerg]]** | [[Delir]]     | ◉        | ♨︎, rot, trocken      | [[Tachykardie\|Tachy]]                      | [[Obstipation]], [[Harnverhalt]] |
> |**[[Serotonerg\|Serotonerg]]**|[[Delir]]|◉|♨︎, Cloni, schweißig|[[Tachykardie\|Tachy]]  |[[Diarrhoe]]




---
- Flumazenil absolute KI chron. [[Benzos]]-Abusus oder Co-Intox mit Prokonvulsiva (z.B. [[TCA]]), weil Krampfanfall
- **W**
	- **[[Urin]]-Toxscreening**
		- *Falsch-pos:* Amphetamine (Metformin, Promethazin), [[TCA]] (Quetiapin, Dimenhydrinat, Carbamazepin), [[Benzos]] (Sertralin), Cannabinoide (Ibu, Naproxen), [[Opioide]] (Naloxon, Quetiapin, Dimenhydrinat, Verapamil, Fluorchinolone)
		- *Falsch-neg* v.a. [[Benzos]], [[Opioide]]
- **T Rescue**
	- [[ECMO]]
	- [[Dialyse]]
	- [[Lipid-Rescue]] v.a. bei lipophilen Med (Lokalanästhetika, [[Calciumantagonisten]], [[TCA]], Quetiapin)
	- [[High-Dose Insulin-Therapie]] bei fulminant [[Calciumantagonisten]], evtl. Beta-Blocker


> [!danger]+ High-Dose-Insulin-Therapie
> - **Indikation:** Fulminante [[Calciumantagonisten]] → pos. Inotropie
> - *Insulin:* initial 50-100 IE + [[Perfusor]] 25-50 IE/h, alle 20 min +50% LR
> - *Glucose:* 50-100 g/h + Bolus n.B.
> - *Kalium:* Substitution bei [[HypoK+]], niedrig-normal anstreben, [[ZVK]]

## Literatur
- [Toxinfo: Allgemeine Tipps & Tricks](https://www.toxinfo.de/kategorien/allgemeines/artikel/allgemeines-vorgehen-bei-vergiftungen)

[^1]: bei neuen Opioiden auch Mydriasis möglich
