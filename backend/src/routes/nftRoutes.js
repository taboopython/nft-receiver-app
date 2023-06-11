const express = require('express');
const Web3 = require('web3');
const router = express.Router();

const provider = new Web3.providers.HttpProvider('https://rpc-mumbai.matic.today');
const web3 = new Web3(provider);

const ERC721_ABI = [
    // Add ERC721 ABI here (it's a standard interface, you can find it online)
];

router.get('/nft/:contractAddress/:tokenId', async (req, res) => {
    try {
        const { contractAddress, tokenId } = req.params;
        const contract = new web3.eth.Contract(ERC721_ABI, contractAddress);

        const name = await contract.methods.name().call();
        const description = await contract.methods.description().call();
        const image = await contract.methods.tokenURI(tokenId).call();

        res.json({ name, description, image });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch NFT data' });
    }
});

module.exports = router;
