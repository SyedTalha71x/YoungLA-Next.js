import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { IoShirtSharp } from "react-icons/io5";
import Link from 'next/link';
import { Roboto } from 'next/font/google'
import { Montserrat } from 'next/font/google';
import connectDB from '../../Middleware/db';
import Product from '../../Models/Product';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
});

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }) {
  return (
    <div>
      <div>
        <img src="https://www.youngla.com/cdn/shop/files/12.13.23_Launch_Desktop_1600x.jpg?v=1702490532" alt="" className={styles.imagepage} />
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <div className={montserrat.className}>
                  <h1 className="sm:text-3xl uppercase text-2xl font-semibold title-font mb-2 text-gray-700">YoungLA - Clothing Brand</h1>
                </div>
                <p className="lg:w-2/3 w-full leading-relaxed text-gray-500">OUR COMMITMENT TO OUR CUSTOMERS BEGINS BEFORE OUR PRODUCT HITS THE MARKET. SINCE WE PRIORITIZE CUSTOMER SATISFACTION, WE SPEND AT LEAST TWO MONTHS TESTING THE CLOTHING BEFORE RELEASING IT. OUR AIM IS TO CREATE LONG LASTING RELATIONSHIPS WITH OUR CUSTOMERS.</p>
              </div>
              <div className="flex flex-wrap -m-4 md:flex justify-center items-center text-center">
                <div className="xl:w-1/3 md:w-1/2 p-4 md:m-auto">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <IoShirtSharp />
                    </div>
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2 ">Men's Shirts</h2>
                    <Link href={"/tshirts"}>
                      <div className={montserrat.className}>
                        <button className="shirts-btn bg-black text-white uppercase font-medium px-14 py-3 shadow-xl  hover:bg-purple-50 hover:text-black my-2">Checkout</button>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <IoShirtSharp />
                    </div>
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Men's Jeans</h2>

                    <Link href={"/jeans"}>
                      <div className={montserrat.className}>
                        <button className="shirts-btn bg-black text-white uppercase font-medium px-14 py-3 shadow-xl  hover:bg-purple-50 hover:text-black my-2">Checkout</button>
                      </div>
                    </Link>

                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <IoShirtSharp />
                    </div>
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Men's Joggers</h2>
                    <Link href={"/trouser"}>
                      <div className={montserrat.className}>
                        <button className="shirts-btn bg-black text-white uppercase font-medium px-14 py-3 shadow-xl  hover:bg-purple-50 hover:text-black my-2">Checkout</button>
                      </div>

                    </Link>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <IoShirtSharp />
                    </div>
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Men's Sweatshirt</h2>
                    <Link href={"/sweatshirt"}>
                      <div className={montserrat.className}>
                        <button className="shirts-btn bg-black text-white uppercase font-medium px-14 py-3 shadow-xl  hover:bg-purple-50 hover:text-black my-2">Checkout</button>
                      </div>

                    </Link>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <IoShirtSharp />
                    </div>
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Men's Undergarments</h2>
                    <Link href={"/undergarments"}>
                      <div className={montserrat.className}>
                        <button className="shirts-btn bg-black text-white uppercase font-medium px-14 py-3 shadow-xl  hover:bg-purple-50 hover:text-black my-2">Checkout</button>
                      </div>

                    </Link>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4 ">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <IoShirtSharp />
                    </div>
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Other Accessories</h2>
                    <Link href={"/other"}>
                      <div className={montserrat.className}>
                        <button className="shirts-btn bg-black text-white uppercase font-medium px-14 py-3 shadow-xl  hover:bg-purple-50 hover:text-black my-2">Checkout</button>
                      </div>

                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section class="text-gray-600 body-font cursor-pointer text-center">
        <div className={montserrat.className}>
          <h2 className='main_heading text-center text-2xl w-3/4 m-auto py-2 shadow-2xl   font-medium uppercase bg-black text-white '>New Arrivals</h2>
        </div>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4" >
            {Object.keys(products).map((k) => {
              return <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={products[k]._id}>
                <Link href={`/Products/${products[k].slug}`} class="block relative rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={products[k].img} />
                </Link>
                <div class="mt-4">
                  <Link href={`/Products/${products[k].slug}`}>
                    <h2 class="text-gray-900 title-font text-center text-md font-medium">{products[k].title}</h2>
                  </Link>
                  <p class="mt-1">${products[k].price}</p>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>
    </div>

  )
}
export async function getServerSideProps() {
  connectDB();
  const products = await Product.find({ category: 'newarrivals' });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}
