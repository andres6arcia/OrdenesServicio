# OrdenesServicio

## Requerimientos:
![Imaginamos](https://github.com/andres6arcia/OrdenesServicio/blob/master/RequerimientosOrdenesDeServicio.png?raw=true)

## Arquitectura usada: Cebolla
![Arquitectura Cebolla](https://github.com/andres6arcia/OrdenesServicio/blob/master/onionArchitecture.png?raw=true)
* * *



## **Post-technician:** Permite crear los técnicos necesarios para iniciar el proceso
### Endpoint: http://localhost:3000/api/post-technician

### Parámetros:
**name:** Nombre del técnico que se va a crear

### Retorna:
* **message:** Mensaje que indica el resultado del proceso
* **data:** Contiene la carga util de la respuesta, en este caso retorna los datos del técnico creado:
    * **id:** Número asignado automaticamente para identificar el ténico creado.
* * *  



## **Post-order:** Permite a un cliente registrar órdenes de soporte     
### Endpoint: http://localhost:3000/api/post-order

### Parámetros:
* **description:** Descripción de el soporte que está solicitando el cliente.
* **client_name:** Nombre del cliente que está registrando la solicitud de soporte.
* **client_address:** Dirección del cliente en donde debe presentarse el técnico para realizar el soporte de ser necesario.

### Retorna:
* **message:** Mensaje que indica el resultado del proceso
* **data:** Contiene la carga útil de la respuesta, en este caso retorna los datos de la solicitud creada:
    * **technician_id:** Número que identifica al ténico asignado aleatoriamente.
    * **description:** Descripción de la necesidad del cliente y por el cual se esta solicitando soporte.
    * **client_name:** Nombre del cliente que solicita el soporte.
    * **client_address:** Dirección del cliente donde se debe presentar el técnico para realizar el sporte de ser necesario.
    * **token:** Token aleatorio y único asignado a la solicitud de soporte creada por el cliente.
    * **id:** Número que identifica al soporte creado por el cliente.
* * *

    

## **Get-ordersByTechnician:** Permite consultar las ordenes de soporte asignadas aleatoriamente al técnico identificado por el número enviado por URL.
### Endpoint: http://localhost:3000/api/get-ordersByTechnician/#

### Parametros por URL:
**#:** Número que identifica al técnico.

### Retorna:
* **message:** Mensaje que indica el resultado del proceso
* **data:** Contiene la carga útil de la respuesta, en este caso retorna las ordenes de soporte asociadas al técnico:
    * **id:** Número asignado automaticamente para identificar la solicitud de soporte.
    * **token:** Token generado aleatoriamente por el sistema como prueba de el registro de la orden.
    * **technician_id:** Número que identifica al técnico asignado a la orden.
    * **description:** Descripción que dió el cliente de la necesidad de soporte que creada.
    * **client_name:** Nombre del cliente que realizó la solicitud de soporte.
    * **client_address:** Dirección del cliente donde se debe presentar el técnico para realizar el soporte de ser necesario.
* * *


