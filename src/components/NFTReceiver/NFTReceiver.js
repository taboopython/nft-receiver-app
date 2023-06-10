import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

function NFTReceiver() {
    const [result, setResult] = useState("");

    const handleScan = (data) => {
        if (data) {
            setResult(data);
            // Here, you should fetch and display the NFT data from the scanned QR code
        }
    };

    const handleError = (err) => {
        console.error(err);
    };

    return (
        <div>
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
            />
            <p>{result}</p>
        </div>
    );
}

export default NFTReceiver;
