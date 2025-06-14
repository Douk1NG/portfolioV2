import { type MainProps } from "@/types/layout/main-props"

export default function Main({ sections }: MainProps) {
    return (
        <main className="flex-1 overflow-auto">
            {sections.map((section) => (
                <section
                    key={section.id}
                    id={section.id}
                    data-section
                    className="container mx-auto p-8 space-y-32 min-h-screen"
                >
                    {section.component}
                </section>
            ))}
        </main>
    )
}