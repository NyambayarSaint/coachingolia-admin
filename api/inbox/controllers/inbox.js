const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'nyambayar.saint@gmail.com',
    pass: 'Popersia1997n'
  }
});

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.inbox.create(data, { files });
    } else {
      entity = await strapi.services.inbox.create(ctx.request.body);
    }

    try {
      // TO SEND EMAIL
      transporter.sendMail({
        from: 'nyambayar.saint@gmail.com',
        to: `shine.dagva@gmail.com, nyambayar.saint2@gmail.com, shine.dagva@coachingolia.com`,
        subject: entity.subject,
        html: entity.message
      }, function (error, info) {
        if (error) throw new Error(error)
        else console.log(info.response)
      });
    }
    catch (e) {
      console.log(e, 'fail');
    }
    return sanitizeEntity(entity, { model: strapi.models.inbox });
  },
};