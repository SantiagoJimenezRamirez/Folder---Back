import express, { Application } from 'express'


class Server {
    private app : Application;
    private port : string;

    constructor(){
        this.app = express()
        this.port = process.env.DB_PORT as string;
        this.listen();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
            })
    }


}

export default Server;