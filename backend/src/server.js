// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// 他のミドルウェアやルートをここに追加...

// ルートURLへのGETリクエストを処理するためのルートハンドラを追加
app.get('/', (req, res) => {
    res.send('Welcome to the NFT Receiver App API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
