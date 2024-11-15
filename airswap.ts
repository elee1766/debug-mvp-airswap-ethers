import {JsonRpcProvider} from '@ethersproject/providers'
import { Registry } from '@airswap/libraries'
import { ProtocolIds, } from '@airswap/utils'

;(async ()=>{
  const provider = new JsonRpcProvider('https://rpc.ankr.com/eth')
  const chainId = 1
  const signerToken = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
  const senderToken = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
  const servers = await Registry.getServers(
    provider,
    chainId,
    ProtocolIds.RequestForQuoteERC20,
    signerToken,
    senderToken
  )

  console.log(servers)
})()

