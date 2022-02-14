import {loadStdlib} from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO')
reach.setProviderByName('TestNet');


// account page: https://testnet.algoexplorer.io/address/IC5DKGRHEHW3GQIQFJFAYSY3NNVJ7P3LVL3W4X4OLISKJ7224Y4LU5HS4M
const account = await reach.newAccountFromMnemonic('praise candy degree job have detail lonely advice december dolphin convince there burger civil coffee toast celery canal modify feature worry slight notice abandon cook')

// zero decimal token page: https://testnet.algoexplorer.io/asset/70474481
const tokenBalanceDECZ = await reach.balanceOf(account, 70474481)

// 19 decimal token page: https://testnet.algoexplorer.io/asset/70540863
const tokenBalance19DEC = await reach.balanceOf(account, 70540863)


console.log({
    actualDECZBalance: '18446744073709551615',
    balanceOfDECZBN: reach.formatWithDecimals(tokenBalanceDECZ, 0),
    balanceOfDECZ: tokenBalanceDECZ,
    actual19DECBalance: '1.8446744073709551615',
    balanceOf19DEC: reach.formatWithDecimals(tokenBalance19DEC, 19),
    balanceOf19DECBN: tokenBalance19DEC,
})