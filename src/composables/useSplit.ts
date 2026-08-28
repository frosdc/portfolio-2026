import { onMounted, onUnmounted, type Ref } from 'vue'
import { gsap, ScrollTrigger, SplitText, EASE, fontsReady, prefersReducedMotion } from './motion'


export function useSplitReveal(root: Ref<HTMLElement | null>, opts: { start?: string } = {}) {
  const start = opts.start ?? 'top 82%'
  let ctx: gsap.Context | undefined

  onMounted(async () => {
    if (!root.value) return

    if (prefersReducedMotion()) {
      root.value.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
        el.classList.add('is-revealed')
      })
      return
    }

    await fontsReady()
    if (!root.value) return

    const scope = root.value

    ctx = gsap.context(() => {
      scope.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
        SplitText.create(el, {
          type: 'lines',
          mask: 'lines',
          linesClass: 'line-mask',
          autoSplit: true,
          onSplit(split) {
            el.classList.add('is-split')
            return gsap.from(split.lines, {
              yPercent: 108,
              duration: 1.05,
              ease: EASE,
              stagger: 0.075,
              scrollTrigger: { trigger: el, start },
            })
          },
        })
      })

      scope.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 28,
          opacity: 0,
          duration: 1,
          ease: EASE,
          delay: Number(el.dataset.revealDelay ?? 0),
          scrollTrigger: { trigger: el, start },
        })
      })
    }, root.value)

    ScrollTrigger.refresh()
  })

  onUnmounted(() => {
    ctx?.revert()
  })
}
