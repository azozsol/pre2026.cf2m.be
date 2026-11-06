<?php

declare(strict_types=1);

namespace App\ApiResource;

use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\State\FormationProvider;
use Symfony\Component\Serializer\Attribute\Groups;

/**
 * Formation telle qu'exposée publiquement par l'API (lecture seule).
 * DTO volontairement séparé de l'entité App\Entity\Formation : seuls les champs
 * publics sortent (pas de créateur, stagiaires, inscriptions…).
 * La liste reste légère : le contenu de la page détail n'est renvoyé que par Get.
 */
#[ApiResource(
    shortName: 'Formation',
    operations: [
        // Peu de formations : liste complète, sans pagination
        new GetCollection(
            paginationEnabled: false,
            normalizationContext: ['groups' => ['formation:liste']],
        ),
        new Get(normalizationContext: ['groups' => ['formation:liste', 'formation:detail']]),
    ],
    provider: FormationProvider::class,
)]
final class FormationResource
{
    /**
     * @param list<array{icone: string|null, libelle: string, valeur: string}>                                                                                             $pointsForts
     * @param list<array{icone: string|null, titre: string, description: string|null, misEnAvant: bool}>                                                                   $missions
     * @param list<array{titre: string, detail: string|null}>                                                                                                              $conditions
     * @param list<string>                                                                                                                                                 $affirmationsProfil
     * @param list<array{libelleOnglet: string, titre: string, icone: string|null, description: string|null, misEnAvant: bool, badge: string|null, elements: list<array>}> $piliers
     */
    public function __construct(
        #[ApiProperty(identifier: true)]
        #[Groups(['formation:liste'])]
        public readonly string $slug,
        #[Groups(['formation:liste'])]
        public readonly string $titre,
        #[Groups(['formation:liste'])]
        public readonly ?string $descriptionCourte,
        /** « published » ou « recruiting » */
        #[Groups(['formation:liste'])]
        public readonly string $statut,
        #[Groups(['formation:liste'])]
        public readonly ?string $logoUrl,
        #[Groups(['formation:liste'])]
        public readonly ?string $couleurPrincipale,
        #[Groups(['formation:liste'])]
        public readonly ?string $couleurSecondaire,
        #[Groups(['formation:liste'])]
        public readonly ?\DateTimeImmutable $publieLe,
        #[Groups(['formation:liste'])]
        public readonly ?string $duree = null,
        #[Groups(['formation:liste'])]
        public readonly ?string $prochaineSession = null,
        #[Groups(['formation:detail'])]
        public readonly ?string $modalite = null,
        #[Groups(['formation:detail'])]
        public readonly array $pointsForts = [],
        #[Groups(['formation:detail'])]
        public readonly ?string $heuresTotales = null,
        #[Groups(['formation:detail'])]
        public readonly ?string $rythme = null,
        #[Groups(['formation:detail'])]
        public readonly ?string $cout = null,
        #[Groups(['formation:detail'])]
        public readonly ?string $horaire = null,
        #[Groups(['formation:detail'])]
        public readonly ?string $lieu = null,
        #[Groups(['formation:detail'])]
        public readonly ?string $metierDescription = null,
        #[Groups(['formation:detail'])]
        public readonly array $missions = [],
        #[Groups(['formation:detail'])]
        public readonly ?string $qualitesDescription = null,
        #[Groups(['formation:detail'])]
        public readonly ?string $organismeConditions = null,
        #[Groups(['formation:detail'])]
        public readonly array $conditions = [],
        #[Groups(['formation:detail'])]
        public readonly array $affirmationsProfil = [],
        #[Groups(['formation:detail'])]
        public readonly array $piliers = [],
    ) {
    }
}
