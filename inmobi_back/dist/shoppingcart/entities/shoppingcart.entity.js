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
exports.Shoppingcart = void 0;
const appuser_entity_1 = require("../../appuser/entities/appuser.entity");
const house_entity_1 = require("../../house/entities/house.entity");
const typeorm_1 = require("typeorm");
let Shoppingcart = class Shoppingcart {
};
exports.Shoppingcart = Shoppingcart;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Shoppingcart.prototype, "id_shopcart", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Shoppingcart.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => appuser_entity_1.Appuser, appuser => appuser.shoppingCarts),
    __metadata("design:type", appuser_entity_1.Appuser)
], Shoppingcart.prototype, "appuser", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => house_entity_1.House, house => house.shoppingCarts),
    __metadata("design:type", house_entity_1.House)
], Shoppingcart.prototype, "house", void 0);
exports.Shoppingcart = Shoppingcart = __decorate([
    (0, typeorm_1.Entity)({ name: 'shopping_cart' })
], Shoppingcart);
//# sourceMappingURL=shoppingcart.entity.js.map