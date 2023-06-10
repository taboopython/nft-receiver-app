import React, { useEffect, useState } from 'react';
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';

function WalletIntegration() {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const enableExtension = async () => {
            await web3Enable('NFT App');
            const allAccounts = await web3Accounts();
            setAccounts(allAccounts);
        };
        enableExtension();
    }, []);

    const handleWalletSelection = async (address) => {
        const injector = await web3FromAddress(address);
        // You can now use this injector to interact with the blockchain
    };

    return (
        <div>
            {accounts.map(account => (
                <button key={account.address} onClick={() => handleWalletSelection(account.address)}>
                    {account.address}
                </button>
            ))}
        </div>
    );
}

export default WalletIntegration;
