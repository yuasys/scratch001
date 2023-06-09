// Vueの読み込みと、基本的な書き方について
const app = ({
  data() {
    return {
      text: 'Hello Vue! Hi',
      a: 1,
      b: ['a', 'b'],
      c: {
        name: 'front-end',
      }
    }
  },

  // ライフサイクルメソッドの一つ
  mounted() {
    console.log(this.text)
  }

})

Vue.createApp(app).mount('#app')