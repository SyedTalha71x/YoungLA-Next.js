import React from 'react'

const order = ({ cart, addToCart, RemoveToCart, ClearCart, subTotal }) => {
    return (
        <div><section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 class="text-xl title-font text-black tracking-widest">Order Confirmation</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Your Order ID</h1>
                        <div class="flex mb-4">
                            <h3 className='text-black'>Your Order Has been successfully placed</h3>
                        </div>
                        <div class="flex mb-4">
                            <a class="flex-grow text-indigo-500  py-2 text-lg px-1">Description</a>
                            <a class="flex-grow  py-2 text-lg px-1">Quantity</a>
                            <a class="flex-grow  py-2 text-lg px-1">Total</a>
                        </div>

                        <div class="flex border-t border-gray-200 py-2">
                            <span class="text-gray-500">Order Name</span>
                            <span class="ml-auto text-gray-500">1</span>
                            <span class="ml-auto text-gray-900">Blue</span>
                        </div>
                        <div class="flex border-t border-gray-200 py-2">
                            <span class="text-gray-500">Order Name</span>
                            <span class="ml-auto text-gray-500">1</span>
                            <span class="ml-auto text-gray-900">Blue</span>
                        </div>
                        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span class="text-gray-500">Order Name</span>
                            <span class="ml-auto text-gray-500">1</span>
                            <span class="ml-auto text-gray-900">Blue</span>
                        </div>
                        <div class="flex">
                            <span class="title-font font-medium text-2xl text-gray-900">SubTotal $58.00</span>
                            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Order</button>
                        </div>
                    </div>
                    <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg" />
                </div>
            </div>
        </section></div>
    )
}

export default order