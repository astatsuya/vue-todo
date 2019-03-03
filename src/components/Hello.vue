<template>
  <div>
    {{ msg }}
    <form>
      <button>ADD TASK</button>
      <button>DELETE FINISHED TASKS</button>
      <p>
        input:
        <input type="text" />
      </p>
      <p>task:</p>
    </form>
    <div class="task-list">
      <label class="task-list__item">
        <input type="checkbox" />
        <button>EDIT</button>vue-router
      </label>
      <label class="task-list__item">
        <input type="checkbox" />
        <button>EDIT</button>vuex
      </label>
      <label class="task-list__item">
        <input type="checkbox" />
        <button>EDIT</button>vue-loader
      </label>
      <label class="task-list__item--checked">
        <input type="checkbox" />
        <button>EDIT</button>awsome-vue
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hello",
  data() {
    return {
      msg: "Welcome to my Todo"
    };
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
