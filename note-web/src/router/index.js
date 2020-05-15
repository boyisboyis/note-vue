import Vue from 'vue'
import VueRouter from 'vue-router'
import Note from '../views/Note/Note.vue';
import Edit from '../views/Edit/Edit.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Note',
    component: Note
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
