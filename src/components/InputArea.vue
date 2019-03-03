<template>
  <div class="input-area">
    <button @click="addTodo()">ADD TASK</button>
    <button @click="removeTodo()">DELETE FINISHED TASKS</button>
    <p>
      input:
      <input v-model="newTodo" type="text" />
    </p>
    <p>task:{{ newTodo }}</p>
  </div>
</template>
<script>
export default {
  name: "InputArea",
  props: {
    addTodo: {
      type: Function,
      default: function() {
        return;
      }
    },
    removeTodo: {
      type: Function,
      default: function() {
        return;
      }
    },
    newTodo: {
      type: String,
      default: function() {
        return "";
      }
    }
  }

  // computed: {
  //   inputTodo: {
  //     get: function() {
  //       return this.newTodo;
  //     },
  //     set: function(newValue) {
  //       this.$emit("input", newValue);
  //     }
  //   }
  // }
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
