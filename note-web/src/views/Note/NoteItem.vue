<template>
  <NoteBox :isDanger="isImportant">
    <div id="note-item">
      <div class="checkbox-wrapper">
        <label class="checkbox-label">
          <input type="checkbox" :checked="isDone" v-model="checkbox" />
          <span class="checkbox"></span>
        </label>
      </div>
      <div class="date-wrapper">
        <p>{{ day }}</p>
        <span>{{month}} {{year}}</span>
      </div>
      <div class="detail-wrapper">
        <p :class="{ 'is-done': isDone }">{{ title }}</p>
        <span class="description" v-if="description">{{ description }}</span>
      </div>
      <div class="action-wrapper">
        <font-awesome-icon icon="trash-alt"  @click="onDelete" v-if="!isEdit" />
        <font-awesome-icon icon="pencil-alt"  @click="onEdit" v-else />
      </div>
    </div>
  </NoteBox>
</template>
<script>
import NoteBox from "./NoteBox";
import NoteService from '@/service/note.service';
import router from '@/router';
export default {
  name: "NoteItem",
  props: {
    id: Number,
    title: String,
    isDone: Boolean,
    isImportant: Boolean,
    description: String,
    date: String,
    isEdit: Boolean,
  },
  components: {
    NoteBox,
  },
  methods: {
    splitDate: function() {
      return this.date.split("/");
    },
    onDelete: function() {
      NoteService.deleteNote(this.id).then(({id}) => {
        this.$emit('delete', id);
      })
    },
    onEdit: function () {
      router.push({ path: `/edit/${this.id}`});
    }
  },
  computed: {
    day: function() {
      return this.splitDate()[0];
    },
    month: function() {
      const month = this.splitDate()[1] - 1;
      return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month]
    },
    year: function() {
      return this.splitDate()[2].slice(2);
    },
    checkbox: {
      get: function() {
        return this.isDone;
      },
      set: function(isDone) {
        NoteService.changeIsDone(this.id, isDone).then(() => {
          this.$emit("change", { id: this.id, isDone });
        })
      },
    },
  },
};
</script>
<style scoped>
#note-item {
  display: flex;
  flex-direction: row;
}
#note-item > * {
  min-height: 60px;
}
.checkbox-wrapper {
  position: relative;
  flex-basis: 40px;
}
.date-wrapper {
  padding-top: 10px;
  flex-basis: 35%;
}
.detail-wrapper {
  flex-basis: 100%;
}
.action-wrapper {
  flex-basis: 15%;
  line-height: 60px;
  text-align: right;
}
.action-wrapper > svg {
  color: #bababa;
}

input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkbox {
  position: absolute;
  top: 15px;
  left: 0;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  border: solid 2px #979797;
}
.checkbox-label:hover input ~ .checkbox {
  background-color: #979797;
}
.checkbox-label input:checked ~ .checkbox {
  background-color: #92dc5a;
  border-color: #92dc5a;
}
.checkbox:after {
  content: "";
  position: absolute;
  display: none;
}
.checkbox-label input:checked ~ .checkbox:after {
  display: block;
}
.checkbox-label .checkbox:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.date-wrapper p {
  font-size: 24px;
  color: #424141;
}
.date-wrapper span {
  font-size: 18px;
  color: #424141;
}
.detail-wrapper p {
  font-size: 24px;
  color: #424141;
  line-height: 60px;
  text-align: left;
}
.detail-wrapper p.is-done {
  text-decoration: line-through;
}
.detail-wrapper .description {
  float: left;
  text-align: left;
  font-size: 18px;
  color: #808080;
}
</style>
