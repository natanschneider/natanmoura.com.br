import { createFileRoute } from '@tanstack/react-router'
import Welcome from '@/components/indexSection/Welcome'

export const Route = createFileRoute('/')({ component: App })

function App() {
    return (
        <>
            <Welcome />
        </>
    )
}
