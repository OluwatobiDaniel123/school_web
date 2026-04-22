import {PageHeader, Section} from "@/components/Section";

const principles = [
    {
        n: "01",
        t: "Observe first",
        d: "Teachers begin by watching — noting interests, patterns, and questions before stepping in.",
    },
    {
        n: "02",
        t: "Prepare the environment",
        d: "Every shelf, basket, and tool is chosen to invite focus and independence.",
    },
    {n: "03", t: "Follow the child", d: "Lessons emerge from real curiosity, not a fixed curriculum calendar."},
    {
        n: "04",
        t: "Document the journey",
        d: "Children's words, drawings, and discoveries are gathered and reflected back.",
    },
];

const Approach = () => (
    <>
        <PageHeader
            eyebrow="Learning Approach"
            title="Slow, intentional, deeply human."
            intro="Our days are built on long uninterrupted work cycles, mixed-age collaboration, and the conviction that play is the most serious work a child does."
        />

        <Section>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                {principles.map((p) => (
                    <div key={p.n} className="border-t border-border pt-6">
                        <p className="font-display text-accent text-lg font-semibold mb-2">{p.n}</p>
                        <h3 className="font-display text-2xl font-semibold mb-3">{p.t}</h3>
                        <p className="text-muted-foreground leading-relaxed">{p.d}</p>
                    </div>
                ))}
            </div>
        </Section>

        <Section className="bg-muted/40 border-y border-border/60">
            <div className="max-w-2xl mb-12">
                <p className="eyebrow mb-3">A day in the life</p>
                <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                    A gentle daily rhythm.
                </h2>
            </div>
            <div className="space-y-px bg-border/60 rounded-2xl overflow-hidden">
                {[
                    ["7:30 – 8:30", "Soft arrival & free choice"],
                    ["8:30 – 9:00", "Family-style breakfast"],
                    ["9:00 – 11:00", "Long work cycle & atelier"],
                    ["11:00 – 12:00", "Outdoor play & garden time"],
                    ["12:00 – 1:00", "Lunch together"],
                    ["1:00 – 3:00", "Rest & quiet exploration"],
                    ["3:00 – 5:30", "Afternoon projects & pickup"],
                ].map(([time, what]) => (
                    <div key={time} className="grid grid-cols-3 gap-4 bg-card px-6 py-5">
                        <span className="text-sm text-muted-foreground font-medium">{time}</span>
                        <span className="col-span-2 font-display text-lg">{what}</span>
                    </div>
                ))}
            </div>
        </Section>
    </>
);

export default Approach;
