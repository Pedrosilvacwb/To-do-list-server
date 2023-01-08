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
exports.updateUserController = exports.deleteUserController = exports.retireveUserController = exports.createUserController = void 0;
const user_services_1 = require("../services/user.services");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const data = yield (0, user_services_1.createUserService)(payload);
    return res.status(200).json(data);
});
exports.createUserController = createUserController;
const retireveUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield (0, user_services_1.retireveUserService)(id);
    return res.status(200).json(data);
});
exports.retireveUserController = retireveUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield (0, user_services_1.deleteUserService)(id);
    return res.status(204).json(data);
});
exports.deleteUserController = deleteUserController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const payload = req.body;
    const data = yield (0, user_services_1.updateUserService)(payload, id);
    return res.status(200).json(data);
});
exports.updateUserController = updateUserController;
//# sourceMappingURL=user.controllers.js.map