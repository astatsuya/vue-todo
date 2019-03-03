<template>
  <div class="task-list">
    <label
      v-for="todo in toggle"
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
</template>
<script>
export default {
  name: "TaskList",
  props: {
    todos: {
      type: Array,
      default: function() {
        return [];
      }
    },
    showTodo: {
      type: String,
      default: function() {
        return "all";
      }
    }
  },
  computed: {
    toggle: function() {
      if (this.showTodo === "all") {
        return this.todos;
      } else if (this.showTodo === "inProgress") {
        return this.todos.filter(todos => todos.done === false);
      } else {
        return this.todos.filter(todos => todos.done === true);
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
