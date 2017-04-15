"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let routeHelper = {
    getRootRoutes: getRootRoutes
};
//default is used to export the object only one export default is allowed
exports.default = routeHelper;
function getRootRoutes(modules) {
    let routes = [{ path: "", redirectTo: modules[0], pathMatch: "full" }];
    modules.forEach((moduleName) => {
        routes.push({
            path: moduleName,
            loadChildren: String.format("src/modules/{0}/{0}Module#{1}Module", moduleName, String.toPascal(moduleName))
        });
    });
    return routes;
}
//# sourceMappingURL=routeHelper.js.map