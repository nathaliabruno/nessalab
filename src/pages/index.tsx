import Head from "next/head"
import { fetchCategories, fetchProducts } from "@/utils/axios-requests"

import ProductsList from "@/components/ProductsList"
import { IProduct } from "@/utils/types"
import { useEffect, useState } from "react"
import Header from "@/components/Header"

export async function getStaticProps() {
  let products: IProduct[] = []
  fetchProducts("ASC").then((data) => (products = data))

  return {
    props: {
      products,
    },
  }
}

export default function Home(products: IProduct[]) {
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
        <link
          rel="icon"
          href="https://uploads-ssl.webflow.com/6284f50b95ff173d79dff367/62b5c943feeafe24cf21b825_Fav-32.png"
        />
      </Head>
      <Header />
      <main style={{ padding: "30px" }}>
        {categories && products && (
          <ProductsList filterList={categories} firstProducts={products} />
        )}
      </main>
    </>
  )
}
