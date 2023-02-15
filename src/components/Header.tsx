import { Stack, Image, Button } from "@shopify/polaris"
import { CheckoutMajor } from "@shopify/polaris-icons"
import Link from "next/link"
import React from "react"
import { useSelector } from "react-redux"
import { getTotalQuantity } from "@/utils"

const Header = () => {
  const cart = useSelector((state) => state.cart)

  return (
    <div style={{ height: "100px" }}>
      <section style={{ backgroundColor: "#ccc", padding: "20px" }}>
        <Stack alignment="center">
          <Stack.Item fill>
            <Link href="/">
              <Image
                alt="Nessa Logo"
                width="150px"
                source="https://uploads-ssl.webflow.com/6284f50b95ff173d79dff367/62a8ab53fb5d246286bbf40a_logo.webp"
              />
            </Link>
          </Stack.Item>
          <Stack.Item>
            <Link
              href="/cart"
              style={{
                padding: "10px",
                position: "relative",
                display: "flex",
                flexDirection: "row-reverse",
                textDecoration: "none",
              }}
            >
              <Button outline icon={CheckoutMajor}>
                {cart ? `${getTotalQuantity(cart)}` : "0"}
              </Button>
            </Link>
          </Stack.Item>
        </Stack>
      </section>
    </div>
  )
}

export default Header
