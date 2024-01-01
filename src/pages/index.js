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
      <div className='mainimagepage'>
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

              <div className='category_page'>
                <div className='categories'>
                  <div className="categories_row " >
                    <div className=" border bg-slate-100 border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
                      <Link href={"/tshirts"}>
                        <img className="category_image h-full w-full" src="https://www.youngla.com/cdn/shop/files/CNY_8170_400x.jpg?v=1687892237" />
                      </Link>
                      <div className='content overflow-hidden'>
                        <div className={montserrat.className}>
                          <button className="btn bg-black text-white text-2xl px-14 py-3 uppercase tracking-wider w-full hover:bg-transparent hover:transition-shadow hover:text-black">
                            Shirts
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="categories_row " >
                    <div className=" bg-slate-100 border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
                      <Link href={"/jeans"}>
                        <img className="category_image h-full w-full" src="https://www.youngla.com/cdn/shop/files/09_14_26_23_Johnny___Ruddy_eComm32742_400x.jpg?v=1692297166" />
                      </Link>
                      <div className='content overflow-hidden'>
                        <div className={montserrat.className}>
                          <button className="btn bg-black text-white text-2xl px-14 py-3 uppercase tracking-wider w-full hover:bg-transparent hover:transition-shadow hover:text-black">
                            Jeans
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="categories_row " >
                    <div className=" bg-slate-100 border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
                      <Link href={"/shorts"}>
                        <img className="category_image h-full w-full" src="https://www.youngla.com/cdn/shop/products/YLA6.12.21-116_a44dbbd6-be55-41de-9661-ebdee9ae33d8_400x.jpg?v=1653088061" />
                      </Link>
                      <div className='content overflow-hidden'>
                        <div className={montserrat.className}>
                          <button className="btn bg-black text-white text-2xl px-14 py-3 uppercase tracking-wider w-full hover:bg-transparent hover:transition-shadow hover:text-black">
                            Shorts
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="categories_row " >
                    <div className=" bg-slate-100 border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
                      <Link href={"/joggers"}>
                        <img className="category_image h-full w-full" src="https://www.youngla.com/cdn/shop/files/221_black_002_12_12_rudy_ecomm_c0b2dd31-6573-4d96-bd41-dfc3dfd5be85_400x.jpg?v=1701972653" />
                      </Link>
                      <div className='content overflow-hidden'>
                        <div className={montserrat.className}>
                          <button className="btn bg-black text-white text-2xl px-14 py-3 uppercase tracking-wider w-full hover:bg-transparent hover:transition-shadow hover:text-black">
                            Joggers
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="categories_row " >
                    <div className=" bg-slate-100 border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
                      <Link href={"/tank"}>
                        <img className="category_image h-full w-full" src="https://www.youngla.com/cdn/shop/files/YLA_9.20_400x.jpg?v=1695750101" />
                      </Link>
                      <div className='content overflow-hidden'>
                        <div className={montserrat.className}>
                          <button className="btn bg-black text-white text-2xl px-14 py-3 uppercase tracking-wider w-full hover:bg-transparent hover:transition-shadow hover:text-black">
                            Tanks
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="categories_row " >
                    <div className=" bg-slate-100 border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
                      <Link href={"/outerwear"}>
                        <img className="category_image h-full w-full" src="https://www.youngla.com/cdn/shop/files/566_oatmeal_001_11_02_jerdani_ecomm_4_400x.jpg?v=1699509655" />
                      </Link>
                      <div className='content overflow-hidden'>
                        <div className={montserrat.className}>
                          <button className="btn bg-black text-white text-2xl px-14 py-3 uppercase tracking-wider w-full hover:bg-transparent hover:transition-shadow hover:text-black">
                            Outerwear
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>







      <section className="arrivals_brand text-gray-600 body-font cursor-pointer text-center">
        <div className={montserrat.className}>
          <h2 className='main_heading text-center text-2xl w-3/4 m-auto py-2 shadow-2xl   font-medium uppercase bg-black text-white '>New Arrivals</h2>
        </div>
        <div className="arrivals_new container px-5 py-24 mx-auto">
          <div className="arrivals_grid flex flex-wrap -m-4" >
            {Object.keys(products).map((k) => {
              return <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={products[k]._id}>
                <Link href={`/Products/${products[k].slug}`} className="block relative rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={products[k].img} />
                  <img src={products[k].img2} alt="" className="image_2 object-cover object-center w-full h-full" />
                </Link>
                <div className="mt-4">
                  <Link href={`/Products/${products[k].slug}`}>
                    <h2 className="text-gray-900 title-font text-center text-md font-medium">{products[k].title}</h2>
                  </Link>
                  <p className="mt-1">${products[k].price}.00</p>
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
