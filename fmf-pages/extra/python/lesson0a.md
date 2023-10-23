---
title: Lesson 0a
---
# Lesson 0a: Namestitev Pythona in nekega editorja
Right nekje bo potrebno začeti in brez tega, da imaš nameščen Python res ne bo šlo. Kar se tiče editorja je pa popolnoma your choice. Jaz sem bil včasih strastno proti VSCode in sem zvesto zagovarjal PyCharm, ampak sem zdaj bolj kot ne zamenjal ekipi, zaradi boljšega multi-language support-a pri VSCode, kar pa pri nas ni relevantno. Karkoli bo okay, tudi `notepad`/`nano`.

## Windows
Namestitev Pythona je sila preprosta. Najprej obišči Python-ovo uradno spletno stran:

<span style="display: block; text-align: center; font-size: 18px; font-weight: bold">
<a href="https://www.python.org/downloads/windows/">Python Windows Downloads </a>
</span>

Tam prenesi installer za zaželjeno verzijo. Če ne veš katere izbrati, je običajno popolnoma okay vzeti najnovejšo verzijo. Preveri če boš uporabljal kakšne pakete, ki zahtevajo starejše verzije in niso kompatibilne z novejšimi!  

Kakorkoli letiš čez installer kot za katerokoli zadevo. Praktično je če pokljukaš tudi opcijo za *"Install Python 3.x to PATH"*, ker boš s tem lahko poganjal Python programe iz windows ukazne vrstice. Drugače naletiš kasneje na težave, kot na primer:

```
Python is not recognized as an internal or external command..
```

V tem primeru bom dodal še download link za VSCode. Dobiš ga načeloma tukaj:

<span style="display: block; text-align: center; font-size: 18px; font-weight: bold">
<a href="https://code.visualstudio.com/download">Visual Studio Code Windows Download</a>
</span>

Spet podobno kot prej, tu lahko poklikaš next v installerju. Za namen Python developmenta, bi bilo pametno, da si namestiš še nekaj razširitev. To narediš tako, da odpreš VSCode in na levi v stolpcu najdeš ikono, ki kaže štiri kocke, kjer ena malo odstopa. Potrebno je namestiti:

* `Python` od `Microsoft`
* `Pylance` od `Microsoft`
* `Python Environment Manager` od `Don Jayamanne`

Zelo bi pa priporočal še kakšen:
* `Code Spell Checker` od `Street Side Software` in še razširitev Slovenščine zanj

**To je vse pravzaprav! Pripravljen si na programiranje.**

## Linux
Linux je dandanes vedno bolj dostopen tudi za začetnike in ga za programersko okolje zelo priporočam. Namestitev Pythona je načeloma precej odvisna od distribucije Linuxa, ki jo uporabljaš ampak najverjetneje imaš Python že nameščen, ker je to default na Linux-u. To lahko preveriš tako, da v Terminalu poženeš

```bash
python --version
```
oz. na nekaterih distribucijah
```bash
python3 --version
```

Če dobiš neke sorte izpis potem je vse z verzijo Pythona, potem vse že štima. V primeru da temu ni tako, pa moraš namestiti Python. Najlažje preko package managerja tvoje distribucije:

#### Debian/Ubuntu
```bash
sudo apt update
sudo apt install python3 python3-pip
```
#### Fedora/REHL
```bash
sudo dnf install python3 python3-pip 
```
### Arch Linux
```bash
sudo pacman -Sy python3 python3-pip
```

Zdaj kar še preostane za ta lesson je namestitev VSCode-a. To je spet nekoliko različno od distribucije do distribucije.

#### Debian/Ubuntu
Najprej namestimo vse dodatne potrebne pakete. To naredimo z:

```bash
sudo apt install software-properties-common apt-transport-https wget -y
```

Potem dodamo podpisni ključ GPG od Microsoft-a:

```bash
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
```

Potem moramo dodati Microsoftov repozitorij, kjer so shranjene verzije VSCode-a.

```bash
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
```

In zdaj lahko naredimo še:

```bash
sudo apt install code
```

#### Fedora/REHL
Dodamo podpisni ključ GPG od Microsoft-a:

```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
```

Potem moramo dodati Microsoftov repozitorij, kjer so shranjene verzije VSCode-a.

```bash
cat <<EOF | sudo tee /etc/yum.repos.d/vscode.repo
[code]
name=Visual Studio Code
baseurl=https://packages.microsoft.com/yumrepos/vscode
enabled=1
gpgcheck=1
gpgkey=https://packages.microsoft.com/keys/microsoft.asc
EOF
```

Posodobimo package liste in namestimo VSCode:

```bash
sudo dnf check-update
sudo dnf install code
```

### Arch Linux
V Arch Linux-u je že na voljo package preko AUR-ja. Če že imaš AUR helper, potem lahko preskočiš naslednjih nekaj korakov. Če ga nimaš, pa ga lahko namestiš z:

```bash
sudo pacman -S git
cd /opt
sudo git clone https://aur.archlinux.org/yay-git.git
```

Zdaj moramo spremeniti lastništvo teh datotek.

```bash
sudo chown -R [YOUR-USERNAME]:[YOUR-USERNAME] ./yay-git
cd yay-git
```

in nato namestimo yay:

```bash
makepkg -si
```

Preko tega lahko  zdaj namestimo VSCode z ukazom:

```bash
sudo yay -Syu visual-studio-code-bin
```

Zdaj pa še neodvisno od distribucije je treba znotraj VSCode namestiti še razširitve.
Potrebno je namestiti:

* `Python` od `Microsoft`
* `Pylance` od `Microsoft`
* `Python Environment Manager` od `Don Jayamanne`

Zelo bi pa priporočal še kakšen:
* `Code Spell Checker` od `Street Side Software` in še razširitev Slovenščine zanj

**To je vse pravzaprav! Pripravljen si na programiranje v Linux-u.**






