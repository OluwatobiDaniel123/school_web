import {Link} from "react-router-dom";
import {ArrowRight, Sprout, Heart, Sun} from "lucide-react";
import hero from "@/assets/hero.jpeg";
import infant from "@/assets/infant.jpeg";
import toddler from "@/assets/toddler.jpeg";
import preschool from "@/assets/preschool.jpeg";
import Testimonials from "@/components/Testimonials";

const programs = [
    {img: infant, title: "Infant Room", age: "6 weeks – 12 months", to: "/programs#infant"},
    {img: toddler, title: "Toddlers", age: "1 – 2 years", to: "/programs#toddler"},
    {img: preschool, title: "Preschool", age: "3 – 4 years", to: "/programs#preschool"},
];

const pillars = [
    {
        icon: Sprout,
        title: "Child-led learning",
        body: "We follow each child's curiosity, building confidence through discovery and meaningful play.",
    },
    {
        icon: Heart,
        title: "Warm, small classrooms",
        body: "Low ratios and consistent caregivers create the trust children need to thrive.",
    },
    {
        icon: Sun,
        title: "Nature & rhythm",
        body: "Daily outdoor time and predictable routines ground every day in calm and joy.",
    },
];

const Index = () => {
    return (
        <>
            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-warm">
                <div className="container-prose py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-up">
                        <p className="eyebrow mb-5">Early Learning · Ages 6 weeks – 5 years</p>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
                            Where small <em className="text-accent not-italic">wonders</em> grow.
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
                            A nurturing, nature-inspired early learning community rooted in respect for the child and
                            the joy of discovery.
                        </p>
                        <div className="mt-9 flex flex-wrap gap-3">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-soft"
                            >
                                Schedule a visit <ArrowRight size={18} />
                            </Link>
                            <Link
                                to="/programs"
                                className="inline-flex items-center px-6 py-3.5 rounded-full border border-border bg-card font-medium hover:bg-muted transition-colors"
                            >
                                Explore programs
                            </Link>
                        </div>
                    </div>
                    <div className="relative animate-fade-in [animation-delay:200ms]">
                        <div className="absolute -inset-4 bg-accent/15 rounded-[2rem] -rotate-2" />
                        <img
                            src={hero}
                            alt="Children playing in a sunlit Montessori-style classroom"
                            width={1536}
                            height={1024}
                            className="relative rounded-[2rem] shadow-soft w-full object-cover aspect-[4/3]"
                        />
                    </div>
                </div>
            </section>

            {/* ABOUT PREVIEW */}
            <section className="py-24 md:py-32">
                <div className="container-prose grid md:grid-cols-12 gap-10 items-end">
                    <div className="md:col-span-7">
                        <p className="eyebrow mb-5">About our model</p>
                        <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                            An education that begins with respect — for the child, the family, and the world they're
                            discovering.
                        </h2>
                    </div>
                    <div className="md:col-span-5 md:pb-2">
                        <p className="text-muted-foreground leading-relaxed">
                            Our approach blends Head Start Children learn through real materials, real relationships,
                            and unhurried time.
                        </p>
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:gap-3 transition-all"
                        >
                            Learn about our philosophy <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* PROGRAMS */}
            <section className="py-20 bg-muted/40 border-y border-border/60">
                <div className="container-prose">
                    <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
                        <div>
                            <p className="eyebrow mb-3">Programs</p>
                            <h2 className="font-display text-4xl md:text-5xl font-semibold">Classrooms by age</h2>
                        </div>
                        <Link
                            to="/programs"
                            className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
                        >
                            View all programs <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {programs.map((p) => (
                            <Link
                                key={p.title}
                                to={p.to}
                                className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all hover:-translate-y-1"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="text-xs text-muted-foreground">{p.age}</p>
                                    <h3 className="font-display text-2xl font-semibold mt-1">{p.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-24 md:py-32">
                <div className="container-prose">
                    <div className="max-w-2xl mb-16">
                        <p className="eyebrow mb-3">Why families choose us</p>
                        <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                            The little things, done with great care.
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pillars.map((p) => (
                            <div key={p.title} className="p-8 rounded-2xl bg-card border border-border/60">
                                <div className="w-12 h-12 rounded-xl bg-secondary grid place-items-center text-primary mb-5">
                                    <p.icon size={22} />
                                </div>
                                <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">{p.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <Testimonials />

            {/* CTA */}
            <section className="py-24">
                <div className="container-prose">
                    <div className="rounded-[2rem] bg-primary text-primary-foreground p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
                        <div className="relative max-w-2xl">
                            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                                Come see our space. Meet our teachers.
                            </h2>
                            <p className="mt-5 text-primary-foreground/80 text-lg">
                                We welcome families for personal tours throughout the week. Enrollment opens twice a
                                year.
                            </p>
                            <div className="mt-9 flex flex-wrap gap-3">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-background text-foreground font-medium hover:bg-background/90 transition-colors"
                                >
                                    Book a tour <ArrowRight size={18} />
                                </Link>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center px-6 py-3.5 rounded-full border border-primary-foreground/30 font-medium hover:bg-primary-foreground/10 transition-colors"
                                >
                                    Our story
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
