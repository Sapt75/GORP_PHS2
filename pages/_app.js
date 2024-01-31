import '../styles/globals.css'
import LocationState from '../context/LocationState'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (<>
    <LocationState>
    <Navbar />
      <Component {...pageProps} />
      <Footer />
    </LocationState>
  </>)
}

export default MyApp
