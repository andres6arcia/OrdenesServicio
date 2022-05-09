import { Request, Response } from 'express'
import techniciansInput from '../../core/adapters/inputPorts/technicians.input';

class TechnicianController {

    public async postTechnician(req: Request, res: Response): Promise<void> {

        const { name } = req.body

        try {
            let technician = await techniciansInput.addTechnician(name)
            res.status(200).json(technician)
        } catch (error: any) {
            if (!error.code) res.status(400).json({ message: error.message, data: null })
            else res.status(500).json({ message: error.message, data: null })
        }

    }

}

export default new TechnicianController()