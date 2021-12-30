import axios from "axios";
const API_ROOT = "http://localhost:3000";
class ApiService {
  constructor() {
    this.phoneSource = axios.create({
      baseURL: API_ROOT + "/api",
      withCredentials: false
    });
  }

  getPhones = () => {
    const pr = this.phoneSource.get(`/phones`);
    return pr;
  };

  addPhone = phoneObj => {
    const pr = this.phoneSource.post("/phones", phoneObj);
    return pr;
  };

  editPhone = phoneObj => {
    const pr = this.phoneSource.put("/phones/" + phoneObj.id, phoneObj);
    return pr;
  };

  deletePhone = id => {
    const pr = this.phoneSource.delete("/phones/" + id);
    return pr;
  };
}

const apiService = new ApiService();

export default apiService;
