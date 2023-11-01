import {Get, Injectable} from "@nestjs/common";


@Injectable()
export class CloudinaryService {
    constructor(

    ) {

    }
    removeBackground(url: string): string{
        return `${url}--no-bg`
    }
}