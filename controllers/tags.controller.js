const { request, response } = require('express');
const TagMix = require('../database/models/tagsMixes');

const getAll = async (req = request, res = response) => {
  const tags = await TagMix.findAll({
    limit: 10,
  });
  console.log('Get all tags');
  console.log(tags);
  res.json({
    msg: tags,
  });
};

module.exports = { getAll };
