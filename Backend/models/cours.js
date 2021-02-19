'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cours extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON(){
      return {...this.get(), id: undefined, numcour: undefined}
    }
  };
  cours.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    numcour: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nomfiliere:{ 
      type:  DataTypes.STRING,
      allowNull: false
    },
    nomcour:{
      type:  DataTypes.STRING,
      allowNull: false
    },
    urlcour: {
      type:  DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cours',
    modelName: 'cours',
  });
  return cours;
};