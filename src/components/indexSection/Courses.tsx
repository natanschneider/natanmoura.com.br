const coursesItems = [
    {
        title: 'Web Dev Security @ Desec Security',
        date: 'Dezembro/2025',
        hours: 18,
        description: 'Adquiri conhecimentos em desenvolvimento seguro, incluindo a proteção de aplicações contra ataques como SQL Injection, XSS e CSRF, além da aplicação de práticas de autenticação e autorização.'
    },
    {
        title: 'Java Polimorfismo: entenda herança e interfaces @ Alura',
        date: 'Abril/2023',
        hours: 16,
        description: 'Aprofundei meus conhecimentos em programação orientada a objetos com Java. Aprendi a aplicar herança, interfaces e polimorfismo para criar soluções mais flexíveis, reutilizáveis e organizadas.'
    },
    {
        title: 'HTTP: Entendendo a web por baixo dos panos @ Alura',
        date: 'Novembro/2022',
        hours: 14,
        description: 'Compreendi os fundamentos da comunicação entre clientes e servidores na web. Estudei o funcionamento de requisições e respostas HTTP, métodos, cabeçalhos e códigos de status, ampliando minha capacidade de entender e desenvolver aplicações web.'
    },
    {
        title: 'Node.js: API Rest com Express e MongoDB @ Alura',
        date: 'Novembro/2022',
        hours: 12,
        description: 'Aprendi a desenvolver APIs REST utilizando Node.js e Express, integrando-as a um banco de dados MongoDB. Também pratiquei a criação de rotas e operações para cadastrar, consultar, atualizar e remover dados, além de organizar a estrutura da aplicação.'
    },
    {
        title: 'JavaScript: programação orientada a objetos @ Alura',
        date: 'Novembro/2022',
        hours: 10,
        description: 'Aprofundei meus conhecimentos nos princípios da programação orientada a objetos com JavaScript. Aprendi a criar e utilizar classes e objetos, aplicar conceitos como encapsulamento e herança e organizar o código de forma mais reutilizável e sustentável.'
    },
    {
        title: 'Node.js: criando sua primeira biblioteca @ Alura',
        date: 'Outubro/2022',
        hours: 12,
        description: 'Desenvolvi conhecimentos fundamentais para criar e organizar uma biblioteca em Node.js. Aprendi a estruturar um projeto, trabalhar com módulos e pacotes, utilizar dependências e preparar a biblioteca para ser compartilhada e reutilizada em outras aplicações.'
    },
    {
        title: 'Curso Técnico em Informatica @ Senac Santa Cruz do Sul',
        startDate: 'Março/2020',
        endDate: 'Outubro/2022',
        date: 'Outubro/2022',
        hours: 315,
        description:
            'Curso em que adquiri conhecimentos sobre hardware e software, escrevi minhas primeiras linhas de código e descobri minha paixão pela área de desenvolvimento.',
    },
]

export default function Courses() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-12">
                Cursos
            </h2>

            <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border hidden md:block" />

                <ol className="flex flex-col gap-0">
                    {coursesItems.map((item, index) => (
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
                                    {(item.startDate && item.endDate) ? (
                                        <span className="text-xs text-muted-foreground font-mono">
                                            {item.startDate} — {item.endDate}
                                        </span>
                                    ) : null}
                                    <span className="text-xs text-muted-foreground font-mono">
                                        Emitido em {item.date}
                                    </span>
                                </div>

                                <h3 className="text-base font-semibold text-foreground leading-snug text-balance">
                                    {item.title}
                                </h3>
                                {(item.startDate && item.endDate) ? (
                                    <span className="text-xs font-mono text-muted-foreground hidden md:block">
                                        {item.startDate} — {item.endDate}
                                    </span>
                                ) : null}
                                <p className="text-xs font-mono text-muted-foreground hidden md:block">
                                    Emitido em {item.date}
                                </p>
                                <p className="text-xs font-mono text-muted-foreground hidden md:block">
                                    {item.hours} horas
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
