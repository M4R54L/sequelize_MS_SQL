const { DataTypes } = require('sequelize');
const { bdd } = require('../config');

const TagMix = bdd.define(
  'TagsMixes',
  {
    NamePc: {
      type: DataTypes.STRING,
    },
    NamePlc: {
      type: DataTypes.STRING,
    },
    TagDataType: {
      type: DataTypes.STRING,
    },
    StartPosition: {
      type: DataTypes.INTEGER,
    },
    FinalPosition: {
      type: DataTypes.INTEGER,
    },
    TagFunction: {
      type: DataTypes.STRING,
    },
    Value: {
      type: DataTypes.STRING,
    },
    Synchronization: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = TagMix;
