import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiShoppingCart } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { Roboto } from 'next/font/google'
import styles from '../styles/Home.module.css'

const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
});

const Navbar = () => {
  return (
    <div>
      <nav className='flex flex-col  md:flex-row md:justify-start justify-center items-center shadow-xl'>
        <div className="logo ">
          {/* <GiClothes className='main-logo  font-extrabold text-6xl p-2 text-pink-800' /> */}
          <img src="/mainlogo2.jpg" alt="" className={styles.mainlogo} />
        </div>
        <div className='logx text-xl'>
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
        <div className="cart absolute right-0 top mx-5">
          <CiShoppingCart className='text-3xl  cursor-pointer' />
        </div>
      </nav>
    </div>
  )
}

export default Navbar