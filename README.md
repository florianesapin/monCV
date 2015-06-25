# monCV

# Démarche création mon CV

## Site
1. Création de la page web, utilisation de bootstrap (librairie pour le design)

## Environnement

1. Télécharger Node sur internet

> Node est un serveur qui execute du java script.

2. installation de npm (npm est un gestionnaire de modules intégré à Node.js)

> Un répertoire node_modules contient tous les modules installé.

3. installation de yo, bower et grunt 3 outils permettant de gérer notre site (détaillé plus tard).
```sh 
$ npm install -g yo bower grunt-cli
```
4. Installation du générateur yeomann qui tourne sur Node
```sh 
 webapp$ npm install -g generator-webapp
 ```
 
## Démarche
 
1. Créer un nouveau répertoire de travail
2. Créer la structure avec yeomann avec la commande 
```sh 
 webapp
```
> Dans le fichier html créé, il y a des scripts ainsi que la partie <head> qu'il ne faut pas supprimer afin de ne pas perdre la gestion des dépendances au css et le refraichissement de la page web (expliquer plus tard).
> Durant la création du projet il faut sélectionner ce avec quoi nous voulons gérer les références et il s'agit de bootstrap dans notre cas.

3. npm et bower sont des outils qui gére les dépendances (cela signifie que l'on peut mettre à jour une librairie sans devoir changé pleins de chemins dans le code). Dans le répertoire de travail il y a le dossier bower-componenent contenant un répertoire par librairie installés et gérer par bower. L'ajout du script dans le head du fichier html à été faites automatiquement par bower.

> (Deux fichiers sont créer bower.json et npm.json)
> npm gère les déepndance avec les packages installés(grunt, yeomann...)
> bower gère les dépendance avec les librairies installé (bootstrap, chartjs...)

4. Lancer le task runner grunt qui permet de rafrachir la page web automatiquement et instantannement après les modifications dans le fichier source.
```sh 
grunt serve
```
5. Nous avons utiliser bootswatch qui fournit des templates css que nous pouvons appliquer à notre site.

6. Créer le dist avec la commande, cette commande permet de compresser les fichiers pour le web (suppression des espace dans les fichiers, compression des images).
```sh 
grunt build
```
> (les test ont été désactiver dans le fichier txt).

Le site est maintenant prêt et optimisé pour le web.

## GIT

GitHub est un outils permettant de gérer des modifications simultanés sur le même site web.
Pour créer l'environnement git repository utiliser la commande:
```sh 
git init
```
Les fichiers se trouve dans notre répertoire de travail.
Pour passer les nouveau fichiers ou les fichers modifié dans l'état staged, utiliser la commande:
```sh 
git add nomFichier
```
Il sont maintenant dans un état staged et donc prêt à être commiter, pour ce faire utiliser la commande:
```sh 
git commit -m "commentaire"
```

On peut à tous moment voir l'état de notre répertoire git afin de voir les modifications apportés avec la commande:
```sh 
git status
```

Il est possible de créer plusieurs branches avec la commande:
```sh 
git branch nomBranch
```
Pour passer d'une branche à l'autre utiliser la commande:
```sh 
git checkout
```

Le but étant maintenant de synchroniser tous ces fichiers sur un serveur, pour connecter le serveur utiliser la commande suivante:
```sh 
git remote add origin nomServer
```
Pour uploader les fichiers sur le serveur:
```sh 
git push
```

Pour télécharger la version qui est sur le serveur:
```sh 
git pull
```
