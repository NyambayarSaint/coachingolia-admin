const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.inbox.create(data, { files });
    } else {
      entity = await strapi.services.inbox.create(ctx.request.body);
    }
    console.log(entity,'entity');
    // await strapi.plugins['email'].services.email.send({
    //     to: 'shine.dagva@coachingolia.com, nyambayar.saint@gmail.com',
    //     from: 'no-reply@strapi.io',
    //     subject: entity.subject,
    //     text: entity.message
    // });
    return sanitizeEntity(entity, { model: strapi.models.inbox });
  },
};