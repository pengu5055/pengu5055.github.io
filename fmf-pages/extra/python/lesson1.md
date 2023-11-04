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




