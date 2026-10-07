const skillGroups = [
    {
        title: 'Frontend',
        description: 'Interfaces rápidas, acessíveis e fáceis de usar.',
        skills: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
        title: 'Backend',
        description: 'Sistemas confiáveis que sustentam boas experiências.',
        skills: ['Node.js', 'PHP', 'Laravel', 'APIs REST'],
    },
    {
        title: 'Dados & DevOps',
        description: 'Código que chega ao usuário com segurança e consistência.',
        skills: ['PostgreSQL', 'Oracle SQL', 'MinIO', 'Git', 'Docker', 'Linux', 'Nginx', 'Jenkins'],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="border-b mx-auto max-w-5xl px-6 py-16" aria-labelledby="skills-title">
            <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-neutral-400">O que eu faço</p>
                    <h2 id="skills-title" className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Skills</h2>
                </div>
                <p className="max-w-xs text-sm leading-6 text-neutral-500">Ferramentas que uso para construir experiências completas, do primeiro componente ao deploy.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border md:grid-cols-3">
                {skillGroups.map((group, index) => (
                    <article key={group.title} className="p-7 sm:p-8">
                        <span className="text-sm">0{index + 1}</span>
                        <h3 className="mt-12 text-xl font-semibold tracking-[-0.03em]">{group.title}</h3>
                        <p className="mt-3 min-h-12 text-sm leading-6 text-neutral-500">{group.description}</p>
                        <ul className="mt-8 space-y-3 border-t border-neutral-200 pt-5" aria-label={`Skills de ${group.title}`}>
                            {group.skills.map((skill) => (
                                <li key={skill} className="flex items-center justify-between text-sm font-medium">
                                    {skill}<span className="text-neutral-300">↗</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
}