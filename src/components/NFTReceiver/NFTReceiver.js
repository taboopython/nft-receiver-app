import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

function NFTReceiver() {
  const [qrData, setQrData] = useState(null);
  const [nftData, setNftData] = useState(null);

  const handleScan = async data => {
    if (data && !qrData) {
      setQrData(data);
      // QRデータを用いてNFTデータを取得します
      try {
        const response = await fetch(`YOUR_NFT_API_ENDPOINT?data=${data}`);
        const nftInfo = await response.json();
        setNftData(nftInfo);
      } catch (err) {
        console.error('Failed to fetch NFT data:', err);
      }
    }
  };

  const handleError = err => {
    console.error(err);
  };

  return (
    <div>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {nftData ? (
        <div>
          {/* NFTデータを表示 */}
          <img src={nftData.image} alt={nftData.name} />
          <p>{nftData.description}</p>
        </div>
      ) : (
        <p>Scanning QR code...</p>
      )}
    </div>
  );
}

export default NFTReceiver;
