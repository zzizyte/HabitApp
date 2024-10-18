<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <nav class="navbar">
      <RouterLink to="/" class="calendar-link">📅 Calendar</RouterLink>
      
      <RouterLink to="/"><h1 class="app-title">Habify</h1></RouterLink>
      <RouterLink to="/my_habits" class="nav-link">My Habits</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #f8f8f8;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.calendar-link {
  background-color: #2c3e50;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.calendar-link:hover {
  background-color: #34495e;
}

.app-title {
  font-size: 2rem;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
  margin: 0;
}

.nav-link {
  font-size: 1rem;
  color: #2c3e50;
  text-decoration: none;
  background-color: #ffffff;
  padding: 10px 20px;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.nav-link:hover {
  background-color: #2c3e50;
  color: #ffffff;
}
</style>
