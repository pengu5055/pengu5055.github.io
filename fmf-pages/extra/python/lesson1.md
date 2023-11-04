---
title: Lesson 1
---
# Lesson 1: Spremenljivke, podatkovni tipi in osnovni operatorji
Righto, pa dejmo končno začeti. Tukaj bomo spoznali osnovne koncepte programiranja, ki jih boš potreboval za nadaljnje delo. To so spremenljivke, podatkovni tipi in osnovni operatorji. 

## Spremenljivke
Spremenljivke so lahko v Pythonu marsikaj. Lahko so števila, lahko so nizi znakov etc. ali pa kaj bolj abstraktnega kot recimo funkcije. V ozadju je spremenljivka oznaka, ki računalniku pove, kam v pomnilnik si nekaj spravil. Ee nekako kot nekakšen predalček, ki ga označiš z nekim imenom in vanj spraviš nekaj.  

V Pythonu spremenljivke definiramo takole:

```python
ime_spremenljivke = vrednost_spremenljivke
```

Torej recimo če želimo definirati spremenljivko `a`, ki bo imela vrednost `5`, potem to naredimo takole:

```python
a = 5
```

Ena Pythonova lastnost je, da mu ni potrebno povedati za kakšen tip spremenljivke gre. On bo sklepal glede na podano, ampak to lahko kdaj vodi tudi v neželjene učinke. Bom pokazal kasneje.
Imena spremenljivk so alfa-numerična, torej lahko vsebujejo črke in številke, ampak ne smejo začeti z številko. Prav tako ne smejo vsebovati posebnih znakov, razen `_`. Torej `a`, `a1`, `a_1`, `a_1b` so vse veljavna imena spremenljivk, medtem ko `1a`, `a!`, `a-b` niso. So tudi občutljive na velike ali male črke. Meaning, `A` ni enako kot `a`. Malenkost več o temu sem napisal v Lesson 0b, kjer sem govoril o stilu pisanja kode.

## Podatkovni tipi
V Pythonu imamo kar nekaj podatkovnih tipov. Če je spremenljivka kot predalček potem je podatkovni tip nekakšna oznaka, ki pove, kakšne vrste je vsebina predalčka. Se mi zdi da bo hitro jasno kar na praktičnih primerih.

### Celo število (Integer)
Integer je podatkovni tip, ki predstavlja pozitivno ali negativno celo število brez decimalk. 

```python
x = 5
y = -5
```

Število lahko tudi pretvoriš v integer z uporabo funkcije `int()`. Tej pretvorbi se reče tudi **casting**.

```python
x = int(5.5)  # 5
y = int("5")  # 5
z = int(5.99)  # PAZI! To je 5, ne 6!
```

### Decimalno število (Float)
Float je podatkovni tip, ki predstavlja pozitivno ali negativno število z decimalkami. Možnost je tudi uporaba eksponentne notacije z `e` ali `E`, ki predstavlja potenco 10. 

```python
w = 3.14
x = 5.  # 5.0
y = 5.0
z = 5e2  # 500.0
```

Števila lahko **cast**-aš v float z uporabo funkcije `float()`.

```python
x = float(5)  # 5.0
y = float("5")  # 5.0
z = float(5.99)  # 5.99
```

### Kompleksno število (Complex)
Complex je podatkovni tip, ki predstavlja kompleksno število. Imaginarno komponento označimo z `j`. Realni del kompleksnega števila lahko dobiš z `real` in imaginarni del z `imag`. Iskreno sam redko kdaj uporabljam ta podatkovni tip, ampak imam raje `numpy` za kompleksna števila.

```python
x = 5 + 3j
y = 5j
z = complex(5, 3)  # 5 + 3j
print(x.real)  # 5.0
print(x.imag)  # 3.0
```

### Niz znakov (String)
String je podatkovni tip, ki predstavlja niz znakov. Niz znakov je lahko sestavljen iz črk, številk, posebnih znakov, itd. Vsebuje lahko tudi presledke. Niz znakov lahko definiraš z uporabo enojnih `'` ali dvojnih `"` narekovajev. 

