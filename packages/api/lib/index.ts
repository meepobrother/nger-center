import { Module } from "@nestjs/common";
import { HomeController } from "./constrollers/home.controller";

@Module({
    controllers: [HomeController]
})
export class NgerCenterApiModule { }