
import TechnicianOutput from "../../core/adapters/outputPorts/technicians.output";
import Technician from "./models/technician.model";
import TechnicianEntity from "./models/technician.model";
import { PostgresDataSource } from "./postgres.database";


export default class TechnicianDatasource implements TechnicianOutput{

    constructor(){
        PostgresDataSource.initialize()
    }

    async getAll(): Promise<TechnicianEntity[]>{

        const technicians: Technician[] = await Technician.find()

        return technicians
    }

    async getById(id: number): Promise<TechnicianEntity | null>{

        const technician = await Technician.findOne({where:{id}})

        return technician
    }

    async create(technicianEntity: TechnicianEntity): Promise<TechnicianEntity | null>{

        const technician: Technician = new Technician()
        technician.name = technicianEntity.name

        await technician.save()
        return technician

    }

    async update(technicianEntity: TechnicianEntity): Promise<TechnicianEntity | null>{

        // const technician = await Technician.update({id: technicianEntity.id}, technicianEntity)

        return null
    }

    async delete(id: number): Promise<void>{

    }

}