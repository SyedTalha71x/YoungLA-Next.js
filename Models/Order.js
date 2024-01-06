const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    email: { type: String, required: true },
    orderId: { type: String, required: true },
    paymentInfo: { type: String, default: 'pending' },
    products: { type: Object, required: true },
    address: { type: String, required: true },
    amount: { type: Number, required: true },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("Order", OrderSchema);

