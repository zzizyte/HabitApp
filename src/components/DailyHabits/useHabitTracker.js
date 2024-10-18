import { useLocalStorageHabits } from '../../composables/useLocalStorage'
export function useHabitTracker() {
  const completedHabitsByDate = useLocalStorageHabits('userHabitsByDate', [])

  function toggleCompletedHabit(date, habit) {
    const dateEntry = completedHabitsByDate.value.find((entry) => entry.date === date)

    if (dateEntry) {
      if (dateEntry.habits.includes(habit)) {
        dateEntry.habits = dateEntry.habits.filter((item) => item !== habit)
      } else {
        dateEntry.habits.push(habit)
      }
    } else {
      completedHabitsByDate.value.push({ date, habits: [habit] })
    }
    completedHabitsByDate.value = [...completedHabitsByDate.value]
  }
  const CompletedHabits = (date) => {
    const dateEntry = completedHabitsByDate.value.find((entry) => entry.date === date)
    return dateEntry ? dateEntry.habits : []
  }
  return { completedHabitsByDate, toggleCompletedHabit, CompletedHabits }
}
