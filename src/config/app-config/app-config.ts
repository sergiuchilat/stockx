import AppConfigInterface from "./interfaces/app-config.interface";
import EnvConfigStrategy from "./strategies/env-config-strategy";
import DbConfigValidator from "./validators/db-config.validator";
import * as dotenv from 'dotenv';
dotenv.config();

export enum AppConfigStrategies {
    env = 'env',
    json = 'json'
}

class AppConfig {
    private static instance: AppConfig = null;

    private configStrategies = {
        'env': new EnvConfigStrategy()
    }
    
    private config: AppConfigInterface = {
        db: {
            host: null,
            port: null,
            user: null,
            password: null,
            name: null,
            driver: null
        },
        jwt: {
            secret: null,
            expiresIn: null
        }
    };

    public static getInstance(): AppConfig {
        return this.instance || (this.instance = new this());
    }

    private constructor() { }

    private validateConfig() {
        DbConfigValidator.validate(this.config.db)
    }

    public init(strategy: AppConfigStrategies) {
        this.config = this.configStrategies[strategy].getConfig();
        this.validateConfig();
    }

    public getConfig() {
        return this.config
    }
}

export default AppConfig.getInstance();