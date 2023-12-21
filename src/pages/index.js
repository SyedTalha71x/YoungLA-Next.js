import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { IoShirtSharp } from "react-icons/io5";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lifestyle Clothing Brand: YoungLA </title>
        <meta name='description' content='Youngla.com - Online Clothing Brand' />
        <link rel="icon" href="/mianlogo.jpg" />
      </Head>
      <div>
        <img src="/mainpage3.jpg" alt="" className={styles.pageimage} />
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2 text-gray-900">YoungLA - Clothing Brand</h1>
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
                    <button className="shirts-btn bg-black text-white font-semibold px-14 py-3 shadow-xl rounded-sm hover:bg-purple-50 hover:text-black my-2">Checkout</button>
                    </Link>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <IoShirtSharp />
                    </div>
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Men's Jeans</h2>
                    <button className="shirts-btn bg-black text-white font-semibold px-14 py-3 shadow-xl rounded-sm hover:bg-purple-50 hover:text-black my-2">Checkout</button>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <IoShirtSharp />
                    </div>
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Men's Trouser</h2>
                    <button className="shirts-btn bg-black text-white font-semibold px-14 py-3 shadow-xl rounded-sm hover:bg-purple-50 hover:text-black my-2">Checkout</button>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <IoShirtSharp /> 
                    </div>
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Men's Sweatshirt</h2>
                    <button className="shirts-btn bg-black text-white font-semibold px-14 py-3 shadow-xl rounded-sm hover:bg-purple-50 hover:text-black my-2">Checkout</button>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <IoShirtSharp />
                    </div>
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Men's Undergarments</h2>
                    <button className="shirts-btn bg-black text-white font-semibold px-14 py-3 shadow-xl rounded-sm hover:bg-purple-50 hover:text-black my-2">Checkout</button>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <IoShirtSharp />
                    </div>
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Other Accessories</h2>
                    <button className="shirts-btn bg-black text-white font-semibold px-14 py-3 shadow-xl rounded-sm hover:bg-purple-50 hover:text-black my-2">Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
