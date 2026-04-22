import {PageHeader, Section} from "@/components/Section";
import parents from "@/assets/parents.jpg";

const Parents = () => (
    <>
        <PageHeader
            eyebrow="Parent involvement"
            title="A school that welcomes the whole family."
            intro="Children flourish when home and school speak the same language. We invite families into the rhythm of our community in many ways."
        />

        <Section>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                    src={parents}
                    alt="Parent reading with child"
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="rounded-[2rem] shadow-card aspect-[4/3] object-cover"
                />
                <div>
                    <p className="eyebrow mb-3">Volunteer opportunities</p>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5 leading-tight">
                        Bring your gifts into the classroom.
                    </h2>
                    <ul className="space-y-3 text-muted-foreground leading-relaxed">
                        <li>· Read-aloud guest mornings</li>
                        <li>· Garden & cooking workshops</li>
                        <li>· Cultural & language sharing</li>
                        <li>· Community work days & repairs</li>
                        <li>· Field trip chaperoning</li>
                    </ul>
                </div>
            </div>
        </Section>

        <Section className="bg-muted/40 border-y border-border/60">
            <div className="max-w-2xl mb-12">
                <p className="eyebrow mb-3">At-home activities</p>
                <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                    Simple ways to extend the day.
                </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    {
                        t: "Practical life",
                        d: "Invite your child into pouring, washing, folding, and sweeping — real work builds real confidence.",
                    },
                    {
                        t: "Slow stories",
                        d: "A nightly read-aloud, repeated favorites, and time to wonder aloud about what comes next.",
                    },
                    {
                        t: "Outside daily",
                        d: "A puddle, a stick, an open sky. Unstructured outdoor time is the most powerful curriculum.",
                    },
                    {t: "One basket at a time", d: "Rotate a small selection of toys. Less choice means deeper play."},
                    {t: "Family rhythm", d: "Predictable mornings and bedtimes are the scaffolding of a calm child."},
                    {
                        t: "Kitchen together",
                        d: "Stirring, tearing herbs, setting the table — the kitchen is a classroom.",
                    },
                ].map((c) => (
                    <div key={c.t} className="p-7 rounded-2xl bg-card border border-border/60">
                        <h3 className="font-display text-xl font-semibold mb-2">{c.t}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{c.d}</p>
                    </div>
                ))}
            </div>
        </Section>

        <Section>
            <div className="max-w-2xl mb-12">
                <p className="eyebrow mb-3">What to expect</p>
                <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                    Your first weeks with us.
                </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        n: "Week 1",
                        t: "A gentle start",
                        d: "Short visits with a parent present help your child settle into the new space and faces.",
                    },
                    {
                        n: "Week 2 – 3",
                        t: "Building trust",
                        d: "Gradually longer days, with frequent check-ins from your child's primary caregiver.",
                    },
                    {
                        n: "Week 4+",
                        t: "Belonging",
                        d: "Your child is part of the rhythm. Daily notes and weekly photos keep you close.",
                    },
                ].map((s) => (
                    <div key={s.n}>
                        <p className="font-display text-accent font-semibold mb-2">{s.n}</p>
                        <h3 className="font-display text-2xl font-semibold mb-2">{s.t}</h3>
                        <p className="text-muted-foreground leading-relaxed">{s.d}</p>
                    </div>
                ))}
            </div>
        </Section>
    </>
);

export default Parents;
