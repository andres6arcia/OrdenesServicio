import { Router, Request, Response } from 'express'
import configurations from '../../configurations'
import ordersController from '../controllers/orders.controller'


class OrdersRoutes {
    protected router: Router

    public constructor() {
        this.router = Router()
        this.routes()
    }

    public getRoutes(): Router {
        return this.router
    }

    protected routes() {
        this.router.post(configurations.SERVER.ROUTES.POST_ORDER, ordersController.postOrder)
        this.router.get(configurations.SERVER.ROUTES.GET_ORDERS_BY_TECHNICIAN, ordersController.getOrdersByTechnician)
    }
}

export default new OrdersRoutes().getRoutes()