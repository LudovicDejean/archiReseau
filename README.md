# archiReseau
P2P application de Thomas Peytavin et Ludovic Dejean

Pour que le P2P fonctionne entre deux ordinateurs le projet doit être installé sur les deux système.

Nous utilisons l'API SKYLINK pour les composants permettant le fonctionnement en P2P
Lien vers la documentation de l'API : http://cdn.temasys.io/skylink/skylinkjs/latest/docs/index.html

# 1 Install du projet
Une fois le projet cloné (prenez de préférence le lien SSH de git), utilisez la commande suivante pour installer les dépendances :
$npm install     Si besoin-> $sudo npm install

# 2 Lancer le projet
$npm start
Par défaut il se lancera avec chrome sur l'adresse http://localhost:3001/

# 3 Résumé du fonctionnement
# a) Arborescence
Pour voir la liste des dépendance => package.json
C'est une application en React.js basé sur une architécture de components et de containers.

/src/js/app.js => qui est la base de l'application qui fait appelle à la page d'accueil home.js
Il y a deux containers qui font office de "pages" appellant chacun les "components" nécessaires au donctionnement de leurs fonctionnalités
La présentation pour la home.js
Les composants de tchat pour chat.js

# b) Connexion p2p
    config: { iceServers: [ { urls: 'stun:stun.l.google.com:19302' } ] } // dans chat.js ligne 77

Cette config permet d'utiliser un STUN server de google qui est libre d'accès pour permettre d'établir la connexion entre les deux pears si ils ne sont pas sur le même réseau. Cela permets de contourner les difficultés lié au NAT.
Le STUN server n'héberge pas la connexion, il permet juste de contourner les problématiques réseaux.
