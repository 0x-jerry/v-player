<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { AudioOption } from './types'

const props = defineProps<{
  audios: AudioOption[]
  currentPlayIndex: number
}>()

const emit = defineEmits(['update:currentPlayIndex'])

const audio = ref<HTMLAudioElement>()

const currentAudio = computed(() => props.audios[props.currentPlayIndex])

const status = reactive({
  paused: false,
})

const actions = {
  switch(index: number) {
    if (index === props.currentPlayIndex) return

    if (index < 0 || index >= props.audios.length) return

    emit('update:currentPlayIndex', index)
  },
  next() {
    actions.switch(props.currentPlayIndex + 1)
  },
  previous() {
    actions.switch(props.currentPlayIndex - 1)
  },

  seek(time: number) {
    if (!audio.value) {
      return
    }

    if (audio.value.readyState <= 2) {
      return
    }

    audio.value.currentTime = time
  },
  async play() {
    if (!audio.value) return

    try {
      await audio.value.play()
    } catch (error) {
      //
    }
  },
  pause() {
    if (!audio.value) return

    if (audio.value.paused) return

    audio.value.pause()
  },
  volume(val: number) {
    if (!audio.value) return

    audio.value.volume = val
  },
  rate(val: number) {
    if (!audio.value) return

    audio.value.playbackRate = val
  },
}

defineExpose(actions)
</script>

<template>
  <div class="v-audio">
    <audio ref="audio" style="display: none">
      <source :src="currentAudio.url" />
    </audio>
    <div class="v-audio-cover">
      <img :src="currentAudio.url" />
    </div>
    <div class="v-audio-info">
      <p class="v-audio-title"></p>
      <div class="v-audio-progress">
        <div class="v-audio-progress__current"></div>
        <div class="v-audio-progress__loaded"></div>
      </div>
      <div class="v-audio-controls">
        <div class="v-audio-previous"></div>
        <div class="v-audio-play"></div>
        <div class="v-audio-next"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.v-audio {
  position: relative;

  &-cover {
    position: absolute;
    top: 0;
    left: 0;
  }

  &-info {
  }
}
</style>
