<script setup>
import { ref, watch } from 'vue'
import { useHabitTracker } from './useHabitTracker'
import { useRoute } from 'vue-router'
import { useActiveHabits } from './useActiveHabits'

const { activeHabitList, toggleActiveHabit } = useActiveHabits()
const route = useRoute()
const { completedHabitsByDate, toggleCompletedHabit, CompletedHabits } = useHabitTracker()
const selectedCompletedHabits = ref([])
const selectedActiveHabits = ref([])

function loadHabitsForDate(date) {
  selectedCompletedHabits.value = CompletedHabits(date)
  if (activeHabitList.value) {
    selectedActiveHabits.value = activeHabitList.value.filter(
      (habit) => !selectedCompletedHabits.value.includes(habit)
    )
  }
}
watch(
  () => route.params.date,
  (newDate) => {
    if (newDate) {
      loadHabitsForDate(newDate)
    }
  },
  { immediate: true }
)
watch(
  [completedHabitsByDate, activeHabitList],
  () => {
    const currentDate = route.params.date
    if (currentDate) {
      loadHabitsForDate(currentDate)
    }
  },
  { deep: true }
)
console.log(selectedActiveHabits.length)
console.log(selectedCompletedHabits.length)
</script>

<template>
  <main>
    <h2>Habits for {{ route.params.date }}</h2>
    <div v-if="selectedCompletedHabits.length">
      <h3>Completed Habits</h3>
      <ul>
        <li v-for="(habit, index) in selectedCompletedHabits" :key="index">
          <input
            type="checkbox"
            :checked="true"
            @change="toggleCompletedHabit(route.params.date, habit)"
          />
          {{ habit }}
        </li>
      </ul>
    </div>
    <div v-if="selectedActiveHabits.length">
      <h3>Active Habits</h3>
      <ul>
        <li v-for="(habit, index) in selectedActiveHabits" :key="index">
          <label>
            <input
              type="checkbox"
              :checked="selectedCompletedHabits.includes(habit)"
              @change="toggleCompletedHabit(route.params.date, habit)"
            />
            {{ habit }} - Is it done?
          </label>
          <button type="button" @click="toggleActiveHabit(habit)">Stop</button>
        </li>
      </ul>
    </div>

    <!-- Message if no habits are present -->
    <p v-if="!selectedActiveHabits.length && !selectedCompletedHabits.length">
      No habits for today! Click "Add new Habit" to start tracking your daily goals.
    </p>
  </main>
</template>

<!-- TO DO:
When the userCreatedHabit is deleted - remove it from the completed daily habits list
https://dribbble.com/shots/14233911-Habit-Tracker-App/attachments/5877611?mode=media
STYLE EVERYTHING -->
