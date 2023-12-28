import { useRouter } from 'next/router'
import { useState } from 'react'
import Product from '../../../Models/Product'
import connectDB from '../../../Middleware/db'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Slug({ addToCart, product, variants }) {
    const router = useRouter()

    const [color, setcolor] = useState(product.color)
    const [size, setsize] = useState(product.size)

    const RefreshVariant = (newsize, newcolor) => {
        let url = `http://localhost:3000/Products/${variants[newcolor][newsize]['slug']}`
        window.location.href = url;
    }

    return (

        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="productimg lg:w-1/2 w-full lg:h-auto object-cover object-top" src={product.img} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">YoungLA</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                {Object.keys(variants).includes("BLACK") && Object.keys(variants["BLACK"]).includes(size) && <button onClick={() => { RefreshVariant(size, 'BLACK') }} className={`border-2  bg-black  w-5 h-5 focus:outline-none  ${color === 'BLACK' ? 'border-black' : 'border-gray-300'}`}></button>}
                                {Object.keys(variants).includes("BROWN") && Object.keys(variants["BROWN"]).includes(size) && <button onClick={() => { RefreshVariant(size, 'BROWN') }} className={`border-2  ml-1 bg-amber-950  w-5 h-5 focus:outline-none ${color === 'BROWN' ? 'border-black' : 'border-gray-300'}`}></button>}
                                {Object.keys(variants).includes("SKY") && Object.keys(variants["SKY"]).includes(size) && <button onClick={() => { RefreshVariant(size, 'SKY') }} className={`border-2  ml-1 bg-sky-500  w-5 h-5 focus:outline-none ${color === 'SKY' ? 'border-black' : 'border-gray-300'}`}></button>}
                                {Object.keys(variants).includes("SLATE") && Object.keys(variants["SLATE"]).includes(size) && <button onClick={() => { RefreshVariant(size, 'SLATE') }} className={`border-2  ml-1 bg-slate-600  w-5 h-5 focus:outline-none ${color === 'SLATE' ? 'border-black' : 'border-gray-300'}`}></button>}
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select value={size} onChange={(e) => { RefreshVariant(e.target.value, color) }} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        {Object.keys(variants[color]).includes('LARGE') && <option value={'LARGE'}>L</option>}
                                        {Object.keys(variants[color]).includes('S') && <option value={'S'}>S</option>}
                                        {Object.keys(variants[color]).includes('M') && <option value={'M'}>M</option>}
                                        {Object.keys(variants[color]).includes('XL') && <option value={'XL'}>XL</option>}
                                        {Object.keys(variants[color]).includes('XXL') && <option value={'XXL'}>XXL</option>}
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                            <button onClick={() => { addToCart(Slug, 1, product.price, product.title, size, color) }} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Checkout</button>
                            <button onClick={() => buyNow(Slug, 1, product.price, product.title, size, color)} className=" flex ml-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}


export async function getServerSideProps(context) {
    connectDB();
    let product = await Product.findOne({ slug: context.query.slug });
    let variants = await Product.find({ title: product.title, category: product.category });
    let colorsizeslug = {}
    for (let item of variants) {
        if (Object.keys(colorsizeslug).includes(item.color)) {
            colorsizeslug[item.color][item.size] = { slug: item.slug }
        }
        else {
            colorsizeslug[item.color] = {}
            colorsizeslug[item.color][item.size] = { slug: item.slug }
        }
    }

    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
            variants: JSON.parse(JSON.stringify(colorsizeslug))
        },
    }
}