import {Controller, Get, Query} from "@nestjs/common";
import {StockXScrapperService} from "./services/stock-x-scrapper.service";

@Controller()
export class ScrapperController {
    constructor(
        private readonly scrapperService: StockXScrapperService
    ) {
    }

    @Get('scrapper/get-categories')
    getCategories(): string{
        return 'parse categories'
    }

    @Get('scrapper/get-items')
    getItems(): string{
        return 'parse items'
    }

    @Get('scrapper/get-image')
    getImage(
        @Query('url') url: string,
        @Query('provider') provider: string
    ): string{
        return this.scrapperService.downloadImage(url, provider)
    }

}