import {Injectable} from "@nestjs/common";


@Injectable()
export class StockXScrapperService {
    constructor(

    ) {

    }

    parse(url: string){
        const categories = this.parseCategories(url)
        const items = []
        categories.forEach(category => {
           items.push(this.parseItems(url, category))
        })
        return JSON.stringify(items)
    }

    parseCategories(url: string): string[]{
        return [
            `${url}/'category 1`,
            `${url}/'category 2`,
        ];
    }

    parseItems(url: string, category: string): string[]{
        return [
            `${url}/${category}/'Item-1`,
            `${url}/${category}/'Item-2`,
        ];
    }

    downloadImage(url: string, provider: string): string{
        return `${provider}: ${url}`;
    }
}