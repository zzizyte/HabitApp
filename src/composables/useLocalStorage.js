import { ref, watch } from 'vue'

export function useLocalStorageHabits(key, defaultValue = []) {
  const data = ref(defaultValue)

  const storedData = localStorage.getItem(key)
  if (storedData) {
    data.value = JSON.parse(storedData)
  }

  watch(
    data,
    (newData) => {
      localStorage.setItem(key, JSON.stringify(newData))
    },
    { deep: true }
  )

  return data
}
