import React, { useState } from 'react'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import { Montserrat } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
});

const login = () => {

  const router = useRouter();

  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { email, password }
    let res = await fetch("http://localhost:3000/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    let response = await res.json();
    console.log(response);
    setemail("")
    setpassword("")
    if (response.success) {
      toast.success("You are Now Logged In", {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push('http://localhost:3000')
      }, 1000);

    }
    else {
      toast.error(response.error, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }


  const ChangeHandle = (e) => {
    if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setpassword(e.target.value)
    }
  }


  return (
    <div className={montserrat.className}>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

      <section className="login dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className=" uppercase   font-medium  leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                LOGIN
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleLogin}>
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium  text-gray-900 dark:text-white">Your email</label>
                  <input onChange={ChangeHandle} value={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="YOUR EMAIL" required="" />
                </div>
                <div>
                  <label for="password" className="block mb-2 text-sm font-medium  text-gray-900 dark:text-white">Password</label>
                  <input onChange={ChangeHandle} value={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div >
                  <Link href={"/forgotpass"} className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                </div>
                <div className={montserrat.className}>
                  <button type="submit" className="w-full text-white bg-black    text-xl uppercase px-5 py-2.5 text-center">LOGIN</button>
                </div>
                <div className={montserrat.className}>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <Link href={"/signup"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default login