const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const { Merchant } = require('./sequelize')

const app = express()
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const port = 3000
app.listen(port, () => {
	console.log(`Running on pprt ${port}`)
})

// index
app.get('/', (req, res) => {
	res.render('index')
})

// create a merchant
app.post('/api/merchants', (req, res) => {
	Merchant.create(req.body)
		.then(merchant => res.json(merchant))
})

// get all merchants
app.get('/api/merchants', (req, res) => {
	Merchant.findAll().then(merchants => res.json(merchants))
})

module.exports = app
