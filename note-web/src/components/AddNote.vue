<template>
  <NoteBox>
    <div id="add-note">
      <div class="icon">
        <font-awesome-icon icon="plus" />
      </div>
      <input placeholder="Add note" v-model="title" v-on:keyup.enter="onAdd" />
    </div>
  </NoteBox>
</template>
<script>
import NoteBox from "./NoteBox";
export default {
  name: "AddNote",
  data: function() {
    return {
      title: "",
    };
  },
  components: {
    NoteBox,
  },
  methods: {
    onAdd: function() {
      if (!this.title) {
        return;
      }
      this.$emit("addNote", { id: new Date().getTime(), title: this.title, date: this.getDate(), description: "", isImportant: false, isDone: false });
      this.title = "";
    },
    getDate: function() {
      const date = new Date();
      const day = (date.getDate() < 10 ? "0" : "") + date.getDate();
      const month = (date.getMonth() < 10 ? "0" : "") + date.getMonth();
      return `${day}/${month}/${date.getFullYear()}`;
    },
  },
};
</script>
<style scoped>
#add-note {
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
