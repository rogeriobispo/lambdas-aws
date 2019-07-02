'use strict';
const thumbnailService = require('./service/thumbnailService');
module.exports.thumbnail = async (event) => {
    console.log("Evento do sns recebido com sucesso.", JSON.stringify(event));
    await thumbnailService.thumbnail(event);
    return { message: 'thumbnail gerado com sucesso!', event };
};