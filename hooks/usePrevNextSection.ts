import { SectionName } from '@/types/section';

type UsePrevNextSectionProps = {
    currentSection: SectionName | '';
};

type UsePrevNextSectionReturn = {
    prevSection: SectionName | null;
    nextSection: SectionName | null;
    goToPrev: () => void;
    goToNext: () => void;
    canGoUp: boolean;
    canGoDown: boolean;
};

export function usePrevNextSection({
    currentSection
}: UsePrevNextSectionProps): UsePrevNextSectionReturn {
    const sections: SectionName[] = ['about', 'skills', 'projects', 'contact'];

    // Encuentra el índice de la sección actual
    const currentIndex = sections.indexOf(currentSection as SectionName);

    // Sección previa (null si es la primera o no existe)
    const prevSection = currentIndex > 0 ? sections[currentIndex - 1] : null;

    // Sección siguiente (null si es la última o no existe)
    const nextSection = currentIndex < sections.length - 1 && currentIndex !== -1
        ? sections[currentIndex + 1]
        : null;

    // Función para ir a la sección previa
    const goToPrev = () => {
        if (prevSection) {
            window.location.hash = prevSection;
            // Scroll suave
            document.getElementById(prevSection)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    // Función para ir a la siguiente sección
    const goToNext = () => {
        if (nextSection) {
            window.location.hash = nextSection;
            // Scroll suave
            document.getElementById(nextSection)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return {
        prevSection,
        nextSection,
        goToPrev,
        goToNext,
        canGoUp: prevSection !== null,
        canGoDown: nextSection !== null,
    };
}