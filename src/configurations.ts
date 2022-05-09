export default {
    SERVER: {
        SETTINGS: {
            PORT: 3000,
            PROPERTY_PORT: "port",
            MORGAN_SETTINGS: 'dev'
        },
        MESSAGES: {
            SERVER_ON: "Server on port ",
            SERVER_STATE_RUNNING: "Server is running",
        },
        ROUTES: {
            BASE: '/api',
            INDEX: '/',
            POST_ORDER: '/post-order',
            POST_TECHNICIAN: '/post-technician',
            GET_ORDERS_BY_TECHNICIAN: '/get-ordersByTechnician/:technician_id',
        }
    },
    DATA_SOURCES: {
        DB_POSTGRES: {
            TYPE: "postgres",
            LOGGING: true,
            URL: 'postgres://postgres:pwddb@localhost:5432/db',
            SYNCHRONIZE: true
        },
    },
    CORE: {
        MESSAGES: {
            ERROR_PARAMETER_DESCRIPTION_REQUIRED: 'description is required',
            ERROR_PARAMETER_CLIENT_NAME_REQUIRED: 'client_name is required',
            ERROR_PARAMETER_CLIENT_ADDRESS_REQUIRED: 'client_address is required',
            ERROR_PARAMETER_TECHNICIAN_ID_REQUIRED: 'technician_id:number parameter is required',
            ERROR_PARAMETER_TECHNICIAN_NAME_REQUIRED: 'name is required',
            ERROR_TECHNICIANS_NOT_FOUND: 'No technicians available, plase create a technician first',
            ERROR_TECHNICIAN_NOT_FOUND: 'Technician not found with id: ',
            ORDER_CREATED_SUCCESSFULLY: 'Order created successfully',
            ORDERS_RETRIEVED_SUCCESSFULLY: 'Orders retrieved successfully',
            TECHNICIAN_CREATED_SUCCESSFULLY: 'Technician created successfully',

        }
    }
}

