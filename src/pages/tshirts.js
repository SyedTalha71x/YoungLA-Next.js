import React from 'react'
import Link from 'next/link'
import connectDB from '../../Middleware/db'
import Product from '../../Models/Product'
import { Roboto } from 'next/font/google'
import { Montserrat } from 'next/font/google';

const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
});

const tshirts = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font cursor-pointer ">
        <div className="container px-5 py-24 mx-auto">
          <div className={montserrat.className}>
            <div className="flex flex-wrap -m-4">

              {Object.keys(products).map((k) => {

                return <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={products[k]._id}>
                  <Link href={`/Products/${products[k].slug}`} className="block relative  overflow-hidden ">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={products[k].img} />
                  </Link>
                  <div className="mt-4">
                    <Link href={`/Products/${products[k].slug}`}>
                      <h2 className="text-gray-900 title-font text-center text-md font-medium">{products[k].title}</h2>
                    </Link>
                    <p className="mt-1 text-center">${products[k].price}</p>
                    <div>
                      <p className="mt-1 text-center font-light text-gray-500">
                        {products[k].size.includes('S') && <span className='ml-1'>S</span>}
                        {products[k].size.includes('M') && <span className='ml-1'>M</span>}
                        {products[k].size.includes('LARGE') && <span className='ml-1'>L</span>}
                        {products[k].size.includes('XL') && <span className='ml-1'>XL</span>}
                        {products[k].size.includes('XXL') && <span className='ml-1'>XXL</span>}</p>
                    </div>
                    <div>
                      <p className="mt-1 text-center font-light text-gray-500">
                        {products[k].color.includes('BLACK') && <button className="border-2 border-gray-300 ml-1 bg-black  w-5 h-5 focus:outline-none"></button>}
                        {products[k].color.includes('BROWN') && <button className="border-2 border-gray-300 ml-1 bg-amber-950  w-5 h-5 focus:outline-none"></button>}
                        {products[k].color.includes('SKY') && <button className="border-2 border-gray-300 ml-1 bg-sky-500  w-5 h-5 focus:outline-none"></button>}
                        {products[k].color.includes('SLATE') && <button className="border-2 border-gray-300 ml-1 bg-slate-600  w-5 h-5 focus:outline-none"></button>}</p>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps() {
  connectDB();
  let products = await Product.find({ category: "tshirts" });
  let tshirts = {}
  for (let items of products) {
    if (items.title in tshirts) {
      if (!tshirts[items.title].color.includes(items.color) && (items.availableqty > 0)) {
        tshirts[items.title].color.push(items.color)
      }
      if (!tshirts[items.title].size.includes(items.size) && (items.availableqty > 0)) {
        tshirts[items.title].size.push(items.size)
      }
    }
    else {
      tshirts[items.title] = JSON.parse(JSON.stringify(items))
      if (items.availableqty > 0) {
        tshirts[items.title].color = [items.color]
        tshirts[items.title].size = [items.size]
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) },
  }
}

export default tshirts