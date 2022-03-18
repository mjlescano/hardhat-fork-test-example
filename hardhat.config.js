require('@nomiclabs/hardhat-ethers')
require('dotenv/config')

const { FORK_PROVIDER_URL, FORK_BLOCK_NUMBER } = process.env

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config = {
  solidity: '0.8.4',
  networks: {},
}

if (FORK_PROVIDER_URL) {
  config.networks.hardhat = {
    forking: {
      url: FORK_PROVIDER_URL,
      blockNumber: Number(FORK_BLOCK_NUMBER),
    }
  }
}

module.exports = config
