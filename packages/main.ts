import { NestFactory } from '@nestjs/core';
import { NgerCenterApiModule } from '@nger/center.api';

export async function bootstrap() {

    const app = await NestFactory.create(NgerCenterApiModule)

    app.listen(9000)
}
bootstrap()