const routeGenerator = require('./router').default
console.log(routeGenerator)
module.exports = {
    router: {
        extendRoutes: (routes, resolve) => {
            routes.splice(0)
            const routesArr = routeGenerator(resolve)
            routes.push(...routesArr)
        }
    },
    plugins: ['~/plugins/request.js']
}