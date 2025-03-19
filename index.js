const express = require('express')
const db = require('./models')
const app = express()
const port = process.env.PORT || 9000;7


const postsRouter = require('./routes/posts.route');


app.use(express.json());


db.sequelize.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch((error) => {
		console.error('Unable to connect to the database:', error);
	});


app.get('/', (req, res) => {
	res.send("hello world")
})

app.use('/posts', postsRouter)

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})
