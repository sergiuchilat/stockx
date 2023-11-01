import { Module} from '@nestjs/common';
import {FileManagerController} from "./file-manager.controller";
import {FileManagerService} from "./services/file-manager.service";
import {DigitalOceanService} from "./services/digital-ocean.service";
import {AWSService} from "./services/aws.service";

@Module({
    imports: [],
    controllers: [FileManagerController],
    providers: [FileManagerService, DigitalOceanService, AWSService]
})
export class FileManagerModule{
}
