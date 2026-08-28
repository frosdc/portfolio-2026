<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useSplitReveal } from '../composables/useSplit'
import SectionHead from './SectionHead.vue'

const root = useTemplateRef<HTMLElement>('root')
useSplitReveal(root)

const halves = [
    {
        n: 'A',
        title: 'Code',
        body: 'A full-stack developer — Laravel and MySQL underneath, React and Vue on top. The same instinct that had me taking things apart as a kid is the one that enjoys working out how a system should fit together.',
    },
    {
        n: 'B',
        title: 'Art',
        body: "Digital Artist — dark, moody digital work, made entirely on a phone. WLOP's paintings are why I care as much about light and mood in a piece as I do about whether the code behind it actually runs.",
    },
]
</script>

<template>
    <section id="info" ref="root" class="px-gutter pt-28 pb-24 md:pt-40 md:pb-32">
        <div class="line mb-10 md:mb-14" data-reveal></div>

        <div class="grid grid-cols-6 gap-gutter md:grid-cols-12">
            <SectionHead index="01" label="Info" note="Statement — 2026" />

            <div class="col-span-6 md:col-span-8 md:col-start-5">
                <h2 class="display display-lg m-0 max-w-[16ch]" data-split>
                    <span class="inline-block pb-3">Technology</span>
                    <span class="serif-accent text-4xl">
                        /technologia/
                    </span>
                    and art
                    <span class="serif-accent text-4xl">
                        /ars/
                    </span>
                    were never two
                    hobbies. <span class="inline-block pb-3">They</span>
                    were the
                    <span class="serif-accent display-lg inline-block pb-2">same one</span>.
                </h2>

                <p class="mt-10 max-w-[52ch] text-base leading-relaxed text-ink/70 md:mt-14 md:text-lg" data-split>
                    It started as sketching as a kid and taking things apart just to see how they worked.
                    It ended up as one pursuit: building things that hold together, and making sure they
                    look like somebody meant them.
                </p>

                <div class="mt-12 grid grid-cols-6 gap-gutter md:mt-20 md:grid-cols-8">
                    <article v-for="half in halves" :key="half.n"
                        class="col-span-6 border-t border-ink/15 pt-4 md:col-span-4" data-reveal>
                        <p class="placard flex justify-between text-ink/40">
                            <span class="text-ink">{{ half.title }}</span>
                            <span>({{ half.n }})</span>
                        </p>
                        <p class="mt-4 text-sm leading-relaxed text-ink/70 md:text-base">{{ half.body }}</p>
                    </article>
                </div>

            </div>
        </div>
    </section>
</template>
