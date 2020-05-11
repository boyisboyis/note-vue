<template>
  <NoteBox>
    <div id="add-note">
      <div class="icon">
        <font-awesome-icon icon="plus" />
      </div>
      <input placeholder="Add note" />
    </div>
  </NoteBox>
</template>
<script>
import NoteBox from "./NoteBox";
export default {
  name: "AddNote",
  components: {
    NoteBox,
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
