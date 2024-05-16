const app = Vue.createApp({
  data () {
    return {
      goal: 'Learn Vue3!',
      goalA: 'Learn Vue3!',
      goalB: 'Build amazing apps!',
      goalC: '<h1>Build awesome apps!</h1>',
      vueLink: 'https://vuejs.org/'
    }
  },
  methods: {
    outputGoal () {
      const randNumber = Math.random()
      if (randNumber < 0.5)
        return this.goalA

      return this.goalB
    }
  }
});

app.mount('#user-goal')