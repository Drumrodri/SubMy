"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class SuscripcionController {
    index(req, res) {
        res.json({ mensaje: "Estás en suscripciones" });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Id usuario desde controller susc: ");
            console.log(req.params.idUser);
            let suscripciones = yield database_1.default.query('SELECT suscripcion.id,`fechaAlta`,`precio`,`expira`,`prueba`,`idServicio`,' +
                '`usuario_id`,`periodo`,`estado`,`nombre`,`categoria` FROM suscripcion, servicio WHERE suscripcion.idServicio = servicio.id AND usuario_id=?', [req.params.idUser]);
            res.json(suscripciones);
        });
    }
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const suscripcion = req.body;
            database_1.default.query('INSERT INTO suscripcion SET ?', [suscripcion]);
            res.json({ 'menssage': 'Suscripción insertada correctamente.' });
        });
    }
}
exports.suscripcionController = new SuscripcionController;
