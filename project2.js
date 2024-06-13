// SPDX-License-Identifier: MITpragma solidity ^0.8.0;
pragma solidity ^0.8.0;
contract MyToken {

    // Public variables to store the details about the coin
    string public tokenName;
    string public tokenAbbrv;
    uint256 public totalSupply;

    // Mapping of addresses to balances
    mapping(address => uint256) public balances;

    // Constructor to initialize the token details
    constructor(string memory _tname, string memory _tabbrv, uint256 _tinitialSupply) {
        tokenName = _tname;
        tokenAbbrv = _tabbrv;
        totalSupply = _tinitialSupply;
        balances[msg.sender] = _tinitialSupply; // Assign all initial tokens to the contract deployer
    }

    // Mint function to increase the total supply and the balance of the specified address
    function mint(address _to, uint256 _value) public {
        totalSupply += _value;
        balances[_to] += _value;
    }

    // Burn function to decrease the total supply and the balance of the specified address
    function burn(address _from, uint256 _value) public {
        require(balances[_from] >= _value, "Insufficient balance to burn");
        totalSupply -= _value;
        balances[_from] -= _value;
    }
}
