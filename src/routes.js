const routes = require("express").Router();
const userController = require("./app/controllers/UserController");
const validatorMid = require("./app/middlewares/validators");

routes.post("/users", validatorMid.userCreateValidator, userController.store);
routes.get("/users", userController.index);
routes.get("/users/:id", userController.show);
routes.delete("/users/:id", userController.destroy);
routes.put("/users/:id", validatorMid.userUpdateValidor, userController.update);

routes.post("/login", userController.auth);

module.exports = routes;
