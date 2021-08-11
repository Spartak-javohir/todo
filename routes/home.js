const fs = require('fs').promises
const path = require('path')


module.exports = async function homeroutes(request, response){
    if (request.url=='/'){
        const file = path.join(__dirname, '../views', 'index.html')
        const redFile= await fs.readFile(file, 'utf-8')
        response.write(redFile)
        
        response.end()
    }
    if (request.url == '/') {
        const jsfile = path.join(__dirname, '..', 'views','assecs', 'js', 'main.js')
        const redjs = await fs.readFile(jsfile, 'utf-8')
        response.write(redjs)
        response.end()
    }
}