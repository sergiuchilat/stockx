import AppConfigInterface from "../interfaces/app-config.interface";
import { DbDriver } from "../interfaces/db-config.interface";

export default class EnvConfigStrategy {
    private config: AppConfigInterface = null

    constructor() {
        this.config = {
            db: {
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                name: process.env.DB_NAME,
                driver: DbDriver[process.env.DB_DRIVER]
            },
            jwt: {
                secret: process.env.JWT_SECRET,
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        }
    }

    public getConfig() {
        return this.config
    }

}