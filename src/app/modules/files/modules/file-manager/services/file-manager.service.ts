import {Injectable} from "@nestjs/common";
import {DigitalOceanService} from "./digital-ocean.service";
import {AWSService} from "./aws.service";
import {AllowedFormats} from "../../../enums/allowed.formats.enum";

@Injectable()
export class FileManagerService {
    private providers = {
        do: null,
        aws: null
    };

    private allowedFormats: AllowedFormats[] = [
        AllowedFormats.JPG,
        AllowedFormats.PNG
    ]
    constructor(
        private readonly doService: DigitalOceanService,
        private readonly awsService: AWSService
    ) {
        this.providers.do = doService;
        this.providers.aws = awsService;
    }
    upload(url: string, provider: string): string{
        return this.providers[provider].upload(url);
    }

    download(url: string, provider: string): string{
        return this.providers[provider].upload(url);
    }

    downloadMultiple(urls: string[], provider: string): string[]{
        const downloadedImages = [];
        urls.forEach(url => {
            downloadedImages.push(this.download(url, provider));
        })

        return downloadedImages;
    }
}