import axios from "axios";

class IndexService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`
      // withCredentials: true
    });
  }

  findAll = () => {
    return this.service.get("/all-box").then(response => response.data);
  };
  getBoxDetails = id =>
    this.service
      .get(`/filter-box/${id}/details`)
      .then(response => response.data);
  postComment = (comment, user, boxId) => {
    const { commentForm } = comment;
    return this.service
      .post("/addComment", {
        commentForm,
        user,
        boxId
      })
      .then(response => response.data);
  };
  deleteComment = comment => {
    console.log("services");
    console.log(comment);
    return this.service
      .post("/deleteComment", {
        comment
      })
      .then(response => response.data);
  };
  addfav = (box, user) => {
    console.log("services");
    console.log(box);
    console.log(user);
    return this.service
      .post("/addfav", { box, user })
      .then(response => response.data);
  };
  getSearchBox = box =>
    this.service
      .get(`/search/${box}`)
      .then(response => {
        return response.data;
      })
      .catch(error => console.log(error));
}

export default IndexService;
