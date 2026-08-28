<script setup lang="ts">
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue'
import { gsap, EASE, isFinePointer, prefersReducedMotion } from '../composables/motion'


const enabled = isFinePointer() && !prefersReducedMotion()

const cursor = useTemplateRef<HTMLElement>('cursor')
const label = ref('')

let xTo: gsap.QuickToFunc
let yTo: gsap.QuickToFunc
let wTo: gsap.QuickToFunc
let hTo: gsap.QuickToFunc

function resize(size: number) {
    wTo(size)
    hTo(size)
}

function onMove(e: MouseEvent) {
    xTo(e.clientX)
    yTo(e.clientY)
}

function onOver(e: MouseEvent) {
    const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        '[data-cursor], a, button',
    )

    if (!target) {
        label.value = ''
        resize(10)
        cursor.value?.classList.remove('is-labelled')
        return
    }

    const text = target.dataset.cursor ?? ''
    label.value = text
    resize(text ? 76 : 34)
    cursor.value?.classList.toggle('is-labelled', Boolean(text))
}

onMounted(() => {
    if (!enabled || !cursor.value) return

    document.documentElement.classList.add('has-custom-cursor')
    gsap.set(cursor.value, { xPercent: -50, yPercent: -50 })

    xTo = gsap.quickTo(cursor.value, 'x', { duration: 0.42, ease: EASE })
    yTo = gsap.quickTo(cursor.value, 'y', { duration: 0.42, ease: EASE })
    wTo = gsap.quickTo(cursor.value, 'width', { duration: 0.5, ease: EASE })
    hTo = gsap.quickTo(cursor.value, 'height', { duration: 0.5, ease: EASE })

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
})

onUnmounted(() => {
    document.documentElement.classList.remove('has-custom-cursor')
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseover', onOver)
})
</script>

<template>
    <div v-if="enabled" ref="cursor" class="cursor" aria-hidden="true">
        <span class="cursor__label">{{ label }}</span>
    </div>
</template>
