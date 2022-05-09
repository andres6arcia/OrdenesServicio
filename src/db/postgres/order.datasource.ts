
import OrdersOutput from "../../core/adapters/outputPorts/orders.output";
import Order from "./models/order.model";
import OrderEntity from "./models/order.model";
import { PostgresDataSource } from "./postgres.database";


export default class OrderDatasource implements OrdersOutput{

    constructor(){
        PostgresDataSource.initialize()
    }

    async getAll(technician_id:number): Promise<OrderEntity[]>{

        const orders = await Order.find({where:{technician_id}})

        return orders
    }

    async getById(id: number): Promise<OrderEntity | null>{

        return null
    }

    async create(orderEntity: OrderEntity): Promise<OrderEntity | null>{

        const order: Order = new Order()
        order.technician_id = orderEntity.technician_id
        order.description = orderEntity.description
        order.client_name = orderEntity.client_name
        order.client_address = orderEntity.client_address
        order.token = orderEntity.token

        await order.save()
        return order

    }

    async update(orderEntity: OrderEntity): Promise<OrderEntity | null>{

        return null
    }

    async delete(id: number): Promise<void>{

    }

}