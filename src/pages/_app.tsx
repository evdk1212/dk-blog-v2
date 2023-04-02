import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NavbarComponent } from "@/components";
import Layout from '../components/layout.js'

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
