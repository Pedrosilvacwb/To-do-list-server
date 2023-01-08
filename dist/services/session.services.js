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
exports.createSessionService = void 0;
const bcryptjs_1 = require("bcryptjs");
const data_source_1 = __importDefault(require("../data-source"));
const user_entity_1 = __importDefault(require("../entities/user.entity"));
const error_1 = require("../error");
require("dotenv");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createSessionService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = data_source_1.default.getRepository(user_entity_1.default);
    const user = yield userRepo.findOne({ where: { email: payload.email } });
    if (!user)
        throw new error_1.AppError('Email ou senha inválidos!', 403);
    const passwordMatch = yield (0, bcryptjs_1.compare)(payload.password, user.password);
    if (!passwordMatch)
        throw new error_1.AppError('Email ou senha inválidos!', 403);
    const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: '24h',
        subject: user.email,
    });
    return { token };
});
exports.createSessionService = createSessionService;
//# sourceMappingURL=session.services.js.map