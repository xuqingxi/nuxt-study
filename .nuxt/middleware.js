const middleware = {}

middleware['authenticated'] = require('..\\middleware\\authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['nonauth'] = require('..\\middleware\\nonauth.js')
middleware['nonauth'] = middleware['nonauth'].default || middleware['nonauth']

export default middleware
