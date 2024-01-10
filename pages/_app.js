import '../styles/globals.css'
import LocationState from '../context/LocationState'

function MyApp({ Component, pageProps }) {
  return (<>
    <LocationState>
      <Component {...pageProps} />
    </LocationState>
  </>)
}

export default MyApp
