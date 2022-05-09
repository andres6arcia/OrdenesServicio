import { Router, Request, Response } from 'express'
import configurations from '../../configurations'
import techniciansController from '../controllers/technicians.controller'


class TechniciansRoutes {
    protected router: Router

    public constructor() {
        this.router = Router()
        this.routes()
    }

    public getRoutes(): Router {
        return this.router
    }

    protected routes() {
        this.router.post(configurations.SERVER.ROUTES.POST_TECHNICIAN, techniciansController.postTechnician)
    }
}

export default new TechniciansRoutes().getRoutes()