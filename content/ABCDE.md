---
tags:
  - Status/Done
  - Fach/Notfallmedizin
  - Basics/ABCDE
  - Favourites
---
> [!Flowchart]- 
> ```mermaid
> flowchart TD
> 	X --> A --> B --> C --> D --> E
> 	subgraph X [**X–Exsanguination**]
> 		direction LR
> 		X1{{Kritische äußere Blutung?}} --> X2(Blutstillung)
> 	end
> 	subgraph A [**A–Airway**]
> 		direction LR
> 		A1{{Offen+sicher?<br>Gefährdet?<br>Verlegt?}}
> 		A1 --> A2(AW-Manöver<br>Absaugung<br>Adrenalin inhalativ)
> 	end
> 	subgraph B [**B–Breathing**]
> 		direction LR
> 		B1{{Atemarbeit, AF?<br>Zyanose?<br>Auskultation?}}
> 		B1 --> B2(O2<br>Beatmung<br>Thoraxentlastung)
> 	end
> 	subgraph C [**C–Circulation**]
> 		direction LR
> 		C1{{Recap?<br>Puls?<br>Vorlastzeichen?}}
> 		C1 --> C2(VEL-Bolus<br>Push-Dose-Pressors<br>Pacing/eKV, CPR)
> 	end
> 	subgraph D [**D–Disability**]
> 		direction LR
> 		D1{{AVPU?<br>pDMS x4 Extr.?<br>Pupillen?}}
> 		D1 --> D2(Glucose<br>Benzos<br>ICP-Management)
> 	end
> 	subgraph E [**E–Exposure**]
> 		direction LR
> 		E1{{Haut/Log-Roll?<br>Bodycheck?}}
> 		E1 --> E2(Wärme/Kühlung<br>Analgesie)
> 	end
> ```



- **Suche nach "Poisoned Arrows":** Zeitkritische Probleme/Muster, die auch ohne Kenntnis des "Bigger Picture" therapiert werden können und müssen
- **Generisches ABCDE** unabhängig von Trauma / Non-Trauma, da nicht immer klar abgrenzbar

|                        | Primary Survey                               | Akute Killer                                                                                                          | Interventionen                                                                               | Secondary Survey                                                               |
| ---------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **X – Exsanguination** | Kritische äußere Blutung?                    | Exsanguination                                                                                                        | [[Blutungsmanagement\|Blutstillung]]                                                         | Steht?                                                                         |
| **[[A–Airway]]**       | Offen+sicher?<br>Gefährdet?<br>Verlegt?      | [[A–Airway\|AW-Verlegung]]                                                                                            | [[A–Airway\|AW-Management]]<br>Absaugung<br>[[Adrenalin]] inhalativ                          | [[etCO2]]                                                                      |
| **[[B–Breathing]]**    | Atemarbeit, AF?<br>Zyanose?<br>Auskultation? | [[Hypoxie]]<br>[[Pneu\|Spannungspneu]]                                                                                | [[O2]]<br>[[Beatmung]]<br>Thoraxentlastung                                                   | [[SpO2]]<br>[[LUS]]                                                            |
| **[[C–Circulation]]**  | [[Recap]]?<br>[[Puls]]?<br>Vorlast?          | [[Bradykardie\|Brady]]/[[Tachykardie\|Tachy]]<br>[[RV-Failure]]/[[LAE]]<br>[[Aorta]]<br>[[Perikarderguss\|Tamponade]] | Zugang, [[Volumentherapie\|VEL-Bolus]]<br>[[Push-Dose]], Ca2+<br>[[Pacing]]/[[eKV]], [[CPR]] | [[RR]], 4k-[[EKG]]<br>[[TTE]]<br>[[RUSH]]                                      |
| **[[D–Disability]]**   | AVPU?<br>pDMS x4 Extr.?<br>Pupillen?         | [[Hirndruck\|Einklemmung]]                                                                                            | Glucose<br>[[Benzos]]<br>[[Hirndruck\|ICP-Management]]                                       | [[Hypoglykämie\|BZ]]/[[BGA]]<br>[[Vigilanz↓\|GCS]]/RASS<br>[[Stroke\|BE-FAST]] |
| **[[E–Exposure]]**     | Haut/Log-Roll?<br>Bodycheck?                 | [[Fieber\|Hyperthermie]]                                                                                              | Wärme/Kühlung<br>[[Analgesie]]                                                               | [[Anamnese]]<br>Temp.                                                          |



> [!note]- Textbaustein ABCDE
> ```
> A: frei, spricht ohne Stridor, MSH feucht.
> B: Eupnoe AF [], Atemmechanik unauffällig, Normoxie SpO2 []% unter RL. Sgl. VAG ohne RG/NG.
> C: Haut warm + rosig, MSH feucht, Recap prompt. Puls radial kräftig, normofrequent, rhythmisch, HF [] bpm. Normoton RR [###/###] mmHg. Keine periph. Ödeme, VJI nicht gestaut.
> D: GCS 15/15 (A4/V5/M6), orientiert zu ZOSP. Pupillen mw, rund, isokor, prompt konsensuell lichtreagibel. pDMS orientierend seitengleich intakt. Normoglykäm BZ [] mmol/l. BE-FAST neg.
> E: Bodycheck unauffällig, alle großen Gelenke frei beweglich. Schmerz tolerabel NRS []/10. Normotherm [] °C aurikulär.
> ```

^7e23c5

^8e5ced