<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useSplitReveal } from '../composables/useSplit'
import { stackGroups } from '../data/stack'
import SectionHead from './SectionHead.vue'

const root = useTemplateRef<HTMLElement>('root')
useSplitReveal(root)
</script>

<template>
    <section id="apparatus" ref="root" class="px-gutter py-24 md:py-32">
        <div class="line mb-10 md:mb-14" data-reveal></div>

        <div class="grid grid-cols-6 gap-gutter md:grid-cols-12">
            <SectionHead index="02" label="Apparatus" note="Materials and tools" />

            <div class="col-span-6 md:col-span-8 md:col-start-5">

                <dl class="m-0">
                    <div v-for="(group, i) in stackGroups" :key="group.label"
                        class="grid grid-cols-6 gap-gutter border-t border-ink/15 py-5 md:grid-cols-8"
                        :class="{ 'border-b': i === stackGroups.length - 1 }" data-reveal>
                        <dt class="placard col-span-6 flex gap-3 text-ink/40 md:col-span-2">
                            <span>{{ String(i + 1).padStart(2, '0') }}</span>
                            <span class="text-ink">{{ group.label }}</span>
                        </dt>
                        <dd class="col-span-6 m-0 md:col-span-6">
                            <ul class="m-0 flex list-none flex-wrap gap-x-5 gap-y-1.5 p-0">
                                <li v-for="item in group.items" :key="item"
                                    class="text-sm text-ink/70 duration-300 opacity-75 hover:opacity-100 transition-opacity md:text-base">
                                    {{ item }}
                                </li>
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </section>
</template>
