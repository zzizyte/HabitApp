<script setup>
import { ref } from 'vue'
import AddDailyHabit from './AddDailyHabit.vue'
import HabitTracker from './HabitTracker.vue'

const showDailyHabits = ref(false)
</script>

<template>
  <div>
    <div>
      <HabitTracker />
      <button type="button" @click="showDailyHabits = true">Add new Habit</button>
      <button type="button" @click="showDailyHabits = false">Cancel</button>
      <AddDailyHabit v-if="showDailyHabits" />
    </div>
  </div>
</template>
