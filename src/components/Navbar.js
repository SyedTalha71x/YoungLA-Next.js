import React, { useRef } from 'react'
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


const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
});

const Navbar = ({ cart, addToCart, RemoveToCart, ClearCart, subTotal }) => {

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
  return (
    <div>
      <nav className='flex flex-col  md:flex-row md:justify-start justify-center items-center shadow-xl'>
        <div className="logo ">
          {/* <GiClothes className='main-logo  font-extrabold text-6xl p-2 text-pink-800' /> */}
          <img src="/mainlogo2.jpg" alt="" className={styles.mainlogo} />
        </div>
        <div className='logx text-xl font-bold'>
          <div className={roboto.className}>
            YOUNGLA
          </div>
        </div>
        <div className="links">
          <ul className='flex justify-center items-center mx-8 font-semibold p-2 text-blue-900'>
            <Link href={"/"} className='mx-2'><li>Home</li></Link>
            <Link href={"/about"} className='mx-2'><li>Our Story</li></Link>
            <Link href={"/contact"} className='mx-2'><li>Contact</li></Link>
          </ul>
        </div>
        <div className="cart cursor-pointer absolute right-9 top mx-5 " aria-hidden="false" >
          <CiUser className='text-2xl cursor-pointer font-extrabold' />
        </div>
        <div onClick={toggleCart} className="cart absolute right-0 top mx-5 z-0 ">

          <CiShoppingCart className='text-3xl  cursor-pointer' />
        </div>
        <div ref={ref} className="sidebar h-[78%] w-96  absolute top-0 right-0  bg-slate-200 p-10 transform transition-transform duration-[0.4s] translate-x-full
    ">
          <h2 className={montserrat.className}>CART</h2>

          <div className="row bg-black h-[1px] my-2 w-full"></div>

          <span onClick={toggleCart} className='cross absolute top-3  right-2 cursor-pointer text-xl text-purple-950'><ImCross /></span>
          <div className="cartinfo cursor-pointer">
            <div className="cartsolid">
              {Object.keys(cart).length == 0 && <div className=' mt-4 mb-4 text-center uppercase font-bold'>Your Cart is Empty</div>}
              {Object.keys(cart).map((k) => {
                return <div className="cartrow" key={k}>
                  <div className="rightcart">
                    <h2>{cart[k].name}</h2>
                    <p>{cart[k].variant}</p>
                    <p>{cart[k].size}</p>
                    <span>${cart[k].price}</span>
                    <div className="increment">
                      <span className='minus '><CiCircleMinus onClick={() => { RemoveToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='text-xl font-bold' />
                      </span> <span className='quantity text-xl m-2'>{cart[k].qty}</span><span className='plus'><  CiCirclePlus className='text-xl font-bold' onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} /></span>
                    </div>

                  </div>
                </div>
              })}
              <div className="current grid grid-cols-2 gap-1 my-4">
                <div className="checkbtn">
                  <button className='bg-black py-2 px-8  cursor-pointer text-white font-semibold rounded-sm text-center'>Checkout</button>
                </div>
                <div className="removebtn">
                  <button onClick={ClearCart} className='bg-black py-2 px-8 text-white font-semibold rounded-sm text-center cursor-pointer'>Remove</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar