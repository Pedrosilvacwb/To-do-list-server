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
exports.deleteUserService = exports.updateUserService = exports.retireveUserService = exports.createUserService = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const user_entity_1 = __importDefault(require("../entities/user.entity"));
const error_1 = require("../error");
const user_schemas_1 = require("../schemas/user.schemas");
const createUserService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = data_source_1.default.getRepository(user_entity_1.default);
    const user = yield userRepo.findOne({ where: { email: payload.email } });
    if (user)
        throw new error_1.AppError('Email já cadastrado!');
    const newUser = userRepo.create(Object.assign({}, payload));
    yield userRepo.save(newUser);
    const userDisplay = yield user_schemas_1.userResponseSchema.validate(newUser, {
        stripUnknown: true,
    });
    return userDisplay;
});
exports.createUserService = createUserService;
const retireveUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = data_source_1.default.getRepository(user_entity_1.default);
    const user = yield userRepo.findOne({
        where: { id: id },
        relations: { activities: true },
    });
    if (!user)
        throw new error_1.AppError('Usuário não encontrado!', 404);
    const userDisplay = user_schemas_1.userResponseSchema.validate(user, {
        stripUnknown: true,
    });
    return userDisplay;
});
exports.retireveUserService = retireveUserService;
const updateUserService = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = data_source_1.default.getRepository(user_entity_1.default);
    const userToUpdate = yield userRepo.findOne({
        where: { id: id },
    });
    userToUpdate.email = payload.email ? payload.email : userToUpdate.email;
    userToUpdate.name = payload.name ? payload.name : userToUpdate.name;
    userToUpdate.imgUrl = payload.imgUrl ? payload.imgUrl : userToUpdate.imgUrl;
    userToUpdate.password = payload.password
        ? payload.password
        : userToUpdate.password;
    yield userRepo.save(userToUpdate);
    delete userToUpdate.password;
    return userToUpdate;
});
exports.updateUserService = updateUserService;
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = data_source_1.default.getRepository(user_entity_1.default);
    const user = yield userRepo.findOne({ where: { id: id } });
    if (!user.isActive) {
        throw new error_1.AppError('Usuário inativo', 400);
    }
    user.isActive = false;
    yield userRepo.softRemove(user);
    return {};
});
exports.deleteUserService = deleteUserService;
//# sourceMappingURL=user.services.js.map