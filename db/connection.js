
const mongoose = require('mongoose');

const conn = async() => {
	try {
		await mongoose.connect(process.env.DB_CONN, {
			useNewUrlParser: true, 
			useUnifiedTopology: true,
			useCreateIndex: true,
		});

		console.log('Conectado a la base de datos');
		
	} catch (error) {
		console.log('error', error);
	}

}

module.exports = conn;