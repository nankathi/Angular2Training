let routeHelper = {
    getRootRoutes: getRootRoutes
};

//default is used to export the object only one export default is allowed
export default routeHelper;
function getRootRoutes(modules:Array<any>){
    let routes: Array<any> = [{ path: "", redirectTo: modules[0], pathMatch: "full"}];
    modules.forEach((moduleName:any) =>{
        routes.push({
            path:moduleName,
            loadChildren:String.format("src/modules/{0}/{0}Module#{1}Module",moduleName,String.toPascal(moduleName))
        });
    });
 return routes;
}