const Sequelize = require('sequelize')
const MerchantModel = require('./models/merchant')

const sequelize = new Sequelize('dfiqmh2rdudba6', 'zelmdoftoxyrnz', '16c2d5b330562a6e84bc68a4e0d09db1cf790fb746066322d76c5ee04e6eb3b5', {
	host: 'ec2-54-235-90-0.compute-1.amazonaws.com',
	dialect: 'postgres',
	protocol: "postgres",
   	port: 5432,
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	ssl: true
})

const Merchant = MerchantModel(sequelize, Sequelize);

sequelize.sync()
	.then(() => {
		console.log(`Database & tables created!`)
	})

module.exports = Merchant;