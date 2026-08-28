<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { ScrollTrigger } from '../composables/motion'


const progress = ref(0)
let trigger: ScrollTrigger | undefined

onMounted(() => {
    trigger = ScrollTrigger.create({
        start: 0,
        end: () => ScrollTrigger.maxScroll(window),
        onUpdate: (self) => {
            progress.value = Math.round(self.progress * 100)
        },
    })
})

onUnmounted(() => trigger?.kill())
</script>

<template>
    <div class="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex items-end justify-between px-gutter py-gutter mix-blend-difference"
        aria-hidden="true">
        <p class="placard text-paper/70">©2026</p>
        <p class="placard text-paper/70 tabular-nums">
            {{ String(progress).padStart(3, '0') }}<span class="text-paper/40">/100</span>
        </p>
    </div>
</template>
