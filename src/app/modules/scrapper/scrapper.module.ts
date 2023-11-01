import { Module} from '@nestjs/common';
import {ScrapperController} from "./scrapper.controller";
import {StockXScrapperService} from "./services/stock-x-scrapper.service";

@Module({
    imports: [],
    controllers: [ScrapperController],
    providers: [StockXScrapperService]
})
export class ScrapperModule {
}
