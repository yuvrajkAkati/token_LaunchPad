import { useState } from 'react'
import './App.css'
import { Keypair, Connection, clusterApiUrl } from '@solana/web3.js'
import { createMint , TOKEN_PROGRAM_ID} from '@solana/spl-token'

window.Buffer = window.Buffer || require("buffer").Buffer

function App() {
  const [privateKey, setPrivateKey] = useState([])
  const [token , setToken] = useState('')
  
  const payer = Keypair.fromSecretKey(Uint8Array.from())
  
  const connection = new Connection('https://api.devnet.solana.com','confirmed');
  const mintAuthority = payer.publicKey

  async function createMintForToken(payer,mintAuthority){ 
    const mint = await createMint(
      connection,
      payer,
      mintAuthority,
      null,
      9
    )
    console.log(mint)
    alert(`mint created at ${mint.toBase58()}`)
    return mint
  }
  async function main() {
    const mint = await createMintForToken(payer , mintAuthority)
  }

  return (
    
      <div>
        <input type="text" placeholder='private key' onChange={(e)=>{
            setPrivateKey(e.target.value)
        }} /> <button onClick={main}>generate token</button>
        <div>
          token is : {token}
        </div>
      </div>
  )
}

export default App
