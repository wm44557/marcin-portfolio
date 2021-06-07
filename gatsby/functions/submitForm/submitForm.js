const nodemailer = require('nodemailer');

function generateOrderEmail({ order, total }) {
  return `<div>
     super
    </div>`;
}

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 2525,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function wait(ms = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

exports.handler = async (event, context) => {
  await wait(2000);
  const body = JSON.parse(event.body);
  if (body.mapleSyrup) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'oooooooops' }),
    };
  }
  // validate data
  const requiredFields = ['email', 'title', 'description'];
  for (const field of requiredFields) {
    console.log(`Checking that ${field} is good`);
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! You are missing the ${field} field`,
        }),
      };
    }
  }
  if (!body.description.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Why would you send nothing`,
      }),
    };
  }
  const info = await transporter.sendMail({
    from: `${body.email} `,
    to: `marwrz36@gmail.com`,
    subject: 'New message!',
    html: `<div>${body.description}</div>`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};
