<?php

declare(strict_types=1);

namespace App\Tests\State;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\ApiResource\FormationResource;
use App\Entity\Formation;
use App\Entity\FormationPilier;
use App\Repository\FormationRepository;
use App\State\FormationProvider;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Asset\Packages;

/**
 * L'API ne doit exposer que les formations visibles sur le site, et uniquement leurs champs publics.
 */
class FormationProviderTest extends TestCase
{
    private function formation(string $slug, string $status, ?string $logo = null): Formation
    {
        $formation = new Formation();
        $formation->setTitle('Développeur web');
        $formation->setSlug($slug);
        $formation->setStatus($status);
        $formation->setDescriptionCourte('Formation de 9 mois');
        $formation->setLogo($logo);

        return $formation;
    }

    private function provider(FormationRepository $repository): FormationProvider
    {
        $packages = $this->createStub(Packages::class);
        $packages->method('getUrl')->willReturnCallback(static fn (string $path): string => '/'.$path);

        return new FormationProvider($repository, $packages);
    }

    public function testLaListeRenvoieLesFormationsPubliees(): void
    {
        $repository = $this->createMock(FormationRepository::class);
        $repository->expects(self::once())->method('findAllPublished')
            ->willReturn([$this->formation('dev-web', 'recruiting', 'logo.png')]);

        $resultat = $this->provider($repository)->provide(new GetCollection());

        self::assertIsArray($resultat);
        self::assertCount(1, $resultat);
        self::assertInstanceOf(FormationResource::class, $resultat[0]);
        self::assertSame('dev-web', $resultat[0]->slug);
        self::assertSame('Développeur web', $resultat[0]->titre);
        self::assertSame('recruiting', $resultat[0]->statut);
        self::assertSame('/uploads/formation-logos/logo.png', $resultat[0]->logoUrl);
    }

    public function testLeDetailRenvoieUneFormationPubliee(): void
    {
        $repository = $this->createStub(FormationRepository::class);
        $repository->method('findOneBySlug')->willReturn($this->formation('dev-web', 'published'));

        $resultat = $this->provider($repository)->provide(new Get(), ['slug' => 'dev-web']);

        self::assertInstanceOf(FormationResource::class, $resultat);
        self::assertNull($resultat->logoUrl);
    }

    public function testLeDetailContientLeContenuDeLaPage(): void
    {
        $element = ['etiquette' => 'Photoshop', 'icone' => null, 'titre' => 'Traitement d\'Image', 'description' => 'Retouche avancée.'];
        $formation = $this->formation('digital-designer', 'recruiting');
        $formation->setDuree('13 mois');
        $formation->setProchaineSession('Mars 2027');
        $formation->setCout('Gratuit (+ Prime 1€/h)');
        $formation->setPointsForts([2 => ['icone' => 'Briefcase', 'libelle' => 'Immersion pro', 'valeur' => 'Stage 6 Semaines']]);
        $formation->setMissions([['icone' => 'Brain', 'titre' => 'Assistance IA Créative', 'description' => null, 'misEnAvant' => true]]);
        $formation->setConditions([['titre' => 'Âge minimal', 'detail' => 'Avoir au moins 18 ans au démarrage']]);
        $formation->setAffirmationsProfil(['J\'aime apprendre de nouveaux logiciels.', null]);
        $formation->addPilier((new FormationPilier())
            ->setLibelleOnglet('Outils PAO & Digital')
            ->setTitre('Maîtrise de la Suite Adobe & Figma')
            ->setMisEnAvant(true)
            ->setBadge('Module Exclusif CF2M')
            ->setElements([5 => $element])
        );

        $repository = $this->createStub(FormationRepository::class);
        $repository->method('findOneBySlug')->willReturn($formation);

        $resultat = $this->provider($repository)->provide(new Get(), ['slug' => 'digital-designer']);

        self::assertInstanceOf(FormationResource::class, $resultat);
        self::assertSame('13 mois', $resultat->duree);
        self::assertSame('Mars 2027', $resultat->prochaineSession);
        self::assertSame('Gratuit (+ Prime 1€/h)', $resultat->cout);
        self::assertSame([['icone' => 'Briefcase', 'libelle' => 'Immersion pro', 'valeur' => 'Stage 6 Semaines']], $resultat->pointsForts);
        self::assertTrue($resultat->missions[0]['misEnAvant']);
        self::assertSame([['titre' => 'Âge minimal', 'detail' => 'Avoir au moins 18 ans au démarrage']], $resultat->conditions);
        self::assertSame(['J\'aime apprendre de nouveaux logiciels.'], $resultat->affirmationsProfil);
        self::assertSame([[
            'libelleOnglet' => 'Outils PAO & Digital',
            'titre' => 'Maîtrise de la Suite Adobe & Figma',
            'icone' => null,
            'description' => null,
            'misEnAvant' => true,
            'badge' => 'Module Exclusif CF2M',
            'elements' => [$element],
        ]], $resultat->piliers);
    }

    public function testLaListeNeChargePasLesPiliers(): void
    {
        $formation = $this->formation('digital-designer', 'published');
        $formation->addPilier((new FormationPilier())->setLibelleOnglet('Module IA')->setTitre('Usage de l\'IA'));

        $repository = $this->createStub(FormationRepository::class);
        $repository->method('findAllPublished')->willReturn([$formation]);

        $resultat = $this->provider($repository)->provide(new GetCollection());

        self::assertSame([], $resultat[0]->piliers);
    }

    public function testUneFormationEnBrouillonEstIntrouvable(): void
    {
        $repository = $this->createStub(FormationRepository::class);
        $repository->method('findOneBySlug')->willReturn($this->formation('secret', 'draft'));

        self::assertNull($this->provider($repository)->provide(new Get(), ['slug' => 'secret']));
    }

    public function testUnSlugInconnuEstIntrouvable(): void
    {
        $repository = $this->createStub(FormationRepository::class);
        $repository->method('findOneBySlug')->willReturn(null);

        self::assertNull($this->provider($repository)->provide(new Get(), ['slug' => 'inconnu']));
    }
}
