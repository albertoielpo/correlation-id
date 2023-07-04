import { Controller, Get, Logger } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}
    private readonly logger: Logger = new Logger(AppController.name);

    @Get()
    getHello(): Promise<string> {
        /** x is declared to double check the correlation id */
        const x = Number((Math.random() * 10000).toFixed(0));
        this.logger.log(`Hello world from controller... ${x}`);
        return this.appService.getHello(x);
    }
}
