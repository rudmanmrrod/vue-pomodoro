import Timer from '@/components/timer/Timer.vue'

export default{
  data(){
    return {
      pomodoro:{
        work:{
          time: 1200,
          title: "Trabajando"
        },
        rest:{
          time: 200,
          title: "Descansando"
        }
      }
    }
  },
  components:{
    Timer
  },
  computed:{
    pomodoro_time(){
      return this.pomodoro[this.$route.params.type].time
    },
    title(){
      return this.pomodoro[this.$route.params.type].title
    }
  },
  methods:{
    toRest(){
      this.$router.push({name:'pomodoro', params:{
        type:'rest'
      }})
    }
  }
}