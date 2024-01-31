import '../styles/globals.css'
import LocationState from '../context/LocationState'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import React, { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
import Loader from '../components/loader'


function MyApp({ Component, pageProps }) {

  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(false)
  const router = useRouter()


  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40)
    })

    router.events.on("routeChangeComplete", () => {
      setProgress(100)
      setShow(true)
    })

  }, [])


  return (<>
    {show ? <Loader /> : <LocationState>
      <LoadingBar
        color='#0B9DBC'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </LocationState>}
  </>)
}

export default MyApp
