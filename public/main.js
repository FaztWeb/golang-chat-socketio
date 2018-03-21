const socket = io();

new Vue({
  el: '#chat-app',
  created() {
    socket.on("chat message", (message) => {
      console.log(message)
      this.messages.push({
        text: message,
        date: new Date().toLocaleString()
      })
    })
  },
  data: {
    message: '',
    messages: []
  },
  methods: {
    sendMessage() {
      socket.emit("chat message", this.message)
      this.message = "";
    }
  }
})


