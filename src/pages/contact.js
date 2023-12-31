import React from 'react'
import { Roboto } from 'next/font/google'
import { Montserrat } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
});

const contact = () => {
  return (
    <div className={montserrat.className}>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium uppercase title-font mb-4 text-gray-900">Contact Us</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">

              Thanks for taking the time to reach out to us! Please refer to our FAQs page for immediate answers to commonly asked questions



              We would love to hear from you, feel free to call us from Monday - Friday 9:00am to 5:00pm PST at (818) 206-8764 or email us directly at support@youngla.com.




              You can also fill out the form below. Please be sure to include your correct email address so we can get back to you in a timely manner..</p>


          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex justify-center items-center w-full mt-1 uppercase text-white bg-black font-light border-0 py-2 px-8  rounded text-lg">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div>
  )
}

export default contact;