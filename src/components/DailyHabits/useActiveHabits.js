import { useLocalStorageHabits } from '../../composables/useLocalStorage'

export function useActiveHabits() {
  const activeHabitList = useLocalStorageHabits('activeHabits', [])

  function toggleActiveHabit(habit) {
    if (!activeHabitList.value.includes(habit)) {
      activeHabitList.value = [...activeHabitList.value, habit]
    } else {
      activeHabitList.value = activeHabitList.value.filter((item) => item !== habit)
    }
  }

  return { activeHabitList, toggleActiveHabit }
}
