<script setup lang="ts">
import { AudioOption } from './components/types'
import VAudio from './components/VAudio.vue'
import VVideo from './components/VVideo.vue'

const base = import.meta.env.BASE_URL

const audios: AudioOption[] = [
  {
    name: 'mp3-1',
    url: base + 'audio-1.mp3',
    cover: base + 'cover.png',
  },
  {
    name: 'mp3-2',
    url: base + 'audio-2.mp3',
    cover: base + 'cover.png',
  },
  {
    name: 'mp3-3',
    url: base + 'audio-3.mp3',
    cover: base + 'cover.png',
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

* {
  -webkit-user-drag: none;
}
</style>
