import { onMounted, onUnmounted } from 'vue'

interface UseDragOption {
  start: (target: HTMLElement, e: MouseEvent) => void
  end: () => void
  update: (dx: number, dy: number, target: HTMLElement) => void
}

export function useDrag(opt: Partial<UseDragOption> = {}) {
  let dragging = false
  let target: HTMLElement | null = null

  const update = (e: MouseEvent) => {
    if (!dragging) return

    opt.update?.(e.movementX, e.movementY, target!)
  }

  const end = () => {
    dragging = false
    target = null
    opt.end?.()
  }

  onMounted(() => {
    window.addEventListener('mouseup', end)
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mouseup', end)
    window.removeEventListener('mousemove', update)
  })

  return function start(e: MouseEvent) {
    dragging = true
    target = e.target as HTMLDivElement

    opt.start?.(target, e)
  }
}
