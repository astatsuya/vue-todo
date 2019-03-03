<template>
  <div>
    {{ msg }}
    <div>
      <button @click="addTodo()">ADD TASK</button>
      <button @click="removeTodo()">DELETE FINISHED TASKS</button>
      <p>
        input:
        <input v-model="newTodo" type="text" />
      </p>
      <p>task:{{ newTodo }}</p>
    </div>
    <div class="task-list">
      <label
        v-for="todo in todos"
        :key="todo.id"
        class="task-list__item"
        :class="{ 'task-list__item--checked': todo.done }"
      >
        <input v-model="todo.done" type="checkbox" />
        <input v-model="todo.editing" type="checkbox" />
        <input
          v-if="todo.editing"
          v-model="todo.text"
          @keyup.enter="todo.editing = !todo.editing"
        />
        <span v-else>{{ todo.text }}</span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hello",
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
      newTodo: ""
    };
  },
  methods: {
    addTodo: function() {
      let text = this.newTodo && this.newTodo.trim();
      if (!text) {
        return;
      }
      this.todos.push({
        text: text,
        done: false
      });
      this.newTodo = "";
    },
    removeTodo: function() {
      for (let i = this.todos.length - 1; i >= 0; i--) {
        if (this.todos[i].done) this.todos.splice(i, 1);
      }
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
