---
title: MFP DN9
---
# DN 9. Spektralne metode za začetne probleme PDE (Difuzija toplote)

Naslednje tri naloge se ukvarjajo z različnimi metodami za reševanje parcialnih diferencialnih enačb, katere si lahko na nek način predstavljamo kot posplošitev diferencialnih enačb. Dopuščamo odvisnost od več parametrov. PDE so zelo pogoste v fiziki (pravzaprav, verjetno bolj pogoste kot ODE). Pojavijo se kadarkoli opisujemo količino, ki ima tako časovnno kot prostorsko odvisnost for example. Recimo primer Poissonove enačbe se pojavlja povsod (EMP, Gravitacija, Fluidomehanika, etc.).

## Navodila
Naloga želi, da rešiš enodimenzionalno difuzijo topote z začetni pogoj Gaussovsko porazdeljene temperature. To moraš narediti z Fourierovo metodo za periodični robni pogoj $T(0,t) = T(a,t)$, kjer je $a$ širina intervala na katerem rešujemo, in za homogen Dirichletov robni pogoj $T(0,t) = T(a,t) = 0$. Potem je potrebno rešiti nalogo še z Kolokacijsko metodo za homogen Dirichletov robni pogoj.

## Napotki
Priznam, da je kar nekaj časa minilo med tem ko sem oddal to nalogo in sedaj, ko jo končno objavljam. Zato se žal ne spomnim več vseh detajlov. Ko sem pisal to nalogo sem še vedno imel kar velik fokus na optimizirano kodo in možnost paralelnega izvajanja. Mogoče še najbolj smiseln napotek je, da se splača uporabiti tudi že obstoječe knjižnice za reševanje PDE. Recimo primer za reševanje z spektralnimi metodami je `dedalus-project`,
ki je med drugim tudi paraleliziran, če bi se slučajno kdo želel igrati s tem, kar je popolnoma nepotrebno sicer. 

Poleg tega vse kar se spomnim so splošni napotki v smislu, da se mi zdi koristno uporabljati razrede za numerične metode, ker so na tak način stvari bolj pregledne. Razred je kot nek kontejner, ki vsebuje vse potrebne metode in spremenljivke za reševanje nekega problema. Pridejo tudi zelo prav, če želi kdo narediti sprehod skozi parametre, kajti lahko hkrati narediš več instanc razreda z različnimi parametri. 

Več kot to, v tem trenutku ne morem povedati. Žal sem predolgo časa čakal, da sem objavil to nalogo.

## Kar sem jaz naredil
**Tu je verjetno tisto kar te najbolj zanima**. 

<details>
  <summary>Standard Disclaimer</summary>
  Objavljam tudi kodo. Ta je bila tokrat v svojem repozitoriju od začetka, ker sem teh zadnjih nekaj nalog opravljal med poletjem. Koda bi morala biti razmeroma pokomentirana, sploh v kasnejših nalogah. 
  
</details>

Vseeno pa priporočam, da si najprej sam poskusiš rešiti nalogo. As always za vprašanja sem na voljo.


* [**Poročilo DN9**]({% link fmf-pdf/year3/mfp/Marko_Urbanč_09.pdf %})
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
