const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    email: { type: String, required: true },
    orderId: { type: String, required: true },
    paymentInfo: { type: String, default: '' },
    Products: [{
        productId: { type: String },
        quantity: { type: Number, default: 1 }
    }],
    Address: { type: String, required: true },
    Amount: { type: Number, required: true },
    Status: { type: String, default: "Pending", required: true },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("Order", OrderSchema);