```python
x = "Hello World!"
y = 'Hello World!'
```

Neke vrednosti lahko tudi **cast**-aš v string z uporabo funkcije `str()`.

```python
x = str(5)  # "5"
y = str(5.5)  # "5.5"
z = str(5 + 3j)  # "(5+3j)"
```

Z stringi se da veliko početi, tako da bom magari naredil poseben Lesson samo za nize.

### Seznam (List)
List je podatkovni tip, ki predstavlja seznam elementov. Elementi so lahko različnih podatkovnih tipov. Seznam definiraš z uporabo oglatih oklepajev `[]`. Elemente v seznamu ločiš z vejico `,`. Seznam je indeksiran od 0 naprej. To pomeni, da je prvi element na indeksu 0, drugi na indeksu 1, tretji na indeksu 2, itd. 

```python
x = [1, 2, 3, 4, 5]
y = ["a", "b", "c", "d", "e"]
z = [1, "a", 2, "b", 3, "c", 4, "d", 5, "e"]
print(z[0])  # 1
print(z[1])  # "a"
```

Malce bolj abstraktno, ampak nekatere reči se da castati v list. Recimo string lahko castaš v list, kjer bo vsak element v listu en znak iz stringa. 

```python
x = list("Hello World!")  # ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"]
```

### Terka (Tuple)
Tuple je podatkovni tip, ki predstavlja nabor elementov. Elementi so lahko različnih podatkovnih tipov. Tuple definiraš z uporabo okroglih oklepajev `()`. Elemente v tuple ločiš z vejico `,`. Tuple je tako kot list indeksiran od 0 naprej. Od listov se razlikuje v tem, da je tuple **immutable**, kar pomeni, da ga ne moreš spreminjati enkrat ko ga definiraš. 

```python
x = (1, 2, 3, 4, 5)
y = ("a", "b", "c", "d", "e")
z = (1, "a", 2, "b", 3, "c", 4, "d", 5, "e")
print(z[0])  # 1
print(z[1])  # "a"
```

### Množica (Set)
Set je podatkovni tip, ki predstavlja množico elementov. Elementi so lahko različnih podatkovnih tipov. Set definiraš z uporabo zavitih oklepajev `{}`. Elemente v set ločiš z vejico `,`. Set ni indeksiran tako kot list oz. ne moreš iz njega po indeksih klicati ven elemente. Od listov se razlikuje tudi v tem, da ne more vsebovati duplikatov elementov. 

```python
x = {1, 2, 3, 4, 5}
y = {"a", "b", "c", "d", "e"}
z = {1, "a", 2, "b", 3, "c", 4, "d", 5, "e"}
print(z[0])  # TypeError: 'set' object is not subscriptable
```

### Slovar (Dictionary)
Dictionary je podatkovni tip, ki predstavlja slovar. Slovar je sestavljen iz parov ključ-vrednost. Ključi so lahko različnih podatkovnih tipov, kot so lahko tudi vrednosti. Ni potrebno da so ključi in vrednosti istega podatkovnega tipa. Dictionary definiraš z uporabo zavitih oklepajev `{}`. Ključ in vrednost ločiš z dvopičjem `:`. Pari ključ-vrednost ločiš z vejico `,`. Dictionary je indeksiran po ključih. 

```python
zaloga_sadja = {"jabolka": 5, "banane": 3, "pomaranče": 2}
print(zaloga_sadja["jabolka"])  # 5
print(zaloga_sadja["banane"])  # 3
```

### Bool (Boolean)
Boolean je podatkovni tip, ki predstavlja logično vrednost. Lahko je `True` ali `False`.

```python
x = True
y = False
```

### None (NoneType)
None je podatkovni tip, ki predstavlja nič. Uporablja se za označevanje, da neka spremenljivka ne vsebuje ničesar. 

```python
x = None
```

