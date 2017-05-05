const express =  require('express');
const fs =  require('fs');
const bodyParser =  require('body-parser');
var path = require('path');
const app = express();
const port = process.env.PORT || 4000;

console.log(path.join(__dirname, 'public/index.html'));
fs.exists(path.join(__dirname, 'public/index.html'), (stats) => console.log(stats));
// SEt Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Index Route
app.get('/', (req, res) => {
	console.log("GET /");
    res.send('Invalid endpoint');
});

app.get('/healthCheck', (req, res) => {
	console.log("GET /healthCheck");
    res.status(200).send({ status: 'UP' });
});

app.get('*', (req,res) => {
    return res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
    console.log('server started on port '+ port);
});
