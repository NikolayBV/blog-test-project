import path from 'path';
import express from 'express';
import posts from './posts.json' assert {type: 'json'};
import users from './users.json' assert {type: 'json'};


const app = express();

const createPath = (page) => path.resolve(__dirname, 'dist', `${page}.html`);
const PORT = 5000;

app.listen(PORT, (err) => {
    err ? console.log(err): console.log(`listening port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('<h1>Hello!</h1>');
})

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/posts/:id', (req, res) => {
    let id = req.params.id;
    res.send(posts[id - 1])//переписать на find
});

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    res.send(users[id - 1])
});

app.get('/posts/:id/:user', (req, res) => {
    let id = req.params.id;
    let user = users.find((item) => {
        return item.id == posts[id].userId;
    });
    res.send(user);
});

app.post('/posts/:id', (req, res) => {
    if (!req.body) return res.sendStatus(400);
    else return res.sendStatus(200);
})

app.put('/posts/:id', (req, res) => {
    if (!req.body) return res.sendStatus(400);
    else return res.sendStatus(200);
})

// app.delete(() => {

// })
















// const PORT = 3000;

// const server = http.createServer((req, res) => {

//     res.setHeader('Content-type', 'application/json');

//     // const createPath = (page) => path.resolve(__dirname, 'dist', `${page}.html`);
//     // console.log(posts)
//     // fs.readFile('./frontend/dist/index.html', (err, data) => {
//     //     if(err){
//     //         console.log(err);
//     //         res.end();
//     //     }
//     //     else{
//     //         res.write(data);
//     //         res.end();
//     //     }
//     // })
//     fs.readFile('./server/posts.json', 'utf-8', (err, data) => {
//         if(!err){
//             res.end(data);
//             res.end();
//         }
//         else{
//             console.log(err);
//             res.end();
//         }
//     })   
// });


// server.listen(PORT, 'localhost', (error) => {
//     error ? console.log(error): console.log(`listening port ${PORT}`)
// })