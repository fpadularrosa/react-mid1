import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='font-Kumbh'>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  )
}