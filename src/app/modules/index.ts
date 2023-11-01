import {FileManagerModule} from "./files/modules/file-manager/file-manager.module";
import {ScrapperModule} from "./scrapper/scrapper.module";
import {SchedulerModule} from "./scheduler/scheduler.module";
import {ImageProcessorModule} from "./files/modules/image-processor/image-processor.module";

export default [FileManagerModule, ScrapperModule, SchedulerModule, ImageProcessorModule];
