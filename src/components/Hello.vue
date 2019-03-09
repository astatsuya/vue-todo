<template>
  <div>
    {{ msg }}
    <InputArea
      :new-todo="newTodo"
      @input="input"
      @addTodo="addTodo"
      @removeTodo="removeTodo"
    />
    <ToggleArea @changeShowTodo="changeShowTodo" />
    <TaskList :todos="todos" :show-todo="showTodo" />
  </div>
</template>
<script>
import InputArea from "@/components/InputArea.vue";
import TaskList from "@/components/TaskList.vue";
import ToggleArea from "@/components/ToggleArea.vue";

export default {
  name: "Hello",
  components: {
    InputArea,
    TaskList,
    ToggleArea
  },
  data: function() {
    return {
      msg: "Welcome to my Todo",
      todos: [
        { id: 1, text: "vue-router", done: false },
        { id: 2, text: "vuex", done: false },
        { id: 3, text: "vue-loader", done: false },
        { id: 4, text: "awsome-vue", done: false },
        { id: 5, text: "vue-router", done: true }
      ],
      newTodo: "",
      showTodo: "all"
    };
  },
  methods: {
    input: function(child) {
      this.newTodo = child;
    },
    addTodo: function() {
      let text = this.newTodo && this.newTodo.trim();
      if (!text) {
        return;
      }
      const id = this.todos.slice(-1)[0].id + 1;
      this.todos.push({
        id: id,
        text: text,
        done: false
      });
      this.newTodo = "";
    },
    removeTodo: function() {
      for (let i = this.todos.length - 1; i >= 0; i--) {
        if (this.todos[i].done) this.todos.splice(i, 1);
      }
    },
    changeShowTodo: function(e) {
      this.showTodo = e;
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin flex-vender() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}
.task-list {
  @include flex-vender;
  flex-direction: column;
  align-items: center;
  &__item {
    width: 270px;
    text-align: left;
    $element: #{&};
    &--checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
</style>
