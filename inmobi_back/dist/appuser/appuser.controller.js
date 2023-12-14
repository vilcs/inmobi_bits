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
exports.AppuserController = void 0;
const common_1 = require("@nestjs/common");
const appuser_service_1 = require("./appuser.service");
const create_appuser_dto_1 = require("./dto/create-appuser.dto");
const update_appuser_dto_1 = require("./dto/update-appuser.dto");
let AppuserController = class AppuserController {
    constructor(appuserService) {
        this.appuserService = appuserService;
    }
    create(createAppuserDto) {
        return this.appuserService.create(createAppuserDto);
    }
    findAll() {
        return this.appuserService.findAll();
    }
    findOne(id) {
        return this.appuserService.findOne(+id);
    }
    update(id, updateAppuserDto) {
        return this.appuserService.update(+id, updateAppuserDto);
    }
    remove(id) {
        return this.appuserService.remove(+id);
    }
};
exports.AppuserController = AppuserController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_appuser_dto_1.CreateAppuserDto]),
    __metadata("design:returntype", void 0)
], AppuserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppuserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppuserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_appuser_dto_1.UpdateAppuserDto]),
    __metadata("design:returntype", void 0)
], AppuserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppuserController.prototype, "remove", null);
exports.AppuserController = AppuserController = __decorate([
    (0, common_1.Controller)('appuser'),
    __metadata("design:paramtypes", [appuser_service_1.AppuserService])
], AppuserController);
//# sourceMappingURL=appuser.controller.js.map