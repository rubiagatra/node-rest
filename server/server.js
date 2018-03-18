const express = require('express');
const bodyparser = require('body-parser');

const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

app.use(bodyparser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.send(e)
  });
});

app.listen(3000, () => {
  console.log("server running on port: 3000")
})
