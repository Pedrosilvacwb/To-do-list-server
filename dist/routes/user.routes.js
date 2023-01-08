"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const user_middleware_1 = require("../middlewares/user.middleware");
const user_schemas_1 = require("../schemas/user.schemas");
const userRouter = (0, express_1.Router)();
userRouter.post('', (0, user_middleware_1.validateUserRequestDataMiddleware)(user_schemas_1.createUserSchema), user_controllers_1.createUserController);
userRouter.get('/:id', user_middleware_1.verifyTokenMiddleware, user_controllers_1.retireveUserController);
userRouter.patch('/:id', user_middleware_1.verifyTokenMiddleware, user_middleware_1.verifyUserExistsMiddleware, user_controllers_1.updateUserController);
userRouter.delete('/:id', user_middleware_1.verifyTokenMiddleware, user_middleware_1.verifyUserExistsMiddleware, user_controllers_1.deleteUserController);
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map