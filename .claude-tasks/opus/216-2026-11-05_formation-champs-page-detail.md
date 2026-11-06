# Formation : champs de la page détail (BDD, EasyAdmin, API) et section recrutement

**Modèle utilisé** : Opus

**Justification** : évolution du schéma BDD et du contrat de l'API, avec prise en compte du workflow de révisions et des droits.

**Branche** : `feature/35-formation-champs-detail`

## Résumé

Ajout en base du contenu de la page détail d'une formation, d'après la maquette HTML « Digital Designer » : hero, métier et missions, programme en piliers, admission. Le contenu est éditable dans EasyAdmin et exposé par `GET /api/formations/{slug}`. La section « Recrutement en 4 étapes » est statique, dans la SPA.

Une première version reprenait la maquette Figma Make (`frontend/src/data/formations.jsx`) ; elle a été remplacée avant tout commit (migration annulée sur la base de dev, puis réécrite).

## Décisions

- Champs non versionnés dans `FormationHistory` (tâche dédiée plus tard).
- Supprimés car absents de la maquette HTML : débouchés, outils, soft skills, taux d'insertion, places, heures de stage, image.
- Icônes stockées en nom d'icône lucide, comme la SPA.
- Statique côté frontend : section recrutement, badge « 100% Gratuite », téléphone, carte « Centre CF2M », libellés de sections, messages du test d'auto-évaluation.
- Seule la formation Digital Designer a un contenu détaillé dans les fixtures ; les 5 autres viendront plus tard.
- Collection imbriquée piliers > éléments dans EasyAdmin, avec `prototype_name: '__element__'` pour les éléments.
- Migration écrite à la main : le schéma présentait déjà un écart sans rapport (`comment`, `formation_stagiaire`), volontairement non embarqué.

## Fichiers modifiés

- `src/Entity/Formation.php`, `src/Entity/FormationPilier.php`
- `migrations/Version20261106100000.php`
- `src/Controller/Admin/FormationCrudController.php` (onglets et nouveaux champs)
- `src/Form/FormationPilierType.php`, `FormationPilierElementType.php`, `FormationPointFortType.php`, `FormationMissionType.php`, `FormationConditionType.php`
- `src/ApiResource/FormationResource.php`, `src/State/FormationProvider.php`
- `src/DataFixtures/AppFixtures.php`, `src/DataFixtures/FormationsDetailFixturesData.php`, `src/Factory/FormationFactory.php`
- `tests/State/FormationProviderTest.php`
- `docs/architecture/database-schema.md`
- `frontend/src/components/formation/RecrutementSection.jsx` (nouveau), `ConditionsSection.jsx` (processus de sélection retiré, doublon), `frontend/src/pages/FormationPage.jsx`

## Vérifications

- Migration exécutée sur la base de dev MariaDB ; `doctrine:schema:update --dump-sql` ne montre plus que l'écart préexistant.
- API et formulaire EasyAdmin (édition ; ajout et suppression de piliers, d'éléments de pilier, de missions, de conditions ; validation) testés sur une base SQLite jetable avec les fixtures.
- Balisage de la collection imbriquée inspecté, ajout d'un pilier simulé : le nouveau pilier contient sa propre liste d'éléments, avec les bons noms de champs et son bouton d'ajout.
- `npm run build` réussi.
- Textes de la maquette validés par l'utilisateur : `FormationsDetailFixturesData::remplir()` est partagé par AppFixtures et ProdFixtures (remplace les TODO de Digital Designer), et la formation `digital-designer` de la base de dev a été remplie directement (sans recharger les fixtures). `GET /api/formations/digital-designer` renvoie le contenu.
- Non testé dans un navigateur : le JavaScript d'EasyAdmin (boutons d'ajout imbriqués) et le rendu de la section recrutement.
