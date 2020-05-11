<template>
  <div id="todo">
    <h1>Note</h1>
    <AddTodo></AddTodo>
    3 notes left
    <TodoItem></TodoItem>
    <TodoItem :isExpire="true"></TodoItem>
    <TodoItem></TodoItem>
  </div>
</template>

<script>
import AddTodo from './AddTodo.vue';
import TodoItem from './TodoItem.vue';
export default {
  name: 'Todo',
  components: {
    AddTodo,
    TodoItem
  }
}
</script>

<style scoed>
  #todo {
    width: 80%;
    min-width: 769px;
    margin: auto;
  }
  .todo-box {
    margin: auto;
    margin-bottom: 10px;
  }
</style>
