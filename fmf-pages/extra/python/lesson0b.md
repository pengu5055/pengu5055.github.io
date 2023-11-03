---
title: Lesson 0b
---
# Lesson 0b: Virtualna okolja in Style Guide

## Virtualna okolja
Na začetku se bo mogoče zdelo to odveč, ampak se mi zdi, da je dobro, da se navadiš na to, da imaš za vsak projekt svoje virtualno okolje. Down the line si s tem preprečiš veliko težav z različnimi konflikti med različnimi verzijami knjižnic, ki jih boš uporabljal. Opcij za virtualna okolja je več. Tu bom predstavil najbolj preprosto možnost, ki je kar že vgrajena v Python. To je modul `venv`.

### Kaj je virtualno okolje?
Virtualno okolje je nekakšna izolirana kopija Pythona, ki jo lahko uporabljaš za svoj projekt. Praktično se klonira tvoja inštalacija Pythona in bo potem za namen nekega projekta ločena od ostalih projektov. To pomeni, da lahko v tem okolju namestiš različne verzije knjižnic, ki jih potrebuješ za svoj projekt, brez da bi to vplivalo na ostale projekte. Vem, da se zna komu to zdeti odveč, ampak ko boš imel več projektov, ti bo to prihranilo veliko časa in živcev.

