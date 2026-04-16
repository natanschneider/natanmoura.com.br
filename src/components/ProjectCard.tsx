import { ExternalLink, Github } from 'lucide-react'
import { Button } from './ui/button'

export interface Project {
    title: string
    description: string
    image: string
    href: string
    repoUrl: string
    stack: string[]
}

export function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground transition-shadow hover:shadow-md">
            <a href={project.href} className="relative block overflow-hidden">
                <div className="relative aspect-video w-full overflow-hidden">
                    <img
                        src={project.image}
                        alt={`Imagem do projeto ${project.title}`}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm">
                    <ExternalLink className="h-3.5 w-3.5 text-foreground" />
                </span>
            </a>

            <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="flex flex-1 flex-col gap-2">
                    <h3 className="font-semibold leading-snug text-foreground">
                        {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-md border border-border bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full gap-2"
                >
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github className="h-4 w-4" />
                        Repositório
                    </a>
                </Button>
            </div>
        </article>
    )
}
