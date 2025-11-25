# 🔐 Système d'Authentification Coinlect

## 📁 Structure

```
app/auth/
├── layout.tsx              # Layout partagé pour toutes les pages auth
├── login/
│   └── page.tsx           # Page de connexion
└── signup/
    └── page.tsx           # Page d'inscription

components/auth/
├── language-switcher.tsx  # Composant de changement de langue (FR/EN)
├── login-form.tsx         # Formulaire de connexion
└── signup-form.tsx        # Formulaire multi-step d'inscription

lib/validation/
└── auth.ts               # Schémas de validation Zod
```

## 🎨 Design System

### Couleurs
- **Fond principal** : `#000000` (Noir)
- **Gris** : `#D9D9D9`
- **Orange (Accent)** : `#FF9900`

### Composants
- **shadcn UI** : Tous les composants UI de base
- **react-hook-form** : Gestion des formulaires
- **Zod** : Validation des données

## 📝 Fonctionnalités

### Inscription (Multi-Step)
Le formulaire d'inscription affiche un champ à la fois avec des indicateurs de progression :

1. **Étape 1** : Nom & Prénom
2. **Étape 2** : Numéro de téléphone
3. **Étape 3** : Email
4. **Étape 4** : Mot de passe

**Validation** :
- Nom : min 3 caractères, max 50
- Téléphone : min 10 caractères, format numérique
- Email : format email valide
- Mot de passe : min 8 caractères, avec majuscule, minuscule et chiffre

### Connexion
Formulaire simple avec email et mot de passe.

### Changement de langue
Composant avec deux cercles superposés (FR/EN) :
- Par défaut : Français
- Animation au clic
- Le cercle actif s'affiche en orange (#FF9900)

## 🚀 Routes

- `/auth/signup` - Page d'inscription
- `/auth/login` - Page de connexion

## 🔧 Prochaines étapes

- [ ] Intégrer l'API d'authentification
- [ ] Ajouter la gestion des sessions
- [ ] Implémenter l'authentification Google
- [ ] Ajouter la récupération de mot de passe
- [ ] Internationalisation complète (i18n)

