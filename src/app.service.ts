import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class AppService {
    private readonly logger: Logger = new Logger(AppService.name);
    async getHello(x: number): Promise<string> {
        this.logger.log(`Hello world from service... ${x}`);

        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                this.logger.log(`Hello inside the promise.. ${x}`);
                resolve("gethello from promise");
            }, x);
        });
    }
}
