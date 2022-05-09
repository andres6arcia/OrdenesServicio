import CONFIGURATIONS from '../../../configurations';
import Technician from "../entities/technician.entity";
import TechniciansOutput from "../../../core/adapters/outputPorts/technicians.output";

export default class TechnicianInteractor {

    protected techniciansOutput: TechniciansOutput

    constructor(techniciansOutput: TechniciansOutput) {
        this.techniciansOutput = techniciansOutput
    }


    public async addTechnician(name: string): Promise<{ message: string, data: Technician | null }> {

        if (!name) throw new Error(CONFIGURATIONS.CORE.MESSAGES.ERROR_PARAMETER_TECHNICIAN_NAME_REQUIRED)

        const technician: Technician = { name }
        return { message: CONFIGURATIONS.CORE.MESSAGES.TECHNICIAN_CREATED_SUCCESSFULLY, data: await this.techniciansOutput.create(technician) }

    }


}