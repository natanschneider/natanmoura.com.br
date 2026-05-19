import { createFileRoute } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/')({
    component: ArticlesIndex,
})

function ArticlesIndex() {
    const sortedPosts = [...allPosts].sort(
        (a, b) =>
            new Date(b.published).getTime() - new Date(a.published).getTime(),
    )

    return (
        <div>
            <h1>Articles</h1>
            <ul>
                {sortedPosts.map((post) => (
                    <li key={post.slug}>
                        <Link to="/articles/$slug" params={{ slug: post.slug }}>
                            <h2>{post.title}</h2>
                            <p>{post.excerpt}</p>
                            <span>{post.published}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
