const http = require('node:http') // protocolo HTTP
const fs = require('node:fs') // sistema de archivos
const dittJSON = require('./pokemon/ditto.json')


const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
    const { method, url } = req

    switch (method) {
        case 'GET':
            switch (url) {
                case '/':
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h1>Mi página</h1>')
                case '/imagen':
                    fs.readFile('./placa.png', (err, data) => {
                        if (err) {
                            res.statusCode = 500
                            res.setHeader('Content-Type', 'text/html; charset=utf-8')
                            return res.end('<h1>500 Internal Server Error</h1>')
                        } else {
                            res.setHeader('Content-Type', 'image/png')
                            return res.end(data)
                        }
                    })
                case '/pokemon/ditto':
                    res.setHeader('Content-Type', 'application/json; charset=utf-8')
                    return res.end(JSON.stringify(dittJSON))
                default:
                    res.statusCode = 404 // Not Found
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h1>404 Not Found</h1>')
            }
        case 'POST':
            switch (url) {
                case '/pokemon':
                    let body = ''
                    break
                default:
                    res.statusCode = 405 // Method Not Allowed
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h1>405 Method Not Allowed</h1>')
            }
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
})
