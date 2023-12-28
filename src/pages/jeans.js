import React from 'react'
import Link from 'next/link'
import connectDB from '../../Middleware/db'
import Product from '../../Models/Product'

const jeans = ({ products }) => {
  return (
    <div>
      <section class="text-gray-600 body-font cursor-pointer text-center  ">
        {/* <h2 className='main_heading text-center text-3xl w-3/4 m-auto py-2 shadow-2xl rounded-sm  font-semibold uppercase bg-black text-white '>New Arrivals</h2> */}
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {Object.keys(products).map((k) => {
              return <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={products[k]._id}>
                <Link href={`/Products/${products[k].slug}`} class="block relative rounded overflow-hidden">
                  <img alt="ecommerce" class="object-cover object-top w-full h-full block z-10" src={products[k].img} />
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
      </section></div>
  )
}
export async function getServerSideProps() {
  connectDB();
  let products = await Product.find({ category: "jeans" });
  let jeans = {}
  for (let items of products) {
    if (items.title in jeans) {
      if (!jeans[items.title].color.includes(items.color) && (items.availableqty > 0)) {
        jeans[items.title].color.push(items.color)
      }
      if (!jeans[items.title].size.includes(items.size) && (items.availableqty > 0)) {
        tshirts[items.title].size.push(items.size)
      }
    }
    else {
      jeans[items.title] = JSON.parse(JSON.stringify(items))
      if (items.availableqty > 0) {
        jeans[items.title].color = [items.color]
        jeans[items.title].size = [items.size]
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(jeans)) },
  }
}

export default jeans