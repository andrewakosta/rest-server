const express = require('express');
const cors = require('cors')
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        this.routes();
    }
    middlewares(){
        //cors
        this.app.use(cors());

        //Load data from static directory
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.get('/home',(req, res) =>{
            res.send('Hello from home endpoint')
        })
    }

    init(){
        this.app.listen(this.port,()=>{
            console.log('Server running on port: ', this.port);
        })
    }
}
module.exports = Server;