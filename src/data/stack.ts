    export interface StackGroup {
    label: string
    items: string[]
    }

export const stackGroups: StackGroup[] = [
    { 
        label: 'Languages & Frameworks', 
        items: ['JavaScript', 'React', 'Vue', 'Alpine.js', 'Laravel', 'Blade'] 
    },
    { 
        label: 'UI, Motion & Data', 
        items: ['Tailwind CSS', 'GSAP', 'Chart.js'] 
    },
    { 
        label: 'Databases & Infrastructure', 
        items: ['MySQL', 'Vercel', 'DigitalOcean', 'Hostinger'] 
    },
    { 
        label: 'Hardware & Systems', 
        items: ['C++', 'Arduino Uno'] 
    },
    { 
        label: 'DevOps & APIs', 
        items: ['Git', 'GitHub Actions', 'Postman'] 
    },
    { 
        label: 'Design & AI Tooling', 
        items: ['Figma', 'Framer', 'VS Code', 'Cursor', 'Claude Code', 'Ollama'] 
    }
]