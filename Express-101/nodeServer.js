const http = require('http');
const fs = require('fs');

// thr http module has createServer method takes one agr:
// 1.callback, callback, has 2 args req, res
const server = http.createServer((req, res) => {
    //console.log(req);
    console.log(`reqest was made to ${req.url}`);
    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        const homePage = fs.readFileSync('node.html');
        //console.log(homePage);
        res.write(homePage)
        res.end();
    }else if(req.url === "/node.png"){
        res.writeHead(200, {'content-type': 'image/png'});
        const image = fs.readFileSync('node.png');
        //console.log(homePage);
        res.write(image)
        res.end();
    }else if(req.url === "/styles.css"){
        res.writeHead(200, {'content-type': 'text/css'});
        const css = fs.readFileSync('styles.css');
        //console.log(homePage);
        res.write(css)
        res.end();
    }else{
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h4>Sorry this is you are looking for</h4>');
        res.end();
    }
})
 
// createServer return an object with listen method 
// listen takes 1 arg:
// 1. port to listen for http traffic on 
server.listen(3000)