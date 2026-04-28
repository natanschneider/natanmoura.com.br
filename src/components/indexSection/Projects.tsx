import { type Project, ProjectCard } from "../ProjectCard"

const projects: Project[] = [
	{
		title: 'Docos',
		description: 'Documente sua aplicação e banco de dados, descubra com facilidade aonde uma coluna é usada.',
		image: '/assets/docos.png',
		href: 'https://docos.natanmoura.com.br',
		repoUrl: 'https://github.com/natanschneider/docos/',
		stack: ['Laravel', 'ReactJS', 'TailwindCSS', 'PostgreSQL', 'MinIO'],
	},
	{
		title: 'Meu Portfolio',
		description: 'Portfólio pessoal com meus projetos e informações',
		image: '/assets/portfolio.png',
		href: 'https://www.natanmoura.com.br',
		repoUrl: 'https://github.com/natanschneider/reactPortfolio/',
		stack: ['TailwindCSS', 'ViteJS', 'ReactJS'],
	},
	{
		title: 'Pomodorish',
		description: 'Aplicação Pomodoro para gerenciar seu tempo de forma eficiente',
		image: '/assets/pomodorish.png',
		href: 'https://pomodorish.natanmoura.com.br',
		repoUrl: 'https://github.com/natanschneider/pomodorish/',
		stack: ['TailwindCSS', 'ViteJS', 'ReactJS'],
	},
	{
		title: 'Campeonato Brasileiro',
		description: 'Tabela e informações do Campeonato Brasileiro Série A',
		image: '/assets/TabelaBrasileiro.png',
		href: 'https://tabelabrasileiroseriea.000webhostapp.com/',
		repoUrl: 'https://github.com/natanschneider/TabelaBrasileirao/',
		stack: ['PHP', 'CSS', 'MariaDB', 'API'],
	},
];

export default function Projects() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="mb-8 font-serif text-2xl font-semibold tracking-tight text-foreground">
                Projetos
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    )
}
