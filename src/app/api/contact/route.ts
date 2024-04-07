export async function POST (req: Request) {
    const body = await req.json()

    const mailData = {
        from: body.email,
        to: process.env.EMAIL_ADDRESS,
        subject: `Message From ${body.name}`,
        text: body.message,
        html: `<div>${body.message}</div>`
       }

    const resp = await wrapedSendMail(mailData)
    if (resp) {
        return new Response("Message sent", {status: 200})
    } else {
        return new Response("Something went wrong", {status: 500})
    }
}

async function wrapedSendMail(maildata: any) {
    return new Promise((resolve, reject) =>{
        let nodemailer = require('nodemailer')
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
              user: process.env.EMAIL_ADDRESS,
              pass: process.env.EMAIL_PASSWORD,
            },
            secure: true,
        })

        transporter.sendMail(maildata, (err: any, info: any) => {
            if (err != null) {
                console.log("Error: " + err)
                resolve(false)
            } else {
                resolve(true)
            }
        });
    })
}