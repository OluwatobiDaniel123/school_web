import {useState} from "react";
import {PageHeader, Section} from "@/components/Section";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Check, FileText, Calendar, ClipboardList, Users} from "lucide-react";
import {toast} from "sonner";

const steps = [
    {
        icon: Calendar,
        title: "Schedule a tour",
        body: "Visit our space, meet our teachers, and see a typical day in motion. Tours run weekday mornings.",
    },
    {
        icon: FileText,
        title: "Submit application",
        body: "Complete our family application with your child's information, schedule preference, and start date.",
    },
    {
        icon: Users,
        title: "Family meeting",
        body: "We sit down together to discuss your child's needs, our approach, and ensure it's the right fit.",
    },
    {
        icon: ClipboardList,
        title: "Enroll & onboard",
        body: "Sign your enrollment agreement, complete health forms, and begin our gentle transition process.",
    },
];

const requirements = [
    "Completed application form (online or in-person)",
    "Child's birth certificate (copy)",
    "Up-to-date immunization records",
    "Current physician's health statement",
    "Two emergency contacts and authorized pickup list",
    "Signed enrollment agreement and tuition deposit",
];

const Admissions = () => {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            toast.success("Application received", {
                description: "We'll be in touch within one business day to schedule your tour.",
            });
            (e.target as HTMLFormElement).reset();
            setSubmitting(false);
        }, 700);
    };

    return (
        <>
            <PageHeader
                eyebrow="Admissions & Enrollment"
                title="Joining the Bumblebee Early Learning Center."
                intro="A thoughtful, unhurried process designed to make sure every child and family feels at home before day one."
            />

            {/* PROCESS STEPS */}
            <Section>
                <div className="max-w-2xl mb-14">
                    <p className="eyebrow mb-3">The process</p>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
                        Four steps from first hello to first day.
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((s, i) => (
                        <div key={s.title} className="relative p-7 rounded-2xl bg-card border border-border/60">
                            <span className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-display font-semibold text-sm">
                                {i + 1}
                            </span>
                            <div className="w-11 h-11 rounded-xl bg-secondary grid place-items-center text-primary mb-4">
                                <s.icon size={20} />
                            </div>
                            <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* REQUIREMENTS */}
            <section className="py-20 md:py-24 bg-muted/40 border-y border-border/60">
                <div className="container-prose grid md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-5">
                        <p className="eyebrow mb-3">Requirements</p>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
                            What you'll need to enroll.
                        </h2>
                        <p className="mt-5 text-muted-foreground leading-relaxed">
                            We'll guide you through every form. Most families complete enrollment within two weeks of
                            their tour.
                        </p>
                    </div>
                    <ul className="md:col-span-7 space-y-3">
                        {requirements.map((r) => (
                            <li
                                key={r}
                                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/60"
                            >
                                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground grid place-items-center flex-shrink-0 mt-0.5">
                                    <Check size={14} />
                                </span>
                                <span className="text-foreground">{r}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* APPLY NOW FORM */}
            <Section>
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="eyebrow mb-3">Apply now</p>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
                            Start your application.
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Tell us a little about your family — we'll reach out within one business day.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5 p-8 md:p-10 rounded-2xl bg-card border border-border/60 shadow-card"
                    >
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <Label htmlFor="parent">Parent / Guardian name</Label>
                                <Input id="parent" required placeholder="Jane Doe" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" required placeholder="jane@example.com" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" type="tel" placeholder="(555) 010-2024" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="childAge">Child's age</Label>
                                <Input id="childAge" required placeholder="2 years" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="start">Desired start date</Label>
                            <Input id="start" type="month" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Tell us about your child</Label>
                            <Textarea
                                id="message"
                                rows={4}
                                placeholder="Interests, schedule preferences, or anything else we should know…"
                            />
                        </div>

                        <Button type="submit" size="lg" disabled={submitting} className="w-full rounded-full">
                            {submitting ? "Submitting…" : "Apply Now"}
                        </Button>
                    </form>
                </div>
            </Section>
        </>
    );
};

export default Admissions;
