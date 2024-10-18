<script setup>
import { useRouter } from 'vue-router'
import { useDateRange } from './useDateRange.js'
import { useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const { dateRange, loadPreviousWeek, loadNextWeek, selectDay, selectedYearMonth, isDisabled } =
  useDateRange()

function navigateToDate(date) {
  selectDay(date)
  router.push({ name: 'day-view', params: { date } })
}
</script>

<template>
  <main>
    <div class="title-navigation">
      <button class="dataButton" type="button" @click="loadPreviousWeek">◀</button>
      <h1>{{ selectedYearMonth }}</h1>
      <button class="dataButton" type="button" @click="loadNextWeek" :disabled="isDisabled">
        ▶
      </button>
    </div>
    <ul class="day-list">
      <li v-for="day in dateRange" :key="day.date" class="day-item">
        <span class="weekday">{{ day.weekday }}</span>
        <button
          class="day"
          :class="{ active: day.date === route.params.date }"
          @click="navigateToDate(day.date)"
        >
          {{ day.day }}
        </button>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.title-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

h1 {
  font-size: 1.5em;
}

.dataButton {
  background-color: #f0f0f0;
  border: none;
  padding: 8px;
  cursor: pointer;
  font-size: 1.2em;
}

.day-list {
  display: flex;
  gap: 12px;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin-top: 16px;
}

.day-item {
  text-align: center;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weekday {
  font-weight: bold;
  font-size: 0.9em;
  color: #666;
  margin-bottom: 4px;
}

.day {
  font-size: 1.2em;
  color: #666;
  background-color: #f0f0f0;
  border: none;
  border-radius: 12px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.day:hover {
  background-color: #e0e0e0;
}

.day-item .active {
  background-color: #e0cbff; /* Highlight color */
  color: #5e2eeb; /* Active text color */
  font-weight: bold;
  border: 2px solid #a98bff;
}

.day-item .active .weekday {
  color: #5e2eeb;
}
</style>
