import {PageHeader, Section} from "@/components/Section";
import {MapPin, Clock, Mail, Phone} from "lucide-react";
import {useState, FormEvent} from "react";
import {toast} from "sonner";

const Contact = () => {
    const [sent, setSent] = useState(false);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSent(true);
        toast.success("Thank you — we'll be in touch within two business days.");
    };

    return (
        <>
            <PageHeader
                eyebrow="Visit us"
                title="Let's begin a conversation."
                intro="Tours are offered Tuesdays and Thursdays. Tell us a little about your family and we'll find a time to welcome you."
            />

            <Section>
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-5 space-y-8">
                        {[
                            {icon: MapPin, title: "Address", lines: ["919 Eastern Pkwy", "Brooklyn NY"]},
                            {icon: Clock, title: "Hours", lines: ["Monday – Friday", "7:30 am – 5:30 pm"]},
                            {icon: Phone, title: "Phone", lines: ["(929) 873-5129"]},
                            {icon: Mail, title: "Email", lines: ["harriethomas@yahoo.com"]},
                        ].map((c) => (
                            <div key={c.title} className="flex gap-4">
                                <span className="w-11 h-11 shrink-0 rounded-xl bg-secondary text-primary grid place-items-center">
                                    <c.icon size={20} />
                                </span>
                                <div>
                                    <h4 className="font-semibold mb-1">{c.title}</h4>
                                    {c.lines.map((l) => (
                                        <p key={l} className="text-muted-foreground text-sm">
                                            {l}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="rounded-2xl overflow-hidden border border-border/60 aspect-[4/3]">
                            <iframe
                                title="Map"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.13,51.50,-0.10,51.52&layer=mapnik"
                                className="w-full h-full"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <form
                            onSubmit={onSubmit}
                            className="bg-card border border-border/60 rounded-3xl p-8 md:p-10 space-y-5 shadow-card"
                        >
                            <h2 className="font-display text-2xl font-semibold mb-2">Tell us about your family</h2>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <Field label="Your name" name="name" />
                                <Field label="Email" name="email" type="email" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <Field label="Child's age" name="age" placeholder="e.g. 18 months" />
                                <Field label="Preferred start date" name="start" placeholder="Fall 2026" />
                            </div>
                            <div>
                                <label className="text-sm font-medium block mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                                    placeholder="Anything you'd like us to know…"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={sent}
                                className="inline-flex items-center px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-60"
                            >
                                {sent ? "Message sent" : "Request a tour"}
                            </button>
                        </form>
                    </div>
                </div>
            </Section>
        </>
    );
};

const Field = ({
    label,
    name,
    type = "text",
    placeholder,
}: {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
}) => (
    <div>
        <label className="text-sm font-medium block mb-2">{label}</label>
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
        />
    </div>
);

export default Contact;
