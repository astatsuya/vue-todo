<template>
  <div class="input-area">
    <button @click="addTaskFromChild">ADD TASK</button>
    <button @click="$emit('removeTodo')">DELETE FINISHED TASKS</button>
    <p>
      input:
      <input v-model="childInput" type="text" />
    </p>
    <p>task:{{ childInput }}</p>
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
      childInput: this.newTodo
    };
  },
  // computed: {
  //   childComputed: {
  //     get() {
  //       return this.childInput;
  //     },
  //     set(newVal) {
  //       this.$emit("input", newVal);
  //     }
  //   }
  // },
  watch: {
    // newTodo: function(oldVal) {
    //   this.childInput = oldVal;
    //   console.log(oldVal);
    // },
    childInput: function(oldval, newValue) {
      this.$emit("input", newValue);
    }
  },
  methods: {
    addTaskFromChild: function() {
      this.$emit("addTodo");
      this.childInput = "";
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
