import Api from "./Api";

export default {
  entry(data) {
    return Api().post("/product/saved", data);
  },
  getAll() {
    return Api().get("/product/allproduct");
  },
  getOne(id){
    return Api().get(`/product/getone/${id}`)
  },
  getupdate(id,data){
    return Api().put(`/product/update/${id}`,data)
  },
  getdelete(id){
    return Api().delete(`/product/delete/${id}`)
  }

//   getTransaction(info) {
//     return Api().get("/order", { params: info });
//   },
//   track(id) {
//     return Api().get(`/order/track/${id}`);
//   },
//   getall(book) {
//     return Api().get("order/getall", book);
//   },
//   request(id) {
//     return Api().put(`order/getall/update`, id);
//   },
//   active(id) {
//     return Api().get(`order/getall/active`,{params:id});
//   },historyA(id) {
//     return Api().get(`order/history/agent`,{params:id});
//   },
};