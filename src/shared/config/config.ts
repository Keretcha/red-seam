import * as dotenv from 'dotenv';
import { IApiConfig } from './types/interfaces/api-config.interface';
dotenv.config();

export const API_CONFIG: IApiConfig = {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
}