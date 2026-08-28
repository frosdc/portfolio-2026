<script setup lang="ts">
import { ref } from 'vue'
import Preloader from './components/Preloader.vue';
import CustomCursor from './components/CustomCursor.vue';
import GridOverlay from './components/GridOverlay.vue';
import Header from './components/Header.vue';
import IntroHero from './components/IntroHero.vue';
import OverlayText from './components/OverlayText.vue';
import Info from './components/Info.vue';
import Apparatus from './components/Apparatus.vue';
import Works from './components/Works.vue';
import Art from './components/Art.vue';
import Contact from './components/Contact.vue';


const ready = ref(false);
</script>

<template>
  <div class="site-ground" aria-hidden="true"></div>
  <Preloader @complete="ready = true" />
  <CustomCursor />
  <GridOverlay />
  <Header />
  <OverlayText />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>
        <IntroHero :active="ready" />
        <Info />
        <Apparatus />
        <Works />
        <Art />
      </main>
      <Contact />
    </div>
  </div>
</template>
