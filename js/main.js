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
        item: this.newItem,
        // isDoneでタスクの完了、未完了を管理する・初期値はfalse
        isDone: false
      };

      this.todos.push(todo);
      // form入力後に値をクリアにする処理
      this.newItem = '';
    },
    deleteItem: function(index) {  // 引数にindexを取る事でどのdeleteItemが呼ばれたか判別できる様にする
      // alert(index);  // debugで引数にindexを入れて番号を表示
      this.todos.splice(index, 1)
    }
  }
})