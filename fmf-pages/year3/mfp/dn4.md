---
title: MFP DN4
---
# DN 4. Fourierova analiza (DFT in analiza Bachove partite)

Verjetno bom lahko za vsako nalogo rekel, da opisuje nek, za fiziko, zelo pomemben princip. Tudi tokrat je tako. Fourierova analiza je zelo pomembna v fiziki, saj nam omogoča, da izračunamo spekter neke funkcije. V tej nalogi se naučiš, kako se uporablja diskretna Fourierova transformacija in kako jo lahko uporabimo za analizo Bachove partite. 

## Navodila
Naloga želi, da izračunaš Fourierovo transformacijo Gaussove porazdelitve in nekaj poljubnih vzorcev. Opazuj kako se spremeni transofrmacija, ko je vzorec periodičen in ko ni. Študiraj potujitve (angl. aliasing) na vzorcu, ki vsebuje frekvence nad Nyquistovo frekvenco. Preveri še odvisnosti konvergence od velikosti vzorca in števila vzorcev. Na koncu pa naloga želi, da analiziraš Bachovo partito in ugotoviš, kaj se zgodi pri nižanju frekvence vzorčenja.

## Napotki

### 1. Fourierova transformacija
In my opinion se splača sam napisati DFT metodo, ker je to zelo dober način, da se naučiš, kako deluje. Smiselno je potem primerjati rezultate s knjižnico `numpy.fft`. Kaj boš na koncu uporabil je pa tvoja odločitev. Jaz sem uporabil svojo metodo za večino naloge, kljub temu, da je bila opazno počasnejša. Don't worry FFT še tako ali tako pride.

### 2. Sam si naredi vzorčne signale
No ali pa uporabi moje. Postopek je opisan v 5. poglavju poročila. Načeloma je to zelo preprosto s programom kot je Audacity. Pod menijem `Generate` imaš na voljo več opcij za generiranje vzorcev. Že linearna kombinacija sinusov je lahko zelo zanimiva.

* [**Audacity**]()

### 3. Intro to audio DSP: Bitcrushing
Ena od zahtev naloge je, da ugotoviš, kaj se zgodi, ko nižaš število vzorcev in frekvenco vzorčenja pri analizi Bachove partite. Priporočam, da si trasformiran audio pretvoriš/shraniš v `.wav` file in ga poslušaš in bo hitro očitno. Dobljen efekt se imenuje velikokrat **bitcrushing**. Ime sicer izhaja iz drugega načina pridobivanja tega efekta, ki je nižanje bitne globine zapisa zvoka, ampak efekt je podoben. To je verjetno eden iz med najpreprostejših digitalnih efektov. 

* [**Bitcrushing**](https://en.wikipedia.org/wiki/Bitcrusher)
* [**Bit Crushers Explained In 60 Seconds**](https://www.youtube.com/shorts/nw5GInu7yVk)

Gotovo je kak glasbenik med vami, torej mu bo zanimiv kak VST plugin, ki to simulira.

* [**Tritik Krush**](https://www.tritik.com/product/krush/)

## Kar sem jaz naredil
**Tu je verjetno tisto kar te najbolj zanima**. 

<details>
  <summary>Standard Disclaimer (click me)</summary>
  Objavljam tudi kodo. Ta je bila včasih del večjega repozitorija, ampak sem jo sedaj izvzel v svojega, da je bolj pregledna. Koda bi morala biti razmeroma pokomentirana, sploh v kasnejših nalogah. 
  
</details>

Vseeno pa priporočam, da si najprej sam poskusiš rešiti nalogo. As always za vprašanja sem na voljo.


* [**Poročilo DN4**]({% link fmf-pdf/year3/mfp/Marko_Urbanč_04.pdf %})
* [**Source repozitorij DN4**](https://github.com/pengu5055/mfp04)

Priznam, da zna biti source repozitorij nekoliko kaotičen. Over time sem se naučil boljše prakse. Zdi se mi, da je tole glavni `.py` file.

* [**main_04.py**](https://github.com/pengu5055/mfp04/blob/main/main_04.py)

## Citiranje
*Malo za šalo, malo za res*.. če želiš izpostaviti/omeniti/se sklicati ali pa karkoli že, na moje delo, potem ga lahko preprosto citiraš kot:

```bib
@misc{Urbanč_mfpDN4, 
  title={Fourierova analiza}, 
  url={https://pengu5055.github.io/fmf-pages/year3/mfp/dn4.html}, 
  journal={Marko’s Chest}, 
  author={Urbanč, Marko}, 
  year={2023}, 
  month={Oct}
} 
```
To je veliko boljše kot prepisovanje.
