<template>
  <div>
    <h2>Add a New Habit</h2>
    <input v-model="newHabit" placeholder="Enter habit name" />
    <button @click="addUserHabit">Add Habit</button>
    <button @click="$emit('cancel')">Cancel</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add', 'cancel'])

const newHabit = ref('')

function addUserHabit() {
  if (newHabit.value.trim()) {
    emit('add', newHabit.value.trim())
    newHabit.value = ''
  }
}
</script>
