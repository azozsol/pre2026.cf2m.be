<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Formation;
use App\Entity\FormationPilier;

/**
 * Contenu réel des pages détail (textes validés de la maquette HTML), indexé par slug BDD.
 * Utilisé par les fixtures de dev (AppFixtures) et de production (ProdFixtures).
 * Seule la formation Digital Designer est rédigée pour l'instant : les autres restent sans contenu détaillé.
 * Icônes : noms d'icônes lucide.
 */
final class FormationsDetailFixturesData
{
    /**
     * Renseigne le contenu de la page détail d'une formation, si ce contenu est rédigé.
     * Les piliers existants sont remplacés.
     */
    public static function remplir(Formation $formation): void
    {
        $detail = self::FORMATIONS[$formation->getSlug()] ?? null;

        if (null === $detail) {
            return;
        }

        $formation->setDescriptionCourte($detail['descriptionCourte'])
            ->setProchaineSession($detail['prochaineSession'])
            ->setModalite($detail['modalite'])
            ->setPointsForts($detail['pointsForts'])
            ->setDuree($detail['duree'])
            ->setHeuresTotales($detail['heuresTotales'])
            ->setRythme($detail['rythme'])
            ->setCout($detail['cout'])
            ->setHoraire($detail['horaire'])
            ->setLieu($detail['lieu'])
            ->setMetierDescription($detail['metierDescription'])
            ->setMissions($detail['missions'])
            ->setQualitesDescription($detail['qualitesDescription'])
            ->setOrganismeConditions($detail['organismeConditions'])
            ->setConditions($detail['conditions'])
            ->setAffirmationsProfil($detail['affirmationsProfil'])
        ;

        foreach ($formation->getPiliers()->toArray() as $pilier) {
            $formation->removePilier($pilier);
        }

        foreach ($detail['piliers'] as $position => $pilier) {
            $formation->addPilier((new FormationPilier())
                ->setPosition($position + 1)
                ->setLibelleOnglet($pilier['libelleOnglet'])
                ->setTitre($pilier['titre'])
                ->setIcone($pilier['icone'])
                ->setDescription($pilier['description'])
                ->setMisEnAvant($pilier['misEnAvant'])
                ->setBadge($pilier['badge'])
                ->setElements($pilier['elements'])
            );
        }
    }

