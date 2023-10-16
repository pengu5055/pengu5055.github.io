---
title: MFP DN6
---
# DN 6. Enačbe hoda (Prevajanje toplote)
Diferencialne enačbe so povsod v fiziki. V tej nalogi se naučimo, kako jih lahko rešujemo numerično. Pravzaprav bodo zdaj naloge bolj ali manj sestavljene iz reševanja diferencialnih enačb, do zadnje naloge, kjer bomo uporabili strojno učenje. Skratka, very important stuff.

## Navodila
Naloga želi, da rešiš dano enačbo z Eulerjevo metodo in nato še z čimveč naprednejšimi metodami. Vse to je potrebno narediti za različne začetne pogoje ob danem parametru enačbe. Predvsem je pomembno, da raziščeš vpliv velikosti koraka na karakteristike dobljene rešitve. Na koncu pa nariši še družine rešitev za različne parametre enačbe.

## Napotki

### 1. Integratorji
Če se prav spomnem prof. Kerševan pri tej nalogi pripne skripto z že napisanimi metodami za integracijo. Meni te niso delale zato sem napisal svoje. Zdi se mi oboje koristno. To da veš, da obstaja že napisana metoda in to da jo poskusiš napisati sam, le tako lahko razumeš kako deluje.

* [**Numerical Recipes in C 2nd Edition (p. 707)**](http://www.grad.hr/nastava/gs/prg/NumericalRecipesinC.pdf)
* [**Numerical Recipes in C 3rd Edition (p. 899)**](http://numerical.recipes/book.html)

### 2. Vgrajene funkcije
Mogoče je to malo moj pet peeve, ampak striktno gledano recimo `scipy.integrate.solve_ivp` ni algoritem za reševanje diferencialnih enačb, ampak je wrapper okoli že napisanih algoritmov. Za boljše informacije se tu spet splača prebrati dokumentacijo in mogoče tudi prelistati kak članek, kjer so opisali algoritem in njegovo implementacijo. 

* [**scipy.integrate.solve_ivp**](https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html)
* [**Default RK45 metoda, ki jo uporablja `scipy`**](https://www.sciencedirect.com/science/article/pii/0771050X80900133)

### 3. Še kakšen dodaten integrator
Cel smisel te naloge je, da se igraš z integratorji. Ni drugega kot to. Torej lepo prosim izživljaj se. Pokaži kako daleč si zrasel kot fizik. Tu imaš nekaj idej:

* [**Classical Fifth-, Sixth-, Seventh-, and Eighth-Order Runge-Kutta Formulas with Stepsize Control**](https://ntrs.nasa.gov/api/citations/19680027281/downloads/19680027281.pdf)
* [**A Predictor-Corrector Approach for the Numerical Solution of Fractional Differential Equations**](https://ntrs.nasa.gov/api/citations/20020024453/downloads/20020024453.pdf)
* [**Optimized Forest-Ruth- and Suzuki-like algorithms for integration of motion in many-body systems**](https://arxiv.org/abs/cond-mat/0110585)

Prva dva sta legit NASA članka. Lej kako daleč si že prišel! Ponosen sem nate, bralec. Tretji pa vsebje malenkost spoilerje za naslednjo nalogo, ampak je vseeno zanimiv.


## Kar sem jaz naredil
**Tu je verjetno tisto kar te najbolj zanima**. 

<details>
  <summary>Standard Disclaimer</summary>
  Objavljam tudi kodo. Ta je bila včasih del večjega repozitorija, ampak sem jo sedaj izvzel v svojega, da je bolj pregledna. Koda bi morala biti razmeroma pokomentirana, sploh v kasnejših nalogah. 
  
</details>

Vseeno pa priporočam, da si najprej sam poskusiš rešiti nalogo. As always za vprašanja sem na voljo.

:warning: **WARNING** :warning: : Za natančnost rezultatov sem dobival za različne metode podobne rezultate, kar se mi zdi nenavadno. Gotovo je kje napaka, ampak je nisem uspel najti. Mogoče jo lahko ti.


* [**Poročilo DN6**]({% link fmf-pdf/year3/mfp/Marko_Urbanč_06.pdf %})
* [**Source repozitorij DN6**](https://github.com/pengu5055/mfp06)

Priznam, da zna biti source repozitorij nekoliko kaotičen. Over time sem se naučil boljše prakse. Zdi se mi, da je tole glavni `.py` file.

* [**main_06.py**](https://github.com/pengu5055/mfp06/blob/main/main_06.py)

## Citiranje
*Malo za šalo, malo za res*.. če želiš izpostaviti/omeniti/se sklicati ali pa karkoli že, na moje delo, potem ga lahko preprosto citiraš kot:

```bib
@misc{Urbanč_mfpDN6, 
  title={Enačbe hoda}, 
  url={https://pengu5055.github.io/fmf-pages/year3/mfp/dn6.html}, 
  journal={Marko’s Chest}, 
  author={Urbanč, Marko}, 
  year={2023}, 
  month={Oct}
} 
```
To je veliko boljše kot prepisovanje.
