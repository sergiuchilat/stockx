import DbConfigInterface from "./db-config.interface";
import JwtConfigInterface from "./jwt-config.interface";

export default interface AppConfigInterface{
    db: DbConfigInterface;
    jwt: JwtConfigInterface
}