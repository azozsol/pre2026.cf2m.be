<?php

declare(strict_types=1);

namespace App\State;

use ApiPlatform\Metadata\CollectionOperationInterface;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProviderInterface;
use App\ApiResource\FormationResource;
use App\Entity\Formation;
use App\Entity\FormationPilier;
use App\Repository\FormationRepository;
use Symfony\Component\Asset\Packages;

/**
 * Fournit les formations visibles sur le site (publiées ou en recrutement).
 * Une formation en brouillon n'est jamais renvoyée : le détail répond alors 404.
 *
 * @implements ProviderInterface<FormationResource>
 */
final class FormationProvider implements ProviderInterface
{
    private const STATUTS_VISIBLES = ['published', 'recruiting'];

    public function __construct(
        private readonly FormationRepository $formationRepository,
        private readonly Packages $packages,
    ) {
    }

    /**
     * @return FormationResource[]|FormationResource|null
     */
    public function provide(Operation $operation, array $uriVariables = [], array $context = []): array|FormationResource|null
    {
        if ($operation instanceof CollectionOperationInterface) {
            return array_map($this->versRessource(...), $this->formationRepository->findAllPublished());
        }

        $formation = $this->formationRepository->findOneBySlug((string) ($uriVariables['slug'] ?? ''));

        if (null === $formation || !\in_array($formation->getStatus(), self::STATUTS_VISIBLES, true)) {
            return null;
        }

        return $this->versRessource($formation, avecDetail: true);
    }

    /**
     * Le détail n'est lu que pour une seule formation : la liste ne charge pas les piliers.
     */
    private function versRessource(Formation $formation, bool $avecDetail = false): FormationResource
    {
        $logo = $formation->getLogo();

        return new FormationResource(
            slug: (string) $formation->getSlug(),
            titre: (string) $formation->getTitle(),
            descriptionCourte: $formation->getDescriptionCourte(),
            statut: $formation->getStatus(),
            logoUrl: $logo ? $this->packages->getUrl('uploads/formation-logos/'.$logo) : null,
            couleurPrincipale: $formation->getColorPrimary(),
            couleurSecondaire: $formation->getColorSecondary(),
            publieLe: $formation->getPublishedAt(),
            duree: $formation->getDuree(),
            prochaineSession: $formation->getProchaineSession(),
            modalite: $formation->getModalite(),
            pointsForts: $formation->getPointsForts(),
            heuresTotales: $formation->getHeuresTotales(),
            rythme: $formation->getRythme(),
            cout: $formation->getCout(),
            horaire: $formation->getHoraire(),
            lieu: $formation->getLieu(),
            metierDescription: $formation->getMetierDescription(),
            missions: $formation->getMissions(),
            qualitesDescription: $formation->getQualitesDescription(),
            organismeConditions: $formation->getOrganismeConditions(),
            conditions: $formation->getConditions(),
            affirmationsProfil: $formation->getAffirmationsProfil(),
            piliers: $avecDetail ? array_map(static fn (FormationPilier $pilier): array => [
                'libelleOnglet' => (string) $pilier->getLibelleOnglet(),
                'titre' => (string) $pilier->getTitre(),
                'icone' => $pilier->getIcone(),
                'description' => $pilier->getDescription(),
                'misEnAvant' => $pilier->isMisEnAvant(),
                'badge' => $pilier->getBadge(),
                'elements' => $pilier->getElements(),
            ], $formation->getPiliers()->toArray()) : [],
        );
    }
}
