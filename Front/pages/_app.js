import '@/styles/globals.css'
import Navbar from '../components/NavBar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {

  return (
    <div className='min-vh-100 d-flex flex-column justify-content-between'>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );

}
