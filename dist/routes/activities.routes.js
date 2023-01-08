"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activities_controller_1 = require("../controllers/activities.controller");
const user_middleware_1 = require("../middlewares/user.middleware");
const actvRouter = (0, express_1.Router)();
actvRouter.get('', user_middleware_1.verifyTokenMiddleware, activities_controller_1.getActivitiesController);
actvRouter.post('', user_middleware_1.verifyTokenMiddleware, activities_controller_1.createActivitiesController);
actvRouter.delete('/:id', user_middleware_1.verifyTokenMiddleware, activities_controller_1.deleteActivitieController);
actvRouter.patch('/:id', user_middleware_1.verifyTokenMiddleware, activities_controller_1.updateActivitieController);
exports.default = actvRouter;
//# sourceMappingURL=activities.routes.js.map