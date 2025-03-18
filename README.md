# 🕒 PointingApp - Application de Pointage

## 📌 Description

**PointingApp** est une application permettant la gestion et le suivi des heures de travail des employés. Elle permet aux utilisateurs de pointer leurs heures d'arrivée et de départ, tout en offrant une interface de gestion pour les administrateurs.

## 🚀 Fonctionnalités

✅ Enregistrement des entrées/sorties des employés 
✅ Génération de rapports de pointage 
✅ Gestion des utilisateurs et des droits d'accès 
✅ Déploiement via **Docker** pour une installation simplifiée

## 🏗️ Architecture du projet

📂 **FrontEnd/** - Contient le visuel de l'application (NextJS, React)
📂 **BackEnd/** - Contient l'API et la logique métier (Python, FastAPI) 
📂 **.idea/** - Fichiers de configuration pour PyCharm (facultatif)
📄 **launch.sh** - Script shell pour démarrer l'application 
📄 **Dockerfile** - Conteneurisation du backend

## 🔧 Installation & Exécution

### 1️⃣ Cloner le repository

```bash
git clone https://github.com/amyeben/pointingapp.git
cd pointingapp
```

### 2️⃣ Installer les dépendances (si utilisation hors Docker)

```bash
pip install -r BackEnd/requirements.txt
```

### 3️⃣ Exécuter l'application

#### 🐍 En local (sans Docker)

```bash
cd BackEnd
python main.py  # À adapter selon le framework utilisé
```

#### 🐳 Avec Docker

```bash
docker build -t pointingapp ./BackEnd
docker run -p 8000:8000 pointingapp
```

## 📜 API Endpoints (Exemples)

| Méthode | Endpoint     | Description        |
| ------- | ------------ | ------------------ |
| GET     | `/employees` | Liste des employés |
| POST    | `/clock-in`  | Pointer l'entrée   |
| POST    | `/clock-out` | Pointer la sortie  |
| GET     | `/reports`   | Générer un rapport |

## 👨‍💻 Technologies utilisées

- **NextJS** (React) - Frontend API
- **Python** (FastApi) - Backend API
- **Docker** - Déploiement en conteneur
- **Shell Scripting** - Automatisation du lancement

## 📬 Contact

**Auteur** : Amy Eben Sang Kotta\
📌 Retrouvez-moi sur [GitHub](https://github.com/amyeben) et [LinkedIn](https://linkedin.com/in/amy-eben) !

