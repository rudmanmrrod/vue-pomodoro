<template>
  <div>
    <h1>{{ title }}</h1>
    <Timer :timer="pomodoro_time" />
    <button class="round-button" @click="toRest">X</button>
  </div>
</template>
<script src="./Pomodoro.js"></script>
<style scoped>
  .round-button{
    border-radius: 50%;
    color:white;
    background-color: #2c3e50;
    cursor: pointer;
    padding: 5px 10px 5px 10px;
    font-size: 1rem;
  }
</style>