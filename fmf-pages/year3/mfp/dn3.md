---
title: MFP DN3
---
# DN 3. Lastne vrednosti in lastni vektorji (Diagonalizacija za anharmoničen oscilator)

Cannot stress this enough, diagonalizacija matrik je ena najpomembnejših stvari v fiziki. Z diagonalizacijo matrike poiščemo njene lastne vrednosti in lastne vektorje. V tej nalogi se naučiš prav to in kako se potem to uporabi za reševanje Schrödingerjeve enačbe za anharmoničen oscilator.


## Navodila
Naloga želi, da preko postopka numerične diagonalizacije poiščeš nekaj najnižjih lastnih vrednosti in lastnih vektorjev za anharmoničen oscilator. Nove valovne funkcije lahko izrazimo v bazi nemotenega harmoničnega oscilatorja. Poleg naloga želi, da pogledaš še limitni primer, odvisnost konvergence od velikosti matrike in primerjavo med dvema načinoma računanja matričnih elementov za ta primer.

## Napotki
Želim si, da bi bolj descriptive commit message-e pisal, da bi bilo lažje pisati napotke.

### 1. Normalizacija funkcij
Super! Diagonaliziral si matriko in zdaj greš narisati en lastni vektor v bazi LHO (ta predstavlja eno od lastnih stanj motenega oscilatorja). Narišeš in črta je ravna razen za grozne divergence na robu intervala. Kaj se dogaja?  

Nič takega, no worries. Končna natančnost metod in pogosto se zgodi, da rešitev na robu definicijskega območja oz. blizu roba divje divergira. Zato, vzemi še malo večji interval in potem nariši le točke za del, ki te zanima (v smislu računaš na intervalu [-5, 5], rišeš pa na intervalu [-3, 3]). Potem pa na tem intervalu še normaliziraš funkcijo na njen maksimum ali pa v tem primeru še bolje na integral (ampak to je že malo bolj tricky). Problem solved.

### 2. Shrani rezultate
Računanje in diagonalizacija matrike je lahko počasna zato se mi zdi koristno omeniti, da se splača rezultate spraviti v datoteko. Strašno enostavno znotraj Pythona. Še sploh če uporabljaš `numpy`. Imaš `numpy.save()` in `numpy.load()`.

* [**np.save()**](https://numpy.org/doc/stable/reference/generated/numpy.save.html)
* [**np.savez()**](https://numpy.org/doc/stable/reference/generated/numpy.savez.html)
* [**np.load()**](https://numpy.org/doc/stable/reference/generated/numpy.load.html)

### 3. Velike matrike
Včasih je potrebno uporabiti velike matrike, da se dobi dovolj dobro natančnost. To pa lahko pomeni, da je računanje matričnih elementov zelo počasno. Fino je če imaš sprejemljivo količino spomina (ie. ne toaster PC z 256 MB RAM-a) oz. da se zavedaš mejo zmogljivosti svojega računalnika kar se tiče spomina. Recimo spomnim se, da je pri meni velikosti $N=10000$ šlo, ampak ob tem, da se je moral računalnik že potruditi. Skratka ne pričakovati diagonalizacije milijon krat milijon matrike na laptopu.

### 4. Kar bi jaz še naredil in lahko zdaj ti dodaš
Se pa takšne milijon krat milijon matrike dejansko diagonalizirajo tako, da se jih razdeli na bloke in potem se diagonalizirajo posamezni bloki. To je zelo zanimiva tema, ki se ji reče *block diagonalization*. Heh.. *queue Marko spet govori o paralelizaciji*

* [**A numerical algorithm for block-diagonal decomposition of matrix ∗
-algebras with application to semidefinite programming**](https://link.springer.com/article/10.1007/s13160-010-0006-9)
* [**Simultaneous Block Diagonalization of Matrices of Finite Order**](https://arxiv.org/abs/2012.14440)

Sicer pa `numpy` spet priskoči na pomoč. Vsebuje veliko metod za dekompozicijo matrik, ki so tudi paralelizirane.

* [**Numpy Parallel Matrix Decompositions**](https://superfastpython.com/numpy-multithreaded-matrix-decompositions/)

Mogoče če koga spet zanima tudi performance, je vredno pogledati tudi tole.

### 5. Za umetniško noto
Poleg lepih grafov funkcij etc. se tu prvič srečaš z dejstvom, da lahko tudi matrike narišeš. To je zelo uporabno, če želiš npr. pogledati kako izgleda matrika, ki jo diagonaliziraš ali pa še boljše, kako zgleda dobljeni rezultat za lastne vrednosti in lastne vektorje (predvsem vektorje). Da se narisati precej psihodeličnih slikic. Zelo priporočam, da s tem nasitiš umetnika v sebi.

* [**plt.imshow()**](https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.imshow.html)
* [**`cmasher` package za Python (za lepše barve)**](https://cmasher.readthedocs.io/index.html)

## Kar sem jaz naredil
**Tu je verjetno tisto kar te najbolj zanima**. 

<details>
  <summary>Standard Disclaimer (click me)</summary>
  Objavljam tudi kodo. Ta je bila včasih del večjega repozitorija, ampak sem jo sedaj izvzel v svojega, da je bolj pregledna. Koda bi morala biti razmeroma pokomentirana, sploh v kasnejših nalogah. 
  
</details>

Vseeno pa priporočam, da si najprej sam poskusiš rešiti nalogo. As always za vprašanja sem na voljo.


* [**Poročilo DN3**]({% link fmf-pdf/year3/mfp/Marko_Urbanč_03.pdf %})
* [**Source repozitorij DN3**](https://github.com/pengu5055/mfp03)

Priznam, da zna biti source repozitorij nekoliko kaotičen. Over time sem se naučil boljše prakse. Zdi se mi, da je tole glavni `.py` file.

* [**main_03.py**](https://github.com/pengu5055/mfp03/blob/main/main_03.py)

## Citiranje
*Malo za šalo, malo za res*.. če želiš izpostaviti/omeniti/se sklicati ali pa karkoli že, na moje delo, potem ga lahko preprosto citiraš kot:

```bib
@misc{Urbanč_mfpDN3, 
  title={Lastne vrednosti in lastni vektorji}, 
  url={https://pengu5055.github.io/fmf-pages/year3/mfp/dn3.html}, 
  journal={Marko’s Chest}, 
  author={Urbanč, Marko}, 
  year={2023}, 
  month={Oct}
} 
```
To je veliko boljše kot prepisovanje.
