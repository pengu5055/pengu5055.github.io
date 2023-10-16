---
title: MFP DN5
---
# DN 5. Hitra Fourierova Transformacija (FFT in avtokorelacijske funkcije)
  
Essentially nadaljevanje prejšnje naloge, kjer je vsaj zame bila glavna ugotovitev, da je za vse praktične namene DFT prepočasen. V tej nalogi se naučimo, kako lahko DFT izračunamo veliko hitreje. To je seveda FFT.

## Navodila
Naloga želi, da za podane posnetke oglašanja sove velike uharice izračunamo njihove avtokorelacijske funkcije. Dani so posnetki z prijetnimi zvoki narave. Za zašumljene posnetke ugotovi katera sova se oglaša.

## Napotki

### 1. Read the docs
Sklepam, da večina ne bo šla pisati svoje implementacije FFT, zato je dobro, da razumeš kako vgrajene funkcije delujejo. Again, pomemben nauk, read the docs. Dobra praksa je, da to storiš še preden se ti zatakne in si s tem prišparaš dragocen čas.

* [**np.fft**](https://numpy.org/doc/stable/reference/routines.fft.html)
* [**np.correlate**](https://numpy.org/doc/stable/reference/generated/numpy.correlate.html)

### 2a. FFT: Go crazy go stupid
Prof. Kerševan rad reče "Once you have a hammer, everything looks like a nail". V mojem primeru je bilo to res in hej I encourage you to do the same. Stlači kar češ v FFT. Podatki za delnice na borzi? FFT. Slike? FFT. Hotel... Trivago? FFT.

### 2b. DSP continued
Ena stvar, ki je bila meni res zanimiva je bila uporaba FFT za izračun avtokorelacijske funkcije v namen procesiranja audio signala oz. njegov "razmaz" v t.i. *ambient texture*. Res je, da je moj okus za glasbo v zadnjih letih propadel, ampak vseeno je ambientalna glasba en lepši del, ki je ostal.
V repozitoriju je mapa `wavs`, kjer je nekaj posnetkov, ki sem jih naredil. Ena hyperpop pesem, odsek ene moje kitarske skladbe in potem njihove transformacije in kombinacije.

:warning: **WARNING** :warning: : Vsebina lahko zelo niha v glasnosti, torej previdno z ušesi. Vseeno priporočam slušalke, da se sliši vse lepo. Razen za vse posnetke označene z `test*.wav`. Te ti uničijo ušesa.

### 3. Dodatna naloga: Avtokorelacija za nek dodaten signal
Če delaš dodatne naloge povsod potem zelo pohvalno. Meni jih in real time ni uspelo, tako da jih nisem mogel vedno. Se mi pa zdi vredno poudariti, da je tu osnovna naloga dovolj kratka, da hitro prideš na dodatno nalogo in da se jo splača narediti iz prejšnjih dveh razlogov, ki sta v bistvu ena in ista stvar. Ne vem če imam kakšen drug smiselen napotek tu, ker v osnovi samo kličeš `np.fft.fft` in `np.fft.ifft` oz. kar `np.correlate`.

### 4. Kar bi jaz še naredil in lahko zdaj ti dodaš
Logičen odgovor tu je, da sam napišeš svojo implementacijo FFT in jo primerjaš potem z vgrajeno. 

* [**Numerical Recipes in C 2nd Edition (p. 504)**](http://www.grad.hr/nastava/gs/prg/NumericalRecipesinC.pdf)
* [**Numerical Recipes in C 3rd Edition (p. 608)**](http://numerical.recipes/book.html)
* [**Rosetta Code: Fast Fourier Transform**](https://www.rosettacode.org/wiki/Fast_Fourier_transform#Python)
* [**Butterfly diagram**](https://en.wikipedia.org/wiki/Butterfly_diagram)


## Kar sem jaz naredil
**Tu je verjetno tisto kar te najbolj zanima**. 

<details>
  <summary>Standard Disclaimer</summary>
  Objavljam tudi kodo. Ta je bila včasih del večjega repozitorija, ampak sem jo sedaj izvzel v svojega, da je bolj pregledna. Koda bi morala biti razmeroma pokomentirana, sploh v kasnejših nalogah. 
  
</details>

Vseeno pa priporočam, da si najprej sam poskusiš rešiti nalogo. As always za vprašanja sem na voljo.


* [**Poročilo DN5**]({% link fmf-pdf/year3/mfp/Marko_Urbanč_05.pdf %})
* [**Source repozitorij DN5**](https://github.com/pengu5055/mfp05)

Priznam, da zna biti source repozitorij nekoliko kaotičen. Over time sem se naučil boljše prakse. Zdi se mi, da je tole glavni `.py` file.

* [**main_05.py**](https://github.com/pengu5055/mfp05/blob/main/main_05.py)

## Citiranje
*Malo za šalo, malo za res*.. če želiš izpostaviti/omeniti/se sklicati ali pa karkoli že, na moje delo, potem ga lahko preprosto citiraš kot:

```bib
@misc{Urbanč_mfpDN5, 
  title={Hitra Fourierova Transformacija}, 
  url={https://pengu5055.github.io/fmf-pages/year3/mfp/dn5.html}, 
  journal={Marko’s Chest}, 
  author={Urbanč, Marko}, 
  year={2023}, 
  month={Oct}
} 
```
To je veliko boljše kot prepisovanje.
