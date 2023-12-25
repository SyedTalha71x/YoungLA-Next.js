import React from 'react'
import Link from 'next/link'
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


const forgotpass = () => {
    return (
        <div className={montserrat.className}>
            <section class="login dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-600 dark:text-white">
        <img class="w-8 h-8 mr-2" src="/mainlogo2.jpg" alt="logo" />
        YoungLA
      </a> */}
                    <div class="w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class=" uppercase   font-medium  leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                RECOVER PASSWORD
                            </h1>
                            <div className='text-center text-gray-600'>

                            <Link className={montserrat.className} href={"/login"}>
                            Or Login
                            </Link>
                            </div>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>

                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="YOUR EMAIL" required="" />
                                </div>
                                <div className={montserrat.className}>
                                    <button type="submit" class="w-full text-white bg-black    text-xl uppercase px-5 py-2.5 text-center">RECOVER</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default forgotpass