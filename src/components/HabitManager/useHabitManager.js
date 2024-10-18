import { useLocalStorageHabits } from '../../composables/useLocalStorage'

export function useHabitManager() {
  const defaultHabitList = ['Drink water', 'Exercise', 'Read a book', 'Meditate', 'Journal']

  const userHabitList = useLocalStorageHabits('userHabits', [])

  function addHabit(newHabit) {
    if (!userHabitList.value.includes(newHabit)) {
      userHabitList.value.push(newHabit)
    }
  }

  function removeHabit(habitToDelete) {
    if (userHabitList.value.includes(habitToDelete))
      userHabitList.value = userHabitList.value.filter((habit) => habit !== habitToDelete)
  }
  function editHabit(oldHabit, newHabit) {
    const index = userHabitList.value.indexOf(oldHabit)
    if (index !== -1) {
      userHabitList.value[index] = newHabit
    }
  }
  return { defaultHabitList, userHabitList, addHabit, removeHabit, editHabit }
}
