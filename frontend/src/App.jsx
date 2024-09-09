import { useState } from 'react'
import './App.css'
import { TokenLaunchPadStarter } from './components/TokenLauchPadStarter'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';


function App() {
  
  return(
    <div>
        <ConnectionProvider  endpoint={"https://solana-devnet.g.alchemy.com/v2/6eeMhJMePXURTC-VY0x1smokNwFRr4Dw"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider >
                    <div className='flex justify-between p-4'>
                      <div >
                      < WalletMultiButton/>
                      </div>
                      <div>
                        <WalletDisconnectButton/>
                      </div>
                    </div>
                    <TokenLaunchPadStarter></TokenLaunchPadStarter>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    </div>
)
}

export default App
