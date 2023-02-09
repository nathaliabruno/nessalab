import { Frame, ContextualSaveBar } from "@shopify/polaris"
import { HomeMinor, OrdersMinor, ProductsMinor } from "@shopify/polaris-icons"
import React from "react"

const Header = () => {
  return (
    <div style={{ height: "100px" }}>
      <Frame
        logo={{
          width: 124,
          contextualSaveBarSource:
            "https://uploads-ssl.webflow.com/6284f50b95ff173d79dff367/62a8ab53fb5d246286bbf40a_logo.webp",
        }}
      >
        <ContextualSaveBar
          fullWidth
          message=" "
          saveAction={{
            content: "Go to Cart Page",
            loading: false,
            disabled: false,
            url: "/cart",
          }}
        />
      </Frame>
    </div>
  )
}

export default Header
