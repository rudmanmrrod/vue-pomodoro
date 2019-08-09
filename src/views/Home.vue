<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="content">
      <div class="app-content">
        <h1>Pomodoro App</h1>
        <h5>Bienvenido a tú app pomodoro de productividad</h5>
        <button class="button" @click="goToPomodoro">Haz tú pomodoro</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  methods:{
    goToPomodoro(){
      this.$router.push({name:'pomodoro', params:{
        type:'work'
      }})
    }
  }
}
</script>
