import Product from "../../../Models/Product";
import connectDB from "../../../Middleware/db";

connectDB();

const handler = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ tshirts });

    }
    catch (error) {
        console.log("Error while fetching products" + error);
        res.status(200).json({ error: "error while fetching products" });
    }
}

export default handler;