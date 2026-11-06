<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\FormationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Attribute as Vich;

#[ORM\Entity(repositoryClass: FormationRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[Vich\Uploadable]
class Formation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(options: ['unsigned' => true])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'Le titre ne peut pas être vide.')]
    private ?string $title = null;

    #[ORM\Column(length: 255, unique: true)]
    #[Assert\NotBlank(message: 'Le slug ne peut pas être vide.')]
    private ?string $slug = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(length: 800, nullable: true)]
    #[Assert\Length(max: 800, maxMessage: 'La description courte ne peut pas dépasser {{ limit }} caractères.')]
    private ?string $descriptionCourte = null;

    #[Vich\UploadableField(mapping: 'formation_logo', fileNameProperty: 'logo')]
    private ?File $logoFile = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $logo = null;

    #[ORM\Column(length: 20, options: ['default' => 'draft'])]
    #[Assert\NotBlank(message: 'Le statut ne peut pas être vide.')]
    #[Assert\Choice(choices: ['draft', 'published', 'archived', 'recruiting'], message: 'Le statut "{{ value }}" n\'est pas valide.')]
    private string $status = 'draft';

    #[ORM\Column(length: 7, nullable: true)]
    #[Assert\Regex(pattern: '/^#[0-9a-fA-F]{6}$/', message: 'La couleur primaire doit être au format hexadécimal (#rrggbb).')]
    private ?string $colorPrimary = null;

    #[ORM\Column(length: 7, nullable: true)]
    #[Assert\Regex(pattern: '/^#[0-9a-fA-F]{6}$/', message: 'La couleur secondaire doit être au format hexadécimal (#rrggbb).')]
    private ?string $colorSecondary = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $publishedAt = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $createdBy = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: true)]
    private ?User $updatedBy = null;

    /** @var Collection<int, User> */
    #[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'formations')]
    #[ORM\JoinTable(name: 'formation_user')]
    private Collection $responsables;

    /** @var Collection<int, Works> */
    #[ORM\OneToMany(targetEntity: Works::class, mappedBy: 'formation', orphanRemoval: true)]
    private Collection $works;

    /** @var Collection<int, Inscription> */
    #[ORM\OneToMany(targetEntity: Inscription::class, mappedBy: 'formation', orphanRemoval: true)]
    private Collection $inscriptions;

    /** @var Collection<int, FormationStagiaire> */
    #[ORM\OneToMany(targetEntity: FormationStagiaire::class, mappedBy: 'formation', orphanRemoval: true)]
    private Collection $stagiaires;

    // ── Page détail (hors workflow de révisions : non versionné dans FormationHistory) ──

    /** Texte libre : « Mars 2027 », « En continu »… */
    #[ORM\Column(length: 50, nullable: true)]
    #[Assert\Length(max: 50)]
    private ?string $prochaineSession = null;

    /** Exemple : « Cours du jour (Bruxelles) » */
    #[ORM\Column(length: 100, nullable: true)]
    #[Assert\Length(max: 100)]
    private ?string $modalite = null;

    /** @var list<array{icone: string|null, libelle: string, valeur: string}>|null icone = nom d'icône lucide */
    #[ORM\Column(type: Types::JSON, nullable: true)]
    private ?array $pointsForts = null;

    /** Texte libre : « 13 mois », « 1 à 10 jours / module »… */
    #[ORM\Column(length: 50, nullable: true)]
    #[Assert\Length(max: 50)]
    private ?string $duree = null;

    /** Texte libre : « 1 225 heures », « 8 à 40h / module »… */
    #[ORM\Column(length: 50, nullable: true)]
    #[Assert\Length(max: 50)]
    private ?string $heuresTotales = null;

    /** Exemple : « Temps plein (9h - 16h30) » */
    #[ORM\Column(length: 100, nullable: true)]
    #[Assert\Length(max: 100)]
    private ?string $rythme = null;

    /** Exemple : « Gratuit (+ Prime 1€/h) » */
    #[ORM\Column(length: 100, nullable: true)]
    #[Assert\Length(max: 100)]
    private ?string $cout = null;

    #[ORM\Column(length: 150, nullable: true)]
    #[Assert\Length(max: 150)]
    private ?string $horaire = null;

    /** Adresse et accès en transports */
    #[ORM\Column(length: 255, nullable: true)]
    #[Assert\Length(max: 255)]
    private ?string $lieu = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $metierDescription = null;

    /** @var list<array{icone: string|null, titre: string, description: string|null, misEnAvant: bool}>|null */
    #[ORM\Column(type: Types::JSON, nullable: true)]
    private ?array $missions = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $qualitesDescription = null;

    /** Organisme affiché à côté des conditions d'accès, exemple : « Actiris » */
    #[ORM\Column(length: 50, nullable: true)]
    #[Assert\Length(max: 50)]
    private ?string $organismeConditions = null;

    /** @var list<array{titre: string, detail: string|null}>|null */
    #[ORM\Column(type: Types::JSON, nullable: true)]
    private ?array $conditions = null;

    /** @var list<string>|null affirmations du test « Ce profil vous ressemble-t-il ? » */
    #[ORM\Column(type: Types::JSON, nullable: true)]
    private ?array $affirmationsProfil = null;

    /** @var Collection<int, FormationPilier> */
    #[ORM\OneToMany(targetEntity: FormationPilier::class, mappedBy: 'formation', cascade: ['persist'], orphanRemoval: true)]
    #[ORM\OrderBy(['position' => 'ASC'])]
    #[Assert\Valid]
    private Collection $piliers;

    public function __construct()
    {
        $this->responsables = new ArrayCollection();
        $this->works = new ArrayCollection();
        $this->inscriptions = new ArrayCollection();
        $this->stagiaires = new ArrayCollection();
        $this->piliers = new ArrayCollection();
    }

    #[ORM\PrePersist]
    public function setCreatedAtValue(): void
    {
        if (null === $this->createdAt) {
            $this->createdAt = new \DateTimeImmutable();
        }
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function __toString(): string
    {
        return $this->title ?? '';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

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

    public function getDescriptionCourte(): ?string
    {
        return $this->descriptionCourte;
    }

    public function setDescriptionCourte(?string $descriptionCourte): static
    {
        $this->descriptionCourte = $descriptionCourte;

        return $this;
    }

    public function getLogoFile(): ?File
    {
        return $this->logoFile;
    }

    public function setLogoFile(?File $logoFile): static
    {
        $this->logoFile = $logoFile;

        if (null !== $logoFile) {
            $this->updatedAt = new \DateTimeImmutable();
        }

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(?string $logo): static
    {
        $this->logo = $logo;

        return $this;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getPublishedAt(): ?\DateTimeImmutable
    {
        return $this->publishedAt;
    }

    public function setPublishedAt(?\DateTimeImmutable $publishedAt): static
    {
        $this->publishedAt = $publishedAt;

        return $this;
    }

    public function getCreatedBy(): ?User
    {
        return $this->createdBy;
    }

    public function setCreatedBy(?User $createdBy): static
    {
        $this->createdBy = $createdBy;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getUpdatedBy(): ?User
    {
        return $this->updatedBy;
    }

    public function setUpdatedBy(?User $updatedBy): static
    {
        $this->updatedBy = $updatedBy;

        return $this;
    }

    /** @return Collection<int, User> */
    public function getResponsables(): Collection
    {
        return $this->responsables;
    }

    public function addResponsable(User $responsable): static
    {
        if (!$this->responsables->contains($responsable)) {
            $this->responsables->add($responsable);
            $responsable->addFormation($this);
        }

        return $this;
    }

    public function removeResponsable(User $responsable): static
    {
        if ($this->responsables->removeElement($responsable)) {
            $responsable->removeFormation($this);
        }

        return $this;
    }

    public function getColorPrimary(): ?string
    {
        return $this->colorPrimary;
    }

    public function setColorPrimary(?string $colorPrimary): static
    {
        $this->colorPrimary = $colorPrimary;

        return $this;
    }

    public function getColorSecondary(): ?string
    {
        return $this->colorSecondary;
    }

    public function setColorSecondary(?string $colorSecondary): static
    {
        $this->colorSecondary = $colorSecondary;

        return $this;
    }

    /** @return Collection<int, Works> */
    public function getWorks(): Collection
    {
        return $this->works;
    }

    public function addWork(Works $work): static
    {
        if (!$this->works->contains($work)) {
            $this->works->add($work);
            $work->setFormation($this);
        }

        return $this;
    }

    public function removeWork(Works $work): static
    {
        if ($this->works->removeElement($work)) {
            if ($work->getFormation() === $this) {
                $work->setFormation(null);
            }
        }

        return $this;
    }

    /** @return Collection<int, Inscription> */
    public function getInscriptions(): Collection
    {
        return $this->inscriptions;
    }

    public function addInscription(Inscription $inscription): static
    {
        if (!$this->inscriptions->contains($inscription)) {
            $this->inscriptions->add($inscription);
            $inscription->setFormation($this);
        }

        return $this;
    }

    public function removeInscription(Inscription $inscription): static
    {
        if ($this->inscriptions->removeElement($inscription)) {
            if ($inscription->getFormation() === $this) {
                $inscription->setFormation(null);
            }
        }

        return $this;
    }

    /** @return Collection<int, FormationStagiaire> */
    public function getStagiaires(): Collection
    {
        return $this->stagiaires;
    }

    public function addStagiaire(FormationStagiaire $stagiaire): static
    {
        if (!$this->stagiaires->contains($stagiaire)) {
            $this->stagiaires->add($stagiaire);
            $stagiaire->setFormation($this);
        }

        return $this;
    }

    public function removeStagiaire(FormationStagiaire $stagiaire): static
    {
        if ($this->stagiaires->removeElement($stagiaire)) {
            if ($stagiaire->getFormation() === $this) {
                $stagiaire->setFormation(null);
            }
        }

        return $this;
    }

    public function getProchaineSession(): ?string
    {
        return $this->prochaineSession;
    }

    public function setProchaineSession(?string $prochaineSession): static
    {
        $this->prochaineSession = $prochaineSession;

        return $this;
    }

    public function getModalite(): ?string
    {
        return $this->modalite;
    }

    public function setModalite(?string $modalite): static
    {
        $this->modalite = $modalite;

        return $this;
    }

    /** @return list<array{icone: string|null, libelle: string, valeur: string}> */
    public function getPointsForts(): array
    {
        return $this->pointsForts ?? [];
    }

    /** @param array<array{icone: string|null, libelle: string, valeur: string}> $pointsForts */
    public function setPointsForts(array $pointsForts): static
    {
        // Les formulaires de collection laissent des trous dans les clés : sans array_values, le JSON deviendrait un objet
        $this->pointsForts = array_values($pointsForts);

        return $this;
    }

    public function getDuree(): ?string
    {
        return $this->duree;
    }

    public function setDuree(?string $duree): static
    {
        $this->duree = $duree;

        return $this;
    }

    public function getHeuresTotales(): ?string
    {
        return $this->heuresTotales;
    }

    public function setHeuresTotales(?string $heuresTotales): static
    {
        $this->heuresTotales = $heuresTotales;

        return $this;
    }

    public function getRythme(): ?string
    {
        return $this->rythme;
    }

    public function setRythme(?string $rythme): static
    {
        $this->rythme = $rythme;

        return $this;
    }

    public function getCout(): ?string
    {
        return $this->cout;
    }

    public function setCout(?string $cout): static
    {
        $this->cout = $cout;

        return $this;
    }

    public function getHoraire(): ?string
    {
        return $this->horaire;
    }

    public function setHoraire(?string $horaire): static
    {
        $this->horaire = $horaire;

        return $this;
    }

    public function getLieu(): ?string
    {
        return $this->lieu;
    }

    public function setLieu(?string $lieu): static
    {
        $this->lieu = $lieu;

        return $this;
    }

    public function getMetierDescription(): ?string
    {
        return $this->metierDescription;
    }

    public function setMetierDescription(?string $metierDescription): static
    {
        $this->metierDescription = $metierDescription;

        return $this;
    }

    /** @return list<array{icone: string|null, titre: string, description: string|null, misEnAvant: bool}> */
    public function getMissions(): array
    {
        return $this->missions ?? [];
    }

    /** @param array<array{icone: string|null, titre: string, description: string|null, misEnAvant: bool}> $missions */
    public function setMissions(array $missions): static
    {
        $this->missions = array_values($missions);

        return $this;
    }

    public function getQualitesDescription(): ?string
    {
        return $this->qualitesDescription;
    }

    public function setQualitesDescription(?string $qualitesDescription): static
    {
        $this->qualitesDescription = $qualitesDescription;

        return $this;
    }

    public function getOrganismeConditions(): ?string
    {
        return $this->organismeConditions;
    }

    public function setOrganismeConditions(?string $organismeConditions): static
    {
        $this->organismeConditions = $organismeConditions;

        return $this;
    }

    /** @return list<array{titre: string, detail: string|null}> */
    public function getConditions(): array
    {
        return $this->conditions ?? [];
    }

    /** @param array<array{titre: string, detail: string|null}> $conditions */
    public function setConditions(array $conditions): static
    {
        $this->conditions = array_values($conditions);

        return $this;
    }

    /** @return list<string> */
    public function getAffirmationsProfil(): array
    {
        return $this->affirmationsProfil ?? [];
    }

    /** @param array<string|null> $affirmationsProfil */
    public function setAffirmationsProfil(array $affirmationsProfil): static
    {
        $this->affirmationsProfil = array_values(array_filter($affirmationsProfil));

        return $this;
    }

    /** @return Collection<int, FormationPilier> */
    public function getPiliers(): Collection
    {
        return $this->piliers;
    }

    public function addPilier(FormationPilier $pilier): static
    {
        if (!$this->piliers->contains($pilier)) {
            $this->piliers->add($pilier);
            $pilier->setFormation($this);
        }

        return $this;
    }

    public function removePilier(FormationPilier $pilier): static
    {
        if ($this->piliers->removeElement($pilier)) {
            if ($pilier->getFormation() === $this) {
                $pilier->setFormation(null);
            }
        }

        return $this;
    }

    /**
     * Getter virtuel utilisé par EasyAdmin (formatValue) pour afficher le statut de révision en attente.
     * Retourne toujours null : la valeur réelle est injectée dynamiquement via RevisionRepository.
     */
    public function getRevisionPendante(): ?string
    {
        return null;
    }
}
