import { sequelize as db } from "../../../models";
const { Contact } = db.models;
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: false,
  auth: {
    user: "apadanaorder@gmail.com",
    pass: "apweb@123" // naturally, replace both with your real credentials or an application-specific password
  }
});
export default async (req, res) => {
  const { firstName, lastName, website, phoneNumber , information } = req.body;
  const result = await Contact.create(req.body);
  const mailOptions = {
    from: "apadanaorder@gmail.com",
    to: "a.hassssani@gmail.com",
    subject: "new order in apweb",
    html: `${firstName} ${lastName} / ${website} / ${phoneNumber} / <br/><hr/><br/> ${information}`
  };
  transporter.sendMail(mailOptions);
  return res.send(result);
};