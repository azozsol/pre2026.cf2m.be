<?php

declare(strict_types=1);

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;

/**
 * Un élément d'un pilier (entrée du champ JSON FormationPilier::$elements).
 */
class FormationPilierElementType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('etiquette', TextType::class, [
                'label' => 'Étiquette',
                'required' => false,
                'help' => 'Optionnel, par exemple le nom d\'un logiciel : Photoshop.',
            ])
            ->add('icone', TextType::class, [
                'label' => 'Icône',
                'required' => false,
                'help' => 'Nom d\'une icône lucide (optionnel).',
            ])
            ->add('titre', TextType::class, [
                'label' => 'Titre',
                'constraints' => [new NotBlank(message: 'Le titre de l\'élément ne peut pas être vide.')],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'required' => false,
            ])
        ;
    }
}
