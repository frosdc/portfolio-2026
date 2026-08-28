<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useSplitReveal } from '../composables/useSplit'
import { ScrollSmoother, prefersReducedMotion } from '../composables/motion'
import SectionHead from './SectionHead.vue'

const root = useTemplateRef<HTMLElement>('root')
useSplitReveal(root)


const EMAIL = 'dfrosary@gmail.com'

const links = [
    { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { label: 'GitHub', value: '@frosdc', href: 'https://github.com/frosdc' },
    { label: 'LinkedIn', value: 'Fros Dela Cruz', href: 'https://www.linkedin.com/in/frosarydelacruz/' },
    {
        label: 'YouTube',
        value: '@smthrns9166',
        href: 'https://www.youtube.com/@smthrns9166',
    },
]

function toTop(e: MouseEvent) {
    e.preventDefault()
    const smoother = prefersReducedMotion() ? null : ScrollSmoother.get()
    if (smoother) smoother.scrollTo(0, true)
    else window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <footer id="contact" ref="root" class="px-gutter pt-24 pb-28 md:pt-32 md:pb-32">
        <div class="line mb-10 md:mb-14" data-reveal></div>

        <div class="grid grid-cols-6 gap-gutter md:grid-cols-12">
            <SectionHead index="05" label="Contact" note="Open to new projects" />

            <div class="col-span-6 md:col-span-8 md:col-start-5">
                <h2 class="display display-lg m-0 max-w-[14ch]" data-split>
                    Let's make <span class="serif-accent inline-block pb-3">something</span> worth <span
                        class="inline-block pb-4">looking</span> at.
                </h2>

                <dl class="mt-12 m-0 md:mt-20">
                    <div v-for="link in links" :key="link.label"
                        class="grid grid-cols-6 items-baseline gap-gutter border-t border-ink/15 py-4 last:border-b md:grid-cols-8"
                        data-reveal>
                        <dt class="placard col-span-2 text-ink/40">{{ link.label }}</dt>
                        <dd class="col-span-4 m-0 md:col-span-6">
                            <a :href="link.href" :target="link.href.startsWith('http') ? '_blank' : undefined"
                                rel="noopener noreferrer" v-magnetic="0.18"
                                class="link-wipe inline-block text-base md:text-lg" data-cursor="Open">
                                {{ link.value }} ↗
                            </a>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>


        <p class="display m-0 mt-24 w-full text-center leading-none md:mt-40 opacity-75 ft-mono"
            style="font-size: clamp(3rem, 24vw, 24rem); letter-spacing: -0.05em" data-reveal>
            FROSDC
        </p>

        <div class="rule mt-8"></div>

        <div class="mt-4 grid grid-cols-6 gap-gutter placard text-ink/40 md:grid-cols-12" data-reveal>
            <p class="col-span-3 m-0 md:col-span-4">©2026 Fros DC</p>
            <p class="col-span-3 m-0 hidden md:col-span-4 md:block md:text-center">
                Inter Tight / Instrument Serif — Vue, Vite, GSAP
            </p>
            <p class="col-span-3 m-0 text-right md:col-span-4">
                <a href="#top" class="link-wipe" data-cursor="Top" @click="toTop">Back to top ↑</a>
            </p>
        </div>
    </footer>
</template>
