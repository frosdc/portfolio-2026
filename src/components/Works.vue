<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from 'vue'
import { gsap, ScrollTrigger, EASE, isFinePointer, prefersReducedMotion } from '../composables/motion'
import { useSplitReveal } from '../composables/useSplit'
import { projects, type Project } from '../data/projects'
import SectionHead from './SectionHead.vue'

const root = useTemplateRef<HTMLElement>('root')
const plate = useTemplateRef<HTMLElement>('plate')
useSplitReveal(root)

const openId = ref<string | null>(null)
const hovered = ref<Project | null>(null)

const years = computed(() => {
    const parsed = projects.map((p) => Number(p.period.split(' ').pop()))
    return `${Math.min(...parsed)}—${Math.max(...parsed)}`
})

const usePlate = isFinePointer() && !prefersReducedMotion()

let xTo: gsap.QuickToFunc
let yTo: gsap.QuickToFunc

function onPointerMove(e: MouseEvent) {
    xTo?.(e.clientX)
    yTo?.(e.clientY)
}

function enterRow(project: Project) {
    if (!usePlate) return
    hovered.value = project
    gsap.to(plate.value!, { autoAlpha: 1, scale: 1, duration: 0.5, ease: EASE, overwrite: true })
}

function leaveRow() {
    if (!usePlate) return
    gsap.to(plate.value!, {
        autoAlpha: 0,
        scale: 0.92,
        duration: 0.35,
        ease: EASE,
        overwrite: true,
        onComplete: () => (hovered.value = null),
    })
}

function toggle(id: string) {
    openId.value = openId.value === id ? null : id
}


function onEnter(el: Element, done: () => void) {
    const panel = el as HTMLElement

    if (prefersReducedMotion()) {
        ScrollTrigger.refresh()
        done()
        return
    }

    gsap.set(panel, { height: 'auto' })
    gsap.from(panel, {
        height: 0,
        opacity: 0,
        duration: 0.65,
        ease: EASE,
        clearProps: 'height,opacity',
        onComplete: () => {
            ScrollTrigger.refresh()
            done()
        },
    })
    gsap.from(panel.querySelectorAll('[data-panel-item]'), {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: EASE,
        stagger: 0.06,
        delay: 0.12,
    })
}

function onLeave(el: Element, done: () => void) {
    if (prefersReducedMotion()) {
        ScrollTrigger.refresh()
        done()
        return
    }

    gsap.to(el as HTMLElement, {
        height: 0,
        opacity: 0,
        duration: 0.45,
        ease: EASE,
        onComplete: () => {
            ScrollTrigger.refresh()
            done()
        },
    })
}

onMounted(() => {
    if (!usePlate || !plate.value) return
    gsap.set(plate.value, { autoAlpha: 0, scale: 0.92, xPercent: -50, yPercent: -50 })
    xTo = gsap.quickTo(plate.value, 'x', { duration: 0.7, ease: EASE })
    yTo = gsap.quickTo(plate.value, 'y', { duration: 0.7, ease: EASE })
    window.addEventListener('mousemove', onPointerMove, { passive: true })
})

onUnmounted(() => window.removeEventListener('mousemove', onPointerMove))
</script>

<template>
    <section id="works" ref="root" class="px-gutter py-24 md:py-32">
        <div class="rule mb-10 md:mb-14" data-reveal></div>

        <div class="grid grid-cols-6 gap-gutter md:grid-cols-12">
            <SectionHead index="03" label="Works" :note="`${projects.length} selected projects, ${years}`" />

            <p class="col-span-6 mt-6 max-w-[40ch] text-sm leading-relaxed text-ink/60 md:col-span-8 md:col-start-5 md:mt-0 md:text-base"
                data-split>
                A collection of software I've developed, ranging from web applications to custom digital tools.
                <br>
                Open any row to read the full note.
            </p>
        </div>

        <ul class="mt-12 m-0 list-none p-0 md:mt-20" @mouseleave="leaveRow">
            <li v-for="(project, i) in projects" :key="project.id" class="border-t border-ink/15"
                :class="{ 'border-b': i === projects.length - 1 }" data-reveal>

                <button type="button"
                    class="group grid w-full grid-cols-[2.75rem_1fr_auto] items-baseline gap-x-3 border-0 bg-transparent px-0 py-5 text-left md:grid-cols-12 md:gap-gutter md:py-7"
                    :aria-expanded="openId === project.id" :aria-controls="`panel-${project.id}`"
                    :data-cursor="openId === project.id ? 'Close' : 'Open'" @click="toggle(project.id)"
                    @mouseenter="enterRow(project)" @focus="enterRow(project)" @blur="leaveRow">
                    <span class="placard text-ink/40 md:col-span-1">
                        {{ String(i + 1).padStart(2, '0') }}
                    </span>

                    <span
                        class="display display-md block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:col-span-5 md:group-hover:translate-x-3">
                        {{ project.name }}
                    </span>

                    <span
                        class="placard col-span-2 col-start-2 mt-3 text-ink/45 md:col-span-3 md:col-start-auto md:mt-0 md:text-right">
                        {{ project.internal ? 'Internal' : 'Public' }} — {{ project.tagline }}
                    </span>

                    <span
                        class="placard col-span-2 col-start-2 mt-1.5 text-ink/45 md:col-span-2 md:col-start-auto md:mt-0 md:text-right">
                        {{ project.period }}
                    </span>
                </button>

                <Transition :css="false" @enter="onEnter" @leave="onLeave">
                    <div v-if="openId === project.id" :id="`panel-${project.id}`" class="overflow-hidden">
                        <div class="grid grid-cols-6 gap-gutter pb-10 md:grid-cols-12 md:pb-14">
                            <div class="col-span-6 md:col-span-5 md:col-start-2 aspect-4/3 overflow-hidden relative"
                                :class="project.gradient" data-panel-item>

                                <img v-if="project.image" :src="project.image" :alt="project.name"
                                    class="absolute inset-0 h-full w-full object-contain z-0" loading="lazy" />

                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none">
                                </div>

                                <span
                                    class="placard relative z-20 flex h-full items-end p-5 text-white/90 pointer-events-none">
                                    {{ project.name }}
                                </span>
                            </div>
                            <div class="col-span-6 md:col-span-5 md:col-start-8">
                                <p class="text-base leading-relaxed text-ink/75 md:text-lg" data-panel-item>
                                    {{ project.description }}
                                </p>

                                <ul class="mt-7 m-0 flex list-none flex-wrap gap-x-4 gap-y-1.5 p-0" data-panel-item>
                                    <li v-for="tag in project.tags" :key="tag" class="placard text-ink/45">
                                        {{ tag }}
                                    </li>
                                </ul>

                                <p class="mt-8" data-panel-item>
                                    <a v-if="!project.internal" :href="project.link" target="_blank"
                                        rel="noopener noreferrer" class="link-wipe placard text-ink"
                                        data-cursor="Visit">
                                        View project ↗
                                    </a>
                                    <span v-else class="placard text-ink/40">
                                        Internal — requires company login
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Transition>
            </li>
        </ul>

    </section>
</template>
