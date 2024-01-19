

Le projet de commande de repas est une application qui permet aux clients de parcourir un menu de restaurant, de sélectionner des repas et de passer des commandes dans un restaurant. Le système doit gérer les commandes, les repas, et le suivi des stocks tout en offrant une expérience fluide et efficace.

Présentation Fonctionnelle :

Client :
Sélection de Repas :L'utilisateur peut parcourir le menu, consulter les détails des repas et ajouter des articles à son panier.
Création de Commande : L'utilisateur peut créer une commande en sélectionnant plusieurs repas et spécifier des préférences si nécessaire.
Gestion de Panier : La possibilité de visualiser, ajuster et supprimer des éléments du panier avant la confirmation de la commande.

Commande :
Liste de Repas: Une commande est constituée d'une liste de repas sélectionnés par l'utilisateur.
Prix Total: Chaque commande affiche le prix total basé sur les repas sélectionnés.


Repas:
Détails du Repas :
 Chaque repas a des détails tels que le nom, la description, le prix, etc.
Stocks : Le système doit suivre les stocks de chaque repas pour éviter la commande d'articles épuisés.
![image](https://github.com/samisrhir/Front-End-Food-Ordering-App-Angular/assets/56563430/36a881d2-a204-4a52-b9ae-aa067fd1a844)
TEST UNITAIRES: ( JUNIT TEST )

TEST DES SERVICES DE COMMANDES :
Fonctions de test :
Ces tests couvrent les opérations essentielles pour la gestion des commandes dans votre application Spring Boot, garantissant le bon fonctionnement des méthodes de service associées à la manipulation des commandes.

Test GetAllCommandes :
Description : Vérifie que la méthode getAllCommandes retourne la liste de toutes les commandes existantes avec les détails corrects tels que l'ID, le total et l'état.

Test GetCommandeById :
Description : Vérifie que la méthode getCommandeById récupère une commande spécifique par son ID avec les détails corrects tels que le total et l'état.

Test UpdateCommande :
Description : Vérifie que la méthode updateCommande met à jour les détails d'une commande existante, tels que le total et l'état, et retourne la commande mise à jour.

Test DeleteCommande :
Description : Vérifie que la méthode deleteCommande supprime une commande spécifique en appelant la méthode deleteById du référentiel.

Test CreateCommande :
Description : Vérifie que la méthode createCommande crée une nouvelle commande avec les détails appropriés tels que l'ID, le total et l'état, et retourne la commande créée.

JUnit tests :



![image](https://github.com/samisrhir/Front-End-Food-Ordering-App-Angular/assets/56563430/05083cd9-c74c-4e14-9c7b-195c459bb3cc)



Maven tests:
![image](https://github.com/samisrhir/Front-End-Food-Ordering-App-Angular/assets/56563430/87deea17-21be-4492-8cb8-af2a451a1ae8)



TEST DES SERVICES DE PRODUIT (SNACK) :
Fonctions de test :

Test GetAllCommandes :
Description : Vérifie que la méthode getAllCommandes retourne la liste de toutes les commandes existantes avec les détails corrects tels que l'ID, le total et l'état.
Test SaveSnack :
Description : Vérifie que la méthode save sauvegarde correctement un snack et retourne le snack sauvegardé avec les détails appropriés tels que l'ID, la catégorie et le prix.
Test GetAllSnacks :
Description : Vérifie que la méthode getAllSnacks récupère toutes les collations existantes depuis le référentiel avec les détails corrects tels que l'ID, la catégorie et le prix
Test DeleteSnackById :
Description : Vérifie que la méthode deleteSnackById supprime une collation spécifique en appelant la méthode deleteById du référentiel avec le bon ID.
Test GetSnackById :
Description : Vérifie que la méthode getSnackById récupère correctement une collation spécifique par son ID depuis le référentiel avec les détails appropriés tels que l'ID, la catégorie et le prix.
JUnit tests :

![image](https://github.com/samisrhir/Front-End-Food-Ordering-App-Angular/assets/56563430/ec3ccdbb-cb96-4593-a6b3-d49e937b2e5e)

 SELENIUM

![image](https://github.com/samisrhir/Front-End-Food-Ordering-App-Angular/assets/56563430/722b8ae0-47d8-49fe-bf26-7c95770ba751)

Scénario de Test :
L'objectif de ce test est de vérifier la fonctionnalité du processus de placement de commande sur notre plateforme. Le test implique une série d'actions imitant l'interaction d'un client avec le site pour sélectionner un plat, l'ajouter à la commande, choisit la quantité et placer la commande.
Résultat du Test :
Le test a été exécuté avec succès, et toutes les étapes spécifiées ont été réalisées sans rencontrer d'erreurs. L'alerte avec le message attendu a été confirmée avec succès.


Observations :
Le site web a répondu conformément aux interactions de l'utilisateur.
Le processus de placement de commande, y compris la navigation dans la sélection des produits et l'interaction avec les boutons, a fonctionné comme prévu.
L'alerte confirmant le placement réussi de la commande a été affichée promptement.



SonarQube pour améliorer la qualité globale de votre code Spring Boot(Back-end): 
1-	Configuration du Projet ;
2-	Intégration et Configuration ;
3-	Exécution de Sonar Scanner ;
4-	Rapports de Qualité du Code ;

Optimisation et Correction du source code après les scans répétitifs.


https://github.com/samisrhir/Angular-Food-Ordering-App-Front-end/assets/56563430/9efadd2a-1e96-4aca-9b34-8e15cc0c059c










