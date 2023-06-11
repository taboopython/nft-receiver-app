// NFTReceiver.js
import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

function NFTReceiver() {
  const [qrData, setQrData] = useState(null);
  const [nftData, setNftData] = useState(null);
  const [error, setError] = useState(null);

  const handleScan = async data => {
    if (data && !qrData) {
      setQrData(data);
      const [contractAddress, tokenId] = data.split(':');

      try {
        const response = await fetch(`http://localhost:3001/api/nft/${contractAddress}/${tokenId}`);
        const nftInfo = await response.json();
        setNftData(nftInfo);
      } catch (err) {
        console.error('Failed to fetch NFT data:', err);
        setError('Failed to fetch NFT data. Please try again.');
      }
    }
  };

  const handleError = err => {
    console.error(err);
    setError('An error occurred while scanning the QR code.');
  };

  return (
    <div>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />

      {error && <div style={{ color: 'red' }}>{error}</div>}
      
      {nftData && (
        <div>
          <h3>NFT Data:</h3>
          <pre>{JSON.stringify(nftData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default NFTReceiver;
