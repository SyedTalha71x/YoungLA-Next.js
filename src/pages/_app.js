import '@/styles/globals.css'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'


export default function App({ Component, pageProps }) {

  const [cart, setcart] = useState({})
  const [subTotal, setsubTotal] = useState(0)
  const [user, setuser] = useState({ value: null });
  const [key, setkey] = useState(0)
  const router = useRouter();

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
    const token = localStorage.getItem('token');
    if (token) {
      setuser({ value: token });
      setkey(Math.random())
    }
  }, [router.query])

  const logout = () => {
    localStorage.removeItem('token');
    setuser({ value: null });
    setkey(Math.random());
  }


  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]]["price"] * myCart[keys[i]].qty
    }
    setsubTotal(subt);
  }

  const addToCart = (ItemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (ItemCode in cart) {
      newCart[ItemCode].qty = newCart[ItemCode].qty + qty;
    }
    else {
      newCart[ItemCode] = { qty: 1, price, name, size, variant };
    }
    setcart(newCart)
    saveCart(newCart)
  }

  const BuyNow = (ItemCode, qty, price, name, size, variant) => {
    let newCart = { ItemCode: { qty: 1, price, name, size, variant } };
    setcart(newCart)
    saveCart(newCart);
    router.push('/checkout')
  }

  const ClearCart = () => {
    setcart({})
    saveCart({})
  }


  const RemoveToCart = (ItemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (ItemCode in cart) {
      newCart[ItemCode].qty = newCart[ItemCode].qty - qty;
    }
    if (newCart[ItemCode]["qty"] <= 0) {
      delete newCart[ItemCode]
    }
    setcart(newCart)
    saveCart(newCart)
  }

  return <>
    <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} RemoveToCart={RemoveToCart} ClearCart={ClearCart}
      subTotal={subTotal} />
    <Head>
      <title>Lifestyle Clothing Brand: YoungLA </title>
      <meta name='viewport' content="width=device-width , initial-scale=1.0 , minimum-scale=1.0" />
      <link rel="icon" href="/mianlogo.jpg" />
    </Head>
    <Component BuyNow={BuyNow} cart={cart} addToCart={addToCart} RemoveToCart={RemoveToCart} ClearCart={ClearCart}
      subTotal={subTotal}  {...pageProps} />
    <Footer /> </>
}
