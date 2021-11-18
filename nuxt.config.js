const routeGenerator = require('./router').default
console.log(routeGenerator)
module.exports = {
    server: {
        port: 3000, // default: 3000
        host: '0.0.0.0' // default: localhost
    },
    router: {
        extendRoutes: (routes, resolve) => {
            routes.splice(0)
            const routesArr = routeGenerator(resolve)
            routes.push(...routesArr)
        }
    },
    plugins: ['~/plugins/request.js']
}