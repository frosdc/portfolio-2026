    import { ScrollSmoother, ScrollTrigger, fontsReady, prefersReducedMotion } from './motion'


    export function initSmoothScroll() {
    if (prefersReducedMotion()) return

    const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.15,
        effects: true,
        normalizeScroll: true,
        smoothTouch: false,
    })


    fontsReady().then(() => ScrollTrigger.refresh())

    return smoother
    }
