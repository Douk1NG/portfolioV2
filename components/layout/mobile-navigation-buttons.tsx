'use client'

import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePrevNextSection } from '@/hooks/usePrevNextSection';
import { SectionName } from '@/types/section';
import { cn } from '@/lib/utils';

type MobileNavigationButtonsProps = {
    currentSection: SectionName | '';
};

export function MobileNavigationButtons({
    currentSection
}: MobileNavigationButtonsProps) {
    const { goToPrev, goToNext, canGoUp, canGoDown } = usePrevNextSection({
        currentSection
    });

    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-2 md:hidden z-50">
            {/* Botón Arriba */}
            <Button
                onClick={goToPrev}
                size="icon"
                variant="secondary"
                className={cn(
                    'h-12 w-12 rounded-full shadow-lg transition-all duration-300',
                    'bg-secondary/90 hover:bg-secondary backdrop-blur-sm',
                    !canGoUp && 'opacity-0 pointer-events-none scale-75'
                )}
                disabled={!canGoUp}
                aria-label="Go to previous section"
            >
                <ChevronUp className="h-6 w-6" />
            </Button>

            {/* Botón Abajo */}
            <Button
                onClick={goToNext}
                size="icon"
                variant="secondary"
                className={cn(
                    'h-12 w-12 rounded-full shadow-lg transition-all duration-300',
                    'bg-secondary/90 hover:bg-secondary backdrop-blur-sm',
                    !canGoDown && 'opacity-0 pointer-events-none scale-75'
                )}
                disabled={!canGoDown}
                aria-label="Go to next section"
            >
                <ChevronDown className="h-6 w-6" />
            </Button>
        </div>
    );
}