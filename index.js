import express from 'express';
import bodyParser from 'body-parser';
import postsRoute from './routes/posts.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/posts', postsRoute);

const postsArray = [];

app.get('/', (req, res) => {
    res.render('index.ejs', {posts: postsArray});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

export {postsArray};