import { convertToMoney } from "@/utils"
import { Card, Stack, Text } from "@shopify/polaris"
import React from "react"

const OrderSummary = (totals: {
  qty: string | number
  totalAmount: number
}) => {
  return (
    <Card sectioned title="OrderSummary">
      <Card.Section>
        <Stack distribution="fill">
          <Text as="h4" variant="bodyLg">
            Quantity
          </Text>
          <Text as="p" variant="bodyLg" fontWeight="bold" alignment="end">
            {totals.qty}
          </Text>
        </Stack>
        <Stack distribution="fill">
          <Text as="h4" variant="bodyLg">
            Total Amouunt
          </Text>
          <Text as="p" variant="bodyLg" fontWeight="bold" alignment="end">
            {convertToMoney(totals.totalAmount)}
          </Text>
        </Stack>
      </Card.Section>
    </Card>
  )
}

export default OrderSummary
