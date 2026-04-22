import {Quote, Star} from "lucide-react";

const testimonials = [
    {
        quote: "From our first tour, we knew this was different. The teachers truly see our daughter — her quirks, her gifts, all of it. She runs to the door every morning.",
        name: "Maya & David R.",
        role: "Parents of Iris, age 3",
    },
    {
        quote: "The communication is unmatched. Daily updates, real photos, and conferences that feel like genuine conversations rather than checklists.",
        name: "Priya S.",
        role: "Parent of Aarav, age 2",
    },
    {
        quote: "Our son started in the Infant Room and is now thriving in Preschool. Watching him grow with the same caring community has been a gift.",
        name: "The Okonkwo Family",
        role: "Parents since 2022",
    },
];

const highlights = [
    {stat: "100%", label: "Kindergarten readiness"},
    {stat: "1:4", label: "Toddler ratio"},
    {stat: "12 yrs", label: "Avg. teacher tenure"},
];

const Testimonials = () => {
    return (
        <section className="py-24 md:py-32 bg-gradient-warm border-y border-border/60">
            <div className="container-prose">
                <div className="max-w-2xl mb-16">
                    <p className="eyebrow mb-3">From our families</p>
                    <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                        A community that feels like home.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {testimonials.map((t) => (
                        <figure
                            key={t.name}
                            className="p-8 rounded-2xl bg-card border border-border/60 shadow-card flex flex-col"
                        >
                            <Quote className="text-accent mb-4" size={28} />
                            <div className="flex gap-0.5 mb-4">
                                {Array.from({length: 5}).map((_, i) => (
                                    <Star key={i} size={14} className="fill-accent text-accent" />
                                ))}
                            </div>
                            <blockquote className="text-foreground leading-relaxed flex-1">"{t.quote}"</blockquote>
                            <figcaption className="mt-6 pt-6 border-t border-border/60">
                                <p className="font-display font-semibold">{t.name}</p>
                                <p className="text-sm text-muted-foreground">{t.role}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-4 md:gap-8 p-8 md:p-10 rounded-2xl bg-card border border-border/60">
                    {highlights.map((h) => (
                        <div key={h.label} className="text-center">
                            <p className="font-display text-3xl md:text-5xl font-semibold text-primary">{h.stat}</p>
                            <p className="text-xs md:text-sm text-muted-foreground mt-2">{h.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
