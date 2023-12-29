import User from "../../../Models/User";
import connectDB from "../../../Middleware/db";

connectDB();
export default async function handler(req, res) {
    if (req.method == 'POST') {
        let user = await User.findOne({ "email": req.body.email })
        if (user) {
            if (req.body.email == user.email && req.body.password == user.password) {
                res.status(200).json({ success: "Success" });
            }
            else {
                res.status(400).json({ error: "error fetching details" });
            }
        }
    }
    else {
        res.status(600).json({ error: "internal server error" });
    }
}
