import { createFileRoute } from '@tanstack/react-router'
import Welcome from '@/components/indexSection/Welcome'
import Projects from '@/components/indexSection/Projects'
import Timeline from '@/components/indexSection/Timeline'
import Contact from '@/components/indexSection/Contact'
import Skills from '#/components/indexSection/Skills'
import Courses from '#/components/indexSection/Courses'

export const Route = createFileRoute('/')({ component: App })

function App() {
    return (
        <>
            <Welcome />
            <Skills />
            <Projects />
            <Timeline />
            <Courses />
            <Contact />
        </>
    )
}
