import { Frame, Loading as PolarisLoading, Spinner } from "@shopify/polaris"
import React from "react"

export const Loading = () => {
  return (
    <div style={{ height: "100px" }}>
      <Frame>
        <PolarisLoading>
          <Spinner accessibilityLabel="Spinner Loading" size="large" />
        </PolarisLoading>
      </Frame>
    </div>
  )
}
