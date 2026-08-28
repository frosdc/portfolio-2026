<script setup lang="ts">
import { watch, onMounted, onBeforeUnmount, useTemplateRef } from 'vue'
import { gsap, EASE, prefersReducedMotion } from '../composables/motion'

const props = defineProps<{ active: boolean }>()
const root = useTemplateRef<HTMLElement>('root')

const facts = [
  { n: '01', k: 'Based in', v: 'Manila, Philippines' },
  { n: '02', k: 'Discipline', v: 'Full-stack development' },
  { n: '03', k: 'Also', v: 'Digital painting' },
  { n: '04', k: 'Practising since', v: '2023' },
]

// Entrance reveal — replays each time the section becomes active.
watch(
  () => props.active,
  (on) => {
    if (!on || !root.value || prefersReducedMotion()) return

    gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: EASE } })
        .from('.hero-word', { yPercent: 112, duration: 1.15, stagger: 0.07 })
        .from('.hero-rule', { scaleX: 0, duration: 1.2 }, 0.25)
        .from('.hero-note', { y: 20, opacity: 0, duration: 0.9 }, 0.45)
        .from('.hero-meta', { y: 18, opacity: 0, duration: 0.8, stagger: 0.06 }, 0.55)
        .from('.hero-cue', { opacity: 0, duration: 0.8 }, 0.8)
    }, root.value)
  },
  { immediate: true },
)

let ambientCtx: ReturnType<typeof gsap.context> | undefined

onMounted(() => {
  if (!root.value || prefersReducedMotion()) return

  ambientCtx = gsap.context(() => {
    gsap.to('.wave-line', {
      scaleY: () => gsap.utils.random(-1.3, 1.3),
      scaleX: () => gsap.utils.random(0.92, 1.08),
      opacity: () => gsap.utils.random(0.3, 0.9),
      duration: () => gsap.utils.random(9, 17),
      repeat: -1,
      repeatRefresh: true,
      yoyo: true,
      ease: 'sine.inOut',
      transformOrigin: '50% 50%',
      stagger: {
        each: 0.35,
        from: 'random',
      },
    })
  }, root.value)
})

onBeforeUnmount(() => ambientCtx?.revert())
</script>

<template>
  <section id="hero" ref="root"
    class="relative flex min-h-svh flex-col justify-end overflow-hidden px-gutter pt-[16svh] pb-[5.5rem]">

    <div
      class="pointer-events-none hero-meta absolute inset-0 z-0 flex items-center justify-center opacity-[0.12] translate-y-[35%]">
      <svg class="h-full w-full text-ink" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <g stroke="currentColor" stroke-width="1.5" fill="none">
          <path class="wave-line" d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500" />
          <path class="wave-line" d="M0,500 C200,350 300,650 500,500 C700,350 800,650 1000,500" />
          <path class="wave-line" d="M0,500 C250,450 250,550 500,500 C750,450 750,550 1000,500" />
          <path class="wave-line" d="M0,500 C150,300 350,700 500,500 C650,300 850,700 1000,500" />
        </g>
      </svg>
    </div>

    <div class="relative z-10 grid grid-cols-6 gap-gutter md:grid-cols-12">
      <h1 class="display col-span-6 m-0 md:col-span-9">
        <span class="display-lg block overflow-hidden">
          <span class="hero-word block tracking-tighter ft-mono">
            Fros Dela Cruz
          </span>
        </span>
        <span class="display block overflow-hidden pb-4">
          <span class="hero-word block text-sm leading-relaxed md:text-base">

            <span class="block md:inline">
              Software developer
              <span class="serif-accent text-xs opacity-60 md:text-sm">/programmatōrum excōgitātor/</span>
              <span class="hidden md:inline">&amp;</span>
            </span>
            <span class="block mt-1 md:mt-0 md:inline">
              <span class="md:hidden">&amp;</span> digital artist
              <span class="serif-accent text-xs opacity-60 md:text-sm">/artifex digitalis/</span>
            </span>

          </span>
        </span>
      </h1>
      <p
        class="hero-note col-span-6 self-end text-balance text-sm leading-relaxed text-ink/60 md:col-span-3 md:text-base">
        Code to build. Art to express. At my core, my drive is to translate ideas into digital reality.
      </p>
    </div>

    <div class="hero-cue placard relative z-10 mt-10 flex items-center gap-3 text-ink/40 md:mt-12">
      <span>Scroll</span>
      <span class="h-px w-16 bg-ink/25"></span>
      <span aria-hidden>↓</span>
    </div>

    <!-- <div class="hero-rule line relative z-10 mt-4 origin-left md:mt-6"></div> -->

    <dl class="relative z-10 mt-5 grid grid-cols-6 gap-gutter md:grid-cols-12">
      <div v-for="f in facts" :key="f.n" class="hero-meta col-span-3 md:col-span-3">
        <dt class="placard text-ink/40">({{ f.n }}) {{ f.k }}</dt>
        <dd class="mt-1.5 m-0 text-sm text-ink md:text-base">{{ f.v }}</dd>
      </div>
    </dl>

  </section>
</template>