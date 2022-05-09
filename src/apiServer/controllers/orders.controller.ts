import { Request, Response } from 'express'
import ordersInput from '../../core/adapters/inputPorts/orders.input';

class OrdersController {

    public async postOrder(req: Request, res: Response): Promise<void> {

        const { description, client_name, client_address } = req.body

        try {
            let order = await ordersInput.addOrder(description, client_name, client_address)
            res.status(200).json(order)
        } catch (error: any) {
            if (!error.code) res.status(400).json({ message: error.message, data: null })
            else res.status(500).json({ message: error.message, data: null })
        }

    }

    public async getOrdersByTechnician(req: Request, res: Response): Promise<void> {

        const { technician_id } = req.params

        try {
            let orders = await ordersInput.getOrdersByTechnician(parseInt(technician_id))
            res.status(200).json(orders)
        } catch (error: any) {
            if (!error.code) res.status(400).json({ message: error.message, data: null })
            else res.status(500).json({ message: error.message, data: null })
        }
    }

}

export default new OrdersController()