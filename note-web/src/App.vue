<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
@font-face {
  font-family: 'DBHelvethaicaX-55';
  src: url('./assets/DB-Helvethaica-X-v3.2.ttf')
}
#app {
  font-family: DBHelvethaicaX-55, Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
body {
  background: #f3f3f3;
}
</style>
