
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
};




// const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: 'nyambayar.saint@gmail.com',
//         pass: 'Popersia1997n'
//     }
// });


// module.exports = {
//     lifecycles: {
//         async beforeCreate(data) {
//             console.log(data, 'lalalararawerawr');
//             try {
//                 // TO SEND EMAIL
//                 transporter.sendMail({
//                     from: 'nyambayar.saint@gmail.com',
//                     to: `shine.dagva@gmail.com, nyambayar.saint2@gmail.com, shine.dagva@coachingolia.com`,
//                     subject: data.Subject,
//                     html: 'Нэр: ' + data.Firstname + ', Овог:' + data.Lastname + ', И-мэйл:' + data.Email + ', Утас:' + data.Phone + ', Message: ' + data.Message
//                 }, function (error, info) {
//                     if (error) throw new Error(error)
//                     else console.log(info.response)
//                 });
//             }
//             catch (e) {
//                 console.log(e, 'fail');
//             }
//         }
//     },
// };
