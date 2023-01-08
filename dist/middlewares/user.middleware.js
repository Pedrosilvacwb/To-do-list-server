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
exports.verifyUserExistsMiddleware = exports.verifyTokenMiddleware = exports.validateUserRequestDataMiddleware = void 0;
const error_1 = require("../error");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const data_source_1 = __importDefault(require("../data-source"));
const user_entity_1 = __importDefault(require("../entities/user.entity"));
const validateUserRequestDataMiddleware = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validate = yield schema.validate(req.body);
        return next();
    }
    catch (error) {
        throw new error_1.AppError(error.errors, 400);
    }
});
exports.validateUserRequestDataMiddleware = validateUserRequestDataMiddleware;
const verifyTokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        throw new error_1.AppError('Token Inválido', 401);
    }
    const tokenVerify = token.split(' ');
    return jsonwebtoken_1.default.verify(tokenVerify[1], process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            throw new error_1.AppError('Token Inválido', 401);
        }
        return next();
    });
};
exports.verifyTokenMiddleware = verifyTokenMiddleware;
const verifyUserExistsMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = data_source_1.default.getRepository(user_entity_1.default);
    const exists = yield userRepo.exist({ where: { id: req.params.id } });
    if (!exists) {
        throw new error_1.AppError('User not found!', 404);
    }
    return next();
});
exports.verifyUserExistsMiddleware = verifyUserExistsMiddleware;
//# sourceMappingURL=user.middleware.js.map