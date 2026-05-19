import parse, {
    type DOMNode,
    type HTMLReactParserOptions,
    Element,
} from 'html-react-parser'
import { renderMarkdown } from '@/lib/markdown'
import { useMemo } from 'react'
import { Link } from '@tanstack/react-router'
import { domToReact } from 'html-react-parser'

type MarkdownProps = {
    content: string
    className?: string
}

export function Markdown({ content, className }: MarkdownProps) {
    const result = useMemo(() => renderMarkdown(content), [content])

    const options: HTMLReactParserOptions = {
        replace: (domNode) => {
            if (domNode instanceof Element) {
                if (domNode.name === 'a') {
                    const href = domNode.attribs.href
                    if (href?.startsWith('/')) {
                        return (
                            <Link to={href}>
                                {domToReact(
                                    domNode.children as DOMNode[],
                                    options,
                                )}
                            </Link>
                        )
                    }
                }

                if (domNode.name === 'img') {
                    return (
                        <img
                            {...domNode.attribs}
                            loading="lazy"
                            className="rounded-lg shadow-md"
                        />
                    )
                }
            }
        },
    }

    return <div className={className}>{parse(result.markup, options)}</div>
}
