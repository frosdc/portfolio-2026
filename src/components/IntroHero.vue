<script setup lang="ts">
import { watch, useTemplateRef } from 'vue'
import { gsap, EASE, prefersReducedMotion } from '../composables/motion'


const props = defineProps<{ active: boolean }>()

const root = useTemplateRef<HTMLElement>('root')

const facts = [
  { n: '01', k: 'Based in', v: 'Manila, Philippines' },
  { n: '02', k: 'Discipline', v: 'Full-stack development' },
  { n: '03', k: 'Also', v: 'Digital painting' },
  { n: '04', k: 'Practising since', v: '2023' },
]

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
</script>

<template>
  <section id="hero" ref="root" class="relative flex min-h-svh flex-col justify-end px-gutter pt-[16svh] pb-[5.5rem]">
    <div class="grid grid-cols-6 gap-gutter md:grid-cols-12 ">
      <h1 class="display  col-span-6 m-0 md:col-span-9">
        <span class="display-lg block overflow-hidden">
          <span class="hero-word block ft-mono tracking-tighter">
            Fros Dela Cruz
          </span>
        </span>
        <span class="display block overflow-hidden pb-4 text-2xl">
          <span class="hero-word block">
            Software developer &amp; <span class="serif-accent"> digital artist.</span>
          </span>
        </span>
      </h1>
      <p
        class="hero-note col-span-6 self-end text-balance text-sm leading-relaxed text-ink/60 md:col-span-3 md:text-base">
        Code to build. Art to express. At my core, my drive is to translate ideas into digital reality.
      </p>
    </div>
    <div class="hero-cue placard mt-10 flex items-center gap-3 text-ink/40 md:mt-12">
      <span>Scroll</span>
      <span class="h-px w-16 bg-ink/25"></span>
      <span aria-hidden>↓</span>
    </div>


    <div class="hero-rule line mt-4 origin-left md:mt-6"></div>

    <dl class="mt-5 grid grid-cols-6 gap-gutter md:grid-cols-12">
      <div v-for="f in facts" :key="f.n" class="hero-meta col-span-3 md:col-span-3">
        <dt class="placard text-ink/40">({{ f.n }}) {{ f.k }}</dt>
        <dd class="mt-1.5 m-0 text-sm text-ink md:text-base">{{ f.v }}</dd>
      </div>
    </dl>

  </section>
</template>