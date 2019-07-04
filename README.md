# Fitness site

[Live demo : http://maciejf.pl/fitness/](http://maciejf.pl/fitness/)

![responsive](http://maciejf.pl/img/fitness/responsive.jpg)

## Użyte technologie

![responsive](http://maciejf.pl/img/fitness/technologie-github-fitness-site.png)

### Opis

Projekt napisany w ramach ćwiczeń. Jest to responsywna strona klubu fitness, zawierająca działające 3 podstrony.
Breakpoints ustawione na _640px_ dla urządzeń mobilnych, _960px_ dla tabletów i powyżej _1240px_ dla desktopów.

#### Struktura

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
