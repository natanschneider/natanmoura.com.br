import parse, { domToReact } from 'html-react-parser'
import { renderMarkdown } from '@/lib/markdown'
import { useMemo } from 'react'
import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

type MarkdownProps = {
    content: string
    className?: string
}

export function Markdown({ content, className }: MarkdownProps) {
    const result = useMemo(() => renderMarkdown(content), [content])

    const options: NonNullable<Parameters<typeof parse>[1]> = {
        replace: (domNode) => {
            if ('name' in domNode && 'attribs' in domNode) {
                if (domNode.name === 'a') {
                    if (
                        'href' in domNode.attribs &&
                        domNode.attribs.href.startsWith('/')
                    ) {
                        return (
                            <Link to={domNode.attribs.href}>
                                {domToReact(
                                    domNode.children as Parameters<
                                        typeof domToReact
                                    >[0],
                                    options,
                                )}
                            </Link>
                        )
                    } else {
                        return (
                            <a href={domNode.attribs.href} className='text-slate-800 dark:text-slate-50'>
                                {domToReact(
                                    domNode.children as Parameters<
                                        typeof domToReact
                                    >[0],
                                    options,
                                )}
                            </a>
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

                if (domNode.name === 'strong') {
                    return (
                        <strong className="text-slate-800 dark:text-slate-50">
                            {domToReact(
                                domNode.children as Parameters<
                                    typeof domToReact
                                >[0],
                                options,
                            )}
                        </strong>
                    )
                }
            }
        },
    }

    return (
        <div
            className={cn(
                'prose text-base leading-relaxed tracking-tight text-balance text-slate-800 dark:text-slate-50',
                className,
            )}
        >
            {parse(result.markup, options)}
        </div>
    )
}
