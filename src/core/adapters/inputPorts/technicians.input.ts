import TechnicianInteractor from "../../businessRules/useCases/technician.interactor";
import Technician from "../../businessRules/entities/technician.entity";
import TechnicianDatasource from "../../../db/postgres/technician.datasource";


class TechniciansInput {

    // Create dependencies needed by the interactors
    protected techniciansOutput = new TechnicianDatasource()
    // Send dependecies to the interactors
    protected technicianInteractor = new TechnicianInteractor(this.techniciansOutput)


    public async addTechnician(name: string): Promise<{ message: string, data: Technician | null }> {
        return await this.technicianInteractor.addTechnician(name);
    }

}
export default new TechniciansInput();