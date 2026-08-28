import { onMounted, onUnmounted, ref } from 'vue'

/** Live wall clock for the header. */
export function useLocalTime(timeZone = 'Asia/Manila') {
  const time = ref('--:--:--')
  let id: number

  const format = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  const tick = () => {
    time.value = format.format(new Date())
  }

  onMounted(() => {
    tick()
    id = window.setInterval(tick, 1000)
  })

  onUnmounted(() => clearInterval(id))

  return { time }
}
