<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Pilier du programme d'une formation (un onglet de la section « Programme » de la page détail).
 */
#[ORM\Entity]
class FormationPilier
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(options: ['unsigned' => true])]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Formation::class, inversedBy: 'piliers')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?Formation $formation = null;

    #[ORM\Column(type: Types::SMALLINT, options: ['unsigned' => true])]
    private int $position = 0;

    /** Libellé court de l'onglet, exemple : « Design & Conception » */
    #[ORM\Column(length: 100)]
    #[Assert\NotBlank(message: 'Le libellé de l\'onglet ne peut pas être vide.')]
    #[Assert\Length(max: 100)]
    private ?string $libelleOnglet = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'Le titre du pilier ne peut pas être vide.')]
    #[Assert\Length(max: 255)]
    private ?string $titre = null;

    /** Nom d'icône lucide */
    #[ORM\Column(length: 50, nullable: true)]
    #[Assert\Length(max: 50)]
    private ?string $icone = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    /** Pilier mis en avant (onglet de couleur différente, exemple : module IA) */
    #[ORM\Column(options: ['default' => false])]
    private bool $misEnAvant = false;

    /** Exemple : « Module Exclusif CF2M » */
    #[ORM\Column(length: 50, nullable: true)]
    #[Assert\Length(max: 50)]
    private ?string $badge = null;

    /** @var list<array{etiquette: string|null, icone: string|null, titre: string, description: string|null}> */
    #[ORM\Column(type: Types::JSON)]
    private array $elements = [];

    public function __toString(): string
    {
        return $this->titre ?? '';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFormation(): ?Formation
    {
        return $this->formation;
    }

    public function setFormation(?Formation $formation): static
    {
        $this->formation = $formation;

        return $this;
    }

    public function getPosition(): int
    {
        return $this->position;
    }

    public function setPosition(int $position): static
    {
        $this->position = $position;

        return $this;
    }

    public function getLibelleOnglet(): ?string
    {
        return $this->libelleOnglet;
    }

    public function setLibelleOnglet(?string $libelleOnglet): static
    {
        $this->libelleOnglet = $libelleOnglet;

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(?string $titre): static
    {
        $this->titre = $titre;

        return $this;
    }

    public function getIcone(): ?string
    {
        return $this->icone;
    }

    public function setIcone(?string $icone): static
    {
        $this->icone = $icone;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function isMisEnAvant(): bool
    {
        return $this->misEnAvant;
    }

    public function setMisEnAvant(bool $misEnAvant): static
    {
        $this->misEnAvant = $misEnAvant;

        return $this;
    }

    public function getBadge(): ?string
    {
        return $this->badge;
    }

    public function setBadge(?string $badge): static
    {
        $this->badge = $badge;

        return $this;
    }

    /** @return list<array{etiquette: string|null, icone: string|null, titre: string, description: string|null}> */
    public function getElements(): array
    {
        return $this->elements;
    }

    /** @param array<array{etiquette: string|null, icone: string|null, titre: string, description: string|null}> $elements */
    public function setElements(array $elements): static
    {
        // Les formulaires de collection laissent des trous dans les clés : sans array_values, le JSON deviendrait un objet
        $this->elements = array_values($elements);

        return $this;
    }
}
