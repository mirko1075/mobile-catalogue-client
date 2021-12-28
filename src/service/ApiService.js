import axios from "axios";

class ApiService {
  constructor() {
    this.phoneSource = axios.create({
      baseURL: "/api",
      withCredentials: true,
    });
  }

  getPhones= () => {
    const pr = this.phoneSource.get(`/phones`);
    return pr;
  };
  getPhonesById= (id) => {
    const pr = this.phoneSource.get(`/phones/:${id}`);
    return pr;
  };
  addPhone = (phoneObj) => {
    const pr = this.phoneSource.post("/phones", { phoneObj });
    return pr;
  };

  editPhone = (phoneObj) => {
    const pr = this.phoneSource.put("/phones/" + phoneObj._id, {
      title: phoneObj.title,
    });
    return pr;
  };

  deletePhone = (id) => {
    const pr = this.phoneSource.delete("/phones/" + id);
    return pr;
  };
}

const apiService = new ApiService();

export default ApiService;