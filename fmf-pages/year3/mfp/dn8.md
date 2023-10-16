---
title: MFP DN8
---
# DN 8. Robni problem lastnih vrednosti (Delec v končnem in neskončnem potencialu)
Poleg začetnih pogojev lahko enačbe opisujejo tudi robne pogoje. Tokrat se ukvarjamo z robnimi problemi lastnih vrednosti. Pogledali si bomo diferenčno in strelsko metodo in ju aplicirali pri reševanju Schrödingerjeve enačbe za delec v končnem in neskončnem potencialu.

## Navodila
Naloga želi, da za končno in neskončno potencialno jamo z prej naštetima metodama določimo nekaj najnižjih lastnih funkcij in lastnih vrednosti energije.

## Napotki
### 1. Zopet normalizacija
Če me spomin ne vara, je tudi tu catch, da funkcije na robovih integracijskega intervala zelo rade divje divergirajo in če jih naivno normiraš na maksimum preko celotnega intervala dobiš ravno premico, ki kaže veselo 0. Pri tretji domači nalogi sem v napotkih opisal na grobo, kako si lahko odpraviš tovrsten problem. Gotovo sem nanj naletel spet tudi pri tej nalogi, ker sem ga omenil v komentarju (poleg napačnega predznaka).

### 2. Poglej si zakaj je strelska metoda tako imenovana
To je mogoče spet malo za umetnika v sebi, ampak meni se je zdelo zanimivo opazovati, kako strelska metoda deluje. V bistvu gre za nekakšno iskanje ničel. Kar bi bilo res kul, bi bila kakšna animacija. Teh do zdaj nisem omenjal, a sem jih naredil že kar nekaj. Priporočam tudi animacijo grafov tako tu kot pri prejšnjih nalogah.

### 3. Shrani rezultate diagonalizacije
Računanje in diagonalizacija matrike je lahko počasna zato se mi zdi koristno omeniti, da se splača rezultate spraviti v datoteko. Strašno enostavno znotraj Pythona. Še sploh če uporabljaš `numpy`. Imaš `numpy.save()` in `numpy.load()`.

* [**np.save()**](https://numpy.org/doc/stable/reference/generated/numpy.save.html)
* [**np.savez()**](https://numpy.org/doc/stable/reference/generated/numpy.savez.html)
* [**np.load()**](https://numpy.org/doc/stable/reference/generated/numpy.load.html)


## Kar sem jaz naredil
**Tu je verjetno tisto kar te najbolj zanima**. 

<details>
  <summary>Standard Disclaimer</summary>
  Objavljam tudi kodo. Ta je bila včasih del večjega repozitorija, ampak sem jo sedaj izvzel v svojega, da je bolj pregledna. Koda bi morala biti razmeroma pokomentirana, sploh v kasnejših nalogah. 
  
</details>

Vseeno pa priporočam, da si najprej sam poskusiš rešiti nalogo. As always za vprašanja sem na voljo.


* [**Poročilo DN8**]({% link fmf-pdf/year3/mfp/Marko_Urbanč_08.pdf %})
* [**Source repozitorij DN8**](https://github.com/pengu5055/mfp08)

Priznam, da zna biti source repozitorij nekoliko kaotičen. Over time sem se naučil boljše prakse. Zdi se mi, da je tole glavni `.py` file.

* [**main_08.py**](https://github.com/pengu5055/mfp08/blob/main/main_08.py)

## Citiranje
*Malo za šalo, malo za res*.. če želiš izpostaviti/omeniti/se sklicati ali pa karkoli že, na moje delo, potem ga lahko preprosto citiraš kot:

```bib
@misc{Urbanč_mfpDN8, 
  title={Robni problem lastnih vrednosti}, 
  url={https://pengu5055.github.io/fmf-pages/year3/mfp/dn8.html}, 
  journal={Marko’s Chest}, 
  author={Urbanč, Marko}, 
  year={2023}, 
  month={Oct}
} 
```
To je veliko boljše kot prepisovanje.
