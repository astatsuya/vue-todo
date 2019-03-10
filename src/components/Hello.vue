<template>
  <div>
    {{ msg }}
    <InputArea />
    <ToggleArea />
    <TaskList />
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
