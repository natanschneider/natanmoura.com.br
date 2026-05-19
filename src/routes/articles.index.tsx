import { createFileRoute } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { Link } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card'

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
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground text-balance">
                Articles
            </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {sortedPosts.map((post) => (
                    <Card key={post.slug}>
                        <Link to="/articles/$slug" params={{ slug: post.slug }}>
                            <CardHeader>
                                <CardTitle>{ post.title }</CardTitle>
                                <CardDescription>{ post.authors.join(', ') }</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <span>{ post.published }</span>
                            </CardContent>
                        </Link>
                    </Card>
                ))}
            </div>
        </section>
    )
}
