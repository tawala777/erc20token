tuto from 
Youtube
ERC20 Token Tutorial | Create Your Own Cryptocurrency
https://www.youtube.com/watch?v=gc7e90MHvl8
basé sur openzeppelin RC20 contract

/contracts/OceanToken.sol
>npx hardhat compile

/test/OceanToken.js
>npx hardhat test

.env 
PRIVATE_KEY=xxxx
INFURA_RINKEBY_ENDPOINT=xxx

hardhat.config.js
process.env.PRIVATE_KEY
process.env.INFURA_RINKEBY_ENDPOINT

/scripts/deploy.js
>npx hardhat run --network rinkeby scripts/deploy.js

oceanToken deployed to : 0x088ff28CfAA312597a3213322a77237062737c45
oceanToken deployed to : 0x95e26adF93503d32a058d9699df0Ba960FaF781A

aamToken deployed to 0x2d44aa6d9810f570734FF7044Ed7E434604BB1fd (rinkeby)
aamToken deployed to 0x4da0136Da3789539b3bD8B3Ef2Ee23bc4873663d (goerli)