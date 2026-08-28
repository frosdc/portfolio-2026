import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'
import { Observer } from 'gsap/Observer'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Observer, CustomEase)

/**
 * One shared ease for the whole site. Every reveal, wipe and hover uses it, so
 * unrelated elements still feel like they belong to the same object.
 */
CustomEase.create('gallery', '0.16, 1, 0.3, 1')

export const EASE = 'gallery'

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const isFinePointer = () => window.matchMedia('(pointer: fine)').matches

/** Resolves once webfonts are in, so SplitText never measures fallback metrics. */
export const fontsReady = () =>
  'fonts' in document ? document.fonts.ready : Promise.resolve()

export { gsap, ScrollTrigger, ScrollSmoother, SplitText, Observer }
