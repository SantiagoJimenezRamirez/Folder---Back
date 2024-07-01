"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/Usuario.ts
const sequelize_1 = require("sequelize");
const Connection_1 = __importDefault(require("../Database/Connection"));
// Definir el modelo de Usuario
class Customer extends sequelize_1.Model {
}
// Inicializar el modelo de Usuario
Customer.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    comment: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nombre: '',
    createdAt: '',
    updatedAt: '',
    _attributes: '',
    dataValues: '',
    _creationAttributes: '',
    isNewRecord: '',
    sequelize: '',
    where: '',
    getDataValue: '',
    setDataValue: '',
    get: '',
    set: '',
    setAttributes: '',
    changed: '',
    previous: '',
    save: '',
    reload: '',
    validate: '',
    update: '',
    destroy: '',
    restore: '',
    increment: '',
    decrement: '',
    equals: '',
    equalsOneOf: '',
    toJSON: '',
    isSoftDeleted: '',
    _model: '',
    addHook: '',
    removeHook: '',
    hasHook: '',
    hasHooks: ''
}, {
    Connection: Connection_1.default, // pasamos la instancia de conexión
    tableName: 'usuarios',
});
exports.default = Customer;
