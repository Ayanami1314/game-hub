import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "c93352ea62ed4c7d9095e81593af922f" },
});

export default ApiClient;
