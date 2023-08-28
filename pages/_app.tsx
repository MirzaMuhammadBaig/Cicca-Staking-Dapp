import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { bsc, bscTestnet } from 'wagmi/chains'

const chains = [bscTestnet, bsc]
const projectId = 'f3b2217a3382a3e5af34fd16c456ac15'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <WagmiConfig config={wagmiConfig}>
      <Component {...pageProps} />
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </WagmiConfig>
  </>
}
