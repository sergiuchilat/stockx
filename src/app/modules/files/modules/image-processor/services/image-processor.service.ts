import {Get, Injectable} from "@nestjs/common";
import {CloudinaryService} from "./cloudinary.service";
import {GoogleImagesService} from "./google-images.service";
import {AllowedFormats} from "../../../enums/allowed.formats.enum";


@Injectable()
export class ImageProcessorService {

    private allowedFormats: AllowedFormats[] = [
        AllowedFormats.JPG,
        AllowedFormats.PNG
    ]
    constructor(
        private readonly cloudinaryService: CloudinaryService,
        private readonly googleImagesService: GoogleImagesService
    ) {

    }

    removeBackground(url: string): string{
        return this.cloudinaryService.removeBackground(url);
    }

    removeObject(url: string): string{
        return this.googleImagesService.removeObject(url);
    }


    resize(url: string, size: string): string{
        return `${url}--size-${size}{`
    }
}