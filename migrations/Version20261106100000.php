<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Ajoute le contenu de la page détail d'une formation (maquette HTML « Digital Designer ») :
 * colonnes sur formation et table formation_pilier.
 *
 * Toutes les colonnes ajoutées à formation sont nullables : les formations existantes restent valides.
 */
final class Version20261106100000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Contenu de la page détail des formations (hero, métier, piliers du programme, admission)';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE formation ADD prochaine_session VARCHAR(50) DEFAULT NULL, ADD modalite VARCHAR(100) DEFAULT NULL, ADD points_forts JSON DEFAULT NULL, ADD duree VARCHAR(50) DEFAULT NULL, ADD heures_totales VARCHAR(50) DEFAULT NULL, ADD rythme VARCHAR(100) DEFAULT NULL, ADD cout VARCHAR(100) DEFAULT NULL, ADD horaire VARCHAR(150) DEFAULT NULL, ADD lieu VARCHAR(255) DEFAULT NULL, ADD metier_description LONGTEXT DEFAULT NULL, ADD missions JSON DEFAULT NULL, ADD qualites_description LONGTEXT DEFAULT NULL, ADD organisme_conditions VARCHAR(50) DEFAULT NULL, ADD conditions JSON DEFAULT NULL, ADD affirmations_profil JSON DEFAULT NULL');
        $this->addSql('CREATE TABLE formation_pilier (id INT UNSIGNED AUTO_INCREMENT NOT NULL, position SMALLINT UNSIGNED NOT NULL, libelle_onglet VARCHAR(100) NOT NULL, titre VARCHAR(255) NOT NULL, icone VARCHAR(50) DEFAULT NULL, description LONGTEXT DEFAULT NULL, mis_en_avant TINYINT DEFAULT 0 NOT NULL, badge VARCHAR(50) DEFAULT NULL, elements JSON NOT NULL, formation_id INT UNSIGNED NOT NULL, INDEX IDX_9EAC80955200282E (formation_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE formation_pilier ADD CONSTRAINT FK_9EAC80955200282E FOREIGN KEY (formation_id) REFERENCES formation (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE formation_pilier DROP FOREIGN KEY FK_9EAC80955200282E');
        $this->addSql('DROP TABLE formation_pilier');
        $this->addSql('ALTER TABLE formation DROP prochaine_session, DROP modalite, DROP points_forts, DROP duree, DROP heures_totales, DROP rythme, DROP cout, DROP horaire, DROP lieu, DROP metier_description, DROP missions, DROP qualites_description, DROP organisme_conditions, DROP conditions, DROP affirmations_profil');
    }
}
