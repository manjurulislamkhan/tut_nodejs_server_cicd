"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/hello', (req, res, next) => {
    res.send('hello back!');
});
app.listen(4000, () => {
    console.info(`Server started on port 4000..`);
});
module.exports = app;
