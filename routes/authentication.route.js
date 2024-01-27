const authenticationContoller = require("../app/controller/authentication.contoller");
const  checkIfExist = require("../Middleware/authMiddleware");

module.exports=(app)=>{
    app.post("/signup/user", authenticationContoller.signup);
    app.post("/login/user", authenticationContoller.login);
    app.get("/user/auth/check",authenticationContoller.checkCookie);
    app.get("/user/:id", checkIfExist, authenticationContoller.getUser);
}