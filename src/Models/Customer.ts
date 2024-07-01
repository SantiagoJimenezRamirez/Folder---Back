// src/models/Usuario.ts
import { DataTypes, Model, Optional } from 'sequelize';
import Connection from '../Database/Connection';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone : string;
  comment : string;
}


interface CustomerCreation extends Optional<Customer, 'id'> {}

// Definir el modelo de Usuario
class Customer extends Model<Customer, CustomerCreation> implements Customer {
  public id!: number;
  public nombre!: string;
  public email!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo de Usuario
Customer.init(
  {
      id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      phone: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      comment: {
          type: DataTypes.STRING,
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
  },
  {
    Connection, // pasamos la instancia de conexión
    tableName: 'usuarios',
  }
);

export default Customer;
