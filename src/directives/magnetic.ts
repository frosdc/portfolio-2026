    import type { Directive } from 'vue'
    import { gsap, EASE, isFinePointer, prefersReducedMotion } from '../composables/motion'

    interface MagneticEl extends HTMLElement {
    _magneticCleanup?: () => void
    }

    export const magnetic: Directive<MagneticEl, number | undefined> = {
    mounted(el, binding) {
        if (!isFinePointer() || prefersReducedMotion()) return

        const strength = binding.value ?? 0.32
        const xTo = gsap.quickTo(el, 'x', { duration: 0.7, ease: EASE })
        const yTo = gsap.quickTo(el, 'y', { duration: 0.7, ease: EASE })

        const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        xTo((e.clientX - (rect.left + rect.width / 2)) * strength)
        yTo((e.clientY - (rect.top + rect.height / 2)) * strength)
        }

        const onLeave = () => {
        xTo(0)
        yTo(0)
        }

        el.addEventListener('mousemove', onMove)
        el.addEventListener('mouseleave', onLeave)

        el._magneticCleanup = () => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
        }
    },

    unmounted(el) {
        el._magneticCleanup?.()
    },
    }
