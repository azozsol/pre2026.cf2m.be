<?php

declare(strict_types=1);

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;

/**
 * Une mission du métier (entrée du champ JSON Formation::$missions).
 */
class FormationMissionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('icone', TextType::class, [
                'label' => 'Icône',
                'required' => false,
                'help' => 'Nom d\'une icône lucide, par exemple Brain.',
            ])
            ->add('titre', TextType::class, [
                'label' => 'Titre',
                'constraints' => [new NotBlank(message: 'Le titre de la mission ne peut pas être vide.')],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'required' => false,
            ])
            ->add('misEnAvant', CheckboxType::class, [
                'label' => 'Mettre en avant',
                'required' => false,
            ])
        ;
    }
}
