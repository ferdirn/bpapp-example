module.exports = (sequelize, type) => {
	return sequelize.define('merchant', {
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: type.STRING,
		phone: type.STRING,
		is_approved: type.BOOLEAN
	})
}