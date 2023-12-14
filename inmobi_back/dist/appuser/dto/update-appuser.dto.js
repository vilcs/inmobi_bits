"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppuserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_appuser_dto_1 = require("./create-appuser.dto");
class UpdateAppuserDto extends (0, mapped_types_1.PartialType)(create_appuser_dto_1.CreateAppuserDto) {
}
exports.UpdateAppuserDto = UpdateAppuserDto;
//# sourceMappingURL=update-appuser.dto.js.map