import Api from "./Api";

export default {
  log(data) {
    return Api().post("/user/login", data);
  },
  create(data) {
    return Api().post("/user/signup", data);
  },adminLog(data) {
    return Api().post("/user/admin/login", data);
  },
  adminCreate(data) {
    return Api().post("/user/admin/signup", data);
  },

}