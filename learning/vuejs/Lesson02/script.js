// Vueの読み込みと、基本的な書き方について
const app = ({
  data: function() {
    return {
      text: 'Hello Vue!',
      a: 1,
      b: ['a', 'b'],
      c: {
        name: 'front-end',
      }
    }
  }
})

Vue.createApp(app).mount('#app')