


export default interface IOrder {
    id?: number;
    token?: string;
    technician_id: number;
    description?: string;
    client_name: string;
    client_address: string;

    created_at?: Date;
    updated_at?: Date;
}