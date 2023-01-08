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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionController = void 0;
const session_services_1 = require("../services/session.services");
const createSessionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const data = yield (0, session_services_1.createSessionService)(payload);
    return res.status(200).json(data);
});
exports.createSessionController = createSessionController;
//# sourceMappingURL=session.controller.js.map