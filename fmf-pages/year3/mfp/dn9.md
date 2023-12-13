---
title: MFP DN9
---
# DN 9. Spektralne metode za začetne probleme PDE (Difuzija toplote)

This time up special oz. splošnejši flavor diferencialnih enačb. Dopuščamo, da imamo odvisnost od več parametrov. PDE so zelo pogoste v fiziki (pravzaprav, verjetno bolj pogoste kot ODE). Pojavijo se kadarkoli opisujemo količino, ki ima tako časovnno kot prostorsko odvisnost for example. Recimo primer Poissonove enačbe se pojavlja povsod (EMP, Gravitacija, FLuidomehanika, etc.).

## Navodila
Naloga želi, da rešiš enodimenzionalno difuzijo topote z začetni pogoj Gaussovsko porazdeljene temperature. To moraš narediti z Fourierovo metodo za periodični robni pogoj $T(0,\>t) = T(a,\>t)$, kjer je $a$ širina intervala na katerem rešujemo, in za homogen Dirichletov robni pogoj $T(0,\>t) = T(a,\>t) = 0$. Potem je potrebno rešiti nalogo še z Kolokacijsko metodo za homogen Dirichletov robni pogoj.

## Napotki
(TODO)

## Kar sem jaz naredil
**Tu je verjetno tisto kar te najbolj zanima**. 

<p style="color:#f54c4c; font-size: 28px"> ⚠️ 🚧 These link to nowhere! 🚧 ⚠️ </h1> 

<details>
  <summary>Standard Disclaimer</summary>
  Objavljam tudi kodo. Ta je bila včasih del večjega repozitorija, ampak sem jo sedaj izvzel v svojega, da je bolj pregledna. Koda bi morala biti razmeroma pokomentirana, sploh v kasnejših nalogah. 
  
</details>

Vseeno pa priporočam, da si najprej sam poskusiš rešiti nalogo. As always za vprašanja sem na voljo.


* [**Poročilo DN9**](#)
* [**Source repozitorij DN9**](https://github.com/pengu5055/mfp09)

Priznam, da zna biti source repozitorij nekoliko kaotičen. Over time sem se naučil boljše prakse. Zdi se mi, da je tole glavni `.py` file.

* [**main_09.py**](https://github.com/pengu5055/mfp09/blob/b7e996834bef0863eab74c2124b04b5ddb960a81/main-09.py)

## Citiranje
*Malo za šalo, malo za res*.. če želiš izpostaviti/omeniti/se sklicati ali pa karkoli že, na moje delo, potem ga lahko preprosto citiraš kot:

```bib
@misc{Urbanč_mfpDN9, 
  title={Spektralne metode za začetne probleme PDE}, 
  url={https://pengu5055.github.io/fmf-pages/year3/mfp/dn9.html}, 
  journal={Marko’s Chest}, 
  author={Urbanč, Marko}, 
  year={2023}, 
  month={Oct}
} 
```
To je veliko boljše kot prepisovanje.
