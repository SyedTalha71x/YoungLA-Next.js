import React from 'react'
import Link from 'next/link'

const jeans = () => {
  return (
    <div>   
      <section class="text-gray-600 body-font cursor-pointer  ">
      {/* <h2 className='main_heading text-center text-3xl w-3/4 m-auto py-2 shadow-2xl rounded-sm  font-semibold uppercase bg-black text-white '>New Arrivals</h2> */}
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-top w-full h-full block z-10" src="https://www.youngla.com/cdn/shop/products/DSC0627_400x.jpg?v=1668207317" />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Jeans</h3>
              <Link href={"/Products/weartheshirts"}>
                <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              </Link>
              <p class="mt-1">$16.00</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.youngla.com/cdn/shop/products/DSC0627_400x.jpg?v=1668207317" />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Jeans</h3>
              <Link href={"/Products/weartheshirts"}>
                <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              </Link>
              <p class="mt-1">$21.15</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.youngla.com/cdn/shop/products/DSC0627_400x.jpg?v=1668207317" />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Jeans</h3>
              <Link href={"/Products/weartheshirts"}>
                <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              </Link>
              <p class="mt-1">$12.00</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.youngla.com/cdn/shop/products/DSC0627_400x.jpg?v=1668207317" />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Jeans</h3>
              <Link href={"/Products/weartheshirts"}>
                <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              </Link>
              <p class="mt-1">$18.40</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.youngla.com/cdn/shop/products/DSC0627_400x.jpg?v=1668207317" />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Jeans</h3>
              <Link href={"/Products/weartheshirts"}>
                <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              </Link>
              <p class="mt-1">$16.00</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.youngla.com/cdn/shop/products/DSC0627_400x.jpg?v=1668207317" />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Jeans</h3>
              <Link href={"/Products/weartheshirts"}>
                <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              </Link>
              <p class="mt-1">$21.15</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.youngla.com/cdn/shop/products/DSC0627_400x.jpg?v=1668207317" />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Jeans</h3>
              <Link href={"/Products/weartheshirts"}>
                <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              </Link>
              <p class="mt-1">$12.00</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.youngla.com/cdn/shop/products/DSC0627_400x.jpg?v=1668207317" />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Jeans</h3>
              <Link href={"/Products/weartheshirts"}>
                <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              </Link>
              <p class="mt-1">$18.40</p>
            </div>
          </div>
        </div>
      </div>
    </section></div>
  )
}

export default jeans