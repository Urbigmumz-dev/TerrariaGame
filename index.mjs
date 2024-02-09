import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';

const app = express();
const PORT = 1776;

app.use(bodyParser.urlencoded({ extended: true, }));
app.use(express.static('Game/'));

http.createServer(app).listen(PORT, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(`started on ${PORT}`);
    }
});