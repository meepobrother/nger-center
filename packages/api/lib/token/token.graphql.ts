import { Query } from '@nestjs/graphql';
import { Injectable, Controller } from '@nestjs/common';
import { ValidationError } from 'apollo-server-express';
interface TokenInput {
    grant_type: string;
    appid: string;
    secret: string;
}
interface TokenResult {
    access_token: string;
    expires_in: number;
}
@Controller()
export class TokenGraphql {
    @Query()
    async token(input: TokenInput): Promise<TokenResult> {
        throw new ValidationError(`invalid appid`)
    }
}