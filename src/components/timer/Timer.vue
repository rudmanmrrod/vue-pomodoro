<template>
  <h2 class="time">{{minutes}}:{{seconds}}</h2>
</template>
<script>
  export default{
    name:"timer",
    props: {
      timer:{
        type: Number,
        default: 1200
      }
    },
    data (){
      return {
        timeInSeconds: 0,
      }
    },
    computed:{
      minutes() {
        const min = Math.floor(this.timeInSeconds / 60)
        return this.padString(min)
      },
      seconds() {
        const seg = Math.floor(this.timeInSeconds % 60)
        return this.padString(seg)
      }
    },
    methods:{
      startColdown(){
        let timer_obj = setInterval(() => {
          if(!this.timeInSeconds){
            clearInterval(timer_obj)
            return
          }
          this.timeInSeconds--
        },1000)
      },
      padString(value){
        return value.toString().padStart(2,'0')
      }
    },
    mounted(){
      this.timeInSeconds = this.timer
      this.startColdown()
    },
    watch:{
      timer(){
        this.timeInSeconds = this.timer
        this.startColdown()
      }
    }
  }
</script>
<style scoped>
  .time{
    font-size: 4rem;
    font-weight: bold;
  }
</style>