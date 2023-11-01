import {Injectable} from "@nestjs/common";

@Injectable()
export class DigitalOceanService {
    upload(url: string): string{
        return `DO: ${url}`
    }
}