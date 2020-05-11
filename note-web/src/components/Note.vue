<template>
  <div id="note">
    <h1>Note</h1>
    <AddNote></AddNote>
    3 notes left
    <NoteItem></NoteItem>
    <NoteItem :isExpire="true"></NoteItem>
    <NoteItem></NoteItem>
  </div>
</template>

<script>
import AddNote from './AddNote.vue';
import NoteItem from './NoteItem.vue';
export default {
  name: 'Note',
  components: {
    AddNote,
    NoteItem
  }
}
</script>

<style scoed>
  #note {
    width: 80%;
    min-width: 769px;
    margin: auto;
  }
  .note-box {
    margin: auto;
    margin-bottom: 10px;
  }
</style>
