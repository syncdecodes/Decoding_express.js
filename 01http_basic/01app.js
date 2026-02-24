const http = require('http')
const fileIO = require('fs').promises

let devPage

async function startServer() {
    devPage = await fileIO.readFile('./2-express.js/01http_server/index.html', 'utf8')
}

const server = http.createServer((req, res) => {
    console.log('user hit the server')

    const url = req.url

    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' }) // if content-type: text/palin then <h1>Home page</h1> as it is
        res.write('<h1>Home page</h1>')
        res.end()
    }
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About page</h1>')
        res.end()
    }
    else if (url === '/dev') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(devPage)
        res.end()
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' }) // 404 - resource the user is trying to access is not on the server
        res.write('<h1>Error page</h1>')
        res.end()
    }
})
server.listen(3000, () => {
    console.log('server is listening on port 3000')
})

startServer()
