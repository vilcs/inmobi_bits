"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppuserModule = void 0;
const common_1 = require("@nestjs/common");
const appuser_service_1 = require("./appuser.service");
const appuser_controller_1 = require("./appuser.controller");
const typeorm_1 = require("@nestjs/typeorm");
const appuser_entity_1 = require("./entities/appuser.entity");
let AppuserModule = class AppuserModule {
};
exports.AppuserModule = AppuserModule;
exports.AppuserModule = AppuserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([appuser_entity_1.Appuser])],
        controllers: [appuser_controller_1.AppuserController],
        providers: [appuser_service_1.AppuserService],
    })
], AppuserModule);
//# sourceMappingURL=appuser.module.js.map