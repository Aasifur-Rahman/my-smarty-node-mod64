const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello From my own smarty node!!!')
});

const users = [
    { id: 1, name: 'Shabana', email: 'Shabna@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Shuchorita', email: 'Shuchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Shuchonda', email: 'Shuchonda@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Sraboni', email: 'Sraboni@gmail.com', phone: '01788888888' },
    { id: 6, name: 'Srabonti', email: 'Srabonti@gmail.com', phone: '01788888888' },
    { id: 7, name: 'Sherline', email: 'Sherlin@gmail.com', phone: '01788888888' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }

})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})






app.listen(port, () => {
    console.log('Listening to port', port)
});