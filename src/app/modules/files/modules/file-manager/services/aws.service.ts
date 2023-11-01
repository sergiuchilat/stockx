import {Injectable} from "@nestjs/common";

@Injectable()
export class AWSService {
    upload(url: string): string{
        return `AWS: ${url}`
    }
}