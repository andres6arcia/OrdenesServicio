import Order from "../../businessRules/entities/order.entity";

export default interface IOrdersOutput {

    getAll(technician_id: number): Promise<Order[]>
    getById(id: number): Promise<Order | null>
    create(order: Order): Promise<Order | null>
    update(order: Order): Promise<Order | null>
    delete(id: number): Promise<void>

}