### Ostali
Obstajajo še drugi podatkovni tipi, ampak jih ne bom posebej omenjal, ker so tudi manj pogosto v uporabi. Če te zanima več, lahko pogledaš tukaj [Python Data Types](https://www.w3schools.com/python/python_datatypes.asp).

## Osnovni operatorji
Operatorji so simboli, ki se uporabljajo za izvajanje operacij nad spremenljivkami in podatkovnimi tipi.

### Aritmetični operatorji
Aritmetični operatorji se uporabljajo za izvajanje aritmetičnih operacij nad števili.

| Operator | Opis | Primer | Rezultat |
| --- | --- | --- | --- |
| `+` | Seštevanje | `x = 5 + 3` | `x = 8` |
| `-` | Odštevanje | `x = 5 - 3` | `x = 2` |
| `*` | Množenje | `x = 5 * 3` | `x = 15` |
| `/` | Deljenje | `x = 5 / 3` | `x = 1.6666666666666667` |
| `//` | Celoštevilsko deljenje | `x = 5 // 3` | `x = 1` |
| `%` | Modulo | `x = 5 % 3` | `x = 2` |
| `**` | Potenciranje | `x = 5 ** 3` | `x = 125` |


### Dodelitveni operatorji
Dodelitveni operatorji se uporabljajo za dodeljevanje vrednosti spremenljivkam.

| Operator | Opis | Primer | Rezultat |
| --- | --- | --- | --- |
| `=` | Dodeli vrednost spremenljivki | `x = 5` | `x = 5` |
| `+=` | Sešteje vrednost spremenljivke z vrednostjo in jo dodeli spremenljivki | `x = 5` <br> `x += 3` | `x = 8` |
| `-=` | Odšteje vrednost spremenljivke z vrednostjo in jo dodeli spremenljivki | `x = 5` <br> `x -= 3` | `x = 2` |
| `*=` | Pomnoži vrednost spremenljivke z vrednostjo in jo dodeli spremenljivki | `x = 5` <br> `x *= 3` | `x = 15` |
| `/=` | Deli vrednost spremenljivke z vrednostjo in jo dodeli spremenljivki | `x = 5` <br> `x /= 3` | `x = 1.6666666666666667` |
| `//=` | Celoštevilsko deli vrednost spremenljivke z vrednostjo in jo dodeli spremenljivki | `x = 5` <br> `x //= 3` | `x = 1` |
| `%=` | Izračuna modulo vrednost spremenljivke z vrednostjo in jo dodeli spremenljivki | `x = 5` <br> `x %= 3` | `x = 2` |
| `**=` | Izračuna potenco vrednost spremenljivke z vrednostjo in jo dodeli spremenljivki | `x = 5` <br> `x **= 3` | `x = 125` |
| `&=` | Izračuna logični `AND` vrednost spremenljivke z vrednostjo in jo dodeli spremenljivki | `x = 5` <br> `x &= 3` | `x = 1` |
| `\|=` | Izračuna logični `OR` vrednost spremenljivke z vrednostjo in jo dodeli spremenljivki | `x = 5` <br> `x \|= 3` | `x = 7` |
| `^=` | Izračuna logični `XOR` vrednost spremenljivke z vrednostjo in jo dodeli spremenljivki | `x = 5` <br> `x ^= 3` | `x = 6` |
| `>>=` | Izračuna logični `RIGHT SHIFT` vrednost spremenljivke z vrednostjo in jo dodeli spremenljivki | `x = 5` <br> `x >>= 3` | `x = 0` |
| `<<=` | Izračuna logični `LEFT SHIFT` vrednost spremenljivke z vrednostjo in jo dodeli spremenljivki | `x = 5` <br> `x <<= 3` | `x = 40` |

### Primerjalni operatorji
Primerjalni operatorji se uporabljajo za primerjanje dveh vrednosti.

| Operator | Opis | Primer | Rezultat |
| --- | --- | --- | --- |
| `==` | Enakost | `x = 5` <br> `y = 3` <br> `x == y` | `False` |
| `!=` | Neenakost | `x = 5` <br> `y = 3` <br> `x != y` | `True` |
| `>` | Večje | `x = 5` <br> `y = 3` <br> `x > y` | `True` |
| `<` | Manjše | `x = 5` <br> `y = 3` <br> `x < y` | `False` |
| `>=` | Večje ali enako | `x = 5` <br> `y = 3` <br> `x >= y` | `True` |
| `<=` | Manjše ali enako | `x = 5` <br> `y = 3` <br> `x <= y` | `False` |

### Logični operatorji
Logični operatorji se uporabljajo za izvajanje logičnih operacij nad vrednostmi in za kombiniranje pogojev.

| Operator | Opis | Primer | Rezultat |
| --- | --- | --- | --- |
| `and` | Vrne `True`, če sta oba pogoja `True` | `x = 5` <br> `x > 3 and x < 10` | `True` |
| `or` | Vrne `True`, če je vsaj eden od pogojev `True` | `x = 5` <br> `x > 3 or x < 4` | `True` |
| `not` | Vrne `True`, če je pogoj `False` | `x = 5` <br> `not(x > 3 and x < 10)` | `False` |

### Operatorji identitete
Operatorji identitete se uporabljajo za primerjanje objektov, ne pa njihovih vrednosti, ampak po temu ali se nahajajo na istem mestu v pomnilniku. Torej ali gre "fizično" za isti objekt.

| Operator | Opis | Primer | Rezultat |
| --- | --- | --- | --- |
| `is` | Vrne `True`, če sta obe spremenljivki isti objekt | `x = ["jabolka", "banane"]` <br> `y = ["jabolka", "banane"]` <br> `z = x` <br> `x is z` <br> `x is y` | `True` <br> `False` |
| `is not` | Vrne `True`, če nista obe spremenljivki isti objekt | `x = ["jabolka", "banane"]` <br> `y = ["jabolka", "banane"]` <br> `z = x` <br> `x is not z` <br> `x is not y` | `False` <br> `True` |

### Operatorji pripadnosti
Operatorji pripadnosti se uporabljajo za preverjanje, ali je določen element prisoten v določenem podatkovnem tipu, ki predstavlja neko vrsto zaporedja (list, tuple, set, dictionary, string). 

| Operator | Opis | Primer | Rezultat |
| --- | --- | --- | --- |
| `in` | Vrne `True`, če je določen element prisoten v določenem podatkovnem tipu | `x = ["jabolka", "banane"]` <br> `"jabolka" in x` | `True` |
| `not in` | Vrne `True`, če določen element ni prisoten v določenem podatkovnem tipu | `x = ["jabolka", "banane"]` <br> `"pomaranče" not in x` | `True` |

### Bitni operatorji
Bitni operatorji se uporabljajo za izvajanje operacij nad biti števil. Biti so najmanjši deli števila. Biti so lahko `0` ali `1`. Te operacije so uporabne, ko delaš z biti števil, kar je včasih potrebno, če delaš z mikrokrmilniki ali pa če delaš z nekimi podatki, ki so zapisani v binarni obliki. Jaz jih osebno ne uporabljam veliko sicer.

| Operator | Opis | Primer | Rezultat |
| --- | --- | --- | --- |
| `&` | Bitni `AND` | `x = 5` <br> `y = 3` <br> `x & y` | `1` |
| `\|` | Bitni `OR` | `x = 5` <br> `y = 3` <br> `x \| y` | `7` |
| `^` | Bitni `XOR` | `x = 5` <br> `y = 3` <br> `x ^ y` | `6` |
| `~` | Bitni `NOT` | `x = 5` <br> `~x` | `-6` |
| `<<` | Bitni `LEFT SHIFT` | `x = 5` <br> `x << 3` | `40` |
| `>>` | Bitni `RIGHT SHIFT` | `x = 5` <br> `x >> 3` | `0` |
