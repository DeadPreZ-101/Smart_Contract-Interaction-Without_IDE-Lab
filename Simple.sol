//SPDX-License-Identifier: unlicensed

pragma solidity >=0.5.0 <0.7.0;

contract Lab4Contract {
    string lab4;

    event makeLonger(string indexed word);

    function readString() public view returns (string memory) {
        return lab4;
    }

    function concatinate(string memory _addingWords) public {
        lab4 = _addingWords;
        emit makeLonger(lab4);
    }

    function write(string memory _addingWords) public {
        lab4 = _addingWords
        emit makeLonger(lab4);
    }

    function update(string memory _updateLab4 ) private {
        lab4 = _updateLab4;
    }
}
