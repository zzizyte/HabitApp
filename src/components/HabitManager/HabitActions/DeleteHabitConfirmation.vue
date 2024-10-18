<template>
  <div>
    <h2>Delete Habit</h2>
    <p>Are you sure you want to delete this habit?</p>
    <button @click="$emit('delete')">Yes</button>
    <button @click="$emit('cancel')">Cancel</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['delete', 'cancel'])
</script>
