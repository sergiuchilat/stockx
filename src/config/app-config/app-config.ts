import AppConfigInterface from "./interfaces/app-config.interface";
import EnvConfigStrategy from "./strategies/env-config-strategy";
import AppConfigValidator from "./validators/app-config.validator";
import DbConfigValidator from "./validators/db-config.validator";
import * as dotenv from 'dotenv';
import DocsConfigValidator from "./validators/docs-config.validator";
import JsonPlainConfigStrategy from "./strategies/json-plain-config-strategy";
dotenv.config();

export enum AppConfigStrategies {
    env = 'env',
    json = 'json'
}

class AppConfig {
    private static instance: AppConfig = null;

    private configStrategies = {
        'env': new EnvConfigStrategy(),
        'json': new JsonPlainConfigStrategy()
    }
    
    private config: AppConfigInterface = {
        app: {
            port: null,
            requestTimeout: 0
        },
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
        },
        docs:{
            generate: false,
            path: null,
            version: null,
            title: null,
            description: null
        }
    };

    public static getInstance(): AppConfig {
        return this.instance || (this.instance = new this());
    }

    private constructor() { }

    private validateConfig() {
        DbConfigValidator.validate(this.config.db)
        AppConfigValidator.validate(this.config.app)
        DocsConfigValidator.validate(this.config.docs)
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