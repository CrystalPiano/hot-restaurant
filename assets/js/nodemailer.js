var nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'username@example.com',
        pass: 'userpass'
    }
});


let mailOptions = {
    from: '"Hot Restaurant 👻" <username@example.com>',
    to: 'user@example.com',
    subject: 'Ba-Ba-Bop!',
    text: 'Your table is ready! *FLARE*',
    html: '<b>Your table is ready! *FLARE*</b>'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});