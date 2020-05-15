<template>
  <div id="note">
    <h1>Note</h1>
    <AddNote v-on:addNote="onAddNote($event)"></AddNote>
    <div class="status">
      <div>
        <span>{{noteLeft}} notes left</span>
      </div>
      <div>
        <span>Edit</span>
      </div>
    </div>
    <NoteItem v-for="note in notes" v-on:change="onChange($event)" :date="note.date" :id="note.id" :description="note.description" :isImportant="note.isImportant" :title="note.title" :isDone="note.isDone" :key="note.id"></NoteItem>
  </div>
</template>

<script>
import AddNote from "./AddNote.vue";
import NoteItem from "./NoteItem.vue";
export default {
  name: "Note",
  components: {
    AddNote,
    NoteItem,
  },
  data: function() {
    return {
      notes: [
        { id: 1, date:"22/01/2020", title: "Buy pearl milk tea", description: "", isImportant: false, isDone: false },
        { id: 2, date:"21/02/2020", title: "Haircut", description: "", isImportant: true, isDone: false },
        { id: 3, date:"20/03/2020", title: "Clean Room & Bathroom", description: "", isImportant: true, isDone: false },
        { id: 4, date:"19/04/2020", title: "Shop at the department store", description: "", isImportant: false, isDone: true },
        { id: 5, date:"19/05/2020", title: "Move show on friday night", description: "It's a very special day, Watched dramas and also went out to dinner as well", isImportant: false, isDone: true },
      ],
    };
  },
  methods: {
    onChange: function({id, isDone}) {
      const index = this.notes.findIndex((note) => note.id === id);
      if (index > -1) {
        this.notes[index].isDone = isDone;
      }
    },
    onAddNote: function(value) {
      console.log(value);
      this.notes.unshift(value);
    }
  },
  computed: {
    noteLeft: function() {
      return this.notes.filter((note) => note.isDone).length;
    }
  },
};
</script>

<style scoed>
#note {
  width: 80%;
  min-width: 769px;
  margin: auto;
}
#note h1 {
  font-size: 36px;
  color: #424141;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
.note-box {
  margin: auto;
  margin-bottom: 10px;
}
.status {
  display: flex;
  width: 520px;
  margin: auto;
  justify-content: space-between;
  padding: 0 10px;
  color: #bababa;
  font-size: 18px;
}
</style>
