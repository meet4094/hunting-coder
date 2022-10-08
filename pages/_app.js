import '../styles/globals.css'
import Navbar from '../component/Navbar'

function MyApp({ Component, pageProps }) {
  // console.log("I am loading");
  return <>
    <Navbar></Navbar>
    <Component {...pageProps} />
  </>
}

export default MyApp
