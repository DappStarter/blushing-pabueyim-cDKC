require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remind around give private furnace spoon'; 
let testAccounts = [
"0xbbaa6f18f5a174bd8f39ce337abec149de409d7fc12b771c4a981d6cb0cd24b6",
"0x208d7edad4c39cf085cefaa94c85e6c5c7cf3da1a9c0bc0fc5af481e83b5a069",
"0x3d137c5084b0467654d6ce4c2a7f8aee9779e8800624fada75df121d9f6e9e25",
"0x9ce1511073f1d7e92323ad5886594a83bd742035c180c63a63c38e5108f155d8",
"0xdf0f4320929aa67c568a69e3a1c31f27ec39b91c16edd0db88a23a4a2cf5ba07",
"0xb0f563f5308f8c29490262a0158e8c6e386c4c70c6da806f418973453aaaed2f",
"0xd47197cd72483c029f0cc3d6aa19271b42262febad793d17109165fd09092dda",
"0xe0b2933592419bfa9616035181090fd49f9ad6161f5f0150ac0604d421af697e",
"0x2001899a210095c0c4f4a41912d9be0beb4ef9bc0c5aed8cc07c6f6552b48288",
"0x36803b54007377964022216274f620250e39c0ede999a2c70437bd812e2d90f3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

