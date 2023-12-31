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
exports.Appuser = void 0;
const shoppingcart_entity_1 = require("../../shoppingcart/entities/shoppingcart.entity");
const typeorm_1 = require("typeorm");
let Appuser = class Appuser {
};
exports.Appuser = Appuser;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Appuser.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', unique: true }),
    __metadata("design:type", String)
], Appuser.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Appuser.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Appuser.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Appuser.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], Appuser.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], Appuser.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => shoppingcart_entity_1.Shoppingcart, shoppingCart => shoppingCart.appuser),
    __metadata("design:type", Array)
], Appuser.prototype, "shoppingCarts", void 0);
exports.Appuser = Appuser = __decorate([
    (0, typeorm_1.Entity)({ name: 'appuser' })
], Appuser);
//# sourceMappingURL=appuser.entity.js.map