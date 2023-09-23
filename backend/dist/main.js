"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log(process.env.FRONTEND_URL);
    app.enableCors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization'],
        methods: ['GET'],
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map