    export interface StackGroup {
    label: string
    items: string[]
    }

    export const stackGroups: StackGroup[] = [
    {
        label: 'Frontend',
        items: ['Blade', 'JavaScript', 'React', 'Vue', 'Alpine.js', 'Tailwind CSS', 'GSAP', 'Chart.js', 'Framer'],
    },
    { label: 'Backend', items: ['Laravel', 'MySQL'] },
    { label: 'Hardware & Embedded', items: ['Arduino Uno', 'C++'] },
    { label: 'DevOps & Hosting', items: ['Git', 'GitHub Actions', 'Vercel', 'DigitalOcean', 'Hostinger'] },
    { label: 'Tools & AI', items: ['Figma', 'VS Code', 'Cursor', 'Claude Code', 'Ollama', 'Postman'] },
    ]
