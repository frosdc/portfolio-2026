<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

/**
 *  12-column for the whole page.
 */
const visible = ref(false)

function onKey(e: KeyboardEvent) {
    const el = document.activeElement
    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) return
    if (e.key === 'g' || e.key === 'G') visible.value = !visible.value
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
    <div class="grid-overlay" :class="{ 'is-visible': visible }" aria-hidden="true">
        <span v-for="i in 12" :key="i"></span>
    </div>
</template>
