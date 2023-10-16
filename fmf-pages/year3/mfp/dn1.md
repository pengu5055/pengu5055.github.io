---
title: MFP DN1
---
# DN 1. Izračun Airyjevih funkcij (Numerična aproksimacija)

Prva naloga mafijskega praktikuma se mi zdi res perfektna v svojem namenu. Cilj naloge je spoznavanje numeričnega reševanja in dejstva, da imajo številke v računalniku intrinzično omejeno natančnost. To je zelo pomembno dejstvo, ki se ga moramo zavedati, ko se lotimo numeričnega reševanja kakšnega problema.


## Navodila
Naloga želi, da z uporabi Maclaurinove vrste in asimptotskega razvoja poiščeš čim učinkovitejši postopek za izračun vrednosti Ariyjevih funkcij na realni osi. Željena za natančnost je, da spravimo absolutno napako pod $10^{-10}$. Radi bi storili to tudi z relativno napako. Poglej če je to mogoče.

## Napotki
1. Ali so referenče funkcije res popolnoma pravilne?
2. Za boljšo natančnost si lahko pomagaš z uporabo `decimal` ali pa meni še ljubše `mpmath` knjižnice.
3. Med drugim je cilj mafijskega praktikuma tudi ta, da se naučiš delati res hot grafe. Glej da bodo osi označene, da bo legenda, da bodo barvne kombinacije dobre. Hidden weapon za lepe barve je `cmasher` knjižnica, ki vsebuje dodatne colormap-e za `matplotlib`.

## Kar sem jaz naredil
**Tu je verjetno tisto kar te najbolj zanima**. 

<details>
  <summary>Standard Disclaimer (click me)</summary>
  Objavljam tudi kodo. Ta je bila včasih del večjega repozitorija, ampak sem jo sedaj izvzel v svojega, da je bolj pregledna. Koda bi morala biti razmeroma pokomentirana, sploh v kasnejših nalogah. 
  
</details>

Vseeno pa priporočam, da si najprej sam poskusiš rešiti nalogo. As always za vprašanja sem na voljo.

* [**Poročilo DN1**]({% link fmf-pdf/year3/mfp/Marko_Urbanč_01.pdf %})
* [**Source repozitorij DN1**](https://github.com/pengu5055/mfp01)

Priznam, da zna biti source repozitorij nekoliko kaotičen. Over time sem se naučil boljše prakse. Če se prav spomnem, je tole glavni `.py` file.

* [**main_rewrite.py**](https://github.com/pengu5055/mfp01/blob/main/main_rewrite.py)

## Citiranje
*Malo za šalo, malo za res*.. če želiš izpostaviti/omeniti/se sklicati ali pa karkoli že, na moje delo, potem ga lahko preprosto citiraš kot:

```bib
@misc{Urbanč_mfpDN1, 
  title={Izračun Airyjevih funkcij}, 
  url={https://pengu5055.github.io/fmf-pages/year3/mfp/dn1.html}, 
  journal={Marko’s Chest}, 
  author={Urbanč, Marko}, 
  year={2023}, 
  month={Oct}
} 
```
To je veliko boljše kot prepisovanje.
