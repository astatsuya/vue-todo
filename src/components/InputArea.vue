<template>
  <div class="input-area">
    <button @click="$emit('addTodo')">ADD TASK</button>
    <button @click="$emit('removeTodo')">DELETE FINISHED TASKS</button>
    <p>
      input:
      <input v-model="inputValue" type="text" />
    </p>
    <p>task:{{ inputValue }}</p>
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
  computed: {
    inputValue: {
      get() {
        return this.newTodo;
      },
      set(value) {
        this.$emit("input", value);
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
