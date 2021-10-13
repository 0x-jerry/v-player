<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue'
import { AudioOption } from './types'
import VProgress from './VProgress.vue'
import VControls from './VControls.vue'
import VCover from './VCover.vue'

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
  loadedRanges: [] as { start: number; end: number }[],
})

const currentAudio = computed(() => props.audios[status.idx])

const percent = computed(() => (status.duration > 0 ? status.current / status.duration : 0))

const actions = {
  switch(index: number) {
    if (index === status.idx) return false

    if (index < 0 || index >= props.audios.length) return false

    status.idx = index

    emit('update:currentPlayIndex', index)

    return true
  },
  next() {
    return actions.switch(status.idx + 1)
  },
  previous() {
    return actions.switch(status.idx - 1)
  },

  seek(time: number) {
    if (!audio.value) {
      return
    }

    audio.value.currentTime = time
    status.current = time
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

  updateProgress()
}

function updateCurrent() {
  if (!audio.value) return

  status.current = audio.value.currentTime
}

function updateProgress() {
  if (!audio.value) return

  status.loadedRanges = []

  const duration = audio.value.duration

  for (let idx = 0; idx < audio.value.seekable.length; idx++) {
    const start = audio.value.seekable.start(idx)
    const end = audio.value.seekable.end(idx)

    status.loadedRanges.push({
      start: start / duration,
      end: end / duration,
    })
  }
}

function onEnded() {
  status.paused = !actions.next()
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
      @progress="updateProgress"
      @ended="onEnded"
    ></audio>

    <v-cover
      class="v-audio-cover"
      :src="currentAudio.cover"
      :paused="status.paused"
      :reset="status.idx"
    />

    <div class="v-audio-box">
      <div class="v-audio-info" flex="~" h="full" align="items-center">
        <p class="v-audio-title">{{ currentAudio.name }}</p>
      </div>

      <div flex="~" align="items-center">
        <v-progress
          class="v-audio-progress"
          theme="#d679a2"
          :current="percent"
          :ranges="status.loadedRanges"
          @update:current="(p) => actions.seek(p * status.duration)"
        />

        <v-controls
          class="v-audio-controls"
          :paused="status.paused"
          @play="actions.toggle"
          @previous="actions.previous"
          @next="actions.next"
        />
      </div>
    </div>
  </div>
</template>

<style lang="less">
.v-audio {
  --height: 80px;
  --width: 500px;

  --cover-pad-size: 30px;
  --size: calc(var(--height) + var(--cover-pad-size) * 2);

  margin: var(--cover-pad-size);

  box-sizing: border-box;

  position: relative;
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  height: var(--height);
  width: var(--width);
  text-align: left;

  * {
    box-sizing: border-box;
    -webkit-user-drag: none;
    padding: 0;
    margin: 0;
  }

  &-cover {
    position: absolute;
    left: 0;
    width: var(--size);
    height: var(--size);
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 20px rgb(233, 233, 233);
  }

  &-box {
    padding: 2px 10px;
    padding-left: calc(var(--size) / 2 + 10px);
    margin-left: calc(var(--size) / 2);

    box-shadow: 0 0 10px #f1f1f1;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &-info {
    flex: 1;
  }

  &-progress {
    margin-right: 15px;
  }

  &-controls {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
