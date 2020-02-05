"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SuscripcionController {
    index(req, res) {
        res.json({ mensaje: "Estás en suscripciones" });
    }
}
exports.suscripcionController = new SuscripcionController;
