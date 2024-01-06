import Order from "../../../Models/Order";
import connectDB from "../../../Middleware/db";


connectDB();
export default async function handler(req, res) {
    if (req.method == 'POST') {
        let orders = new Order({
            email: req.body.email,
            orderId: req.body.orderId,
            address: req.body.address,
            amount: req.body.amount,
            products: req.body.products,
        })
        await orders.save()
        res.status(200).json({ success: true });
    }
    else {
        res.status(600).json({ success: false });
    }

}