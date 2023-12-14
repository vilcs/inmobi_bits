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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Macrodistrict = void 0;
const house_entity_1 = require("../../house/entities/house.entity");
const typeorm_1 = require("typeorm");
let Macrodistrict = class Macrodistrict {
};
exports.Macrodistrict = Macrodistrict;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Macrodistrict.prototype, "macrod_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', unique: true }),
    __metadata("design:type", String)
], Macrodistrict.prototype, "macrod_name", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => house_entity_1.House, (house) => house.macrodistrict),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", house_entity_1.House)
], Macrodistrict.prototype, "house", void 0);
exports.Macrodistrict = Macrodistrict = __decorate([
    (0, typeorm_1.Entity)({ name: 'macrodistrict' })
], Macrodistrict);
//# sourceMappingURL=macrodistrict.entity.js.map