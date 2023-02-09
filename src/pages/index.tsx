import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import { fetchCategories, fetchProducts } from "@/utils/axios-requests"

import ProductsList from "@/components/ProductsList"
import { IProduct } from "@/utils/types"
import { useEffect, useState } from "react"

export async function getStaticProps() {
  let products: IProduct[] = []
  fetchProducts("ASC").then((data) => (products = data))

  return {
    props: {
      products,
    },
  }
}

export default function Home({ products }) {
  const [categories, setCategories] = useState()
  useEffect(() => {
    fetchCategories().then((data) => setCategories(data))
  }, [])

  return (
    <>
      <Head>
        <title>NessaLab - Nat Test</title>
        <meta
          name="description"
          content="Nathalia Bruno - Frontend Engineer Test"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {categories && products && (
          <ProductsList filterList={categories} firstProducts={products} />
        )}
      </main>
    </>
  )
}
