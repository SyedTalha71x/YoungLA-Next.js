import User from "../../../Models/User";
import connectDB from "../../../Middleware/db";

connectDB();
export default async function handler(req, res) {
    if (req.method === 'POST') {
        let u = new User(req.body);
        await u.save();
        res.status(200).json({ success: "Success" });
    }
    else {
        res.status(600).json({ error: "Error Occured while adding products" });
    }
}
