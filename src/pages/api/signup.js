import User from "../../../Models/User";
import connectDB from "../../../Middleware/db";
var CryptoJS = require("crypto-js");

connectDB();
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, password } = req.body;
        let u = new User({ name, email, password: CryptoJS.AES.encrypt(req.body.password, 'DoNtRuN$6w7s').toString() });
        await u.save();
        res.status(200).json({ success: "Success" });
    }
    else {
        res.status(600).json({ error: "Error Occured while signing up" });
    }
}
