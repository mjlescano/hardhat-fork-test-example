const { equal } = require('assert/strict');

const address = '0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb'
const abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]

describe('sETH', function () {
  it('should query the name on the fork network', async function () {
    const sETH = await hre.ethers.getContractAt(abi, address)
    const name = await sETH.name()

    equal(name, 'Synth sETH');
  });
});
