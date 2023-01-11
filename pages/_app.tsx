import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from "react-toastify";
import Header from '../components/layout/header'
import Sidebar from '../components/layout/sidebar'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="flex gap-4">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%]">
          <div className=" px-4 my-5">
            <Component {...pageProps} />
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  ); 
}
