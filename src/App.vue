<script setup lang="ts">
import { ref } from 'vue'
import { AudioOption } from './components/types'
import VAudio from './components/VAudio.vue'
import VVideo from './components/VVideo.vue'

const audios: AudioOption[] = [
  {
    name: 'mp3',
    url: '/audio.mp3',
    cover: '/cover.png',
  },
]
</script>

<template>
  <br />
  <v-audio :audios="audios"></v-audio>
  <br />
  <br />
  <v-video></v-video>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
