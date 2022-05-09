import OrdersInteractor from "../../businessRules/useCases/orders.interactor";
import Order from "../../businessRules/entities/order.entity";
import OrderDatasource from "../../../db/postgres/order.datasource";
import TechnicianDatasource from "../../../db/postgres/technician.datasource";


class OrdersInput {

    // Create dependencies needed by the interactors
    protected ordersOutput = new OrderDatasource();
    protected techniciansOutput = new TechnicianDatasource()
    // Send dependecies to the interactors
    protected ordersInteractor = new OrdersInteractor(this.ordersOutput, this.techniciansOutput)


    public async addOrder(description: string, client_name: string, client_address: string): Promise<{ message: string, data: Order | null }> {
        return await this.ordersInteractor.addOrder(description, client_name, client_address);
    }

    public async getOrdersByTechnician(technician_id: number): Promise<{ message: string, data: Order[] | null }> {
        return await this.ordersInteractor.getOrdersByTechnician(technician_id);
    }

}
export default new OrdersInput();