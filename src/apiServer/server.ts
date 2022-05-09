import configurations from '../configurations';
import express from "express"
import morgan from "morgan"

import indexRoutes from './routes/index.routes';
import ordersRoutes from './routes/orders.routes';
import techniciansRoutes from './routes/technicians.routes';


export class Server {
    protected app: express.Application

    public constructor() {
        this.app = express()
        this.initialize()
    }

    protected async initialize() {
        await this.configuration()
        await this.routes()
        await this.start()
    }

    protected async configuration() {

        // Settings
        this.app.set(configurations.SERVER.SETTINGS.PROPERTY_PORT, configurations.SERVER.SETTINGS.PORT)

        // Middlewares
        this.app.use(morgan(configurations.SERVER.SETTINGS.MORGAN_SETTINGS))
        this.app.use(express.json())

    }

    protected async routes() {
        this.app.use(indexRoutes)
        this.app.use(configurations.SERVER.ROUTES.BASE, ordersRoutes)
        this.app.use(configurations.SERVER.ROUTES.BASE, techniciansRoutes)
    }

    protected async start() {

        await this.app.listen(this.app.get(configurations.SERVER.SETTINGS.PROPERTY_PORT))
        console.log(configurations.SERVER.MESSAGES.SERVER_ON, this.app.get(configurations.SERVER.SETTINGS.PROPERTY_PORT))

    }


}