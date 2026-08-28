<script setup lang="ts">
import { useLocalTime } from '../composables/useLocalTime'
import { ScrollSmoother, prefersReducedMotion } from '../composables/motion'


const nav = [
    { id: 'info', label: 'Info' },
    { id: 'works', label: 'Works' },
    { id: 'art', label: 'Art' },
    { id: 'contact', label: 'Contact' },
]

const { time } = useLocalTime()

function goTo(e: MouseEvent, id: string) {
    const target = document.getElementById(id)
    if (!target) return

    e.preventDefault()
    const smoother = prefersReducedMotion() ? null : ScrollSmoother.get()

    if (smoother) smoother.scrollTo(target, true, 'top 12%')
    else target.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <header
        class="fixed inset-x-0 top-0 z-50 flex items-baseline justify-between gap-4 px-gutter py-gutter mix-blend-difference">
        <a href="#top" class="placard whitespace-nowrap text-paper" @click="goTo($event, 'top')">
            Fros DC
        </a>

        <p class="placard hidden text-paper/70 tabular-nums md:block">Manila, PH — {{ time }}</p>

        <nav class="flex gap-3.5 md:gap-6">
            <a v-for="(item, i) in nav" :key="item.id" :href="`#${item.id}`" class="placard link-wipe text-paper"
                @click="goTo($event, item.id)">
                <span class="hidden text-paper/50 md:inline">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="md:ml-1.5">{{ item.label }}</span>
            </a>
        </nav>
    </header>
</template>