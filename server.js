const express = require('express')
const app = express();

// const http = require('http');
// const fs = require('fs');
const port = 3000;

// const server = http.createServer( (req,res) => {

// });

// const server = http.createServer( function(req,res){
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     fs.readFile('./index.html', function(error, data) {
//         if (error) {
//             res.writeHead(404);
//             res.write('Error: File not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });
// });

// server.listen(port, (error) => {
//     if(error) {
//         console.log('Something went wrong', error);
//     } else {
//         console.log(`Server is running on ${port}`);
//     }
// });

// Static Files
app.use('css', {'Content-Type': 'text/css'}, express.static(`${__dirname}/css/styles.css`));
app.use('test', express.static(`${__dirname}/test.js`));


// Set Views
app.set('view engine', 'ejs');

app.get('', (req,res) => {
    res.render('index', { text: 'This is EJS'})
    // res.sendFile(`${__dirname}/index.html` )
});

app.listen(port, (error) => {
    if(error) {
        console.log('Something went wrong', error);
    } else {
        console.log(`Server is running on port: ${port}`);
    }
});