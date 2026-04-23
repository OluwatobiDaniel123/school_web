import {PageHeader, Section} from "@/components/Section";
import {Check} from "lucide-react";

const benefits = [
    "Strong sense of self and confidence",
    "Joy in learning that lasts a lifetime",
    "Empathy and social-emotional skills",
    "Independence and practical life skills",
    "Curiosity, focus, and inner discipline",
    "A grounded relationship with nature",
];

const About = () => (
    <>
        <PageHeader
            eyebrow="About our model"
            title="A childhood worth remembering."
            intro="Bumblebee Early Learning Center is a small, intentional early learning community built around the belief that children are capable, curious, and worthy of deep respect."
        />

        <Section>
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-5">
                    <p className="eyebrow mb-4">The model</p>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
                        {/* Head Start, Montessori-rooted. Family-centered. */}Head Start
                    </h2>
                </div>
                <div className="md:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
                    <p>
                        Our model honors the natural development of young children through prepared environments,
                        consistent caregivers, and a daily rhythm that values both wonder and rest.
                    </p>
                    <p>
                        Mixed-age classrooms encourage mentorship and collaboration. Real materials — wood, glass,
                        fabric, clay — invite focus and care. Outdoor time is daily, weather welcomed.
                    </p>
                    <p>Families are not just visitors. They are partners woven into the life of the school.</p>
                </div>
            </div>
        </Section>

        <Section className="bg-muted/40 border-y border-border/60">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <p className="eyebrow mb-4">Philosophy</p>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-6">
                        "The child has a hundred languages."
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We believe children express themselves through movement, drawing, building, music, story, and
                        play. Our role is to listen — to slow down, observe, and follow where their thinking leads.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {["Respect", "Wonder", "Rhythm", "Nature", "Community", "Time"].map((w) => (
                        <div
                            key={w}
                            className="aspect-square rounded-2xl bg-card border border-border/60 grid place-items-center font-display text-2xl font-semibold text-primary"
                        >
                            {w}
                        </div>
                    ))}
                </div>
            </div>
        </Section>

        <Section>
            <div className="max-w-2xl mb-12">
                <p className="eyebrow mb-4">Benefits</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
                    What children carry with them.
                </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
                {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3 py-4 border-b border-border/60">
                        <span className="mt-1 w-6 h-6 rounded-full bg-secondary text-primary grid place-items-center shrink-0">
                            <Check size={14} />
                        </span>
                        <span className="text-foreground">{b}</span>
                    </div>
                ))}
            </div>
        </Section>
    </>
);

export default About;