### Kam se ustvari virtualno okolje?
Virtualno okolje se ustvari v podmapi, ki jo imaš odprto! To pomeni, da če imaš odprto mapo `C:\Users\Janez\Documents\Python\Projekt1` in ustvariš virtualno okolje, bo to okolje res za ta projekt. Če boš imel odprto mapo `C:\Users\Janez\Documents\FizikalniPraktikum1` potem boš tam ustvaril okolje za vse nadaljne podmape (kar je lahko recimo v kontekstu praktikuma dobra ideja). Če pa boš odprl mapo `C:\Users\Janez\Documents\` in tam ustvari okolje boš pa imel to okolje za vse projekte, ki jih boš imel v Dokumentih in s tem si lahko narediš kakšen zaplet. Be mindful skratka.

### Kako se ustvari virtualno okolje?
Če si spremljal Lesson 0a, potem imaš v Visual Studio Code že nameščen extension `Python Environment Manager`. Če ga nimaš, ga namesti. To lahko narediš tako, da odpreš VSCode in na levi v stolpcu najdeš ikono, ki kaže štiri kocke, kjer ena malo odstopa. Tam poiščeš `Python Environment Manager` od `Don Jayamanne` in ga namestiš. To nam bo omogočilo enostavno upravljanje z virtualnimi okolji.  

Opaziš da se je zdaj na levi pojavila ikona z logotipom Pythona? Tam se upravlja z okolji. Kar nas zanima je tisto v zgornjem predelu *Workspace Environments*. Če daš svojo miško zraven tega napisa se pojavi nekaj ikon. Klikni na plus, ki ustvari novo okolje. Tu boš imel izbiro med `venv` in `conda`. `venv` je že vgrajen v Python, `conda` pa je ena alternativna možnost, ampak o njej kdaj drugič. Izberi `venv` in izberi verzijo Pythona, iz katere naj to okolje izhaja. Če si ravno namestil Python imaš verjetno samo eno izbiro. Če imaš več verzij, pa izberi tisto, ki jo želiš.

Ko odpreš `.py` file znotraj mape, kjer je virtualno okolje bi moral Visual Studio Code sam to zaznati in te vprašati, če želiš uporabljati to okolje oz. če te ne, lahko preveriš v spodnjem desnem kotu. Moralo bi pisati nekaj v slogu `3.11.0 64-bit ('venv': venv)`. Če piše samo `3.11.0 64-bit` potem virtualno okolje ni v rabi, ampak nič za to. V klikni na napis in pojavila se ti bo opcija za izbiro med okolji. Ponudil bo možnosti izbire med Globalnimi okolji (te, ki so za vse projekte enaki), če si pravilno sledil navodilom se bo pojavilo tudi virtualno okolje. V mojem primeru VS Code celo napiše `Recommended` zraven. Izberi to okolje in to je to. Zdaj bi moral imeti v spodnjem desnem kotu nekaj ala `3.11.0 64-bit ('venv': venv)`.  

Torej povzetek navodil: Klikni Python logo na levi strani, klikni plus, ko daš miško čez `Workspace Environments`, dvakrat klikni enter. That's literally it. Ostalo programiraš kot vedno.

#### Marko kaj pa moja ukazna vrstica?
Yes, virtualno okolje lahko ustvariš tudi preko ukazne vrstice. Koristno v primeru da uporabljaš drug code editor za katerega ne najdeš nek extension, ki to naredi zate (which I doubt) ali pa če pač hočeš biti kul in vztrajaš pri ukazni vrstici. Kakorkoli, je itak dead simple. Odpreš ukazno vrstico in se premakneš v mapo, kjer želiš ustvariti okolje. Nato pa poženeš ukaz:

```bash
python -m venv .venv
```

To bo ustvarilo virtualno okolje v z imenom `.venv` v mapi kjer se nahajaš. Uporabljena verzija Pythona bo tista, ki je trenutno aktivna v ukazni vrstici. To lahko izveš tako, da poženeš ukaz:

```bash
python --version
```

Zadnje je še aktivacija okolja, če to tvoj editor ne zazna sam ali pa če je želja velika. Poženi

```bash
.venv\Scripts\activate
```

Če maš Linux, je tam malenkost drugačen ukaz. V tem primeru:

```bash
source .venv/bin/activate
```

Pazi sicer, če se izkaže, da moraš ročno aktivirati okolje ne pozabi, da moraš to vsakič, ko odpreš novo ukazno vrstico! Zato je praktično, da editor poskrbi za to.

## Style Guide
To sem želel še dodati nekam na začetek, ker se mi zdi zelo dobro da se navadiš na to, da pišeš kodo v skladu s PEP 8 predpisi za Python. Te lahko najdeš tukaj [PEP 8 - Style Guide for Python](https://peps.python.org/pep-0008/). Je veliko napisano, ampak se splača preleteti. Bom pa tukaj napisal nekaj najbolj osnovnih stvari, ki se jih splača držati. Res je, da je stil kode personal preference in res, do whatever, ampak če bo kdorkoli kdaj pogledal tvojo kodo, je osnovno držanje teh predpisov praktično pričakovano.

Sicer če koga zanima, zakaj je to važno, gre za berljivost kode. Z dobro berljivo kodo boš pomagal sebi, ko se bo kaj zalomilo in boš moral popravljati kodo, pa kot rečeno tudi drugim, ki bodo brali tvojo kodo. Seveda se je nemogoče držati vseh predpisov ves čas, ampak dobro jih je imet vsaj v mislih. Hell včasih jih je smiselno tudi kršiti, če je to za berljivost kode boljša.

### Indentacija
Python je zanimiv jezik, ker je v njem pomembna indentacija. To je zamik teksta basically. V glavnem imaš na voljo dve možnosti, da to narediš. `Space` in `TAB`. Po PEP 8 oboje štima, ampak izberi eno in se tega drži striktno. 

Osebno priporočam to kar dela glavnina Python uporabnikov in to je `Space`, 4 presledki. Med drugim če uporabljaš kaj drugega kot `Notepad` bi ti moral tudi editor na to paziti. V Visual Studio Code lahko desno spodaj nastaviš indentacijo. Priporočam da nastaviš na `Spaces` in `4`, če temu slučajno ni tako.

### Imena
V glavnem se drži tega, da so imena spremenljivk, funkcij, razredov, itd. vse z malimi črkami in da se besede ločuje s podčrtaji. Torej `ime_spremenljivke` in ne `ImeSpremenljivke`. Izjema so konstante, ki se pišejo z velikimi črkami. Torej `KONSTANTA` in ne `konstanta`. PascalCase in camelCase sta uporabljena za imena razredov, torej `ImeRazreda` recimo.  

Priporočeno je tudi, da se izogibaš enočrkovnih imen z črkami, ki so podobne drugim črkam. Torej recimo `I l`(veliki I, mali L).

Kar pa je verjetno najmanj personal preference, ampak praktično obvezno je, da se izogneš uporabi Pythonovih rezerviranih besed, za uporabo kot spremenljivke. In simple terms, če ti editor obarva besedo z neko smešno barvo, potem zna biti to rezervirana beseda (daj miško čez in mogoče izveš kaj več). Recimo primeri, ki jih ljudje kršijo pogosto so `list`, `dict`, `str`, `int`, `float`, `print`, `input`, `open`, `file`, `id`, `type`, `len`, `range`, `sum`, `max`, `min` in še mnogo bi se našlo. Če res moraš uporabiti rezervirano besedo, potem dodaj na koncu `_` ali pa `__`. Recimo `list_` ali pa `list__`. Sicer je pa itak boljše dati neko deskriptivno ime spremenljivki.

### Funkcije
Funkcije se piše z malimi črkami in se besede ločuje s podčrtaji. Torej `ime_funkcije`. To je pravilo, ki ga sam največ kršim, ker imam rad camelCase. Ampak ja po PEP 8 je bolj priporočeno `ime_funkcije`. To each their own. Bi pa priporočal, da se držiš tudi programerskega načela, da so funkcije glagoli. Torej `izracunaj_povprecje` in ne `povprecje`.

### Komentarji
Komentarji so super. Komentiraj kodo. Komentiraj kodo, ki jo pišeš. A veš kako hvaležen si boš 3 tedne kasneje? Obljubim, da se ti bo zgodilo, da boš nekaj napisal in čez en mesec ne boš imel več pojma o tem kako stvar deluje. Priporočam komentarje v smislu:

```python
# Izpiši pozdrav
print("Hello World!")
```

Dovoljena je tudi raba inline komentarjev, ampak se jih izogibaj, če je le možno. V primeru, da jih uporabiš, pa je načelo, da narediš dva presledka od kode nato `#`, presledek in zdaj šele tekst. Torej:
    
```python
print("Hello World!")  # Izpiši pozdrav
```

Daljše komentarje pa lahko narediš tudi z uporabo `"""` ali `'''`. To je posebej koristno za dokumentacijo funkcij, kar pride prav enkrat ko se stvari zapletejo. Torej recimo:

```python
def greet(name):
    """
    Prints a greeting for the given name.

    Parameters
    ----------
    name : str
        Name of the person to greet.

    Returns
    -------
    None
    """
    print(f"Hello {name}!")
```

Teh priporočil je res še več, ampak to bo verjetno dovolj za začetek. Če te zanima več, pa si preberi PEP 8. Načeloma se bom trudil, da bom sam tudi sledil temu, ampak ne obljubljam ničesar hihi.