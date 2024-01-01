import Product from "../../../Models/Product";
import connectDB from "../../../Middleware/db";

connectDB();
export default async function handler(req, res) {
    if (req.method === 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let product = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                img2: req.body[i].img2,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                availableqty: req.body[i].availableqty,
            })
            await product.save()
            res.status(200).json({ success: "Success" });
        }
    }
    else {
        res.status(600).json({ error: "Error Occured while adding products" });
    }
}
