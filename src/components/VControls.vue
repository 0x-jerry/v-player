<script lang="ts" setup>
import IconPlay from '~icons/mdi/play'
import IconPause from '~icons/mdi/pause'
import IconSkipNext from '~icons/mdi/skip-next'
import IconSkipPrevious from '~icons/mdi/skip-previous'

defineProps<{
  paused: boolean
}>()

defineEmits(['play', 'previous', 'next'])
</script>

<template>
  <div class="v-controls">
    <span class="v-controls-btn v-controls-previous" @click="$emit('next')">
      <icon-skip-previous />
    </span>
    <span class="v-controls-btn v-controls-play" @click="$emit('play')">
      <icon-play v-if="$props.paused" />
      <icon-pause v-else />
    </span>
    <span class="v-controls-btn v-controls-next" @click="$emit('next')">
      <icon-skip-next />
    </span>
  </div>
</template>

<style lang="less">
.v-controls {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &-btn {
    cursor: pointer;
    color: rgb(172, 172, 172);
    transition: colors 0.4s ease;
    display: inline-flex;

    &:hover {
      color: rgb(95, 95, 95);
    }
  }

  &-play {
    font-size: large;
  }
}
</style>
