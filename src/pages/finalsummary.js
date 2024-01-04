import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'
import connectDB from '../../Middleware/db'
import Order from '../../Models/Order'

const finalsummary = () => {

  return (
    <div><section class="text-gray-600 body-font overflow-hidden">
      <div class="container py-20 w-[50%] m-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full  lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-xl title-font text-black tracking-widest">Order Confirmation</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Your Order ID</h1>
            <div class="flex mb-4">
              <h3 className='text-black'>Your Order Has been successfully placed</h3>
            </div>
            <div className="order_summary">
              <div className="heading text-xl font-medium  text-black">
                Your Order Summary
              </div>
              {Object.keys(cart).map((k) => {
                return <div className="order_details" key={k}>
                  <div className="order_row grid grid-cols-2 mt-4 w-full">
                    <img src={cart[k].img} alt="" className='h-[140px] w-full object-cover object-top' />
                    <div className="order_content ml-12 w-full">
                      <div>
                        <span className='text-black font-medium w-full'>{cart[k].name}</span>
                      </div>
                      <div>
                        <span className='text-black font-medium'>${subTotal}.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              })}
            </div>
            <div className="order_btn">
              <button className="btn bg-black text-white text-center px-10 py-2 mt-6">Track Order</button>
            </div>
          </div>
        </div>
      </div>
    </section></div>
  )
}

export async function getServerSideProps(context) {
  connectDB();

  let order = await Order.findById(context.query.id)

  return {
    props: {
      order: JSON.parse(JSON.stringify(order)),

    },
  }
}

export default finalsummary