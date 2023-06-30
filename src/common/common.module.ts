import { Global, MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CorrelationIdMiddleware } from "./middleware/correlation-id.middleware";


@Global()
@Module({
    imports: [],
    providers: [],
    exports: [],
})
export class CommonModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CorrelationIdMiddleware).forRoutes("*"); //in this case every route
    }
}
