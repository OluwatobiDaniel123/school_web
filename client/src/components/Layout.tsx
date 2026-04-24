import {Link, NavLink, Outlet} from "react-router-dom";
import {useState} from "react";
import {Menu, X} from "lucide-react";
import logo from "../assets/logo.png";
const navItems = [
    {to: "/", label: "Home"},
    {to: "/about", label: "About"},
    {to: "/programs", label: "Programs"},
    {to: "/approach", label: "Approach"},
    {to: "/parents", label: "Parents"},
    {to: "/admissions", label: "Admissions"},
    {to: "/faq", label: "FAQ"},
    {to: "/contact", label: "Contact"},
];

const Layout = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
                <div className="container-prose flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src={logo} alt={logo} className="w-10 h-10 rounded-full" />

                        <span className="font-display text-xl font-semibold tracking-tight">
                            Bumblebee Early Learning Center
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === "/"}
                                className={({isActive}) =>
                                    `text-sm font-medium transition-colors hover:text-primary ${
                                        isActive ? "text-primary" : "text-muted-foreground"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <Link
                        to="/contact"
                        className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                        Schedule a visit
                    </Link>

                    <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {open && (
                    <div className="md:hidden border-t border-border bg-background">
                        <div className="container-prose py-4 flex flex-col gap-3">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    end={item.to === "/"}
                                    onClick={() => setOpen(false)}
                                    className={({isActive}) =>
                                        `py-2 text-base ${
                                            isActive ? "text-primary font-medium" : "text-muted-foreground"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            <main className="flex-1">
                <Outlet />
            </main>

            <footer className="border-t border-border/60 bg-muted/40 mt-24">
                <div className="container-prose py-16 grid md:grid-cols-4 gap-10">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <img src={logo} alt={logo} className="w-12 h-12 rounded-full" />

                            <span className="font-display text-xl font-semibold">Bumblebee Early Learning Center </span>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-sm">
                            A nurturing early learning community where children grow with curiosity, care, and
                            confidence.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Explore</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {navItems.slice(1).map((i) => (
                                <li key={i.to}>
                                    <Link to={i.to} className="hover:text-primary transition-colors">
                                        {i.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-4">Visit</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>919 Eastern Pkwy</li>
                            <li> Brooklyn NY</li>
                            <li>(929) 873-5129</li>
                            <li>harriethomas@yahoo.com</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-border/60">
                    <div className="container-prose py-6 text-xs text-muted-foreground flex justify-between">
                        <span>© {new Date().getFullYear()} Bumblebee Early Learning Center</span>
                        <span>Made with care</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
