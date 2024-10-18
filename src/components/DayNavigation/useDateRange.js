import { ref, computed } from 'vue'
import { format, subDays } from 'date-fns'

export function useDateRange() {
  const today = new Date()
  const startDay = ref(0)
  const dateRange = ref([])
  const selectedDay = ref(today)

  const generateDateRange = () => {
    const range = []
    for (let i = startDay.value; i < startDay.value + 7; i++) {
      const date = subDays(today, i)
      range.push({
        day: format(date, 'dd'),
        weekday: format(date, 'EEE'),
        date: format(date, 'yyyy-MM-dd')
      })
    }
    dateRange.value = range.reverse()
  }
  const loadPreviousWeek = () => {
    startDay.value += 7
    generateDateRange()
  }

  const loadNextWeek = () => {
    if (startDay.value >= 7) {
      startDay.value -= 7
      generateDateRange()
    }
  }

  const selectDay = (day) => {
    selectedDay.value = day
  }

  const selectedYearMonth = computed(() => {
    return format(selectedDay.value, 'MMMM yyyy')
  })

  const isDisabled = computed(() => startDay.value === 0)

  generateDateRange()

  return {
    dateRange,
    loadPreviousWeek,
    loadNextWeek,
    selectDay,
    selectedDay,
    selectedYearMonth,
    isDisabled
  }
}
