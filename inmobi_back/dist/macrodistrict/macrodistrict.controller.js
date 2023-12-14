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
exports.MacrodistrictController = void 0;
const common_1 = require("@nestjs/common");
const macrodistrict_service_1 = require("./macrodistrict.service");
const create_macrodistrict_dto_1 = require("./dto/create-macrodistrict.dto");
const update_macrodistrict_dto_1 = require("./dto/update-macrodistrict.dto");
let MacrodistrictController = class MacrodistrictController {
    constructor(macrodistrictService) {
        this.macrodistrictService = macrodistrictService;
    }
    create(createMacrodistrictDto) {
        return this.macrodistrictService.create(createMacrodistrictDto);
    }
    findAll() {
        return this.macrodistrictService.findAll();
    }
    findOne(id) {
        return this.macrodistrictService.findOne(+id);
    }
    update(id, updateMacrodistrictDto) {
        return this.macrodistrictService.update(+id, updateMacrodistrictDto);
    }
    remove(id) {
        return this.macrodistrictService.remove(+id);
    }
};
exports.MacrodistrictController = MacrodistrictController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_macrodistrict_dto_1.CreateMacrodistrictDto]),
    __metadata("design:returntype", void 0)
], MacrodistrictController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MacrodistrictController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MacrodistrictController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_macrodistrict_dto_1.UpdateMacrodistrictDto]),
    __metadata("design:returntype", void 0)
], MacrodistrictController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MacrodistrictController.prototype, "remove", null);
exports.MacrodistrictController = MacrodistrictController = __decorate([
    (0, common_1.Controller)('macrodistrict'),
    __metadata("design:paramtypes", [macrodistrict_service_1.MacrodistrictService])
], MacrodistrictController);
//# sourceMappingURL=macrodistrict.controller.js.map