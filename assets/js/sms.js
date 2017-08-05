var accountSid = 'AC6db6a30291d12b8d6c44c4d71885f5b3'; // Your Account SID from www.twilio.com/console
var authToken = '96b991672e75a2f878b7c998bbe45a15';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
 
client.messages.create({
  from: "+12248777213",
  to: "+13122869811",
  body: "Your table is ready! Ba-Ba-BOP!!! *FLARE*"
}, function(err, message) {
  if(err) {
    console.error(err.message);
  }
});

module.exports = sms;