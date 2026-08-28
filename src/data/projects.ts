    import oa from '../img/oa.webp'
    import portal from '../img/portal.webp'
    import cashflow from '../img/cashflow.webp'
    import timeTracker from '../img/time-tracker.webp'
    import fd from '../img/fd-app.webp'
    import oaMobile from '../img/mobile.webp'
    import cm from '../img/cm.webp'
    import val from '../img/val.webp'
    import arms from '../img/dashboard-arms.webp'
    import sims from '../img/sims.webp'


    export interface Project {
    id: string
    name: string
    tagline: string
    description: string
    tags: string[]
    link: string
    gradient: string
    period: string
    internal?: boolean
    image?: string
    }

    export const projects: Project[] = [
    {
        id: 'one-access-ats',
        name: 'OA ATS',
        tagline: 'One Access ATS',
        description:
        'An applicant tracking system for internal hiring — moves candidates through every stage of the pipeline, from application to offer, in one shared view.',
        tags: ['Laravel', 'SQL', 'Daisy UI', 'JQuery'],
        link: '#',
        gradient: 'bg-gradient-to-br from-neutral-700 to-neutral-950',
        period: 'July 2026',
        internal: true,
        image: oa
    },
    {
        id: 'one-access-portal',
        name: 'OA Portal',
        tagline: 'The portal, on the go.',
        description:
        'A centralized portal for the OA ATS, allowing candidates to easily manage their application status, submit required documents, and track requests from a single dashboard.',
        tags: ['Laravel', 'SQL', 'Daisy UI', 'JQuery', 'Alphine.js'],
        link: '#',
        gradient: 'bg-gradient-to-br from-neutral-800 to-black',
        period: 'July 2026',
        internal: true,
        image: portal
    },
    {
        id: 'cashflow-app',
        name: 'Cashflow App',
        tagline: 'FD | Cashflow App',
        description:
        'A cash flow tracker for logging income and expenses, with on-demand PDF reports for month-end reviews.',
        tags: ['TypeScript', 'Laravel API', 'Laravel Sanctum', 'DomPDF', 'ESLint + TypeScript ESLint', 'Tailwind CSS'],
        link: '#',
        gradient: 'bg-gradient-to-br from-black to-neutral-800',
        period: 'June 2026',
        internal: true,
        image: cashflow
    },
    {
        id: 'feature-digital-time-tracker-app',
        name: 'Time Tracker App',
        tagline: 'Desktop Application',
        description:
        'A cross-platform desktop time tracker built with Electron, packaged as a native installer for both Windows and Mac.',
        tags: ['React/TypeScript', 'Laravel API', 'Electron (Win NSIS / Mac DMG)', 'Vite', 'ESLint + TypeScript ESLint'],
        link: '#',
        gradient: 'bg-gradient-to-br from-black to-neutral-800',
        period: 'February 2026',
        internal: true,
        image: timeTracker
    },
    {
        id: 'feature-digital-app',
        name: 'Feature Digital App',
        tagline: 'Scan it. Process it. Done.',
        description:
        'A progressive web app that scans documents via OCR, cross-checks data through Google APIs, and pushes real-time notifications — installable straight to a phone\'s home screen.',
        tags: ['React JS', 'Laravel API', 'Laravel Sanctum', 'Google API', 'PDF/OCR', 'ESLint', 'Tailwind CSS', 'vite-plugin-pwa', 'web-push'],
        link: '#',
        gradient: 'bg-gradient-to-br from-black to-neutral-800',
        period: 'December 2025',
        internal: true,
        image: fd
    },
    {
        id: 'one-access-mobile-website',
        name: 'OA Mobile Website',
        tagline: ' OA mobile app website',
        description:
        'A responsive promotional landing page designed to showcase the features of the OA mobile app and drive user engagement.',
        tags: ['TypeScript', 'Laravel API', 'Laravel Sanctum', 'DomPDF', 'ESLint + TypeScript ESLint', 'Tailwind CSS'],
        link: 'https://mobile.accesshealthcarestaffing.com/',
        gradient: 'bg-gradient-to-br from-black to-neutral-800',
        period: 'October 2025',
        internal: false,
        image: oaMobile
    },
    {
        id: 'voice-activated-lights',
        name: 'VA Lights',
        tagline: 'Say the word, see the light.',
        description:
        'A voice-controlled lighting rig — an Arduino Uno listens for spoken commands over an HC-05 Bluetooth link and switches the lights on or off in response.',
        tags: ['HC-05 Bluetooth Module', 'Arduino Uno', 'C++'],
        link: 'https://github.com/frosdc/Voice-Activated-Lights---Arduino',
        gradient: 'bg-gradient-to-br from-black to-neutral-800',
        period: 'May 2025',
        internal: false,
        image: val
    },
    {
        id: 'assessment-management-system',
        name: 'ARM System',
        tagline: 'Test. Score. Visualize.',
        description:
        'Built for TESDA, this system improves tracking, approval workflows, scheduling, and monitoring of assessment requests.',
        tags: ['Vanilla PHP', 'MySQL', 'Chart.js', 'JavaScript', 'BootStrap', 'HTML5', 'CSS3'],
        link: 'https://github.com/frosdc/Assessment-Request-Managament-System',
        gradient: 'bg-gradient-to-br from-black to-neutral-800',
        period: 'August 2024',
        internal: false,
        image: arms
    },
    {
        id: 'sales-inventory-management-system',
        name: 'B2B | SIM System',
        tagline: 'Stock in. Sales out.',
        description:
        'A system for tracking sales, inventory, and supplier transactions. Includes SMS notifications for supplier communications and improved accuracy.',
        tags: ['Vanilla PHP', 'MySQL', 'Chart.js', 'JavaScript', 'SMS API', 'BootStrap', 'HTML5', 'CSS3'],
        link: 'https://github.com/frosdc/Sales-and-Inventory-Management-System',
        gradient: 'bg-gradient-to-br from-black to-neutral-800',
        period: 'August 2024',
        internal: false,
        image: sims
    },
    {
        id: 'chainsaw-man-website',
        name: 'CM Website',
        tagline: 'My journey starts here.',
        description:
        'A fan-made tribute site for Chainsaw Man, and the project that first got me hooked on building for the web.',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        link: 'https://frosdc.github.io/chainsawman-web.github.io/html/home.html',
        gradient: 'bg-gradient-to-br from-black to-neutral-800',
        period: 'February 2023',
        internal: false,
        image: cm
    },
    ]
