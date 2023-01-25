const {ethers, upgrades} = require('hardhat')

const PROXY = '0xa0528defE56Aaf2412B0Dff040f14ecEe69E6e00'

async function main(){
    const BoxV2 = await ethers.getContractFactory('BoxV2')
    await upgrades.upgradeProxy(PROXY, BoxV2)

    console.log("Upgraded to BoxV2")
}

main()