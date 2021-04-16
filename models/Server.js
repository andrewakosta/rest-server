const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //DB connection
        this.connectDB();
        //Middlewares
        this.middlewares();

        this.routes();
    }
    async connectDB(){
        await dbConnection();
    }
    middlewares(){
        //cors
        this.app.use(cors());

        //Body parse 
        this.app.use(express.json());

        //Load data from static directory
        this.app.use(express.static('public'));
    }
    routes(){
       this.app.use(this.usersPath, require('../routes/users'));
    }

    init(){
        this.app.listen(this.port,()=>{
            console.log('Server running on port: ', this.port);
        })
    }
}
module.exports = Server;