---
title: Meritev temperature
---
# Meritev temperature (Basic plotting/Linear fit)
Cilj te vaje je, da povadiš uporabo `matplotlib`-a in znanstvenih knjižnic in z njimi narišeš graf podanih podatkov. To je basic osnova vsakega programiranja, ki bo potreben za katerikoli Fizikalni praktikum.

## Navodila
Pri wacky praktikumu si meril temperaturno odvisnost vode, ki si jo kuhal za skodelico čaja. Ugotovi s kolikšno hitrostjo se je segrevala voda.  
Meritve so tu:

* [`tea_temperature.csv`]({% link fmf-pages/extra/python/exercises/adhoc1/tea_temperature.csv %})

1. Uvozi podatke meritev v Python program  
    * Tega ne počni ročno, ker bom naslednjič dal 10e6 vrstic. Uporabi kako od znanstvenih knjižnic.

2. Z uporabo `matplotlib`-a nariši graf dobljenih podatkov. Pazi, da bo imel vse kar je potrebno: 
    * Naslov
    * Označene osi z enotami
    * Smiselno izbrane barve
    * ...

3. Z uporabo funkcije `curve_fit()` iz knjižnice `scipy.optimize` določi linearni trend podatkom in ga nariši na graf.  
    * Idealno je, če nekje na graf dodaš še podatke o prilagojeni premici.

## Rešitev
Ker je trenutno ta vaja še bolj ad-hoc narejena nisem prepričan, ali želite, da objavljam code snippet-e za rešitve ali samo kakšne končne rezultate. Mogoče je smiselno pokazati kakšne bolj ključne vrstice kode.

<details>
  <summary>Click here za rešitev</summary>
  Hitrost segrevanja vode ugotovimo iz strmine prilagojenega linearnega trenda. Ta v našem primeru znaša:

```python
k = 2 # K/s
```
</details>