import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const moduleTodo = {
  namespaced: true,
  state: {
    msg: "Welcome to my Todo",
    todos: [
      { id: 1, text: "vue-router", done: false },
      { id: 2, text: "vuex", done: false },
      { id: 3, text: "vue-loader", done: false },
      { id: 4, text: "awsome-vue", done: false },
      { id: 5, text: "vue-router", done: true }
    ],
    newTodo: "",
    showTodo: "all"
  },
  mutations: {
    input: function(state, child) {
      state.newTodo = child;
    },
    addTodo: function(state) {
      let text = state.newTodo && state.newTodo.trim();
      if (!text) {
        return;
      }
      const id = state.todos.slice(-1)[0].id + 1;
      state.todos.push({
        id: id,
        text: text,
        done: false
      });
      state.newTodo = "";
    },
    removeTodo: function(state) {
      for (let i = state.todos.length - 1; i >= 0; i--) {
        if (state.todos[i].done) state.todos.splice(i, 1);
      }
    },
    changeShowTodo(state, e) {
      state.showTodo = e;
    }
  },
  actions: {}
};

export default new Vuex.Store({
  modules: {
    todo: moduleTodo
  }
});
