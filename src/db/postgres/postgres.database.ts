import {DataSource} from "typeorm"
import configurations from '../../configurations';
import Order from "./models/order.model"
import Technician from "./models/technician.model";

export const PostgresDataSource = new DataSource({
    type: <any>configurations.DATA_SOURCES.DB_POSTGRES.TYPE,
    logging: configurations.DATA_SOURCES.DB_POSTGRES.LOGGING,
    url: configurations.DATA_SOURCES.DB_POSTGRES.URL,
    entities: [Order, Technician],
    synchronize: configurations.DATA_SOURCES.DB_POSTGRES.SYNCHRONIZE
})