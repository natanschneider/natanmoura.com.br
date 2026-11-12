import {  ProjectCard } from "../ProjectCard"
import type {Project} from "../ProjectCard";

const projects: Project[] = [
    {
        title: 'Toskos',
        description: 'Conecte tarefas, subtarefas e documentação em um só lugar. Dê ao seu time clareza para acompanhar cada etapa — do planejamento à entrega.',
        image: '/assets/print_toskos.png',
        href: 'https://toskos.natanmoura.com.br',
        repoUrl: 'https://github.com/natanschneider/toskos/',
        stack: ['Laravel', 'ReactJS', 'TailwindCSS', 'PostgreSQL', 'MinIO'],
    },
    {
		title: 'Docos',
		description: 'Documente sua aplicação e seu banco de dados. Encontre rapidamente onde cada coluna é utilizada.',
		image: '/assets/docos.png',
		href: 'https://docos.natanmoura.com.br',
		repoUrl: 'https://github.com/natanschneider/docos/',
		stack: ['Laravel', 'ReactJS', 'TailwindCSS', 'PostgreSQL', 'MinIO'],
	},
	{
		title: 'Meu Portfolio',
		description: 'Um espaço para apresentar meus projetos, compartilhar minha trajetória e reunir informações sobre meu trabalho.',
		image: '/assets/portfolio.png',
		href: 'https://www.natanmoura.com.br',
		repoUrl: 'https://github.com/natanschneider/reactPortfolio/',
		stack: ['TailwindCSS', 'ViteJS', 'ReactJS'],
	},
	{
		title: 'Weather',
		description: 'Consulte a previsão do tempo em qualquer lugar do mundo, de forma rápida e simples.',
		image: '/assets/weather.png',
		href: 'https://weather.natanmoura.com.br',
		repoUrl: 'https://github.com/natanschneider/weather/',
		stack: ['TailwindCSS', 'ViteJS', 'ReactJS'],
	},
	{
		title: 'Campeonato',
		description: 'Acompanhe as tabelas e consulte informações dos campeonatos de futebol em um só lugar.',
		image: '/assets/TabelaBrasileiro.png',
		href: 'https://campeonato.natanmoura.com.br',
		repoUrl: 'https://github.com/natanschneider/campeonato/',
		stack: ['TailwindCSS', 'ViteJS', 'ReactJS'],
	},
	{
		title: 'Pomodorish',
		description: 'Gerencie seu tempo com ciclos Pomodoro que ajudam a manter o foco e organizar pausas ao longo do dia.',
		image: '/assets/pomodorish.png',
		href: 'https://pomodorish.natanmoura.com.br',
		repoUrl: 'https://github.com/natanschneider/pomodorish/',
		stack: ['TailwindCSS', 'ViteJS', 'ReactJS'],
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
