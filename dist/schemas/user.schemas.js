"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.userResponseSchema = exports.createUserSchema = void 0;
const yup = __importStar(require("yup"));
exports.createUserSchema = yup.object().shape({
    name: yup.string().required('Campo "Nome" é obrigatório!'),
    email: yup
        .string()
        .email('Digite um email válido!')
        .required('Campo "Email" é obrigatório!'),
    password: yup
        .string()
        .required('Campo "Senha" é obrigatório!')
        .min(8, 'A senha deve conter no minimo 8 caracteres!')
        .matches(/(?=.*\d)/, 'A senha deve conter ao menos um digito!')
        .matches(/(?=.*[A-Z])/, 'A senha deve conter ao menos um caracter Maiúsculo!'),
    imgUrl: yup.string(),
});
exports.userResponseSchema = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    email: yup.string(),
    imgUrl: yup.string().nullable(),
    createdAt: yup.date(),
    isActive: yup.boolean(),
    activities: yup.array(),
});
exports.loginUserSchema = yup.object().shape({
    email: yup.string().required('Campo Email é obrigatório!'),
    password: yup.string().required('Campo Senha é obrigatório!'),
});
//# sourceMappingURL=user.schemas.js.map