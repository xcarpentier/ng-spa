# L’énoncé du TP — level 4

- Créer le fichier edit.controller.js, un controller qui s'occupe la sous partie d'édition d'un billet de blog. A chaque fois qu'il y a un billet créer le controller envoiy un événement à son scope parent.
- Créer le fichier display.controller.js qui s'occuppe d'afficher les billets de blogs. Ce controller écoute l'événememnt de sauvegarde d'un billet et ajoute le nouveau billet à sa liste.
- Créer le fichier app.controller.js, dont le scope est parent des scopes des 2 autres controller. Ce controller écoute et retransmet directement l'événement de sauvegarde d'un post.
- Utiliser la syntaxe "controller as"

# Support

Dans un simple fichier HTML (index.html), on va importer la librairie AngularJS directement depuis une URL.

# Remarque sur le niveau courant

Le TP au niveau courant (sans vos modifications) est une solution proposée pour le TP de niveau précédent.