<?php

declare(strict_types=1);

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;

/**
 * Un point fort du hero (entrée du champ JSON Formation::$pointsForts).
 */
class FormationPointFortType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('icone', TextType::class, [
                'label' => 'Icône',
                'required' => false,
                'help' => 'Nom d\'une icône lucide, par exemple Laptop.',
            ])
            ->add('libelle', TextType::class, [
                'label' => 'Libellé',
                'attr' => ['placeholder' => 'Pratique intensive'],
                'constraints' => [new NotBlank(message: 'Le libellé ne peut pas être vide.')],
            ])
            ->add('valeur', TextType::class, [
                'label' => 'Valeur',
                'attr' => ['placeholder' => 'PAO & Web UX/UI'],
                'constraints' => [new NotBlank(message: 'La valeur ne peut pas être vide.')],
            ])
        ;
    }
}
