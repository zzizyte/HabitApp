<template>
  <div>
    <h2>Edit Habit</h2>
    <input v-model="editedHabit" :placeholder="oldHabit" />
    <button @click="editedUserHabit">Save</button>
    <button @click="$emit('cancel')">Cancel</button>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
    oldHabit: String
})
const emit = defineEmits(['save', 'cancel'])

const editedHabit = ref('')

function editedUserHabit() {
  if (editedHabit.value.trim()) {
    emit('save', editedHabit.value.trim())
    editedHabit.value = ''
  }
}
</script>
