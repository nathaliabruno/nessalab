import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@shopify/polaris/build/esm/styles.css"
import enTranslations from "@shopify/polaris/locales/en.json"
import { AppProvider } from "@shopify/polaris"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider i18n={enTranslations}>
      <Component {...pageProps} />
    </AppProvider>
  )
}
