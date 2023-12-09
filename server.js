const express = require('express');
const app = express();
// const db = require('./config/firebase/config').firestore();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static(__dirname + '/assets'));
app.set('view engine','ejs');
app.set('views','./views');


app.get('/', (req, res) => { res.render('index')})


var PORT = 9000;
app.listen(PORT, () => { console.log(`Server is running... \nPort: ${PORT}`)});