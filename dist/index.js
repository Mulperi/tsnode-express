"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const yle_router_1 = require("./routers/yle.router");
app_1.default.use('/yle', yle_router_1.default);
app_1.default.listen(app_1.default.get('port'), () => {
    console.log('  App is running at http://localhost:%d in %s mode', app_1.default.get('port'), app_1.default.get('env'));
    console.log('  Press CTRL-C to stop\n');
});
//# sourceMappingURL=index.js.map