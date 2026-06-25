const timelineItems = [
    {
        title: 'Desenvolvedor FullStack @ Deltasul Utilidades',
        startDate: 'Abril/2023',
        endDate: 'o momento',
        description:
            `Sou responsável pelo desenvolvimento e manutenção de sistemas Web internos, utilizando PHP, JavaScript, TailwindCSS e ORACLE SQL.
            Também sou responsável pela segurança, boas práticas e desempenho de aplicações.
            Desenvolvi integrações com sistemas terceiros, pelo uso de API's e webhooks.
            `,
    },
    {
        title: 'Instrutor de Desenvolvimento Web e Informatica Fundamental @ Senac Santa Cruz do Sul',
        startDate: 'Janeiro/2023',
        endDate: 'Março/2023',
        description:
            'Ensinei jovens de 14 a 19 anos sobre Desenvolvimento Web utilizando PHP, Javascript, Node.JS, Express e bancos de dado como MariaDB e MongoDB. Também ensinei os básicos sobre o MS Windows e o pacote Office',
    },
    {
        title: 'Curso Técnico em Informatica @ Senac Santa Cruz do Sul',
        startDate: 'Março/2020',
        endDate: 'Outubro/2022',
        description:
            'Curso aonde aprendi conceitos e pratica sobre Hardware e Software, escrevi minhas primeiras linhas de código e me apaixonei pela area de Desenvolvimento!',
    },
]

export default function Timeline() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-12">
                Experiência
            </h2>

            <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border hidden md:block" />

                <ol className="flex flex-col gap-0">
                    {timelineItems.map((item, index) => (
                        <li
                            key={index}
                            className="relative grid md:grid-cols-2 gap-6 md:gap-12 pb-12 last:pb-0"
                        >
                            <div className="absolute left-1/2 top-1 -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                                <span className="w-3 h-3 rounded-full bg-foreground ring-4 ring-background block" />
                            </div>

                            <div className="md:text-right flex flex-col gap-1 md:pr-10">
                                <div className="flex items-center gap-3 md:hidden mb-1">
                                    <span className="w-2.5 h-2.5 rounded-full bg-foreground ring-[3px] ring-background shrink-0" />
                                    <span className="text-xs text-muted-foreground font-mono">
                                        {item.startDate} — {item.endDate}
                                    </span>
                                </div>

                                <h3 className="text-base font-semibold text-foreground leading-snug text-balance">
                                    {item.title}
                                </h3>
                                <p className="text-xs font-mono text-muted-foreground hidden md:block">
                                    {item.startDate} — {item.endDate}
                                </p>
                            </div>

                            <div className="md:pl-10">
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
