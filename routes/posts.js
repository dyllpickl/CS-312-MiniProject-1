import express from 'express';
import {postsArray} from '../index.js'

const router = express.Router();

router.get('/new', (req, res) => {
    res.render('posts/new.ejs');
});

router.post('/', (req, res) => {
    const {author, title, contents} = req.body;

    const newPost = {
        author: author || 'Anonymous',
        title: title,
        creationDate: new Date().toLocaleDateString(),
        creationTime: new Date().toLocaleTimeString(),
        content: contents,
    };
    postsArray.push(newPost);
    res.redirect('/');
});

router.get('/edit/:index', (req, res) => {
    const postsIndex = req.params.index;
    const post = postsArray[postsIndex];
    res.render('posts/edit.ejs', {post, postsIndex});
});

router.post('/edit/:index', (req, res) => {
    const postsIndex = req.params.index;
    const {author, title, contents, creationDate, creationTime} = req.body;

    postsArray[postsIndex] = {
        author: author || 'Anonymous',
        title: title,
        creationDate: creationDate,
        creationTime: creationTime,
        editDate: new Date().toLocaleDateString(),
        editTime: new Date().toLocaleTimeString(),
        content: contents,
    };
    res.redirect('/');
});

router.post('/delete/:index', (req, res) => {
    const postsIndex = req.params.index;
    postsArray.splice(postsIndex, 1);
    res.redirect('/');
});

export default router;