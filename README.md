# Publicité
Une animation publicitaire pour un organisme sans but lucratif (OSBL)

## Description
Un organisme (de votre choix) vous a demandé de produire une publicité destinée à être placée sur divers sites Web.

## Particularités

- Un exemple _incomplet_ de publicité est fourni avec le dossier de travail.
- Le format de la publicité est libre à vous parmi un des formats disponibles sur la page suivante : [À propos des tailles courantes pour les annonces display](https://support.google.com/google-ads/answer/7031480?hl=fr)
- Dans le dossier partagé sur OneDrive, se trouve une série de logos en format SVG. Certains ont été déconstruits afin de vous donner plus de souplesse. Vous pouvez utiliser l'un de ces logos ou prendre le logo de votre OSBL de choix. Le logo n'a pas besoin d'être en SVG.

## Animation minimale

- La publicité doit contenir __au moins__ 2 éléments animés.
- La publicité doit contenir __au moins__ 3 segments d'animation (animations non simultanées)
- Un des éléments doit être l'objet __au moins__ 2 animations séparées, donc 2 segments d'animation.
- Il n'y a pas de limite inférieure ou supérieure à la durée de l'animation. (En haut d'une heure, je vais être contrarié) 

## La mécanique

- La publicité doit tourner en boucle avec un jeu de 1 seconde (1000 milisecondes) entre chaque itération. Bref, à la __fin__ du dernier segment d'__animation__, la première séquence doit recommencer.
- Si l'usager double-clique dans la publicité, elle recommence. [Trouvez l'événement](https://developer.mozilla.org/fr/docs/Web/Events#Événements_standards)
- La publicité est vouée à être visionnée sur un site tiers dans un `iframe`. Le `iframe` projette la page `index.html` et se trouve, pour le développement, dans la page `contexte.html`.
- Les dimensions de la publicité doivent être placées dans la classe `App` et le `iframe` du fichier `contexte.html`.
- La mécanique des animations peut consister de l'ajout ou du retrait d'une classe comme dans l'exemple, mais vous n'êtes pas limité à ça.
- L'événement "animationend" est appliqué à la balise #app. Cet événement est déclanché losqu'une animation se termine pour un de ses enfants ou pour elle-même. On n'a donc pas besoin d'en ajouter pour chaque élément animé. Voir et analyser l'exemple.

## Consignes supplémentaires

- L'exemple fourni présente une publicité complète qui ne se répète pas et ne réagit pas au double-clic. La vôtre doit le faire.
- Vous devez créer la méthode `redemarrer` qui, lorsqu'elle est appelée, remet l'animation à son état initial et démarre la première séquence d'animation. (Plus de détails dans le fichier de travail)
- Les éléments HTML (animables ou non) n'ont pas besoin d'être créés par programmation. Ils peuvent être placés directement dans la balise `#app` de la page `index.html`.
- Des points symboliques sont attribués à la qualité et la complexité de l'animation comme telle (entre 5 et 10%)

## Le dossier de travail

- La page `index.html` contient la publicité brut telle que chargée par le `iframe`.
- La page `contexte.html` est la version que le site présentera à l'internaute.
- La classe `App(.js)` est l'endroit où placer votre code. Elle contient une animation simple en guise de point de départ. Cette animation devra être enlevée.
- La feuille de style `style.scss` ou `style.css` devra contenir les animations de votre publicité.
- Le dossier `images`... Il n'y en a pas. Vous gérez vos médias de la façon qui vous semble la plus appropriée.

## Autres informations

- Durée pour faire le minimum... par quelqu'un qui a bien suivi le cours : 30 min.
- Durée pour faire une super publicité parfaite... par une tête de cochon perfectinniste : infinie.
- Temps attribué pour faire une publicité pas pire : jusqu'à jeudi octobre 2019 à midi.
Valeur dans la session : 15%.
- Quand est-ce que je vais avoir mes notes du pratique et du test 4 : Bientôt. 

## Grille de correction

À venir