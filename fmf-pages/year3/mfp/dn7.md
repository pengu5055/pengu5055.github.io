---
title: MFP DN7
---
# DN 7. Newtonov zakon (Simplektični integratorji)

Prejšnji teden sem med napotki navedel en članek, ki je omenil tematiko tega tedna. V fiziki imajo ohranjene količine zelo pomembno vlogo. V tem tednu se bomo ukvarjali z ohranjanjem energije. To počnejo simplektični integratorji.
Ta teden bo, da jih spoznaš in primerjaš tistim iz prejšnjega tedna.


## Navodila
Naloga želi, da rešiš problem matematičnega nihala. Zanima jo, kakšno velikost koraka moraš vzeti, da dobiš natančnost na 3 decimalna mesta. Verjetno najbolj pomemben del tu pa je, da študiraš periodično stabilnost shem in opazuješ kako se rešitve kvarijo s časom.

## Napotki
### 1. Že obstoječi framework
Tega sam nisem uporabljal, tako da bi lahko šlo tudi pod 3. točko, ampak mogoče si pogledaš kakšno je delo z kakšnim paketom za grafično računanje. Nikjer ni predpisano, da mora biti vse samo Python ali pa celo koda. Tole je mogoče obetavno:

* [**Zymplectic project**](https://zymplectic.com/case6.html)
* [**Sage Math**](https://www.sagemath.org/)

### 2. Integratorji
Če se prav spomnem prof. Kerševan tudi pri tej nalogi pripne skripto z že napisanimi metodami za integracijo. Meni te spet niso delale, zato sem napisal svoje. As before je oboje koristno. To da veš, da obstaja že napisana metoda in to da jo poskusiš napisati sam, le tako lahko razumeš kako deluje.

* [**Numerical Recipes in C 2nd Edition (p. 732)**](http://www.grad.hr/nastava/gs/prg/NumericalRecipesinC.pdf)
* [**Numerical Recipes in C 3rd Edition (p. 928)**](http://numerical.recipes/book.html)
* [**I. Omelyan et al.: Optimized Forest-Ruth- and Suzuki-like algorithms for integration of motion in many-body systems**](https://arxiv.org/abs/cond-mat/0110585)
* [**H. Yoshida: Construction of higher order symplectic integrators**](https://www.semanticscholar.org/paper/Construction-of-higher-order-symplectic-integrators-Yoshida/2530b0f646813c87fd318d5831505c1676ded35c)

### 3. Kar bi jaz še naredil in lahko zdaj ti dodaš
Spomnim se, da sem si zelo želel reševati dvojno matematično nihalo in s tem malo študirati kaos. Se mi zdi vredno predati seme te ideje naprej naslednjim generacijam.

* [**D. Razafindralandy et al.: Some robust integrators for large time dynamics**](https://amses-journal.springeropen.com/counter/pdf/10.1186/s40323-019-0130-2.pdf)
* [**M. Kessels: Symplectic Methods for the Double Pendulum**](https://pure.tue.nl/ws/portalfiles/portal/226599149/Thesis_BTW_Kessels.pdf)


## Kar sem jaz naredil
**Tu je verjetno tisto kar te najbolj zanima**. 

<details>
  <summary>Standard Disclaimer</summary>
  Objavljam tudi kodo. Ta je bila včasih del večjega repozitorija, ampak sem jo sedaj izvzel v svojega, da je bolj pregledna. Koda bi morala biti razmeroma pokomentirana, sploh v kasnejših nalogah. 
  
</details>

Vseeno pa priporočam, da si najprej sam poskusiš rešiti nalogo. As always za vprašanja sem na voljo.


* [**Poročilo DN7**]({% link fmf-pdf/year3/mfp/Marko_Urbanč_07.pdf %})
* [**Source repozitorij DN7**](https://github.com/pengu5055/mfp07)

Priznam, da zna biti source repozitorij nekoliko kaotičen. Over time sem se naučil boljše prakse. Zdi se mi, da je tole glavni `.py` file.

* [**main_07.py**](https://github.com/pengu5055/mfp07/blob/main/main_07.py)

## Citiranje
*Malo za šalo, malo za res*.. če želiš izpostaviti/omeniti/se sklicati ali pa karkoli že, na moje delo, potem ga lahko preprosto citiraš kot:

```bib
@misc{Urbanč_mfpDN7, 
  title={Newtonov zakon}, 
  url={https://pengu5055.github.io/fmf-pages/year3/mfp/dn7.html}, 
  journal={Marko’s Chest}, 
  author={Urbanč, Marko}, 
  year={2023}, 
  month={Oct}
} 
```
To je veliko boljše kot prepisovanje.
