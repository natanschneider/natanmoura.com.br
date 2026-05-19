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
        <article>
            <header>
                <h1>{post.title}</h1>
                <p>
                    By {post.authors.join(', ')} on {post.published}
                </p>
            </header>
            <Markdown content={post.content} className="prose" />
        </article>
    )
}
