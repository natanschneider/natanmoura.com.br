import { Mail, Linkedin, Github } from 'lucide-react'

const contacts = [
    {
        name: 'E-mail',
        href: 'mailto:natanschneider@protonmail.com',
        icon: Mail,
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/natanschneider',
        icon: Linkedin,
    },
    {
        name: 'GitHub',
        href: 'https://github.com/natanschneider',
        icon: Github,
    },
];

export default function Welcome() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-24">
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground text-balance">
                Olá, eu sou o Natãn Moura.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Sou uma pessoa com muita sede de conhecimento. Ótimo em aprender sozinho, e em trabalho em equipe. <br />
				Comecei meu aprendizado em 2020, e foi aonde me encontrei como pessoa e como profissional.
            </p>

            <div className='mt-8 flex items-center gap-3'>
                {contacts.map(({ name, href, icon: Icon }) => (
                    <a
                        key={name}
                        href={href}
                        target={
                            href.startsWith('mailto') ? undefined : '_blank'
                        }
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-foreground/30 hover:bg-accent"
                    >
                        <Icon size={18} strokeWidth={1.5} />
                    </a>
                ))}
            </div>
        </section>
    )
}
