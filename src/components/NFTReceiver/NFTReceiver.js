import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

function NFTReceiver() {
  const [qrData, setQrData] = useState(null);

  const handleScan = data => {
    if (data) {
      setQrData(data);
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
      <p>{qrData}</p>
    </div>
  );
}

export default NFTReceiver;
