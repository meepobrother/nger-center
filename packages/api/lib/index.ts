import { Module } from "@nestjs/common";
import { HomeController } from "./constrollers/home.controller";
import { TokenGraphql } from "./token/token.graphql";
import { GraphQLModule } from '@nestjs/graphql';
import { join } from "path";
@Module({
    imports: [
        GraphQLModule.forRootAsync({
            useFactory: () => {
                return {
                    typePaths: [join(__dirname, 'assets/magnus.server.graphql')]
                }
            }
        })
    ],
    controllers: [HomeController],
    providers: [TokenGraphql]
})
export class NgerCenterApiModule { }