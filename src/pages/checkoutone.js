import { useState, CSSProperties, useEffect } from "react";
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { MoonLoader } from "react-spinners";
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
});


const override = {
  display: "block",
  margin: "0 auto",
};


const checkoutone = ({ cart, addToCart, RemoveToCart, ClearCart, subTotal }) => {

  const router = useRouter();

  const [loading, setloading] = useState(false);

  const NavigateClick = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      router.push('/finalsummary');
    }, 10000);
  }

  const [email, setemail] = useState('')
  const [country, setcountry] = useState('')
  const [city, setcity] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')

  const [address, setaddress] = useState('')
  const [phone, setphone] = useState('')
  const [postalcode, setpostalcode] = useState('')
  const [disabled, setdisabled] = useState(true)

  const handleChange = (e) => {
    if (e.target.name == 'email') {
      setemail(e.target.value);
    }
    else if (e.target.name == 'country') {
      setcountry(e.target.value);
    }
    else if (e.target.name == 'firstname') {
      setfirstname(e.target.value);
    }
    else if (e.target.name == 'lastname') {
      setlastname(e.target.value);
    }
    else if (e.target.name == 'address') {
      setaddress(e.target.value);
    }
    else if (e.target.name == 'city') {
      setcity(e.target.value);
    }
    else if (e.target.name == 'postalcode') {
      setpostalcode(e.target.value);
    }
    else if (e.target.name == 'phone') {
      setphone(e.target.value);
    }

    // if (email.length > 3 && firstname.length > 3 && lastname.length > 3 && address.length > 10 && city.length > 3 && postalcode.length > 3 && phone.length > 3) {
    //   setdisabled(false);
    // }
    // else {
    //   setdisabled(true);
    // }

  }

  // const initialpayment = async () => {
  //   const oid = Math.floor(Math.random() * Date.now())
  //   const data = { orderId: oid, amount: subTotal, products: cart }
  //   let a = await fetch('http://localhost:3000/api/pretransaction', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //   let response = await a.json();
  //   console.log(response);
  //   // setemail()
  //   // setcountry()
  //   // setfirstname()
  //   // setlastname()
  //   // setaddress()
  //   // setpostalcode()
  //   // setphone()
  // }


  return (
    <>
      <div className={montserrat.className}>
        <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 mt-24">
          <div class="px-4 pt-8">
            <p class="text-xl font-medium">Order Summary</p>
            <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>

            {Object.keys(cart).map((k) => {
              return <div key={k} class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                  <img class="m-2 h-24 w-28 rounded-md border object-cover object-top" src={cart[k].img} />
                  <div class="flex w-full flex-col px-4 py-4">
                    <span class="font-semibold">{cart[k].name}</span>
                    <span class="float-right text-gray-400">{cart[k].size}</span>
                    <p class="text-lg font-bold">${cart[k].price}</p>
                  </div>
                </div>
              </div>
            })}

            <p class="mt-8 text-lg font-medium">Shipping Methods</p>
            <form class="mt-5 grid gap-6">
              <div class="relative">
                <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
                <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
                  <img class="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                  <div class="ml-5">
                    <span class="mt-2 font-semibold">Standard</span>
                    <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                  </div>
                </label>
              </div>

              <div className="payment_methods my-2">
                <div className="details">
                  <div className='my-3 text-2xl font-medium'>Payment Methods</div>
                  {/* <Link href={"/payment"} className={montserrat.className}>
                
                    <div className='w-full py-6 cursor-pointer p-4  border-2 border-black  bg-gray-100 rounded-md hover:bg-gray-200 hover:text-black'>Pay Via Debit/credit cards </div>
                  </Link> */}
                  <div class="relative">
                    <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
                    <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
                      <img class="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                      <div class="ml-5">
                        <span class="mt-2 font-semibold">Cash On Delivery</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>


          <div className='det h-full w-full p-4'>
            <div className="contact_heading">
              <h4 className='text-2xl font-medium'>Contact</h4>
              <div className="email_input my-4">
                <input onChange={handleChange} className='w-full py-3 p-2 outline-none rounded-md bg-gray-200' type="email" id='email' name='email' value={email} placeholder='Email' />
              </div>
            </div>

            <div className="del_details my-2">
              <div className="del_heading">
                <h4 className='text-2xl font-medium'>Delivery</h4>
              </div>
              <form action="" className='my-2'>
                <div className="input_info my-2">
                  <input onChange={handleChange} className='w-full py-3 p-2 outline-none rounded-md bg-gray-200' type="text" name='country' id='country' value={country} placeholder='Country/Region' />
                </div>
                <div className="input_info my-2">
                  <input onChange={handleChange} className='w-full py-3 p-2 outline-none rounded-md bg-gray-200' type="text" name='firstname' id='firstname' value={firstname} placeholder='First Name' />
                </div>
                <div className="input_info my-2">
                  <input onChange={handleChange} className='w-full py-3 p-2 outline-none rounded-md bg-gray-200' type="text" name='lastname' id='lastname' value={lastname} placeholder='Last Name' />
                </div>
                <div className="input_info my-2">
                  <input onChange={handleChange} className='w-full py-3 p-2 outline-none rounded-md bg-gray-200' type="text" name='address' id='address' value={address} placeholder='Address' />
                </div>
                <div className="input_info my-2">
                  <input onChange={handleChange} className='w-full py-3 p-2 outline-none rounded-md bg-gray-200' type="text" name='city' id='city' value={city} placeholder='City' />
                </div>
                <div className="input_info my-2">
                  <input onChange={handleChange} className='w-full py-3 p-2 outline-none rounded-md bg-gray-200' type="text" name='postalcode' id='postalcode' value={postalcode} placeholder='Postal code' />
                </div>
                <div className="input_info my-2">
                  <input onChange={handleChange} className='w-full py-3 p-2 outline-none rounded-md bg-gray-200' type="text" name='phone' id='phone' value={phone} placeholder='Phone' />
                </div>
              </form>

              <div className={montserrat.className}>
                <div className='grid grid-cols-2 my-4 gap-90'>
                  <div className='mx-1 text-xl font-semibold'>Sub Total</div>
                  <div className='mx-auto text-xl'>${subTotal}</div>
                </div>
                <div className='h-[1px] w-full m-auto bg-black'></div>
                <div className='grid grid-cols-2 my-2 gap-90'>
                  <div className='mx-1 text-xl font-semibold'>Total</div>
                  <div className='mx-auto text-xl'>${subTotal}</div>
                </div>
              </div>
            </div>
            <div>
              {
                loading ?
                  <MoonLoader className="flex justify-center items-center"
                    color="#36d7b7"
                    loading
                    size={60}
                    speedMultiplier={1}
                    cssOverride={override}
                  />
                  :
                  <div className="button-container">
                    <button onClick={NavigateClick} className="payment_btn bg-black disabled:bg-slate-300 text-white py-3 w-full mt-3 flex text-center justify-center items-center cursor-pointer">Place Order</button>
                  </div>}
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default checkoutone