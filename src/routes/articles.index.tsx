import { createFileRoute, Link } from '@tanstack/react-router'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/articles/')({
    component: ArticlesIndex,
})

function ArticlesIndex() {
    const sortedPosts = [...allPosts].sort(
        (a, b) =>
            new Date(b.published).getTime() - new Date(a.published).getTime(),
    )

    return (
        <section className="mx-auto max-w-5xl px-6 py-24">
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground text-balance py-8">
                Articles
            </h1>
            <div className="divide-y divide-neutral-300">
                {sortedPosts.map((article, index) => (
                    <article key={article.title} className="group grid gap-5 py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-8">
                        <p className="text-xs text-neutral-500">{String(index + 1).padStart(2, '0')}</p>
                        <h3 className="text-2xl font-normal leading-tight tracking-[-0.035em] sm:text-3xl">
                        <Link to="/articles/$slug" params={{ slug: article.slug }} className="outline-none transition-opacity group-hover:opacity-55 focus-visible:underline">
                            {article.title}
                        </Link>
                        </h3>
                        <div className="flex gap-5 text-sm text-neutral-600 sm:min-w-56 sm:justify-between">
                            <span>{ article.authors.join(', ') }</span>
                            <time dateTime={article.published}>{article.published}</time>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
