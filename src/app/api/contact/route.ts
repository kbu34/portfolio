export async function POST (req: Request) {
    const body = await req.json()

    const mailData = {
        from: body.email,
        to: process.env.EMAIL_ADDRESS,
        subject: `Message From ${body.name}`,
        text: body.message,
        html: `<div>${body.message}</div>`
       }

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

    await transporter.sendMail(mailData, (err: any, info: any) => {
        if (err != null) {
            console.log("Error: " + err)
            return new Response("Email Failed", {status: 500})
        } else {
            return new Response("Email sent successfully", {status: 200})
        }
    });
    return new Response("Success", {status: 200})
}