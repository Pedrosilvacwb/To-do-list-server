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
exports.updateActivitieController = exports.deleteActivitieController = exports.createActivitiesController = exports.getActivitiesController = void 0;
const activities_services_1 = require("../services/activities.services");
const getActivitiesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization.split(' ')[1];
    const data = yield (0, activities_services_1.getActivitiesService)(token);
    return res.status(200).json(data);
});
exports.getActivitiesController = getActivitiesController;
const createActivitiesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const token = req.headers.authorization.split(' ')[1];
    const data = yield (0, activities_services_1.createActivitiesService)(payload, token);
    return res.status(201).json(data);
});
exports.createActivitiesController = createActivitiesController;
const deleteActivitieController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield (0, activities_services_1.deleteActivitieService)(id);
    return res.status(200).json(data);
});
exports.deleteActivitieController = deleteActivitieController;
const updateActivitieController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const payload = req.body;
    const data = yield (0, activities_services_1.updateActivitieService)(id, payload);
    return res.status(200).json(data);
});
exports.updateActivitieController = updateActivitieController;
//# sourceMappingURL=activities.controller.js.map