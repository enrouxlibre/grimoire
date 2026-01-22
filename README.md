# Mon Vieux Grimoire

Projet de backend Node OpenClassRooms.

## Architecture

Le projet est composé de trois parties :

- **Frontend** : Application React (Fait par OpenClassRooms)
- **Backend** : API Node.js/Express (L'objet du projet)
- **Base de données** : MongoDB (Avec Docker)

## Prérequis

- Node.js (version 16 ou supérieure)
- npm
- MongoDB (installé localement ou via Docker)

## Installation

### 1. Cloner le projet

```bash
git clone <url-du-repo>
cd grimoire
```

### 2. Configurer les variables d'environnement

Créer un fichier `.env` à la racine du projet avec les variables suivantes :

```env
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=password
JWT_SECRET=RANDOM_TOKEN_SECRET
```

### 3. Installation des dépendances

#### Backend

```bash
cd backend
npm install --force
```

#### Frontend

```bash
cd frontend
npm install
```

## Démarrage du projet

### Option 1 : Avec Docker (recommandé)

**Prérequis** : Docker et Docker Compose installés

```bash
# À la racine du projet
docker-compose up --build
```

Les services seront accessibles sur :

- Frontend : http://localhost:3000
- Backend : http://localhost:4000
- MongoDB : localhost:27017

### Option 2 : Démarrage manuel

#### 1. Démarrer MongoDB

Si MongoDB n'est pas lancé sur Docker :

```bash
docker-compose up
```

#### 2. Démarrer le backend

```bash
cd backend
npm start
```

Le serveur backend sera accessible sur http://localhost:4000

#### 3. Démarrer le frontend

Dans un nouveau terminal :

```bash
cd frontend
npm start
```

L'application React sera accessible sur http://localhost:3000

## Structure du projet

```
grimoire/
├── backend/
│   ├── controllers/      # Contrôleurs pour la logique métier
│   ├── middleware/       # Middleware d'authentification et upload
│   ├── models/           # Modèles Mongoose
│   ├── routes/           # Routes de l'API
│   ├── images/           # Dossier de stockage des images
│   ├── app.js            # Configuration Express
│   └── server.js         # Point d'entrée du serveur
├── frontend/
├── .env                  # Variables d'environnement
└── docker-compose.yml    # Configuration Docker Compose
```

## API Endpoints

### Authentification

- `POST /api/auth/signup` - Créer un compte utilisateur
- `POST /api/auth/login` - Se connecter

### Livres

- `GET /api/books` - Récupérer tous les livres
- `GET /api/books/:id` - Récupérer un livre par ID
- `POST /api/books` - Créer un livre (authentification requise)
- `PUT /api/books/:id` - Modifier un livre (authentification requise)
- `DELETE /api/books/:id` - Supprimer un livre (authentification requise)
- `POST /api/books/:id/rating` - Noter un livre (authentification requise)
- `GET /api/books/bestrating` - Récupérer les 3 livres les mieux notés

## Technologies utilisées

### Backend

- Node.js
- Express.js
- MongoDB avec Mongoose
- mongoose-unique-validator pour s'assurer que les e-mail sont uniques
- JWT pour l'authentification
- Multer pour l'upload d'images
- bcrypt pour le hashage des mots de passe
