import '@/src/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  FutureverseAuthProvider,
  FutureverseWagmiProvider,
} from '@futureverse/auth-react'
import { createWagmiConfig } from '@futureverse/auth-react/wagmi'

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps) {
  const wagmiConfig = createWagmiConfig()

  return (
    <FutureverseAuthProvider
      clientId={process.env.NEXT_PUBLIC_FUTUREVERSE_CLIENT_ID!}
      walletConnectProjectId={process.env.NEXT_PUBLIC_WC_PROJECT_ID!}
      xamanAPIKey={process.env.NEXT_PUBLIC_XAMAN_API_KEY!}
    >
      <FutureverseWagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </FutureverseWagmiProvider>
    </FutureverseAuthProvider>
  )
}
