

import Layout from "../components/Layout"
import styles from "../styles/globals.css"
import React from "react"
import Link from "next/link"
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /> </Layout>
}

export default MyApp
