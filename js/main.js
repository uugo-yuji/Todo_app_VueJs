var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function(event) {
      // newItemが空だったら（フォームに何も入力しなかったら）処理を終わらせる
      if(this.newItem == '') return;
      
      var todo = {
        item: this.newItem
      };

      this.todos.push(todo);
      // form入力後に値をクリアにする処理
      this.newItem = '';
    }
  }
})