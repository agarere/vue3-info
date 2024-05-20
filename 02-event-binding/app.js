const app = Vue.createApp({
  data () {
    return {
      counter: 0,
      name: ''
    }
  },
  methods: {
    add (num = 1) {
      this.counter = this.counter + num
    },

    reduce (num = 1) {
      this.counter = this.counter - num
    },

    setName (event, lastName) {
      this.name = event.target.value + ' ' + lastName
    }
  }
});

app.mount('#events')
