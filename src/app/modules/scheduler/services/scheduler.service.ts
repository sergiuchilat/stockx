import {Injectable} from "@nestjs/common";
import {StockXScrapperService} from "../../scrapper/services/stock-x-scrapper.service";


@Injectable()
export class SchedulerService {
    private activeJob: boolean = false;
    constructor(
        private readonly scrapperService: StockXScrapperService
    ) {

    }
    parse(url: string): string{
        return this.scrapperService.parse(url)
    }
}