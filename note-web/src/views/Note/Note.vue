<template>
  <div id="note">
    <h1>Note</h1>
    <AddNote v-on:addNote="onAddNote($event)"></AddNote>
    <div class="status">
      <div>
        <span>{{noteLeft}} notes left</span>
      </div>
      <div>
        <span class="btn-edit" :class="{'is-edit': isEdit}" @click="toggleClick">Edit</span>
      </div>
    </div>
    <NoteItem v-for="note in notes" :isEdit="isEdit" v-on:delete="onDelete($event)" v-on:change="onChange($event)" :date="note.date" :id="note.id" :description="note.description" :isImportant="note.isImportant" :title="note.title" :isDone="note.isDone" :key="note.id"></NoteItem>
  </div>
</template>

<script>
import AddNote from "./AddNote.vue";
import NoteItem from "./NoteItem.vue";
import NoteService  from '@/service/note.service';
export default {
  name: "Note",
  components: {
    AddNote,
    NoteItem,
  },
  data: function() {
    return {
      notes: [],
      isEdit: false,
    };
  },
  created() {
    NoteService.getNotes().then((notes) => {
      this.notes = notes;
    })
  },
  methods: {
    onChange: function({id, isDone}) {
      const index = this.notes.findIndex((note) => note.id === id);
      if (index > -1) {
        this.notes[index].isDone = isDone;
      }
    },
    onAddNote: function(value) {
      this.notes.unshift(value);
    },
    onDelete: function(id) {
      this.notes = this.notes.filter(note => note.id !== id);
    },
    toggleClick: function() {
      this.isEdit = !this.isEdit;
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
.btn-edit {
  cursor: pointer;
}
.btn-edit.is-edit {
  color: #424141;
}
</style>
