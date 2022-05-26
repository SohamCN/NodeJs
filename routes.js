const fs = require('fs')

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name=""message"><button type="submit">Send</button></form></body');
        res.write('</html>');
       return res.end(); //return statement quits function execution
       }
       if(url==='/message' && method ==='POST'){
        const body = [];
        req.on('data', chunk=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('')[1]
            fs.writeFileSync('message.txt',message, err =>{
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();  
            }); //writeFileSync method basically halts program execution(doesn't go to next line) until the file is created, writeFile method however is non-blocking and it accepts another argument as callback function that is executed once the file is created or rather failed to create
        });
       }
       res.setHeader('Content-Type','text/html');
       res.write('<html>');
       res.write('<head><title>Test Page</title></head>');
       res.write('<body>Hello from NodeJs</body');
       res.write('</html>');
       res.end();
};

module.exports = requestHandler
