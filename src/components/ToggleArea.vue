<template>
  <div>
    <div class="toggle-area">
      <button @click="changeShowTodo('all')">All</button>
      <button @click="changeShowTodo('inProgress')">In progress</button>
      <button @click="changeShowTodo('done')">Done</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ToggleArea",
  props: {
    changeShowTodo: {
      type: Function,
      default: function() {
        return;
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
