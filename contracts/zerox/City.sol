// SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.4;

// import "../interfaces/ILayerZeroReceiver.sol";
// import "../interfaces/ILayerZeroEndpoint.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract City is AccessControl, ERC1155Supply {
    address private owner;
    bytes32 public constant URI_SETTER_ROLE = keccak256("URI_SETTER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    //Buildings
    uint public constant TOWNHALL = 0;
    uint public constant WOODCUTTER = 1;
    uint public constant QUARRY = 2;
    uint public constant IRON_MINE = 3;
    uint public constant CROPLAND = 4;
    uint public constant WAREHOUSE = 5;
    //Resources
    uint public constant WOOD = 91;
    uint public constant CLAY = 92;
    uint public constant IRON = 93;
    uint public constant FOOD = 94;

    //Multipliers
    uint public constant RESOURCE_MULTIPLIER = 100;
    uint public constant CONSTRUCTION_MULTIPLIER = 500;
    uint public constant WAREHOUSE_MULTIPLIER = 1000;

    constructor() ERC1155("") {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(URI_SETTER_ROLE, msg.sender);
        _setupRole(MINTER_ROLE, msg.sender);
    }

    //Estimate the resources that will be payed out
    function estimateResourcePayout(uint _resourceId) internal view returns(uint) {
        uint generatorLevel = totalSupply(_resourceId - 90);
        return (generatorLevel*RESOURCE_MULTIPLIER);
    }

    //Calculates and mints resources to the owner
    function issueResources() public onlyRole(URI_SETTER_ROLE) {
        uint woodToIssue = estimateResourcePayout(91);
        uint clayToIssue = estimateResourcePayout(92);
        uint ironToIssue = estimateResourcePayout(93);
        uint foodToIssue = estimateResourcePayout(94);
        //Resources values for batch operations
        uint[] memory resourceValues = new uint[](4);
        resourceValues[0] = woodToIssue;
        resourceValues[1] = clayToIssue;
        resourceValues[2] = ironToIssue;
        resourceValues[3] = foodToIssue;
        //Resources ids array for batch operations
        uint[] memory resourceIds = new uint[](4);
        resourceIds[0] = 91;
        resourceIds[1] = 92;
        resourceIds[2] = 93;
        resourceIds[3] = 94;
        _mintBatch(owner, resourceIds, resourceValues, "0x0");
    }

    //Upgrading a building aka minting another copy
    function upgradeBuilding(uint _buildingId) public {
        require(msg.sender == owner,"Only the owner can upgrade the buildings");
        require(_buildingId <= 9, "Not valid buildingId");
        uint generatorLevel = totalSupply(_buildingId);
        uint resourceCost = generatorLevel * CONSTRUCTION_MULTIPLIER;
        uint[] memory resourceIds = new uint[](4);
        resourceIds[0] = WOOD;
        resourceIds[1] = CLAY;
        resourceIds[2] = IRON;
        resourceIds[3] = FOOD;
        uint[] memory resourceValues = new uint[](4);
        resourceValues[0] = resourceCost;
        resourceValues[1] = resourceCost;
        resourceValues[2] = resourceCost;
        resourceValues[3] = resourceCost;
        _burnBatch(owner, resourceIds, resourceValues);
        _mint(owner, _buildingId, 1, "0x0"); 
    }
    
    //The following functions are overrides required by Solidity.
    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155)
    {
        //Keeping track of the current City holder
        if (to != owner) {
            owner = to;
        }
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

}