    public const FORMATIONS = [
        'digital-designer' => [
            'descriptionCourte' => 'Concevez des visuels impactants, créez des expériences digitales ergonomiques et préparez activement votre avenir professionnel dans le secteur créatif.',
            'prochaineSession' => 'Mars 2027',
            'modalite' => 'Cours du jour (Bruxelles)',
            'pointsForts' => [
                ['icone' => 'Laptop', 'libelle' => 'Pratique intensive', 'valeur' => 'PAO & Web UX/UI'],
                ['icone' => 'WandSparkles', 'libelle' => 'Inclusion IA', 'valeur' => 'Génération & Flow'],
                ['icone' => 'Briefcase', 'libelle' => 'Immersion pro', 'valeur' => 'Stage 6 Semaines'],
            ],
            'duree' => '13 mois',
            'heuresTotales' => '1 225 heures',
            'rythme' => 'Temps plein (9h - 16h30)',
            'cout' => 'Gratuit (+ Prime 1€/h)',
            'horaire' => 'Du lundi au vendredi, de 09h00 à 16h30 (Formation à temps plein)',
            'lieu' => 'Centre CF2M – 87-89 Avenue du Parc, 1060 Saint-Gilles (Bruxelles). Accès facile en transports en commun (Tram/Métro Porte de Hal / Barrière de St-Gilles).',
            'metierDescription' => 'Le Digital Designer est un créatif polyvalent qui conçoit les éléments visuels nécessaires à la communication web, imprimée et réseaux sociaux. Il combine réflexion graphique, ergonomie et maîtrise des technologies modernes.',
            'missions' => [
                ['icone' => 'PenTool', 'titre' => 'Identités Visuelles', 'description' => 'Création de logos, chartes graphiques, choix typographiques et palettes de couleurs harmonieuses.', 'misEnAvant' => false],
                ['icone' => 'Hash', 'titre' => 'Social Media & Web', 'description' => 'Conception de bannières, visuels pour Instagram/LinkedIn, newsletters et supports promotionnels.', 'misEnAvant' => false],
                ['icone' => 'Wand', 'titre' => 'Retouche & Montage Photo', 'description' => 'Détourage complexe, correction colorimétrique, photomontage créatif avec Photoshop.', 'misEnAvant' => false],
                ['icone' => 'Smartphone', 'titre' => 'Prototypage UI/Figma', 'description' => 'Maquettage d\'interfaces web et mobiles interactives centrées sur l\'expérience utilisateur.', 'misEnAvant' => false],
                ['icone' => 'Printer', 'titre' => 'Déclinaison Print', 'description' => 'Mise en page de brochures, flyers, affiches et vérification des contraintes d\'impression (CMJN, fonds perdus).', 'misEnAvant' => false],
                ['icone' => 'Film', 'titre' => 'Montage Vidéo Simple', 'description' => 'Assemblage de vidéos courtes, sous-titrage et animations graphiques (Motion Design de base).', 'misEnAvant' => false],
                ['icone' => 'Brain', 'titre' => 'Assistance IA Créative', 'description' => 'Optimisation des workflows grâce à la génération d\'images assistée et au prompt engineering.', 'misEnAvant' => true],
                ['icone' => 'MessagesSquare', 'titre' => 'Brief & Relation Client', 'description' => 'Compréhension de la demande client, argumentaire des choix visuels et retravaillage selon retours.', 'misEnAvant' => false],
            ],
            'qualitesDescription' => 'Plus que des connaissances préalables, nous recherchons une vraie curiosité visuelle, un sens du détail, de l\'organisation et une capacité d\'adaptation aux outils technologiques.',
            'organismeConditions' => 'Actiris',
            'conditions' => [
                ['titre' => 'Demandeur d\'emploi inscrit', 'detail' => 'Obligatoirement chez Actiris'],
                ['titre' => 'Diplôme requis', 'detail' => 'Sans CESS ou diplôme supérieur non reconnu'],
                ['titre' => 'Résidence', 'detail' => 'Habiter en Région de Bruxelles-Capitale'],
                ['titre' => 'Âge minimal', 'detail' => 'Avoir au moins 18 ans au démarrage'],
            ],
            'affirmationsProfil' => [
                'Je suis passionné(e) par la création visuelle, les images, le design ou l\'art en général.',
                'J\'aime passer du temps sur l\'ordinateur et apprendre de nouveaux logiciels.',
                'Je fais preuve de minutie, de rigueur et du sens du détail dans ce que j\'entreprends.',
                'Je suis prêt(e) à suivre une formation intensive à temps plein pendant 13 mois.',
                'Je souhaite construire un book professionnel pour trouver un emploi qualifié.',
            ],
            'piliers' => [
                [
                    'libelleOnglet' => 'Design & Conception',
                    'titre' => 'Conception & Principes Fondamentaux du Design',
                    'icone' => 'PenTool',
                    'description' => 'Acquérez les règles théoriques et visuelles indispensables pour concevoir des messages pertinents et structurés.',
                    'misEnAvant' => false,
                    'badge' => null,
                    'elements' => [
                        ['etiquette' => null, 'icone' => null, 'titre' => 'Typographie & Composition', 'description' => 'Hiérarchie de l\'information, choix des polices, règles de lisibilité, grille de mise en page et gestion du blanc tournant.'],
                        ['etiquette' => null, 'icone' => null, 'titre' => 'Théorie des Couleurs & Branding', 'description' => 'Harmonies colorimétriques, psychologie des couleurs, création de chartes graphiques cohérentes.'],
                        ['etiquette' => null, 'icone' => null, 'titre' => 'Ergonomie & UX Base', 'description' => 'Comprendre le parcours utilisateur, principes de navigation et accessibilité visuelle sur écran.'],
                        ['etiquette' => null, 'icone' => null, 'titre' => 'Culture Visuelle & Veille', 'description' => 'Analyse des tendances du design graphique, constitution de moodboards de référence.'],
                    ],
                ],
                [
                    'libelleOnglet' => 'Outils PAO & Digital',
                    'titre' => 'Maîtrise de la Suite Adobe & Figma',
                    'icone' => 'Layers',
                    'description' => 'Apprenez à utiliser en profondeur les logiciels standards de l\'industrie du design.',
                    'misEnAvant' => false,
                    'badge' => null,
                    'elements' => [
                        ['etiquette' => 'Photoshop', 'icone' => null, 'titre' => 'Traitement d\'Image', 'description' => 'Masques de fusion, retouche avancée, photomontages, préparation web.'],
                        ['etiquette' => 'Illustrator', 'icone' => null, 'titre' => 'Création Vectorielle', 'description' => 'Logotypes, pictogrammes, illustrations, tracé à la plume et vectorisation.'],
                        ['etiquette' => 'InDesign', 'icone' => null, 'titre' => 'Mise en Page Multi-pages', 'description' => 'Brochures, fanzines, gabarits, styles de paragraphe et export PDF/X print.'],
                        ['etiquette' => 'Figma & UI Design', 'icone' => null, 'titre' => 'Conception Web & Prototypage', 'description' => 'Auto-layout, composants réutilisables, création de maquettes interactives pour applications et sites internet responsive.'],
                    ],
                ],
                [
                    'libelleOnglet' => 'Module IA',
                    'titre' => 'Usage Professionnel de l\'IA Créative',
                    'icone' => 'WandSparkles',
                    'description' => 'L\'Intelligence Artificielle ne remplace pas le designer : elle devient un assistant puissant pour accélérer les phases de recherche et enrichir la création.',
                    'misEnAvant' => true,
                    'badge' => 'Module Exclusif CF2M',
                    'elements' => [
                        ['etiquette' => null, 'icone' => 'Search', 'titre' => 'Exploration & Moodboard IA', 'description' => 'Generative ideation : Générer rapidement des pistes visuelles préliminaires à partir de briefs clients complexes.'],
                        ['etiquette' => null, 'icone' => 'SlidersHorizontal', 'titre' => 'Prompt Engineering Visuel', 'description' => 'Maîtriser les descripteurs techniques (styles, éclairages, angles de vue, rendus) pour obtenir l\'image exacte souhaitée.'],
                        ['etiquette' => null, 'icone' => 'Filter', 'titre' => 'Retouche & Inpainting Avancé', 'description' => 'Utilisation des outils génératifs Adobe Firefly / Generative Fill dans Photoshop pour étendre des décors ou modifier des objets.'],
                        ['etiquette' => null, 'icone' => 'Scale', 'titre' => 'Éthique, Droits & Chaîne Graphique', 'description' => 'Comprendre le droit d\'auteur, la vérification de résolution des assets générés et leur intégration propre en studio.'],
                    ],
                ],
                [
                    'libelleOnglet' => 'Projets Concrets',
                    'titre' => 'Projets Concrets & Mises en Situation',
                    'icone' => 'Workflow',
                    'description' => 'Travaillez dans les conditions réelles d\'une agence ou d\'un studio graphique.',
                    'misEnAvant' => false,
                    'badge' => null,
                    'elements' => [
                        ['etiquette' => null, 'icone' => null, 'titre' => 'Ateliers "Briefs Réels"', 'description' => 'Réponse aux besoins de véritables associations ou projets internes du CF2M (Pixel & Co).'],
                        ['etiquette' => null, 'icone' => null, 'titre' => 'Campagnes Multimédias Globales', 'description' => 'Déclinaison d\'un concept visuel simultanément sur support papier, bannière web et réseaux sociaux.'],
                    ],
                ],
                [
                    'libelleOnglet' => 'Stage & Portfolio',
                    'titre' => 'Insertion Professionnelle, Portfolio & Stage',
                    'icone' => 'Briefcase',
                    'description' => 'Préparez le tremplin direct vers l\'emploi ou l\'activité d\'indépendant.',
                    'misEnAvant' => false,
                    'badge' => null,
                    'elements' => [
                        ['etiquette' => null, 'icone' => null, 'titre' => 'Création de Book / Portfolio', 'description' => 'Mise en valeur de vos meilleurs travaux sur un site web dédié ou Behance.'],
                        ['etiquette' => null, 'icone' => null, 'titre' => 'Stage en Entreprise (6 Semaines)', 'description' => 'Immersion totale dans un studio graphique, une agence de communication ou le service interne d\'une entreprise.'],
                    ],
                ],
            ],
        ],
    ];
}
