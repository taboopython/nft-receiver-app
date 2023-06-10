import React from 'react';
import Auth from './components/Auth/Auth';
import NFTReceiver from './components/NFTReceiver/NFTReceiver';
import WalletIntegration from './components/WalletIntegration/WalletIntegration';
import ActivityHistory from './components/ActivityHistory/ActivityHistory';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>NFT Distribution Platform</h1>
            </header>
            <Auth />
            <NFTReceiver />
            <WalletIntegration />
            <ActivityHistory />
        </div>
    );
}

export default App;
