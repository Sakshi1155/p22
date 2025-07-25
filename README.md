###  MyToken Smart Contract

## Overview

MyToken is a simple Ethereum smart contract that defines a basic ERC-20 token. The token has a name, abbreviation, and a total supply, which can be managed through minting and burning functions.

## Features

- Token Details: Public variables for the token name, abbreviation, and total supply.
- Balances: A mapping to track the balance of each address.
- Minting: Function to increase the total supply and assign new tokens to a specified address.
- Burning: Function to decrease the total supply by burning tokens from a specified address.

## Smart Contract Details

### Public Variables

- string public tokenName: The name of the token.
- string public tokenAbbrv: The abbreviation of the token.
- uint256 public totalSupply: The total supply of the token.

### Mappings

- mapping(address => uint256) public balances: Maps each address to its token balance.

### Constructor

The constructor initializes the token details and assigns the initial supply to the contract deployer.

solidity
constructor(string memory _tname, string memory _tabbrv, uint256 _tinitialSupply) {
    tokenName = _tname;
    tokenAbbrv = _tabbrv;
    totalSupply = _tinitialSupply;
    balances[msg.sender] = _tinitialSupply;
}


### Functions

#### mint

Increases the total supply and assigns new tokens to the specified address.

solidity
function mint(address _to, uint256 _value) public {
    totalSupply += _value;
    balances[_to] += _value;
}


#### burn

Decreases the total supply by burning tokens from the specified address. Requires the address to have a sufficient balance.

solidity
function burn(address _from, uint256 _value) public {
    require(balances[_from] >= _value, "Insufficient balance to burn");
    totalSupply -= _value;
    balances[_from] -= _value;
}


## Deployment

To deploy the MyToken contract, use the following constructor parameters:

- _tname: The name of your token.
- _tabbrv: The abbreviation of your token.
- _tinitialSupply: The initial supply of tokens.

Example deployment:

solidity
MyToken myToken = new MyToken("MyTokenName", "MTN", 1000000);


This will create a new token with the name "MyTokenName", abbreviation "MTN", and an initial supply of 1,000,000 tokens assigned to the deployer.

## Usage

### Minting Tokens

To mint new tokens, call the mint function with the recipient address and the amount of tokens to mint.

Example:

solidity
myToken.mint(0xRecipientAddress, 500);


### Burning Tokens

To burn tokens, call the burn function with the address to burn from and the amount of tokens to burn.

Example:

solidity
myToken.burn(0xAddress, 200);


## License

This project is licensed under the MIT License.
