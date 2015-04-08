# L’énoncé du TP — level 4

- Créer le fichier edit.controller.js, un controleur qui s'occupe de la sous partie d'édition d'un billet de blog. À chaque billet créé (soumis) le controller envoie un événement au(x) scope(s) parent(s).
- Créer le fichier display.controller.js qui s'occuppe d'afficher les billets de blogs. Ce controleur écoute l'événemement de sauvegarde d'un billet et ajoute le nouveau billet à sa liste.
- Créer le fichier app.controller.js, dont le scope est parent 2 autres scope. Ce controller écoute et retransmet directement l'événement de sauvegarde d'un post.
- Utiliser la syntaxe "controller as"

# Support

Dans un simple fichier HTML (index.html), on va importer la librairie AngularJS directement depuis une URL.

# Remarque sur le niveau courant

Le TP au niveau courant (sans vos modifications) est une solution proposée pour le TP de niveau précédent.