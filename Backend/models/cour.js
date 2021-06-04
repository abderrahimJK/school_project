'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return {...this.get(), id: undefined, uuid: undefined}
    }
  };
  Cour.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    filiere:{ 
      type:  DataTypes.STRING,
      allowNull: false
    },
    titreCour:{
      type:  DataTypes.STRING,
      allowNull: false
    },
    semestre: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    pdf: {
      type:  DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cours',
    modelName: 'Cour',
  });
  return Cour;
};