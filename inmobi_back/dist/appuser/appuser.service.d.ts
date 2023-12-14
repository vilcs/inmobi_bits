import { CreateAppuserDto } from './dto/create-appuser.dto';
import { UpdateAppuserDto } from './dto/update-appuser.dto';
import { Repository } from 'typeorm';
import { Appuser } from './entities/appuser.entity';
export declare class AppuserService {
    private readonly appuserRepository;
    constructor(appuserRepository: Repository<Appuser>);
    create(createAppuserDto: CreateAppuserDto): Promise<Appuser>;
    findAll(): Promise<Appuser[]>;
    findOne(user_id: number): Promise<Appuser>;
    update(id: number, updateAppuserDto: UpdateAppuserDto): Promise<Appuser>;
    remove(id: number): Promise<Appuser>;
}
