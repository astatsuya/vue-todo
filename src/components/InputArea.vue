<template>
  <div class="input-area">
    <button @click="addTodoFromChild">ADD TASK</button>
    <button @click="$emit('removeTodo')">DELETE FINISHED TASKS</button>
    <p>
      input:
      <input v-model="childComputed" type="text" />
    </p>
    <p>task:{{ childComputed }}</p>
  </div>
</template>
<script>
export default {
  name: "InputArea",
  props: {
    newTodo: {
      type: String,
      default: function() {
        return "";
      }
    }
  },
  data: function() {
    return {
      childInput: ""
    };
  },
  computed: {
    childComputed: {
      get() {
        return this.newTodo;
      },
      set(newVal) {
        this.$emit("input", newVal);
      }
    }
  },
  methods: {
    addTodoFromChild: function() {
      this.$emit("addTodo");
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
