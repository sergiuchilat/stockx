import {Controller, Get, Query} from "@nestjs/common";
import {ImageProcessorService} from "./services/image-processor.service";

@Controller()
export class ImageProcessorController {
    constructor(
        private readonly imageProcessorService: ImageProcessorService
    ) {
    }

    @Get('image-processor/remove-bg')
    removeBackground(@Query('url') url: string): string{
        return this.imageProcessorService.removeBackground(url)
    }

    @Get('image-processor/remove-object')
    removeObject(@Query('url') url: string): string{
        return this.imageProcessorService.removeObject(url)
    }

    @Get('image-processor/resize')
    resize(@Query('url') url: string, @Query('size') size: string): string{
        return this.imageProcessorService.resize(url, size);
    }


}