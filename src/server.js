const express = require('express');
const {Server: HttpServer} = require('http');
const {Server: IOServer} = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer)

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './public/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {})
})
io.on('connection', socket => {
    console.log('New client connected');
})

const PORT = 8080;
const connectedServer = httpServer.listen(PORT, () => {
    console.log('Server running')
});
connectedServer.on(
    'error', error => console.log('Error en el servidor')
)
