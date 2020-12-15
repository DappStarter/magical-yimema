require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth toss color grace help equal gaze'; 
let testAccounts = [
"0xa516a206f78af3dcc4984a9f924defd3ab980cbc4ae2b70207eb1fe72fe36ffb",
"0x5ac98bf2b2d34a1c8df0ee2a18658b38a8965dfb5a8eb1ec400e1d958d913a93",
"0x057c1b5fd1f9f4259b485671a3dedbd45939ea207e445059a7833bb143d07f03",
"0xce37a2a63be092c0e7d029bc2145656e176e9e6572e2c79ee50e89e328923620",
"0x92d6fd29a07cdd3b0a558f8240e87da0d9129ff8bc97d9e4f7eeed74c739d991",
"0xcdf0a2effa903d8e4852f73eac27d5b7d6a3aa1c8cea554d325c5f30ef27529f",
"0xb62fa6d0f36342a2969aa0443cc6cf58f33b6c1b4db48bedecb0ab7b38f60d62",
"0x0b05e7f289e343e89a1c122eeee990f707b0cee4585772c4baedc29641660d2f",
"0x2f8de1892de5b9eb06aabcd3228a0ccf23667d4a3d95f5cf5f550d2d18c51235",
"0x655409143f943976a1a7731500fce3dbdd5fc51debf0ebb44bf040123e282e02"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
