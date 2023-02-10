
const connection = require('../models/db')

// new post
exports.newpost = (req, res) => {
    connection.query(
        'INSERT INTO posts(Title, Description, Date) VALUES(?, ?, NOW())',
        [req.body.title, req.body.description],
        (error, results) => {
            res.redirect('/blogs/allposts');
        }
    );
}

// showing all posts
exports.allposts = (req, res) => {
    connection.query(
        'SELECT * FROM posts',
        (error, results) => {
            res.render('blogs/welcome', { posts: results });
        }
    );
}

// viewing the post
exports.post = (req, res) => {
    connection.query(
        'SELECT * FROM posts WHERE id = ?',
        [req.params.id],
        (error, results) => {
            res.render('blogs/post', {post: results[0]});
        }
    );
    
}