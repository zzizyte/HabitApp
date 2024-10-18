<script setup>
import { ref, watch } from 'vue'
import { useHabitManager } from './useHabitManager.js'
import AddHabitForm from './HabitActions/AddHabitForm.vue'
import EditHabitForm from './HabitActions/EditHabitForm.vue'
import DeleteHabitConfirmation from './HabitActions/DeleteHabitConfirmation.vue'

const { defaultHabitList, userHabitList, addHabit, removeHabit, editHabit } = useHabitManager()
const { addUserHabit } = useHabitManager()

const showAddForm = ref(false)
const showEditForm = ref(false)
const showDeleteConfirmation = ref(false)

const habitToEdit = ref('')
const habitToDelete = ref('')

function openAddForm() {
  showAddForm.value = true
}
function openEditForm(habit) {
  habitToEdit.value = habit
  showEditForm.value = true
}
function openDeleteConfirmation(habit) {
  habitToDelete.value = habit
  showDeleteConfirmation.value = true
}

function handleAddHabit(newHabit) {
  addHabit(newHabit)
  showAddForm.value = false
}

function handleEditHabit(newHabit) {
  editHabit(habitToEdit.value, newHabit)
  showEditForm.value = false
}

function handleDeleteConfirmation() {
  removeHabit(habitToDelete.value)
  showDeleteConfirmation.value = false
}

function handleDeleteCencelation() {
  showDeleteConfirmation.value = false
}
function handleAddFormCencelation() {
  showAddForm.value = false
}
function handleEditFormCencelation() {
  showEditForm.value = false
}
</script>

<template>
  <main>
    <div>
      <button @click="openAddForm">Add Habit</button>
      <AddHabitForm v-if="showAddForm" @add="handleAddHabit" @cancel="handleAddFormCencelation"/>
    </div>
    <div v-if="userHabitList.length">
      <div v-for="(userHabit, index) in userHabitList" :key="index">
        <div>{{ userHabit }}</div>
        <div>
          <button @click="openEditForm(userHabit)">Edit</button>
          <EditHabitForm
            v-if="habitToEdit === userHabit && showEditForm"
            :oldHabit="habitToEdit"
            @save="handleEditHabit"
            @cancel="handleEditFormCencelation"
          />
          <button @click="openDeleteConfirmation(userHabit)" @delete="handleDeleteConfirmation">
            ✖
          </button>
          <DeleteHabitConfirmation
            v-if="habitToDelete === userHabit && showDeleteConfirmation"
            @delete="handleDeleteConfirmation"
            @cancel="handleDeleteCencelation"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <p>You have no habits. To create new habit press the "Add Habit" button</p>
    </div>
  </main>
</template>
