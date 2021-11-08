const OpenDefiNFTFactory = artifacts.require('OpenDefiNFTFactory');
const truffleAssert = require('truffle-assertions');

contract('OpenDefiNFTFactory', () =>{

    it('Should update metaDataUri contract', async() => {
        const openDefiNFTFactory = await OpenDefiNFTFactory.deployed();
        await openDefiNFTFactory.updateBaseMetaDataURI('Uri update test string');
        const result = await openDefiNFTFactory.baseMetadataURI();
        assert(result === 'Uri update test string');
    }); 

    it('Should create collection', async() => {
        const openDefiNFTFactory = await OpenDefiNFTFactory.deployed();
        var result = await openDefiNFTFactory.createCollection('Collection_1','CL_1');
        var nftAdd;
        truffleAssert.eventEmitted(result, 'Create1155Collection', (ev) => {
            nftAdd = ev.nftAddress;
            console.log("test",ev.nftAddress);
            return true;
        },'TestEvent should be emitted with correct parameters');
       assert(nftAdd !== '');
    }); 

});
