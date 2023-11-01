import { Module} from '@nestjs/common';
import {SchedulerController} from "./scheduler.controller";
import {SchedulerService} from "./services/scheduler.service";
import {StockXScrapperService} from "../scrapper/services/stock-x-scrapper.service";
import {FileManagerService} from "../files/modules/file-manager/services/file-manager.service";
import {DigitalOceanService} from "../files/modules/file-manager/services/digital-ocean.service";
import {AWSService} from "../files/modules/file-manager/services/aws.service";
import {ImageProcessorService} from "../files/modules/image-processor/services/image-processor.service";
import {GoogleImagesService} from "../files/modules/image-processor/services/google-images.service";
import {CloudinaryService} from "../files/modules/image-processor/services/cloudinary.service";

@Module({
    imports: [],
    controllers: [SchedulerController],
    providers: [SchedulerService, StockXScrapperService, FileManagerService, DigitalOceanService, AWSService, ImageProcessorService, CloudinaryService, GoogleImagesService]
})
export class SchedulerModule {
}
