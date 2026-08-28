<script setup lang="ts">
defineProps<{ index: string; label: string; note?: string }>()
</script>

<template>
    <div class="col-span-6 md:col-span-3">
        <div class="md:sticky md:top-24">
            <p class="placard flex gap-3 text-ink/40">
                <span>({{ index }})</span>
                <span class="text-ink">{{ label }}</span>
            </p>
            <p v-if="note" class="placard mt-3 max-w-[22ch] leading-relaxed text-ink/40">{{ note }}</p>
        </div>
    </div>
</template>
