import { $axios } from './axios';

export default class NoteService {
  static getNotes() {
    return $axios.get("/notes").then(({ data }) => data);
  }

  static getNote(id) {
    return $axios.get(`/notes/${id}`).then(({ data }) => data);
  }

  static addNote(title) {
    return $axios.post('/notes', { title }).then(({ data }) => data);
  }

  static updateNote(id, data) {
    return $axios.put(`/notes/${id}`, data).then(({ data }) => data);
  }

  static deleteNote(id) {
    return $axios.delete(`/notes/${id}`).then(({ data }) => data);
  }

  static changeIsDone(id, isDone) {
    return $axios.patch(`/notes/${id}/done`, { isDone }).then(({ data }) => data);
  }

}