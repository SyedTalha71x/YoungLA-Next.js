import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiShoppingCart } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { Roboto } from 'next/font/google'
import styles from '../styles/Home.module.css'
import { CiUser } from "react-icons/ci";
import { Montserrat } from 'next/font/google';
import { ImCross } from "react-icons/im";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { RiAdminFill } from "react-icons/ri";
import { FaEllo } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";



const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
});

const Navbar = ({ logout, user, cart, addToCart, RemoveToCart, ClearCart, subTotal }) => {

  const ref = useRef();

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full')
    }
  }

  const [dropdown, setdropdown] = useState(false)

  return (
    <div className={montserrat.className}>
      <div className='line w-full text-sm bg-black h-12 text-white text-center flex justify-center items-center'>DUE TO SOME ISSUES, WE ARE ONLY ACCEPTING PAYMENTS BY CASH ON DELIVERY.</div>
      {/* <nav className=' flex flex-col  md:flex-row md:justify-start justify-center items-center shadow-xl'> */}
      <nav className='flex justify-center  items-center md:ml-auto font-extrabold  shadow-xl'>
        <div className='logx text-4xl p-2  font-bold'>
          <div className={roboto.className}>
            YOUNGLA
          </div>
        </div>
        <div className="cart cursor-pointer items-center absolute right-9 top mx-5 " aria-hidden="false" >
          <a onMouseOver={() => { setdropdown(true) }}>
            {dropdown && <div className="z-50 my-4 h-[250px] absolute right-5 top-4 text-base list-none bg-slate-100 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Admin</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">admin@gmail.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link href={'/myaccounts'} className="block px-4 py-2 text-sm text-gray-700  w-full hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My Account</Link>
                </li>
                <hr className='bg-black w-3/4 m-auto' />
                <li>
                  <Link href={'/userorder'} className="block px-4 py-2 text-sm text-gray-700 w-full hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Orders</Link>
                </li>
                <hr className='bg-black  w-3/4 m-auto' />
                <li>
                  <p onClick={logout} className="block px-4 py-2 text-sm text-gray-700 w-full hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</p>
                </li>
                <hr className='bg-black w-3/4 m-auto' />
                <li>
                  <p onClick={() => setdropdown(false)} className="block px-4 py-2 text-extrabold text-black w-full hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Exit</p>
                </li>
              </ul>
            </div>
            }
            {user.value && <FaEllo className='text-3xl cursor-pointer font-extrabold' />}
          </a>
          {!user.value && <Link href={"/login"}>
            <CiUser className='text-3xl font-bold cursor-pointer' />
          </Link>}
        </div>
        <div onClick={toggleCart} className="cart absolute right-0 top mx-5 ">

          <IoBagOutline className='text-3xl font-extrabold  cursor-pointer' />
        </div>
        <div ref={ref} className={`sidebar h-[100%] w-[430px]  overflow-hidden  absolute top-0 right-0 z-10  bg-slate-200 p-10 transform transition-transform duration-[0.4s] ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}
    `}>
          <h2 className={montserrat.className}>CART</h2>

          <div className="row bg-black h-[1px] my-2 w-full"></div>

          <span onClick={toggleCart} className='cross absolute top-3  right-2 cursor-pointer text-xl text-purple-950'><ImCross /></span>
          <div className="cartinfo cursor-pointer">
            <div className="cartsolid">
              {Object.keys(cart).length == 0 && <div className=' mt-4 mb-4 text-center uppercase font-medium'>Your Cart is Empty</div>}
              {Object.keys(cart).map((k) => {
                return <div className="cartrow grid grid-cols-2 p-4" key={k}>
                  <div className="leftcart">
                    <img src={cart[k].img} alt="" className='cart_image h-full w-full object-cover object-top' />
                  </div>
                  <div className="rightcart mx-4">
                    <h2 className='font-medium w-full text-gray-800'>{cart[k].name}</h2>
                    <span className='text-gray-600'>{cart[k].variant} /</span>
                    <span className='text-gray-600'> {cart[k].size}</span>
                    <div>
                      <span className='text-gray-600' >${cart[k].price}.00</span>
                    </div>
                    <div>
                      <span className='font-mediu'>Total ${subTotal}.00</span>
                    </div>
                    <div className="increment">
                      <span className='minus '><CiCircleMinus onClick={() => { RemoveToCart(k, 1, cart[k].img, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='text-xl font-bold' />
                      </span> <span className='quantity text-xl m-2'>{cart[k].qty}</span><span className='plus'><  CiCirclePlus className='text-xl font-bold' onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} /></span>
                    </div>

                  </div>
                </div>
              })}
            </div>
          </div>
          {/* <div className={montserrat.className}>
            <div
              className="current grid grid-cols-2 gap-1 my-4 ">
              <div className="checkbtn">
                <Link href={"/checkoutone"}>
                  <button className='bg-black py-2 px-7 ml-3 uppercase cursor-pointer tracking-widest text-white font-medium  text-center hover:bg-transparent hover:text-black'>Checkout</button>
                </Link>
              </div>
              <div className="removebtn">
                <button onClick={ClearCart} className='bg-black uppercase ml-3 py-2 px-8 tracking-widest text-white font-medium  text-center cursor-pointer hover:bg-transparent hover:text-black'>Remove</button>
              </div>
            </div>
          </div> */}
        </div>

      </nav>
    </div>
  )
}

export default Navbar