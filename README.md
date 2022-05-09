# OrdenesServicio





## Endpoint: localhost:3000/api/post-technician
##Permite crear los tecnicos necesarios para iniciar el proceso

###Parametros:
**name:** Nombre del tecnico que se va a crear

###Retorna:
**message:** Mensaje que indica el resultado del proceso
**data:** Contiene la carga util de la respuesta, en este caso retorna los datos del tecnico creado:
    **id:** Numero asignado automaticamente para identificar el tenico creado.
    
    
    
    
    
## Endpoint: http://localhost:3000/api/post-order
##Permite a un cliente registrar ordenes de soporte 

###Parametros:
**description:** Descripcion de el soporte que esta solicitando el cliente.
**client_name:** Nombre del cliente que esta registrando la solicitud de soporte.
**client_address:** Dirección del cliente donde debe presentarse el tecnico para realizar el soporte si se necesita.

###Retorna:
**message:** Mensaje que indica el resultado del proceso
**data:** Contiene la carga util de la respuesta, en este caso retorna los datos del tecnico creado:
    **technician_id:** Número que identifica al ténico asignado aleatoriamente.
    **description:** Descripción de la necesidad del cliente y por el cual se esta solicitando soporte.
    **client_name:** Nombre del cliente que solicita el soporte.
    **client_address:** Dirección del cliente donde se debe presentar el tecnico para realizar el sporte de ser necesario.
    **token:** Token aleatorio y único asignado a la solicitud de soporte creada por el cliente.
    **id:** Número que identifica al soporte creado por el cliente.
    
    
    
## Endpoint: localhost:3000/api/get-ordersByTechnician/#
##Permite consultar las ordenes de soporte asignadas aleatoriamente al tecnico identificado por el numero enviado por URL.

###Parametros por URL:
**#:** Número que identifica al tecnico.

###Retorna:
**message:** Mensaje que indica el resultado del proceso
**data:** Contiene la carga util de la respuesta, en este caso retorna las ordenes de soporte asociadas al tecnico:
    **id:** Numero asignado automaticamente para identificar la solicitud de soporte.
    **token:** Token generado aleatoriamente por el sistema como prueba de el registro de la orden.
    **technician_id:** Número que identifica al tecnico asignado a la orden.
    **description:** Descripción que dio el cliente de la necesidad de soporte que creada.
    **client_name:** Nombre del cliente que realizó la solicitud de soporte.
    **client_address:** Dirección del cliente donde se debe presentar el tecnico para realizar el soporte de ser necesario.
    
    
    
