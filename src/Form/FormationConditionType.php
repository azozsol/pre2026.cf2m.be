<?php

declare(strict_types=1);

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;

/**
 * Une condition d'accès (entrée du champ JSON Formation::$conditions).
 */
class FormationConditionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titre', TextType::class, [
                'label' => 'Condition',
                'attr' => ['placeholder' => 'Demandeur d\'emploi inscrit'],
                'constraints' => [new NotBlank(message: 'La condition ne peut pas être vide.')],
            ])
            ->add('detail', TextType::class, [
                'label' => 'Précision',
                'required' => false,
                'attr' => ['placeholder' => 'Obligatoirement chez Actiris'],
            ])
        ;
    }
}
