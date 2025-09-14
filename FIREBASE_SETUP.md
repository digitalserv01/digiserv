# Configuration Firebase Sécurisée

## 🔐 Sécurité

Ce projet utilise une API route Next.js pour sécuriser les appels vers Firebase. Les clés API ne sont jamais exposées côté client.

## 📋 Configuration Requise

### 1. Variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec :

```env
# Firebase Configuration (Sécurisé)
FIREBASE_API_KEY=your_firebase_api_key_here
FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id_here
FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
FIREBASE_APP_ID=your_app_id_here
```

### 2. Configuration Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Activez Firestore Database
4. Allez dans "Paramètres du projet" > "Vos applications"
5. Créez une nouvelle application web
6. Copiez les valeurs de configuration dans votre `.env.local`

### 3. Règles de sécurité Firestore

Configurez ces règles dans Firestore pour sécuriser votre base de données :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Seule l'API route peut écrire dans la collection contacts
    match /contacts/{document} {
      allow read, write: if false; // Seul le serveur peut accéder
    }
  }
}
```

## 🚀 Fonctionnalités

- ✅ **Sécurisé** : Clés API cachées côté serveur
- ✅ **Validation** : Validation des données côté serveur
- ✅ **Protection anti-spam** : Limitation de longueur des messages
- ✅ **Logs** : Enregistrement des IP et User-Agent
- ✅ **UX** : Messages de statut et états de chargement
- ✅ **Erreurs** : Gestion d'erreurs complète

## 📊 Structure des données

Les messages sont sauvegardés dans Firestore avec cette structure :

```javascript
{
  name: "string",
  email: "string",
  company: "string",
  project: "string", 
  message: "string",
  timestamp: "serverTimestamp",
  ip: "string",
  userAgent: "string"
}
```

## 🔧 Déploiement

1. Configurez les variables d'environnement sur votre plateforme de déploiement
2. Déployez l'application
3. Testez le formulaire de contact

## ⚠️ Important

- Ne commitez jamais le fichier `.env.local`
- Les clés API restent sécurisées côté serveur
- L'API route `/api/contact` gère toute la logique de sauvegarde
