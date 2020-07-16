const routes = require("express").Router();
const userController = require("./app/controllers/UserController");

routes.post("/users", userController.store);
routes.get("/users", userController.index);
routes.get("/users/:id", userController.show);
routes.delete("/users/:id", userController.destroy);

module.exports = routes;
