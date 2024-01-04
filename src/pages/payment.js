import React, { useState } from 'react'
import Link from 'next/link'
import { Montserrat } from 'next/font/google';


const montserrat = Montserrat({
    weight: '500',
    subsets: ['latin'],
});


const payment = () => {
    const [cardholder, setcardholder] = useState('')
    const [cardno, setcardno] = useState('')
    const [cardexpiry, setcardexpiry] = useState('')
    const [cardcvc, setcardcvc] = useState('')

    const handleChange = (e) => {
        if (e.target.name == 'cardholder') {
            setcardholder(e.target.value);
        }
        else if (e.target.name == 'cardno') {
            setcardno(e.target.value);
        }
        else if (e.target.name == 'cardexpiry') {
            setcardexpiry(e.target.value);
        }
        else if (e.target.name == 'cardcvc') {
            setcardcvc(e.target.value);
        }

    }

    return (
        <div className={montserrat.className}>
            <div className="max-w-md mx-auto bg-gray-100 shadow-md  overflow-hidden mt-16 h-full">
                <div className="bg-black text-white p-4 flex justify-between">
                    <div className="font-medium text-lg">Credit/Debit Card</div>
                    <div className="text-lg"><i className="fab fa-cc-visa"></i></div>
                </div>
                <form action="">
                    <div className="p-6">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" for="card_number">
                                Card Number
                            </label>
                            <input onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cardno" name='cardno' value={cardno} type="text" placeholder="xxxx xxxx xxxx xxxx" />
                        </div>
                        <div className="mb-4 flex justify-between">
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" for="expiration_date">
                                    Expiry
                                </label>
                                <input onChange={handleChange}
                                    className="shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="cardexpiry" name='cardexpiry' value={cardexpiry} type="text" placeholder="MM/YY" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" for="cvv">
                                    CVC
                                </label>
                                <input onChange={handleChange}
                                    className="shadow appearance-none border rounded w-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="cardcvc" name='cardcvc' value={cardcvc} type="text" placeholder="XXX" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" for="name_on_card">
                                Card Holder
                            </label>
                            <input onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cardholder" name='cardholder' value={cardholder} type="text" placeholder="John Doe" />
                        </div>
                        <Link href={"/finalsummary"}
                            className="flex justify-center items-center w-full mb-4 mt-4 bg-black text-white py-3   font-medium focus:outline-none focus:shadow-outline">Proceed To Pay
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default payment