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
exports.updateActivitieService = exports.deleteActivitieService = exports.createActivitiesService = exports.getActivitiesService = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const activities_entity_1 = __importDefault(require("../entities/activities.entity"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_entity_1 = __importDefault(require("../entities/user.entity"));
const error_1 = require("../error");
const getActivitiesService = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const actRepo = data_source_1.default.getRepository(activities_entity_1.default);
    const activities = yield actRepo.find({});
    return activities;
});
exports.getActivitiesService = getActivitiesService;
const createActivitiesService = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    const email = jsonwebtoken_1.default.decode(token).sub;
    const userRepo = data_source_1.default.getRepository(user_entity_1.default);
    const user = yield userRepo.findOne({ where: { email: email } });
    const actRepo = data_source_1.default.getRepository(activities_entity_1.default);
    const activitie = actRepo.create(Object.assign(Object.assign({}, payload), { user: user }));
    yield actRepo.save(activitie);
    return 'Atividade criada';
});
exports.createActivitiesService = createActivitiesService;
const deleteActivitieService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const actRepo = data_source_1.default.getRepository(activities_entity_1.default);
    const activitie = yield actRepo.findOne({ where: { id: id } });
    if (!activitie)
        throw new error_1.AppError('Atividade não encontrada!!', 404);
    yield actRepo.softRemove(activitie);
    return {};
});
exports.deleteActivitieService = deleteActivitieService;
const updateActivitieService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const actRepo = data_source_1.default.getRepository(activities_entity_1.default);
    const activitie = yield actRepo.findOne({ where: { id: id } });
    if (!activitie)
        throw new error_1.AppError('Atividade não encontrada!!', 404);
    const newActivitie = Object.assign(Object.assign({}, activitie), payload);
    yield actRepo.save(newActivitie);
    return newActivitie;
});
exports.updateActivitieService = updateActivitieService;
//# sourceMappingURL=activities.services.js.map