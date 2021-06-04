'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Client.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    password: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    function: {
      type:  DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'client',
    modelName: 'Client',
  });
  return Client;
};