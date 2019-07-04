# Fitness site

[Live demo : http://maciejf.pl/fitness/](http://maciejf.pl/fitness/)

![responsive](http://maciejf.pl/img/fitness/responsive.jpg)

## Użyte technologie

![responsive](http://maciejf.pl/img/fitness/technologie-github-fitness-site.png)

### Opis

Projekt napisany w ramach ćwiczeń.<br>
Jest to responsywna strona klubu fitness, zawierająca działające 3 podstrony.<br>
Responsywność uzyskana dzięki _media queries_ i właściwości _flexbox_. <br>
Breakpoints ustawione na _640px_ dla urządzeń mobilnych, _960px_ dla tabletów i powyżej _1240px_ dla desktopów.

Klasy nazywane zgodnie z metodologią **BEM**, dzięki preprocesorowi **SASS** można było rozbić projekt na osobne pliki dla animacji, przycisków, fontów, mixin, zmiennych oraz sekcje dla każdej podstrony co znacznie zwiększyło czytelność i porządek w kodzie.

Automatyzacją zadań zajmował się **Gulp** skonfigurowany tak aby na bieżąco odświeżać okno przeglądarki, obsługiwać preprocesor SASS, tworzyć sourcemapy, dodawać autoprefixy, minifikować kod css oraz wykonywać uglify na kodzie javaScript.

Jako continuous integration posłużył serwis **Buddy**, który został skonfigurowany do nasluchiwania zmian w repozytorium na branchu _master_. Po wykryciu zmiany _Buddy_ budował środowisko na podstawie dependencji, wykonywał minifikacje plików, kopiował nowe wersje plików na serwer a na koniec wysyłał powiadomienie na e-mail o poprawnej aktualizacji projektu.

### Struktura

```
src/
|
|--fontello/     // fontello files
|–-img/          // images
|--js/
   |--index.js

|--scss/
   |--sections/
      |--mainPage/
         |--_joinUs.scss
         |--_outTeam.scss
         |--_priceList.scss
         |--_schedule.scss
         |--_transformation.scss
         |--_workouts.scss
      |---programs/
          |--_timeTable.scss
      |---gallery/
          |--_gallery.scss
      |---contact/
          |--_contact.scss
   |--footer.scss

| |–-_animations.scss
| |–-_buttons.scss
| |–-_fonts.scss
| |–-_mixins.scss
| |–-_modal.scss
| |–-_variables.scss
| |–-_main.scss


index.html
programs.html
gallery.html
contact.html
```
