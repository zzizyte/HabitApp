<script setup>
import { computed } from 'vue'
import { useActiveHabits } from './useActiveHabits.js'
import { useHabitManager } from '../HabitManager/useHabitManager.js'

const { defaultHabitList, userHabitList } = useHabitManager()
const { activeHabitList, toggleActiveHabit } = useActiveHabits()

const DailyHabitList = computed(() => {
  const combinedList = defaultHabitList.concat(userHabitList.value)
  return combinedList.filter((item) => !activeHabitList.value.includes(item))
})
function handleHabitActivation(habit) {
  toggleActiveHabit(habit)
}
</script>
<template>
  <div>Choose a Habit to add to your daily tracker:</div>
  <div v-for="(habit, index) in DailyHabitList" :key="index">
    <p>{{ habit }}</p>
    <button type="button" @click="handleHabitActivation(habit)">Add</button>
  </div>
</template>
