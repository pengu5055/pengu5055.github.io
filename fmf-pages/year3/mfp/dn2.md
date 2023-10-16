---
title: MFP DN2
---
# DN 2. Naključni sprehodi (Monte Carlo simulacija difuzije)*

Nadaljujemo z precej pomembno metodo v fiziki, Monte Carlo simulacijo. Pri tej vaji si pogledaš naključne sprehode in polete ter njihovo uporabo pri simulaciji difuzije.  


## Navodila
Naloga želi, da napraviš simulacijo dvorazsežne "hoje" za sprehode in polete. Nariši slike za različno število korakov v sprehodu, kako veljajo režimi difuzije (torej kakšna je potenca $\gamma$).

## Napotki
### 1. Naključnost števil
Za generiranje naključnih števil uporabimo psevdonaključne generatorje. Študiraš lahko naravo naključnosti takih generatorjev, ker se izkaže, da je "kvaliteta" naključnosti števil kritičnega pomena za Monte Carlo. Če si ambiciozen mogoče poglej kaj takšnega:
* [**Diehard tests**](https://en.wikipedia.org/wiki/Diehard_tests)
* [**TestU01 (za tiste, ki delate v C)**](http://simul.iro.umontreal.ca/testu01/tu01.html)
* [**`quantumrandom` package za Python**](https://pypi.org/project/quantumrandom/)

### 2. Gotcha: Pareto distribucija
Pazi kako je definirana pareto distribucija. Od tu mogoče pomemben nauk, ki ima kratico RTFM. Poglej v Notes, kako je definirana porazdelitev. Včasih je dobro prebrati navodila. Recimo iz `numpy.random`

* [**numpy.random.pareto()**](https://numpy.org/doc/stable/reference/random/generated/numpy.random.pareto.html)

### 3. Uporabi kakšen framework za simulacijo
Uporaba že obstoječih orodji ni prepovedana! Delati stvari na roko je zelo zabavno in poučno, ampak kar je še boljše je potem tekmovati proti neki ustaljeni implementaciji. Če se ti zdi, da si naredil nekaj zelo dobro, potem lahko to primerjaš z obstoječimi orodji. Recimo za Python:

* [**`monaco` package za Python**](https://monaco.readthedocs.io/en/latest/index.html)
* [**`pymcsl` package za Python**](https://pymcsl.readthedocs.io/en/latest/index.html)

### 4. Kar bi jaz še naredil in lahko zdaj ti dodaš
V komentarju moje naloge sem zapisal, da bi svoje grafe lahko izboljšal, če bi nastavil število poskusov na večjo vrednost, ampak da me je ob tem omejeval čas, ki je porabil 10 minut na graf (oh boy, to je še malo). Skratka ugotovi kako bi to lahko nadgradil.  

Python je po naravi single threaded oz. kake knjižnice tipo `numpy` so tako napredne, da imajo že vgrajen multithreading. Monte Carlo simulacije se zelo lepo da paralelizirati, ker posamezna nit ne rabi nobenih podatkov od svojih sosedov za svoje delovanje. Vsakemu jedru procesorja dodeliš nit in ji naročiš število korakov in potem samo gas. 

* [**`multiprocessing` package za Python**](https://docs.python.org/3/library/multiprocessing.html)
* [**`threading` package za Python**](https://docs.python.org/3/library/threading.html)

Zelo popularna je tudi uporaba grafičnih kartic, kar ne dvomim, da kak izmed vas že tako ali tako ima.

* [**`pycuda` package za Python**](https://documen.tician.de/pycuda/)
* [**`pyopencl` package za Python**](https://documen.tician.de/pyopencl/)
* [**`disimpy` package za Python**](https://numba.pydata.org/https://disimpy.readthedocs.io/en/latest/)

Za še bolj tehnično usmerjene pa obstaja kar se paralelizma tiče še MPI. To je standard za komunikacijo med procesi, ki tečejo na različnih procesorjih. To je zelo uporabno, če imaš dostop do kakšne računalniške gruče. Če ima kdo zelo željo se lahko poskusimo zmeniti za kakšen processing time na moji domači gruči.
* [**`mpi4py` package za Python**](https://mpi4py.readthedocs.io/en/stable/)
* [**Astrum DIY cluster**](http://astrum.sh/)


## Kar sem jaz naredil
**Tu je verjetno tisto kar te najbolj zanima**. 

<details>
  <summary>Standard Disclaimer (click me)</summary>
  Objavljam tudi kodo. Ta je bila včasih del večjega repozitorija, ampak sem jo sedaj izvzel v svojega, da je bolj pregledna. Koda bi morala biti razmeroma pokomentirana, sploh v kasnejših nalogah. 
  
</details>

Vseeno pa priporočam, da si najprej sam poskusiš rešiti nalogo. As always za vprašanja sem na voljo.


* [**Poročilo DN2**]({% link fmf-pdf/year3/mfp/Marko_Urbanč_02.pdf %})
* [**Source repozitorij DN2**](https://github.com/pengu5055/mfp02)

Priznam, da zna biti source repozitorij nekoliko kaotičen. Over time sem se naučil boljše prakse. Zdi se mi, da je tole glavni `.py` file.

* [**main.py**](https://github.com/pengu5055/mfp02/blob/main/main.py)

## Citiranje
*Malo za šalo, malo za res*.. če želiš izpostaviti/omeniti/se sklicati ali pa karkoli že, na moje delo, potem ga lahko preprosto citiraš kot:

```bib
@misc{Urbanč_mfpDN2, 
  title={Naključni sprehodi}, 
  url={https://pengu5055.github.io/fmf-pages/year3/mfp/dn2.html}, 
  journal={Marko’s Chest}, 
  author={Urbanč, Marko}, 
  year={2023}, 
  month={Oct}
} 
```
To je veliko boljše kot prepisovanje.
