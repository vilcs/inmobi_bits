import { AppuserService } from './appuser.service';
import { CreateAppuserDto } from './dto/create-appuser.dto';
import { UpdateAppuserDto } from './dto/update-appuser.dto';
export declare class AppuserController {
    private readonly appuserService;
    constructor(appuserService: AppuserService);
    create(createAppuserDto: CreateAppuserDto): Promise<import("./entities/appuser.entity").Appuser>;
    findAll(): Promise<import("./entities/appuser.entity").Appuser[]>;
    findOne(id: string): Promise<import("./entities/appuser.entity").Appuser>;
    update(id: string, updateAppuserDto: UpdateAppuserDto): Promise<import("./entities/appuser.entity").Appuser>;
    remove(id: string): Promise<import("./entities/appuser.entity").Appuser>;
}
