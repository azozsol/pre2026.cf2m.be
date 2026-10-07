<?php

declare(strict_types=1);

namespace App\Twig;

use App\Service\Layout\LayoutPropsBuilder;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * Expose aux templates les props des îlots React de mise en page
 * (à passer à react_component()).
 */
final class LayoutExtension extends AbstractExtension
{
    public function __construct(
        private readonly LayoutPropsBuilder $builder,
    ) {
    }

    /** @return TwigFunction[] */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('header_props', $this->builder->header(...)),
            new TwigFunction('footer_props', $this->builder->footer(...)),
            new TwigFunction('hero_props', $this->builder->hero(...)),
            new TwigFunction('hero_background', $this->builder->heroBackground(...)),
        ];
    }
}
