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
        <img src="https://www.youngla.com/cdn/shop/files/12.13.23_Launch_Desktop_1600x.jpg?v=1702490532" alt="" />
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

                    <Link href={"/jeans"}>
                      <button className="shirts-btn bg-black text-white font-semibold px-14 py-3 shadow-xl rounded-sm hover:bg-purple-50 hover:text-black my-2">Checkout</button>
                    </Link>

                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <IoShirtSharp />
                    </div>
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Men's Trouser</h2>
                    <Link href={"/trouser"}>
                      <button className="shirts-btn bg-black text-white font-semibold px-14 py-3 shadow-xl rounded-sm hover:bg-purple-50 hover:text-black my-2">Checkout</button>

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
                      <button className="shirts-btn bg-black text-white font-semibold px-14 py-3 shadow-xl rounded-sm hover:bg-purple-50 hover:text-black my-2">Checkout</button>

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
                      <button className="shirts-btn bg-black text-white font-semibold px-14 py-3 shadow-xl rounded-sm hover:bg-purple-50 hover:text-black my-2">Checkout</button>

                    </Link>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      <IoShirtSharp />
                    </div>
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Other Accessories</h2>
                    <Link href={"/other"}>
                      <button className="shirts-btn bg-black text-white font-semibold px-14 py-3 shadow-xl rounded-sm hover:bg-purple-50 hover:text-black my-2">Checkout</button>

                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section class="text-gray-600 body-font cursor-pointer">
        <h2 className='main_heading text-center text-3xl w-3/4 m-auto py-2 shadow-2xl rounded-sm  font-semibold uppercase bg-black text-white '>New Arrivals</h2>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.youngla.com/cdn/shop/files/YLA_9.20_400x.jpg?v=1695750101" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
                <Link href={"/Products/weartheshirts"}>
                  <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                </Link>
                <p class="mt-1">$16.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.youngla.com/cdn/shop/files/YLA_9.203_400x.jpg?v=1697672853" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
                <Link href={"/Products/weartheshirts"}>
                  <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                </Link>
                <p class="mt-1">$21.15</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.youngla.com/cdn/shop/files/DSC05419_400x.jpg?v=1690394021" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
                <Link href={"/Products/weartheshirts"}>
                  <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                </Link>
                <p class="mt-1">$12.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.youngla.com/cdn/shop/files/571_black-white_001_12_12_johnny_ecomm_99f3abd1-c286-40de-b6a8-9c29c55da5d4_400x.jpg?v=1701972656" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
                <Link href={"/Products/weartheshirts"}>
                  <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                </Link>
                <p class="mt-1">$18.40</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.youngla.com/cdn/shop/files/152_royal-blue-wash_001_11_02_rudy_ecomm_400x.jpg?v=1699387924" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
                <Link href={"/Products/weartheshirts"}>
                  <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                </Link>
                <p class="mt-1">$16.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.youngla.com/cdn/shop/files/153_black-wash_002_12_12_rudy_ecomm_1_400x.jpg?v=1701975167" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
                <Link href={"/Products/weartheshirts"}>
                  <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                </Link>
                <p class="mt-1">$21.15</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.youngla.com/cdn/shop/files/832_burgundy_002_11_02_johnny_ecomm_400x.jpg?v=1699413779" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
                <Link href={"/Products/weartheshirts"}>
                  <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                </Link>
                <p class="mt-1">$12.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.youngla.com/cdn/shop/files/478_peat-wash_001_11_02_jerdani_ecomm_400x.jpg?v=1699474310" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Tshirts</h3>
                <Link href={"/Products/weartheshirts"}>
                  <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                </Link>
                <p class="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
