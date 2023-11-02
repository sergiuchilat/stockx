import AppConfigInterface from "../interfaces/app-config.interface";
import { DbDriver } from "../interfaces/db-config.interface";
const isValidHostname = require('is-valid-hostname')

export default class DbConfigValidator {

    private static validateConfig(db: AppConfigInterface['db']){
        if (!db) {
            throw new Error('Invalid db config')
        }
    }

    private static validateDriver(driver: DbDriver) {
        if(!Object.values(DbDriver).includes(driver)){
            throw new Error('Invalid db driver')
        }
    }

    private static validateHost(host: string) {
        if (!host || !isValidHostname(host)) {
            throw new Error('Invalid db host')
        }
    }

    private static validatePort(port: string) { 
        //const regex = new RegExp('^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))$');
        if (!port/* || regex.test(port)*/) {
            throw new Error('Invalid db port')
        }
    }

    private static validateUser(user: string) {
        if (!user) {
            throw new Error('Invalid db user')
        }
    }

    private static validatePassword(password: string) {
        if (!password) {
            throw new Error('Invalid db password')
        }
    }
    
    private static validateName(name: string) {
        if (!name) {
            throw new Error('Invalid db name')
        }
    }
    
    public static validate(db: AppConfigInterface['db']) {
        DbConfigValidator.validateConfig(db)
        DbConfigValidator.validateDriver(db.driver)
        DbConfigValidator.validateHost(db.host)
        DbConfigValidator.validatePort(db.port)
        DbConfigValidator.validateUser(db.user)
        DbConfigValidator.validatePassword(db.password)
        DbConfigValidator.validateName(db.name)
    }
}