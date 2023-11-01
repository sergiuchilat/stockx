import { Module} from '@nestjs/common';
import {ImageProcessorController} from "./image-processor.controller";
import {ImageProcessorService} from "./services/image-processor.service";
import {CloudinaryService} from "./services/cloudinary.service";
import {GoogleImagesService} from "./services/google-images.service";

@Module({
    imports: [],
    controllers: [ImageProcessorController],
    providers: [ImageProcessorService, CloudinaryService, GoogleImagesService]
})
export class ImageProcessorModule {
}
