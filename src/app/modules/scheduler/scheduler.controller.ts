import {Controller, Get, Query} from "@nestjs/common";
import {SchedulerService} from "./services/scheduler.service";
import {FileManagerService} from "../files/modules/file-manager/services/file-manager.service";
import {ImageProcessorService} from "../files/modules/image-processor/services/image-processor.service";

@Controller()
export class SchedulerController {
    constructor(
        private readonly schedulerService: SchedulerService,
        private readonly fileManagerService: FileManagerService,
        private readonly imageProcessor: ImageProcessorService
    ) {
    }

    @Get('scheduler/parse')
    parseItems(): string{
        return this.schedulerService.parse('https://stockx.com')
    }

    @Get('scheduler/download-images')
    downloadImages(){
        const outdatedImages = [
            'https://images.stockx.com/1',
            'https://images.stockx.com/1',
            'https://images.stockx.com/1',
            'https://images.stockx.com/1'
        ];
        const fileManagerProvider = 'aws';

        const sizes = ['200x200', '300x300']

        const downloadedImages= this.fileManagerService.downloadMultiple(outdatedImages, fileManagerProvider)
        downloadedImages.forEach(imageUrl => {
            downloadedImages.push(this.imageProcessor.removeBackground(imageUrl))
            sizes.forEach(size => {
                downloadedImages.push(this.imageProcessor.resize(imageUrl, size))
            })
        })
        return downloadedImages;
    }
}