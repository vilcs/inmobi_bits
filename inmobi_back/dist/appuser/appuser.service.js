"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppuserService = void 0;
const common_1 = require("@nestjs/common");
const update_appuser_dto_1 = require("./dto/update-appuser.dto");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const appuser_entity_1 = require("./entities/appuser.entity");
let AppuserService = class AppuserService {
    constructor(appuserRepository) {
        this.appuserRepository = appuserRepository;
    }
    async create(createAppuserDto) {
        const appuser = this.appuserRepository.create(createAppuserDto);
        return await this.appuserRepository.save(appuser);
    }
    async findAll() {
        return await this.appuserRepository.find();
    }
    async findOne(id) {
        return await this.appuserRepository.findOne({ where: { id } });
    }
    async update(id, updateAppuserDto) {
        const appuser = await this.findOne(id);
        if (!appuser) {
            throw new common_1.NotFoundException();
        }
        Object.assign(appuser, update_appuser_dto_1.UpdateAppuserDto);
        return await this.appuserRepository.save(appuser);
    }
    async remove(id) {
        const appuser = await this.findOne(id);
        if (!appuser) {
            throw new common_1.NotFoundException();
        }
        Object.assign(appuser, update_appuser_dto_1.UpdateAppuserDto);
        return await this.appuserRepository.remove(appuser);
    }
};
exports.AppuserService = AppuserService;
exports.AppuserService = AppuserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(appuser_entity_1.Appuser)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppuserService);
//# sourceMappingURL=appuser.service.js.map