"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const error_1 = require("./error");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const session_routes_1 = __importDefault(require("./routes/session.routes"));
const activities_routes_1 = __importDefault(require("./routes/activities.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/users', user_routes_1.default);
app.use('/login', session_routes_1.default);
app.use('/activities', activities_routes_1.default);
app.use(error_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map