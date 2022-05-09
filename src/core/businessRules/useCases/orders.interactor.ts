import CONFIGURATIONS from '../../../configurations';
import Order from "../entities/order.entity";
import OrdersOutput from "../../../core/adapters/outputPorts/orders.output";
import TechniciansOutput from "../../adapters/outputPorts/technicians.output";

export default class OrdersInteractor {

    protected ordersOutput: OrdersOutput
    protected techniciansOutput: TechniciansOutput

    constructor(ordersOutput: OrdersOutput, techniciansOutput: TechniciansOutput) {
        this.ordersOutput = ordersOutput
        this.techniciansOutput = techniciansOutput
    }


    public async addOrder(description: string, client_name: string, client_address: string): Promise<{ message: string, data: Order | null }> {

        // Validations
        if (!description) throw new Error(CONFIGURATIONS.CORE.MESSAGES.ERROR_PARAMETER_DESCRIPTION_REQUIRED)
        if (!client_name) throw new Error(CONFIGURATIONS.CORE.MESSAGES.ERROR_PARAMETER_CLIENT_NAME_REQUIRED)
        if (!client_address) throw new Error(CONFIGURATIONS.CORE.MESSAGES.ERROR_PARAMETER_CLIENT_ADDRESS_REQUIRED)

        // Generate random token
        const rand = () => { return Math.random().toString(36).slice(2).toUpperCase() } // toString(36): Convert random numbers to base 36 (0-9a-z), slice(2): Remove the first two characters "0."
        const token = rand()

        // Get a random technician
        const technicians = await this.techniciansOutput.getAll()
        if (!technicians || !technicians.length) throw new Error(CONFIGURATIONS.CORE.MESSAGES.ERROR_TECHNICIANS_NOT_FOUND)
        const technician = technicians[Math.floor(Math.random() * technicians.length)]


        const order: Order = { technician_id: technician.id!, description, client_name, client_address, token }
        return { message: CONFIGURATIONS.CORE.MESSAGES.ORDER_CREATED_SUCCESSFULLY, data: await this.ordersOutput.create(order) }

    }


    public async getOrdersByTechnician(technician_id: number): Promise<{ message: string, data: Order[] }> {

        if (!technician_id) throw new Error(CONFIGURATIONS.CORE.MESSAGES.ERROR_PARAMETER_TECHNICIAN_ID_REQUIRED)

        const technician = await this.techniciansOutput.getById(technician_id)
        if (!technician) throw new Error(CONFIGURATIONS.CORE.MESSAGES.ERROR_TECHNICIAN_NOT_FOUND + technician_id)

        return { message: CONFIGURATIONS.CORE.MESSAGES.ORDERS_RETRIEVED_SUCCESSFULLY, data: await this.ordersOutput.getAll(technician_id) }

    }

}