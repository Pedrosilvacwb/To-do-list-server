"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const session_controller_1 = require("../controllers/session.controller");
const user_middleware_1 = require("../middlewares/user.middleware");
const user_schemas_1 = require("../schemas/user.schemas");
const sessionRouter = (0, express_1.Router)();
sessionRouter.post('', (0, user_middleware_1.validateUserRequestDataMiddleware)(user_schemas_1.loginUserSchema), session_controller_1.createSessionController);
exports.default = sessionRouter;
//# sourceMappingURL=session.routes.js.map