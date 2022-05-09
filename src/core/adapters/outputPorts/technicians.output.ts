import Technician from "../../businessRules/entities/technician.entity";

export default interface ITechniciansOutput {

    getAll(): Promise<Technician[]>
    getById(id: number): Promise<Technician | null>
    create(technician: Technician): Promise<Technician | null>
    update(technician: Technician): Promise<Technician | null>
    delete(id: number): Promise<void>

}