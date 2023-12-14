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
exports.House = void 0;
const location_entity_1 = require("../../location/entities/location.entity");
const macrodistrict_entity_1 = require("../../macrodistrict/entities/macrodistrict.entity");
const shoppingcart_entity_1 = require("../../shoppingcart/entities/shoppingcart.entity");
const typeorm_1 = require("typeorm");
let House = class House {
};
exports.House = House;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], House.prototype, "house_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], House.prototype, "house_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], House.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], House.prototype, "direction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], House.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => macrodistrict_entity_1.Macrodistrict, (macrodistrict) => macrodistrict.house),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", macrodistrict_entity_1.Macrodistrict)
], House.prototype, "macrodistrict", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => shoppingcart_entity_1.Shoppingcart, (shoppingCart) => shoppingCart.house),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], House.prototype, "shoppingCarts", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => location_entity_1.Location, (location) => location.house),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", location_entity_1.Location)
], House.prototype, "location", void 0);
exports.House = House = __decorate([
    (0, typeorm_1.Entity)({ name: 'house' })
], House);
//# sourceMappingURL=house.entity.js.map