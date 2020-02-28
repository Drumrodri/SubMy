"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const servicioController_1 = require("../controllers/servicioController");
class ServicioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/servicios", servicioController_1.servicioController.get);
    }
}
const servicioRoutes = new ServicioRoutes();
exports.default = servicioRoutes.router;
