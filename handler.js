'use strict';

module.exports.mailer = async event => {

  const referer = event.headers.referer || event.headers.Referer;

  if (!referer.match(/192\.168|beyondthebelt/i)) return { statusCode: 403 };

  const payload = JSON.parse(event.body).data;
  const sgMail = require('@sendgrid/mail');

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  const msg = {
    to: ['info@btbmartialarts.com'],
    from: 'noreply@aethercode.com',
    subject: 'New contact request received',
    html: '<strong>You have received a new contact request:</strong><br /><ul>' + Object.keys(payload).map(k => {
      return `<li><strong>${k}:</strong> ${payload[k]}</li>`;
    }).join("\n") + "</ul>",
  };

  await sgMail.send(msg);

  return {
    statusCode: 200,
     headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
      {
        message: 'Success!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
