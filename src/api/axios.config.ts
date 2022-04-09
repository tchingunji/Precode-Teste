import axios from "axios";

export default axios.create({
  baseURL: "https://sheltered-meadow-49957.herokuapp.com/api",
  timeout: 2000,
});
