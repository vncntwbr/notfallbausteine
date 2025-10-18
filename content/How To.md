---
tags:
  - Basics/Meta
  - Status/Started
aliases:
title: How To Notfallbausteine – Contribution Guide
---
Willkommen! :)  

## Grundsätzliche Überlegungen
- **Was soll enthalten sein?**
	- Resus Checkliste
	- Workup+Management Checkliste
	- ggf. Workup Questions mit LRs
	- DD Liste mit Differentiators
	- Sonstiges wertvolles Wissen inkl. References als Fußnoten[^1]
- **Dosisangaben** 
	- Überlegung: immer als x50kg - x100kg unter der Annahme, dass die meisten Patienten in diese Range fallen und man sich nur entscheiden muss "Pat. leicht" (=50), "Pat. schwer" (=100) oder "Pat. irgendwo dazwischen" (=Mitte oder Abwägung)
	- x/kg nur als Reference
	- z.B.: "Fentanyl 50-100 μg" statt "Fentanyl 1 μg/kg"
- **Lernen**
	- Ausklappbare Callout-Blöcke auch für Active Recall nutzbar

## Lokalisierung
- Der Dropdown Selector unter dem Titel bleibt über verschiedene Artikel und auch beim Seite, Browser und PC neu laden bestehen (so eine Art Cookie, aber was anderes). Darüber werden verschiedene HTML Blöcke mit dem CSS-Attribut ```display:none``` bzw. ```display:block``` versehen, je nach Auswahl. 
- Die Blöcke müssen im rohen Text folgendermaßen markiert sein:
	- Für den Default ohne Auswahl (wenn gewünscht): ```<span class="localBlock" data-option="default">Keine Lokalisierung, keine Kekse.</span>```
	- Für einen lokal anzuzeigenden Text: ```<span class="localBlock" data-option="zbb" style="display:none;">Hier Text für ZBB einfügen.</span>```
	- Es ist ziemlich viel Magic damit möglich, aber nicht ganz alles
- Weitere Lokalisierungen können über die Datei ```./quartz/components/PageTitle.tsx``` als Option eingefügt werden: ```<option value="beispielnotfallzentrum">Beispiel-Notfallzentrum</option>``` (hier ist auch der Typescript Code hinterlegt)
- Das Plugin ```textswitcher``` wird nicht genutzt
## Bausteine
Bitte folgende Bausteine/Callouts nutzen. Jedes Einzelne je Seite natürlich optional. Function beats Form. Auch durch Einfügen der [[Vorlage Leitsymptom]] möglich.

> [!info] Definition

> [!lokal]

> [!danger]+ Resuscitation
> 1. **Bla:** Bla

> [!dd]+ DD

> [!anamnese]+ Anamnese
> - **S:** 
> - **A:** 
> - **M:** 
> - **P:** 
> - **L:** 
> - **E:** 
> - **R:** 

> [!workup]+
> - **[[U|U]]:** 
> - **[[EKG]]:** 
> - **[[POCUS]]:** 
> - **[[Labor]]:** 
> - **[[Urin]]:** 
> - **[[Radiologie]]:** 

> [!management]+
> - ...

> [!disposition]+
> - ...

> [!note]- Textbaustein
> ```
> Blabla
> ```

## Literatur
An entsprechender Stelle mittels ```[^1]``` eine Quelle einfügen.[^1]

[^1]: Quelle
