# Dream Sport Manouba

Site web professionnel, moderne, responsive et bilingue pour la salle de sport **Dream Sport Manouba**, située à Manouba, Tunis, Tunisie.

## 1. Aperçu

Dream Sport Manouba est une plateforme digitale complète (vitrine + espace d'administration) permettant aux visiteurs de :

- Découvrir la salle, ses activités, coachs et équipements
- Consulter les horaires des cours par catégorie (Planning)
- Voir les abonnements, promotions, actualités, galerie et avis
- Faire une demande d'inscription en ligne
- Contacter la salle
- Gérer tout le contenu via un dashboard administrateur (/admin)

Site disponible en **Français (LTR)** et **Arabe (RTL)**.

## 2. Stack technique

### Frontend
- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://react.dev/)
- i18n (messages FR/AR)
- Responsive, animations légères

### Backend
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) (API REST) ou [Next.js Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) — structure prévue pour API REST sécurisée
- TypeScript
- Authentification + gestion des rôles (RBAC)
- Validation, rate limiting, uploads sécurisés

### Base de données
- [PostgreSQL](https://www.postgresql.org/)

### DevOps / Outils
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) + [Docker Compose](https://docs.docker.com/compose/)
- Variables d'environnement (.env)
- Migrations + Seed

## 3. Architecture

```text
dream-sport/
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── hooks/
│   ├── i18n/
│   ├── messages/
│   ├── types/
│   └── public/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── validators/
│   │   └── types/
├── database/
│   ├── migrations/
│   └── seed/
├── docker-compose.yml
├── .env.example
└── README.md
```

## 4. Démarrage rapide (Docker Compose)

> Prérequis : Docker Desktop, Git, Node.js (pour dev local hors Docker si souhaité)

1. Cloner le dépôt
```bash
git clone <repo-url>
cd dream-sport
```

2. Copier le fichier d'environnement
```bash
cp .env.example .env
```

3. Lancer les services (API, Frontend, DB, pgAdmin optionnel)
```bash
docker-compose up --build
```

4. Accéder aux applications
- Frontend : [http://localhost:3000](http://localhost:3000)
- Backend API : [http://localhost:4000/api](http://localhost:4000/api)
- Base de données PostgreSQL : `localhost:5432` (voir `.env`)

## 5. Pages publiques

- `/[locale]/` – Accueil
- `/[locale]/about` – À propos
- `/[locale]/activities` – Activités
- `/[locale]/planning` – Planning (catégories → horaires par activité)
- `/[locale]/coaches` – Coachs
- `/[locale]/subscriptions` – Abonnements
- `/[locale]/gallery` – Galerie
- `/[locale]/promotions` – Promotions
- `/[locale]/news` – Actualités
- `/[locale]/reviews` – Avis
- `/[locale]/registration` – Inscription
- `/[locale]/contact` – Contact

Espace admin : `/admin` (protégé)

## 6. Fonctionnalité Planning (exigence clé)

Le Planning **n'affiche pas** tous les horaires d'un coup. Il affiche d'abord les **catégories d'activités** (cartes). Au clic sur une catégorie, seule la grille/ liste des cours de cette activité s'affiche (jour, heure début/fin, coach, niveau, salle, places). Un bouton « Retour aux activités » permet de revenir aux catégories. Tous les horaires sont stockés en BDD et gérés depuis l'admin.

## 7. Variables d'environnement

Voir [`.env.example`](.env.example) pour la liste complète.

## 8. Migrations & Seed

```bash
# Exécuter migrations (via backend/scripts ou outil de migration)
npm run db:migrate

# Peupler la base
npm run db:seed
```

(À adapter selon l'outil choisi dans l'environnement d'exécution)

## 9. Tests & Qualité

Avant livraison (recommandé) :
- Lint : `npm run lint`
- Typecheck : `npm run typecheck`
- Tests (si présents) : `npm run test`
- Vérifier : auth, CRUD, bilingue (FR/AR + RTL), planning, formulaires, uploads

## 10. Sécurité

- Hash des mots de passe (bcrypt/argon2)
- Sessions/JWT sécurisés
- RBAC (ADMIN / STAFF / COACH)
- Validation Zod/Joi
- Rate limiting
- Uploads sécurisés (types, taille)
- Routes admin protégées
- CORS, headers sécurité

## 11. SEO & Performance

- Meta tags, Open Graph, Schema.org (LocalBusiness)
- `sitemap.xml`, `robots.txt`
- Images optimisées (WebP/AVIF), lazy loading
- Compression, cache, pagination, code splitting

## 12. Licence & Crédits

© 2026 Dream Sport Manouba. Tous droits réservés.
