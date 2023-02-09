import { Button, TextField } from "@shopify/polaris"
import { useState, useCallback } from "react"

const QtySelector = () => {
  const [value, setValue] = useState("1")

  const handleChange = useCallback((newValue) => setValue(newValue), [])

  return (
    <div style={{ maxWidth: "140px" }}>
      <TextField
        label="Quantity"
        type="text"
        value={value}
        onChange={handleChange}
        autoComplete="off"
        labelHidden={true}
        maxLength={2}
        max={99}
        inputMode="numeric"
        align="center"
        disabled
        connectedLeft={<Button primary>-</Button>}
        connectedRight={<Button primary>+</Button>}
      />
    </div>
  )
}

export default QtySelector
