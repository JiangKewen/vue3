// src/store/index.ts
import { createStore } from 'vuex'

interface ItodoItem {
  title: string
  id: number
  done: false
}

const todoList: Array<ItodoItem> = []

// state
const state = {
  todoList
}

// 创建一个新的 store 实例
const store = createStore({
  state,
  mutations: {
    ADD_TODO(state, todo: ItodoItem) {
      if (todo?.title) {
        state.todoList.push(todo)
      }
    },
    REMOVE_TODO(state, id: number) {
      const index = state.todoList.findIndex((todo) => todo.id === id)
      if (index !== -1) {
        state.todoList.splice(index, 1)
      }
    },
    UPDATE_TODO_STATUS(state, todo: ItodoItem) {
      const index = state.todoList.findIndex((item) => item.id === todo.id)
      if (index !== -1) {
        state.todoList.splice(index, 1, todo)
      }
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo)
    },
    removeTodo({ commit }, todoId) {
      commit('REMOVE_TODO', todoId)
    },
    updateTodoStatus({ commit }, todo) {
      commit('UPDATE_TODO_STATUS', todo)
    }
  }
})

export default store
