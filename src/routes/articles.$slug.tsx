import { createFileRoute, notFound } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { Markdown } from '@/components/Markdown'

export const Route = createFileRoute('/articles/$slug')({
    loader: ({ params }) => {
        const post = allPosts.find((p) => p.slug === params.slug)
        if (!post) {
            throw notFound()
        }
        return post
    },
    component: ArticlePost,
})

function ArticlePost() {
    const post = Route.useLoaderData()

    return (
        <section className="mx-auto max-w-5xl px-6 py-24">
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground text-balance">{post.title}</h1>
            <p className="font-serif text-md tracking-tight text-foreground text-balance">By {post.authors.join(', ')} on {post.published}</p>
            <article className='mt-4 max-w-xl'>
                <Markdown content={post.content} className="prose text-base leading-relaxed tracking-tight text-balance" />
            </article>
        </section>
    )
}
