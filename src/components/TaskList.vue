<template>
  <div class="task-list" @click.right.prevent="openModal">
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
    <div v-show="modal">
      <div class="modal-outside" @click.self="closeModal">
        <div
          class="modal-inside"
          :style="{ top: contextMenuY, left: contextMenuX }"
        >
          <button type="button" @click="alert">click</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "TaskList",
  // data: function() {
  //   return {

  //   };
  // },
  computed: {
    ...mapState("todo", [
      "todos",
      "showTodo",
      "modal",
      "contextMenuX",
      "contextMenuY"
    ]),
    // closeAndOpen: {
    //   get() {
    //     return this.modal;
    //   },
    //   set() {
    //     this.closeModal;
    //   }
    // },
    toggle: function() {
      if (this.showTodo === "done") {
        return this.todos.filter(todos => todos.done === true);
      } else if (this.showTodo === "inProgress") {
        return this.todos.filter(todos => todos.done === false);
      } else {
        return this.todos;
      }
    }
  },
  methods: {
    ...mapMutations("todo", ["closeModal", "openModal"]),
    alert() {
      alert("click");
      this.closeModal();
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
.modal-outside {
  // background-color: pink;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.modal-inside {
  position: absolute;
  // top: 30px;
  // left: 30px;
  display: block;
  button {
    width: 200px;
    height: 200px;
  }
}
</style>
