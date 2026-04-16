import { createFileRoute } from '@tanstack/react-router'
import Welcome from '@/components/indexSection/Welcome'
import Contact from '@/components/indexSection/Contact'

export const Route = createFileRoute('/')({ component: App })

function App() {
    return (
        <>
            <Welcome />
            <Contact />
        </>
    )
}
