// ディレクティブとデータバインディング (binding) について

// v-OO ディレクトリ

// Vue のデータを書き換えると、それに紐づいたHTML側にその変更が反映され、
// 書き換わる仕組みのこと


const app = ({
  data() {
    return {
      text: 'Hello Vue!',
    }
  }
})

Vue.createApp(app).mount('#app')