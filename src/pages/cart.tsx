import Head from "next/head"
import { useSelector } from "react-redux"
import CartItem from "@/components/CartItem"
import Header from "@/components/Header"
import {
  Card,
  Layout,
  ResourceList,
  Text,
  EmptyState,
  Stack,
} from "@shopify/polaris"
import OrderSummary from "@/components/OrderSummary"
import { getTotalPrice, getTotalQuantity } from "@/utils"

export default function Cart() {
  const cart = useSelector((state) => state.cart)
  const resourceName = {
    singular: "product",
    plural: "products",
  }
  return (
    <>
      <Head>
        <title>Cart | NessaLab - Nat Test</title>
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
      <main style={{ padding: "20px" }}>
        <Stack vertical distribution="fill">
          <Text as="h1" variant="heading2xl">
            Shopping Cart
          </Text>
          <Layout>
            <Layout.Section oneThird>
              {cart.length ? (
                <Card sectioned>
                  <ResourceList
                    resourceName={resourceName}
                    items={cart}
                    renderItem={CartItem}
                  />
                </Card>
              ) : (
                <Card sectioned>
                  <EmptyState
                    heading="Your shopping cart is empty"
                    action={{ content: "Shopping now", url: "/" }}
                    image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                  />
                </Card>
              )}
            </Layout.Section>
            <Layout.Section oneThird>
              <OrderSummary
                qty={getTotalQuantity(cart)}
                totalAmount={getTotalPrice(cart)}
              />
            </Layout.Section>
          </Layout>
        </Stack>
      </main>
    </>
  )
}
