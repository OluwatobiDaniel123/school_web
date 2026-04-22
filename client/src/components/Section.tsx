import {ReactNode} from "react";

export const PageHeader = ({eyebrow, title, intro}: {eyebrow?: string; title: string; intro?: string}) => (
    <section className="bg-gradient-warm border-b border-border/60">
        <div className="container-prose py-20 md:py-28 max-w-3xl">
            {eyebrow && <p className="eyebrow mb-5 animate-fade-in">{eyebrow}</p>}
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-foreground animate-fade-up">
                {title}
            </h1>
            {intro && (
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-fade-up [animation-delay:120ms]">
                    {intro}
                </p>
            )}
        </div>
    </section>
);

export const Section = ({children, className = ""}: {children: ReactNode; className?: string}) => (
    <section className={`py-20 md:py-28 ${className}`}>
        <div className="container-prose">{children}</div>
    </section>
);
