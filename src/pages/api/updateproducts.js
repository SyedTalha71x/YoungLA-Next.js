import Product from "../../../Models/Product";
import connectDB from "../../../Middleware/db";

connectDB();
export default async function handler(req, res) {
    if (req.method === 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }
        res.status(200).json({ success: "Success" });
    }
    else {
        res.status(600).json({ error: "Error Occured while updating products" });
    }
}
