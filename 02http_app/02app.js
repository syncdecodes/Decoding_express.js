const http = require('http')
const fileIO = require('fs')

const homePage = fileIO.readFileSync('./2-express.js/02http_server/index.html', 'utf8') // We use readFileSync here to read the file once at startup,
const homeStyles = fileIO.readFileSync('./2-express.js/02http_server/styles.css', 'utf8')
const homeImage = fileIO.readFileSync('./2-express.js/02http_server/logo.svg', 'utf8')
const homeLogic = fileIO.readFileSync('./2-express.js/02http_server/browser-app.js', 'utf8')

const server = http.createServer((req, res) => {
    console.log('user hit the server')
    
    const url = req.url
    console.log(url)

    // Home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' }) // if content-type: text/palin then <h1>Home page</h1> as it is
        res.write(homePage)
        res.end()
    }

    // Styles
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' }) 
        res.write(homeStyles)
        res.end()
    }

    // Image/logo
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' }) 
        res.write(homeLogic)
        res.end()
    }

    // Logic
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' }) 
        res.write(homeImage)
        res.end()
    }

    // Error
    else{
        res.writeHead(404, { 'content-type': 'text/html' }) // 404 - resource the user is trying to access is not on the server
        res.write('<h1>Error page</h1>')
        res.end()
    }
})
server.listen(5000, () => {
    console.log('server is listening on port 5000')
})

/*
The browser automatically requests CSS, JS, and images that are referenced inside index.html.
Thus Even though the user only typed /, the browser itself asks for the other files(everything needed to render the page properly).

User → GET /
Server → index.html
Browser parses HTML
Browser → GET /styles.css
Browser → GET /browser-app.js
Browser → GET /logo.svg
Server → sends each file
Browser renders page
*/