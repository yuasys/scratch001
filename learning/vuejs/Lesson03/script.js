// ディレクティブとデータバインディング (binding) について

// v-OO ディレクトリ

// Vue のデータを書き換えると、それに紐づいたHTML側にその変更が反映され、
// 書き換わる仕組みのこと


const app = ({
  data() {
    return {
      text: '<a href="">Hello Vue!</a>',
      link: 'https://google.co.jp'
    }
  },
  //vue描画完了直後に実行
  mounted() {
    this.link = 'https://ja.vuejs.org/guide/essentials/class-and-style.html'
  }
})

Vue.createApp(app).mount('#app')