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
exports.logoutUser = exports.createUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Verifying if email exists
        const existingUser = yield User_1.default.findOne(email);
        if (existingUser) {
            return res.status(400).json({ message: 'This email is already in use!' });
        }
        const newUser = new User_1.default({ email, password });
        yield newUser.save();
        return res.status(201).json({ message: 'User created successfully' });
    }
    catch (e) {
        console.error('Erro ao criar usuário:', e);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.createUser = createUser;
const logoutUser = (req, res) => {
    return res.status(200).json({ message: 'Logout bem-sucedido' });
};
exports.logoutUser = logoutUser;
