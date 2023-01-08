"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserMigration1673171080608 = void 0;
class updateUserMigration1673171080608 {
    constructor() {
        this.name = 'updateUserMigration1673171080608';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" ADD "isActive" boolean NOT NULL DEFAULT true`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isActive"`);
        });
    }
}
exports.updateUserMigration1673171080608 = updateUserMigration1673171080608;
//# sourceMappingURL=1673171080608-updateUserMigration.js.map