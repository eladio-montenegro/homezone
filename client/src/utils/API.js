import axios from "axios";

export default {

  getParents: function() {
    return axios.get("/api/parents");
  },

  getParent: function(id) {
    return axios.get("/api/parents/" + id);
  },

  saveParentUser: function(parentData) {
    return axios.post("/api/parents", parentData);
  },

  updateParentUser: function(id, parentData) {
    return axios.put("/api/parents/"+ id, parentData);
  },
  getKids: function() {
    return axios.get("/api/kids");
  },
  getKid: function(id) {
    return axios.get("/api/kids/" + id);
  },
  saveKidUser: function(kidData) {
    return axios.post("/api/kids", kidData);
  },

  deleteKid: function(id) {
    return axios.delete("/api/kids/" + id);
  },
};
