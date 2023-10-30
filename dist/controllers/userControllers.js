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
exports.registerUser = void 0;
const mssql_1 = __importDefault(require("mssql"));
const sqlconfig_1 = require("../config/sqlconfig");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { FullName, email, phone_no, password, profession } = req.body;
        const pool = yield mssql_1.default.connect(sqlconfig_1.sqlconfig);
        if (pool.connected) {
            console.log('connection created');
        }
    }
    catch (error) {
        return res.status(501).json({ error: error });
    }
});
exports.registerUser = registerUser;
