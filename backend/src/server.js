const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const nftRoutes = require('./routes/nftRoutes');

app.use(express.json());

// ルーティングを適用します
app.use('/api', nftRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
