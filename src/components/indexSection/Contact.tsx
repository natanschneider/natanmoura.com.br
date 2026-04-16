import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react'

const contacts = [
    {
        name: 'E-mail',
        username: 'natan@email.com',
        href: 'mailto:natan@email.com',
        icon: Mail,
    },
    {
        name: 'LinkedIn',
        username: 'in/natanmoura',
        href: 'https://linkedin.com/in/natanmoura',
        icon: Linkedin,
    },
    {
        name: 'GitHub',
        username: '@natanmoura',
        href: 'https://github.com/natanmoura',
        icon: Github,
    },
    {
        name: 'WhatsApp',
        username: '+55 (11) 99999-9999',
        href: 'https://wa.me/5511999999999',
        icon: MessageCircle,
    },
]

export default function Contact() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-20" id="contact">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground text-balance">
                Contato
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                Fique à vontade para entrar em contato por qualquer um dos
                canais abaixo.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {contacts.map(({ name, username, href, icon: Icon }) => (
                    <a
                        key={name}
                        href={href}
                        target={
                            href.startsWith('mailto') ? undefined : '_blank'
                        }
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-foreground/30 hover:bg-accent"
                    >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors group-hover:border-foreground/30">
                            <Icon size={18} strokeWidth={1.5} />
                        </span>
                        <div className="flex flex-col min-w-0">
                            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                {name}
                            </span>
                            <span className="mt-0.5 truncate text-sm font-medium text-foreground">
                                {username}
                            </span>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-auto shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                        >
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                        </svg>
                    </a>
                ))}
            </div>
        </section>
    )
}
