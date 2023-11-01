import {Get, Injectable} from "@nestjs/common";


@Injectable()
export class GoogleImagesService {
    constructor(

    ) {

    }
    removeObject(url: string): string{
        return `${url}--no-object`
    }
}