import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { TokenLaunchPadStarter } from './TokenLauchPadStarter';

export function Topbar(){
    return(
        <div>
            <ConnectionProvider>
                <WalletProvider endpoint={"https://api.devnet.solana.com"}>
                    <WalletModalProvider wallets={[]} autoConnect>
                        <WalletMultiButton/>
                        <WalletDisconnectButton/>
                        <TokenLaunchPadStarter></TokenLaunchPadStarter>
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        </div>
    )
}