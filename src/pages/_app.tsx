import type { AppProps } from "next/app"
import "@shopify/polaris/build/esm/styles.css"
import enTranslations from "@shopify/polaris/locales/en.json"
import { AppProvider } from "@shopify/polaris"
import { Provider } from "react-redux"

import { store } from "@/redux/store"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppProvider i18n={enTranslations}>
        <Component {...pageProps} />
      </AppProvider>
    </Provider>
  )
}
