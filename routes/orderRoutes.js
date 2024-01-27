const orderContoller = require("../app/controller/authentication.contoller");

module.exports=(app)=>{
   
    app.get("/user/create-order", orderContoller.getUser);
    app.post("/verify/payment-status", orderContoller.verifyPaymentSuccess());
}