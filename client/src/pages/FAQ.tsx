import {PageHeader, Section} from "@/components/Section";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";

const faqs = [
    {
        q: "What age groups do you accept?",
        a: "We welcome children from 6 weeks through 5 years old, organized into our Infant Room (6 weeks–12 months), Toddler Studio (1–2 years), and Preschool (3–4 years).",
    },
    {
        q: "What curriculum do you follow?",
        a: "Our approach blends Creative. Children learn through hands-on exploration, real materials, and meaningful relationships rather than scripted lessons.",
    },
    {
        q: "What are your operating hours?",
        a: "We are open Monday through Friday, 7:30 AM to 5:30 PM. We are closed on major federal holidays and have a brief winter recess each year.",
    },
    {
        q: "What are your student-to-teacher ratios?",
        a: "We maintain low ratios across every classroom: 1:3 in the Infant Room, 1:4 in the Toddler Studio, and 1:8 in the Preschool — well below state minimums.",
    },
    {
        q: "Do you provide meals and snacks?",
        a: "Yes. We serve a fresh, family-style breakfast, lunch, and afternoon snack daily, prepared in-house with seasonal, whole-food ingredients. Allergy accommodations are available.",
    },
    {
        q: "What is the enrollment process?",
        a: "Families begin with a tour, then submit an application. We review on a rolling basis with priority enrollment in March and September. Visit our Admissions page for full details.",
    },
    {
        q: "Do you offer part-time schedules?",
        a: "Yes — we offer full-time (5 days), part-time (3 days), and 2-day options depending on classroom availability.",
    },
    {
        q: "How do you handle illness and safety?",
        a: "We follow strict health protocols aligned with CDC and local guidelines, including daily wellness checks, secure entry, background-checked staff, and a licensed nurse on call.",
    },
    {
        q: "How do you communicate with parents?",
        a: "Each family receives daily classroom updates with photos through our parent app, plus quarterly conferences and an annual portfolio review.",
    },
];

const FAQ = () => {
    return (
        <>
            <PageHeader
                eyebrow="Frequently Asked Questions"
                title="Answers for curious families."
                intro="The questions we hear most often from parents considering Bumblebee Early Learning Center. Don't see yours? We'd love to hear from you."
            />
            <Section>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/60">
                                <AccordionTrigger className="text-left font-display text-lg md:text-xl font-medium py-6 hover:no-underline hover:text-primary">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="mt-16 p-10 rounded-2xl bg-muted/40 border border-border/60 text-center">
                        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Still have questions?</h2>
                        <p className="text-muted-foreground mb-6">
                            Our admissions team is happy to help — usually within one business day.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                        >
                            Get in touch <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default FAQ;
