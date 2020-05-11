<template>
  <TodoBox>
    <div id="add-todo">
      <div class="icon">
        <font-awesome-icon icon="plus" />
      </div>
      <input placeholder="Add Todo" />
    </div>
  </TodoBox>
</template>
<script>
import TodoBox from "./TodoBox";
export default {
  name: "AddTodo",
  components: {
    TodoBox,
  },
};
</script>
<style scoped>
#add-todo {
  display: flex;
}
.icon {
  line-height: 62px;
  margin-right: 12px;
  color: #808080;
}
input {
  border: none;
  width: 100%;
  height: 62px;
  font-size: 1.5rem;
}
input::placeholder {
  color: #808080;
  font-size: 1.5rem;
  line-height: 62px;
}
</style>
