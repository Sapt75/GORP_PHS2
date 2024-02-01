import '../styles/globals.css'
import LocationState from '../context/LocationState'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Loader from '../components/loader'


function MyApp({ Component, pageProps }) {

  
  const [show, setShow] = useState()
  const router = useRouter()


  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setShow(true)
    })

    router.events.on("routeChangeComplete", () => {
      setShow(false)
    })

  }, [])


  return (<>
    {show ? <Loader /> : <LocationState>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </LocationState>}
  </>)
}

export default MyApp
