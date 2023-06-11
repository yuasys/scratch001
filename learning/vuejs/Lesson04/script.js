// クラスとスタイルのバインディング（binding）について

const app = ({
  data() {
    return {
      text: 'Hello Vue!',
    }
  },
})

Vue.createApp(app).mount('#app')