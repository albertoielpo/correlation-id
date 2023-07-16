# Correlation id

Simple program build using nestjs that associate an unique identifier per request.

Unique identifier is generated using randomUUID (crypto) and added to each request using correlation-id.middleware

## Log

Log library: nestjs-pino

## Example

The example shows that the same correlation-id (uuid) attached to the x-correlation-id header is mantained in all request flow (controller, service, microtask and macrotask level)

```
npm i
npm run start:dev
curl --request GET --url http://localhost:3000

[timestamp] INFO: <uuid> [AppController] Hello world from controller... <timeout in seconds>

[2023-17-16T09:07:25.127Z] INFO: cdda7761-acc2-43f3-83dd-3671cf819058 [AppController] Hello world from controller... 348
[2023-17-16T09:07:25.127Z] INFO: cdda7761-acc2-43f3-83dd-3671cf819058 [AppService] Hello world from service... 348
[2023-17-16T09:07:25.476Z] INFO: cdda7761-acc2-43f3-83dd-3671cf819058 [AppService] Hello inside the promise.. 348
[2023-17-16T09:07:25.476Z] INFO: cdda7761-acc2-43f3-83dd-3671cf819058 [] request completed
```
