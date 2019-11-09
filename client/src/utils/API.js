import axios from "axios";

export default {
  // RETURN BOOKS FROM GOOGLE API
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // RETURN ALL SAVED BOOKS
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // DELETE SAVED BOK WITH BOOK ID
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // SAVE BOOK TO THE DATABASE
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
