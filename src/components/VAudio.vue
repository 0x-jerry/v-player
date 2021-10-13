<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue'
import { AudioOption } from './types'
import IconPlay from '~icons/mdi/play-circle-outline'
import IconPause from '~icons/mdi/pause-circle-outline'
import IconSkipNext from '~icons/mdi/skip-next-outline'
import IconSkipPrevious from '~icons/mdi/skip-previous-outline'

const props = defineProps<{
  audios: AudioOption[]
  currentPlayIndex?: number
}>()

const emit = defineEmits(['update:currentPlayIndex'])

const audio = ref<HTMLAudioElement>()

const status = reactive({
  idx: props.currentPlayIndex ?? 0,
  paused: true,
  duration: 0,
  current: 0,
})

const currentAudio = computed(() => props.audios[status.idx])

const percent = computed(() => (status.duration > 0 ? status.current / status.duration : 1))

const progressStyle = computed(() => {
  return `
--current: ${~~(percent.value * 100)}%;
--loaded: ${~~(percent.value * 100)}%;
  `
})

const actions = {
  switch(index: number) {
    if (index === status.idx) return

    if (index < 0 || index >= props.audios.length) return

    status.idx = index

    emit('update:currentPlayIndex', index)
  },
  next() {
    actions.switch(status.idx + 1)
  },
  previous() {
    actions.switch(status.idx - 1)
  },

  seek(time: number) {
    if (!audio.value) {
      return
    }

    status.current = time

    audio.value.currentTime = time
  },
  async play() {
    if (!audio.value) return

    status.paused = false

    try {
      await audio.value.play()
    } catch (error) {
      //
    }
  },
  pause() {
    if (!audio.value) return

    if (audio.value.paused) return

    status.paused = true

    audio.value.pause()
  },
  async toggle() {
    if (status.paused) {
      await actions.play()
    } else {
      actions.pause()
    }
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

function initAudio() {
  if (!audio.value) return
  status.duration = audio.value.duration
  status.current = 0

  if (!status.paused) {
    actions.play()
  }
}

function updateCurrent() {
  if (!audio.value) return
  status.current = audio.value.currentTime
}

watch(
  () => props.currentPlayIndex,
  () => {
    const idx = props.currentPlayIndex ?? 0
    actions.switch(idx)
  }
)

defineExpose(actions)
</script>

<template>
  <div class="v-audio" :class="{ playing: !status.paused }">
    <audio
      ref="audio"
      :src="currentAudio.url"
      style="display: none"
      @loadeddata="initAudio"
      @timeupdate="updateCurrent"
    ></audio>
    <div class="v-audio-cover">
      <img :src="currentAudio.cover" />
    </div>
    <div class="v-audio-box">
      <div class="v-audio-info">
        <p class="v-audio-title">{{ currentAudio.name }}</p>
      </div>

      <div class="v-audio-progress" :style="progressStyle">
        <div class="v-audio-progress__current"></div>
        <div class="v-audio-progress__loaded"></div>
      </div>

      <div class="v-audio-controls">
        <span class="v-audio-btn v-audio-previous" @click="actions.previous">
          <icon-skip-previous />
        </span>
        <span class="v-audio-btn v-audio-play" @click="actions.toggle">
          <icon-play v-if="status.paused" />
          <icon-pause v-else />
        </span>
        <span class="v-audio-btn v-audio-next" @click="actions.next">
          <icon-skip-next />
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.v-audio {
  --height: 60px;
  --width: 500px;

  --size: calc(var(--height) + 10px);

  box-sizing: border-box;

  position: relative;
  font-size: 16px;

  height: var(--height);
  width: var(--width);
  text-align: left;

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  &-cover {
    position: absolute;
    left: 0;
    width: var(--size);
    height: var(--size);
    overflow: hidden;
    border-radius: 100%;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 20px rgb(233, 233, 233);

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      -webkit-user-drag: none;
    }
  }

  &-box {
    margin-left: calc(var(--size) / 2);
    padding-left: calc(var(--size) / 2 + 10px);
    padding-right: 10px;
    box-shadow: 0 0 10px #f1f1f1;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &-info {
  }

  &-progress {
    --current: 10%;
    --loaded: 20%;
    --color: 229;

    position: relative;
    height: 3px;
    width: 100%;
    background: #dfdfdf;
    border-radius: 10px;
    overflow: hidden;

    &__loaded {
      position: absolute;
      // transition: width linear 0.2s;
      z-index: 1;
      height: 100%;
      width: var(--loaded);
      background: hsl(var(--color), 67%, 80%);
    }

    &__current {
      position: absolute;
      // transition: width linear 0.2s;
      z-index: 2;
      width: var(--current);
      height: 100%;
      background: hsl(var(--color), 67%, 50%);
    }
  }

  &-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 0;
  }

  &-btn {
    cursor: pointer;
    color: rgb(172, 172, 172);
    transition: colors 0.4s ease;
    display: inline-flex;

    &:hover {
      color: rgb(95, 95, 95);
    }
  }
}
</style>
