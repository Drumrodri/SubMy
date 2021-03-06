"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const suscripcionController_1 = require("../controllers/suscripcionController");
class SuscripcionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/suscripciones/:idUser", suscripcionController_1.suscripcionController.get);
        this.router.post("/suscripciones/crear", suscripcionController_1.suscripcionController.save);
    }
}
const suscripcionRoutes = new SuscripcionRoutes();
exports.default = suscripcionRoutes.router;
