<template>
  <NoteBox v-bind:isDanger="isExpire">
    <div id="note-item">
      <div class="item-date">
        <p>22</p>
        <span>May 20</span>
      </div>
      <div class="item-detail">
        <p>By pearl milk tea</p>
      </div>
      <div class="item-action">
        <i>remove</i>
      </div>
    </div>
  </NoteBox>
</template>
<script>
import NoteBox from "./NoteBox";
export default {
  name: "NoteItem",
  props: {
    isExpire: {
      type: Boolean,
      default: () => false,
    },
  },
  components: {
    NoteBox,
  },
};
</script>
<style scoped>
  #note-item {
    display: flex;
    flex-direction: row;
  }
  .item-date {
    width: 15%;
  }
  .item-detail {
    width: 70%;
  }
  .item-action {
    width: 15%;
  }
  .item-date p {
    font-size: 24px;
    color: #424141;
  }
  .item-date span {
    font-size: 18px;
    color: #424141;
  }
  .item-detail p {
    font-size: 24px;
    color: #424141;
    line-height: 60px;
  }
  .item-action {
    text-align: right;
    line-height: 60px;
  }
</style>
