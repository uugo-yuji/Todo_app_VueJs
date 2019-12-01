var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function(event) {
      var todo = {
        item: this.newItem
      };

      this.todos.push(todo);
      // form入力後に値をクリアにする処理
      this.newItem = '';
    }
  }
})