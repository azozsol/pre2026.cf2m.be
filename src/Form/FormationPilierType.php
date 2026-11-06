<?php

declare(strict_types=1);

namespace App\Form;

use App\Entity\FormationPilier;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Un pilier du programme, dans le formulaire EasyAdmin d'une formation.
 */
class FormationPilierType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('position', IntegerType::class, [
                'label' => 'Ordre',
                'empty_data' => '0',
                'attr' => ['min' => 0],
            ])
            ->add('libelleOnglet', TextType::class, [
                'label' => 'Libellé de l\'onglet',
                'attr' => ['placeholder' => 'Design & Conception'],
            ])
            ->add('titre', TextType::class, [
                'label' => 'Titre',
                'attr' => ['placeholder' => 'Conception & Principes Fondamentaux du Design'],
            ])
            ->add('icone', TextType::class, [
                'label' => 'Icône',
                'required' => false,
                'help' => 'Nom d\'une icône lucide, par exemple PenTool.',
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description',
                'required' => false,
            ])
            ->add('misEnAvant', CheckboxType::class, [
                'label' => 'Mettre en avant (onglet de couleur différente)',
                'required' => false,
            ])
            ->add('badge', TextType::class, [
                'label' => 'Badge',
                'required' => false,
                'attr' => ['placeholder' => 'Module Exclusif CF2M'],
            ])
            ->add('elements', CollectionType::class, [
                'label' => 'Éléments',
                'entry_type' => FormationPilierElementType::class,
                'allow_add' => true,
                'allow_delete' => true,
                // Nom distinct de « __name__ » : sinon l'ajout d'un pilier remplacerait aussi l'index des éléments
                'prototype_name' => '__element__',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(['data_class' => FormationPilier::class]);
    }
}
