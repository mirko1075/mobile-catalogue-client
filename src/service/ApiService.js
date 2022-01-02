import axios from "axios";
class ApiService {
  constructor() {
    this.phoneSource = axios.create({
      baseURL: process.env.REACT_APP_API_ROOT + "/api/v1",
      withCredentials: false
    });
  }

  getPhones = () => {
    const pr = this.phoneSource.get(`/phones`);
    return pr;
  };

  addPhone = phoneObj => {
    console.log('phoneObj :>> ', phoneObj);
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
