<template>
  <div class="note-box">
    <div class="highlight" :class="{'isDanger': isDanger}"></div>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteBox",
  props: {
    isDanger: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
  },
};
</script>
<style scoped>
.note-box {
  width: 520px;
  /* padding: 24px 40px; */
  background: #ffffff;
  box-shadow: 0 2px 7px 0 #e8e8e8;
  min-height: 80px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
}
.highlight {
  background-color: #ffffff;
  width: 10px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.container {
  padding: 9px 24px 9px 30px;
  width: 100%;
}
.highlight.isDanger {
  background-color: #ffb0b3;
}
</style>
