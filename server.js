import express from 'express';

const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index',{message:'Hello EJS'});
});

app.listen(3000, () => {
    console.log('Express app listening on port 3000');
});