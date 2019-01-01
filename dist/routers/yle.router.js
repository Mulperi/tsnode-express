"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const yle_service_1 = require("../services/yle.service");
const yleService = new yle_service_1.default();
const yle = express.Router();
yle.get('/', (req, res) => {
    console.log('GET: yle');
    let articles = [];
    yleService.getNews().subscribe(article => {
        articles.push(article);
    }, error => {
        console.log(error);
    }, () => res.json(articles));
});
exports.default = yle;
//# sourceMappingURL=yle.router.js.map