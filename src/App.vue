<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.app-content{
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}
.button{
  padding: 15px;
  background-color: #42b983;
  color:white;
  border-radius: 5px;
  cursor: pointer;
}
.button:hover{
  color: #2c3e50;
}
</style>
