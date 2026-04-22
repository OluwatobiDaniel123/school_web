import {PageHeader, Section} from "@/components/Section";
import infant from "@/assets/infant.jpg";
import toddler from "@/assets/toddler.jpg";
import preschool from "@/assets/preschool.jpg";

const classrooms = [
    {
        id: "infant",
        name: "Infant Room",
        age: "6 weeks – 12 months",
        img: infant,
        description:
            "A calm, home-like space where babies are met with attentive primary caregivers, predictable rhythms, and gentle sensory experiences.",
        activities: [
            "Tummy time on natural mats",
            "Treasure baskets & object exploration",
            "Caregiver songs & lap reading",
            "Outdoor stroller time daily",
        ],
        materials: ["Wooden rattles & teethers", "Soft fabric balls", "Mirror stations", "Heuristic baskets"],
    },
    {
        id: "toddler",
        name: "Toddler Studio",
        age: "1 – 2 years",
        img: toddler,
        description:
            "Movement, language, and independence flourish here. Toddlers explore practical life work and begin collaborating in small, supported groups.",
        activities: [
            "Pouring & spooning practice",
            "Outdoor mud kitchen",
            "Music & movement circle",
            "Simple art with real tools",
        ],
        materials: [
            "Wooden stacking & nesting toys",
            "Climbing structures",
            "Open-ended natural loose parts",
            "Real ceramic dishes",
        ],
    },
    {
        id: "preschool",
        name: "Preschool",
        age: "3 – 4 years",
        img: preschool,
        description:
            "Long, uninterrupted work cycles invite deep focus. Children pursue projects, build friendships, and prepare for the wider world with confidence.",
        activities: [
            "Project-based studio work",
            "Pre-literacy & number games",
            "Garden tending & cooking",
            "Forest school Fridays",
        ],
        materials: [
            "Montessori sensorial materials",
            "Atelier (art studio) supplies",
            "Story stones & puppets",
            "Building & engineering kits",
        ],
    },
];

const Programs = () => (
    <>
        <PageHeader
            eyebrow="Programs"
            title="Classrooms designed around how children grow."
            intro="From the gentle rhythms of infancy to the confident independence of preschool, each room is prepared with intention."
        />

        {classrooms.map((room, i) => (
            <section
                key={room.id}
                id={room.id}
                className={`py-20 md:py-28 ${i % 2 === 1 ? "bg-muted/40 border-y border-border/60" : ""}`}
            >
                <div className="container-prose">
                    <div
                        className={`grid md:grid-cols-2 gap-12 items-center ${
                            i % 2 === 1 ? "md:[&>:first-child]:order-2" : ""
                        }`}
                    >
                        <div className="relative">
                            <div className="absolute -inset-3 bg-accent/15 rounded-[2rem] rotate-1" />
                            <img
                                src={room.img}
                                alt={room.name}
                                loading="lazy"
                                className="relative rounded-[2rem] shadow-card w-full aspect-[4/3] object-cover"
                            />
                        </div>
                        <div>
                            <p className="eyebrow mb-3">{room.age}</p>
                            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-5">
                                {room.name}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-8">{room.description}</p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-sm font-semibold mb-3 text-primary">Daily activities</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {room.activities.map((a) => (
                                            <li key={a}>· {a}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold mb-3 text-primary">Materials</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {room.materials.map((m) => (
                                            <li key={m}>· {m}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ))}
    </>
);

export default Programs;
