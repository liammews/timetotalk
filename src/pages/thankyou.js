import * as React from "react"
import Layout from "../components/layout"
import Logo from "../components/logo"


// markup
const Thankyou = () => {
  return (
    <Layout>   
      <main className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col items-center w-full z-50">

        <Logo  />
        <h1 className="text-white text-3xl font-bold text-center mb-2 tracking-wide">Thank you for signing up</h1>
        <h2 className="text-white text-md font-normal max-w-xl text-center mb-8">You should recieve our confirmation email shortly,<br className="hidden lg:inline" /> if you haven't please check your spam folder.</h2>

        <a href="https://twitter.com/share?url=I signed up to @timetotalk_me - A weekly reminder to check in with yourself and a friend. Talking saves lives so sign up today - https://timetotalk.me">
        <button className="bg-white px-4 py-2 text-sm rounded-md text-black font-semibold hover:bg-gray-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          Tweet about us!
        </button>
        </a>
        
        </div>
      </main>

    </Layout>

  )
}

export default Thankyou
