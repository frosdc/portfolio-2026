<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useSplitReveal } from '../composables/useSplit'
import { artPieces } from '../data/art'
import SectionHead from './SectionHead.vue'

const root = useTemplateRef<HTMLElement>('root')
useSplitReveal(root)


const hang = [
    { span: 'md:col-span-5 md:col-start-2', ratio: 'aspect-[3/4]', speed: '1.06' },
    { span: 'md:col-span-4 md:col-start-8', ratio: 'aspect-[4/5]', speed: '0.92' },
    { span: 'md:col-span-4 md:col-start-1', ratio: 'aspect-square', speed: '0.96' },
    { span: 'md:col-span-6 md:col-start-6', ratio: 'aspect-[4/3]', speed: '1.08' },
    { span: 'md:col-span-5 md:col-start-3', ratio: 'aspect-[3/4]', speed: '0.94' },
    { span: 'md:col-span-4 md:col-start-9', ratio: 'aspect-[4/5]', speed: '1.04' },
]
</script>

<template>
    <section id="art" ref="root" class="px-gutter py-24 md:py-32">
        <div class="line mb-10 md:mb-14" data-reveal></div>

        <div class="grid grid-cols-6 gap-gutter md:grid-cols-12">
            <SectionHead index="04" label="Art" note="The hang — six works" />

            <div class="col-span-6 md:col-span-8 md:col-start-5">
                <h2 class="display display-lg m-0 max-w-[12ch]" data-split>
                    <span class="serif-accent text-5xl">/ars/</span>
                </h2>
                <p class="mt-8 max-w-[46ch] text-sm leading-relaxed text-ink/65 md:text-base" data-split>
                    Anime-style sketches, drawn entirely on a phone. WLOP is my absolute favorite artist, and
                    his work constantly inspires me.
                </p>
            </div>
        </div>

        <div class="mt-16 grid grid-cols-6 gap-gutter md:mt-32 md:grid-cols-12 md:gap-y-32">
            <figure v-for="(piece, i) in artPieces" :key="piece.id" class="col-span-6 m-0"
                :class="hang[i % hang.length].span" :data-speed="hang[i % hang.length].speed">
                <div class="group relative w-full overflow-hidden bg-[#ecebe7]" :class="hang[i % hang.length].ratio"
                    data-cursor="Viewing" data-reveal>
                    <img v-if="piece.image" :src="piece.image" :alt="piece.caption"
                        class="absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] grayscale group-hover:grayscale-0 group-hover:scale-[1.04]"
                        loading="lazy" />
                    <div v-else
                        class="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                        :class="piece.gradient"></div>
                </div>

                <figcaption class="mt-4 flex items-baseline justify-between gap-4 border-t border-ink/15 pt-3"
                    data-reveal>
                    <span class="placard flex gap-3">
                        <span class="text-ink/40">({{ String(i + 1).padStart(2, '0') }})</span>
                        <span class="text-ink">{{ piece.caption }}</span>
                    </span>
                    <span class="placard text-right text-ink/40">{{ piece.year }}</span>
                </figcaption>
                <p class="placard mt-2 text-ink/40">{{ piece.medium }}</p>
            </figure>
        </div>

        <p class="mt-16 md:mt-28" data-reveal>
            <a href="https://www.youtube.com/@smthrns9166" target="_blank" rel="noopener noreferrer" v-magnetic="0.22"
                class="link-wipe display text-3xl inline-block" data-cursor="Watch">
                More on YouTube ↗
            </a>
        </p>
    </section>
</template>
