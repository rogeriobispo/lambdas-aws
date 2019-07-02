'use strict';
const filterService = require('./service/filterService');
module.exports.filter = async (event) => {
  console.log("Evento do sns recebido com sucesso.", JSON.stringify(event));
  await filterService.filter(event);
  return { message: 'filter gerado com sucesso!', event };
};