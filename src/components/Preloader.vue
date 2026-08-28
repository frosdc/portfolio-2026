<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'
import { gsap, EASE, ScrollSmoother, fontsReady, prefersReducedMotion } from '../composables/motion'


const emit = defineEmits<{ complete: [] }>()

const root = useTemplateRef<HTMLElement>('root')
const count = ref(0)
const gone = ref(false)

onMounted(async () => {
    if (prefersReducedMotion()) {
        gone.value = true
        emit('complete')
        return
    }

    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)

    await fontsReady()


    const smoother = ScrollSmoother.get()
    smoother?.paused(true)
    smoother?.scrollTo(0)

    gsap
        .timeline({
            onComplete() {
                gone.value = true
                document.body.style.overflow = ''
                smoother?.paused(false)
            },
        })
        .to(count, { value: 100, duration: 1.6, ease: 'power2.inOut', roundProps: 'value' })
        .from('.preloader__word', { yPercent: 110, duration: 1, ease: EASE, stagger: 0.08 }, 0)
        .from('.preloader__rule', { scaleX: 0, duration: 1.4, ease: EASE }, 0)
        .to('.preloader__line', { yPercent: -110, duration: 0.8, ease: EASE, stagger: 0.06 }, '+=0.15')
        .to(
            root.value!,
            {
                yPercent: -100,
                duration: 1.1,
                ease: EASE,
                onStart: () => emit('complete'),
            },
            '-=0.5',
        )
})

const padded = () => String(count.value).padStart(3, '0')
</script>

<template>
    <div v-if="!gone" ref="root" class="preloader">
        <div class="preloader__line placard flex items-baseline justify-between">
            <span>Fros DC — Portfolio 2026</span>
            <span class="tabular-nums">{{ padded() }}</span>
        </div>

        <div class="preloader__rule rule my-4 origin-left"></div>

        <h1 class="preloader__line display display-lg m-0">
            <span class="block overflow-hidden"><span class="preloader__word block"></span></span>
            <span class="block overflow-hidden"><span class="preloader__word serif-accent block">/fros/</span></span>
        </h1>
    </div>
</template>
