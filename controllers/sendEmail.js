
const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')


const sendEmailEthreal = async (req, res) => {

    let testAccount = await nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'bradford.rau59@ethereal.email',
        pass: 'T8NP7u5RhTnd5xWKJZ'
    }
});


  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <jerrinmachu@gmail.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Sending Email using Node js", // Subject line
    text: "Hello world?", // plain text body
    html: "<h2>Sending Emails with Nodejs</h2>", // html body
  });


    res.json(info)
}



const sendEmail = async(req, res) => {
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    
    const msg = {
  to: 'jerrinmachu@gmail.com', // Change to your recipient
  from: 'jerrinjobhunt@gmail.com', // Change to your verified sender
  subject: 'Sending Email with Nodejs',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

const info = await sgMail.send(msg)
res.json(info)
}






module.exports = sendEmail