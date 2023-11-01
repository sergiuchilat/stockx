import {Controller, Get, Query} from "@nestjs/common";
import {FileManagerService} from "./services/file-manager.service";

@Controller()
export class FileManagerController {
    constructor(
        private readonly fileManagerService: FileManagerService
    ) {
    }

    @Get('file-manager/download')
    download(url: string): string{
        return url
    }

    @Get('file-manager/upload')
    upload(
        @Query('url') url: string,
        @Query('provider') provider: string
    ): string{
        return this.fileManagerService.upload(url, provider)
    }

    @Get('file-manager/delete')
    delete(url: string): string{
        return url
    }
}