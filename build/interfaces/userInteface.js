"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesWithoutPassword = exports.RolesWithPassword = void 0;
var RolesWithPassword;
(function (RolesWithPassword) {
    RolesWithPassword["Admin"] = "admin";
    RolesWithPassword["Dealer"] = "dealer";
    RolesWithPassword["Business"] = "business";
})(RolesWithPassword || (exports.RolesWithPassword = RolesWithPassword = {}));
var RolesWithoutPassword;
(function (RolesWithoutPassword) {
    RolesWithoutPassword["Customer"] = "customer";
})(RolesWithoutPassword || (exports.RolesWithoutPassword = RolesWithoutPassword = {}));
