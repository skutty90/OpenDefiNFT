// const OpenDefiNFT = artifacts.require('OpenDefiNFT');

// contract('OpenDefiNFT', async accounts =>{
//     let firstAccount = accounts[0];
//     let secondAccount = "0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f";

//     console.log(firstAccount,secondAccount);

//     it('Should mint nft', async() => {
//         const openDefiNFT = await OpenDefiNFT.deployed();
//         var initialBalance = await openDefiNFT.balanceOf('0x828954676f2634D404251f05e4F619FF83f7EceB',1);
//         console.log(initialBalance.toNumber() );
//         await openDefiNFT.mint(1,5);
//         var  balance = await openDefiNFT.balanceOf('0x828954676f2634D404251f05e4F619FF83f7EceB',1);
//         console.log(balance.toNumber() );
//         assert(balance.toNumber() === 5);
//     }); 

//     it('Should burn nft', async() => {
//         const openDefiNFT = await OpenDefiNFT.deployed();
//         var initialBalance = await openDefiNFT.balanceOf('0x828954676f2634D404251f05e4F619FF83f7EceB',1);
//         console.log(initialBalance.toNumber());
//         await openDefiNFT.burn(1,5);
//         var  balance = await openDefiNFT.balanceOf('0x828954676f2634D404251f05e4F619FF83f7EceB',1);
//         console.log(balance.toNumber());
//         assert(balance.toNumber() === 0);
//     }); 

//     it('Should pause contract', async() => {
//         const openDefiNFT = await OpenDefiNFT.deployed();
//         var status = await openDefiNFT.paused();
//         console.log(status);
//         await openDefiNFT.pause();
//         status = await openDefiNFT.paused();
//         console.log(status);
//         assert(status === true);
//     }); 

//     it('Should unpause contract', async() => {
//         const openDefiNFT = await OpenDefiNFT.deployed();
//         var status = await openDefiNFT.paused();
//         console.log(status);
//         await openDefiNFT.unpause();
//         status = await openDefiNFT.paused();
//         console.log(status);
//         assert(status === false);
//     });

//     it('Should mint multiple nft', async() => {
//         const openDefiNFT = await OpenDefiNFT.deployed();
//         const initialBalance = await openDefiNFT.balanceOf('0x828954676f2634D404251f05e4F619FF83f7EceB',1);
//         //console.log(initialBalance.toNumber());
//         await openDefiNFT.mintAll([1,2,3,4,5],[1,1,1,1,1]);
//         var balance = [ ];
//         balance = await openDefiNFT.balanceOfBatch(['0x828954676f2634D404251f05e4F619FF83f7EceB','0x828954676f2634D404251f05e4F619FF83f7EceB','0x828954676f2634D404251f05e4F619FF83f7EceB','0x828954676f2634D404251f05e4F619FF83f7EceB','0x828954676f2634D404251f05e4F619FF83f7EceB'],[1,2,3,4,5]);
//         //console.log(balance.toNumber());
//         const ids = balance.map(id => id.toNumber());
//         assert.deepEqual(ids,[1,1,1,1,1]);
//     });

//     it('Should burn all nft', async() => {
//         const openDefiNFT = await OpenDefiNFT.deployed();
//         const initialBalance = await openDefiNFT.balanceOf('0x828954676f2634D404251f05e4F619FF83f7EceB',1);
//         console.log(initialBalance);
//         await openDefiNFT.burnAll([1,2,3,4,5],[1,1,1,1,1]);
//         var balance = [ ];
//         balance = await openDefiNFT.balanceOfBatch(['0x828954676f2634D404251f05e4F619FF83f7EceB','0x828954676f2634D404251f05e4F619FF83f7EceB','0x828954676f2634D404251f05e4F619FF83f7EceB','0x828954676f2634D404251f05e4F619FF83f7EceB','0x828954676f2634D404251f05e4F619FF83f7EceB'],[1,2,3,4,5]);
//         //console.log(balance);
//         const ids = balance.map(id => id.toNumber());
//         assert.deepEqual(ids,[0,0,0,0,0]); 
//     });

//     it('Should update baseuri', async() => {
//         const openDefiNFT = await OpenDefiNFT.deployed();
//         await openDefiNFT.updateBaseURI('Uri update test string 2');
//         const result = await openDefiNFT.uri(1);
//         console.log(result);
//         assert(result === 'Uri update test string 2');
//     }); 

//     it('Should transfer nft', async() => {
//         const openDefiNFT = await OpenDefiNFT.deployed();
//         const initialBalance = await openDefiNFT.balanceOf('0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f',1);
//         console.log(initialBalance.toNumber());
//         await openDefiNFT.mint(1,5);
//         await openDefiNFT.transfer('0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f',1,5);
//             var  balance = await openDefiNFT.balanceOf('0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f',1);
//         console.log(balance.toNumber());
//         assert(initialBalance.toNumber() === balance.toNumber()-5);
//     }); 

//     it('Should not transfer nft', async() => {
//         const openDefiNFT = await OpenDefiNFT.deployed();
//         const initialBalance = await openDefiNFT.balanceOf('0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f',1);
//         console.log(initialBalance.toNumber());
//         await openDefiNFT.mint(1,5);
//         await openDefiNFT.pause();
//         await openDefiNFT.transfer('0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f',1,5);
//         var  balance = await openDefiNFT.balanceOf('0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f',1);
//         console.log(balance.toNumber());
//         assert(initialBalance.toNumber() === balance.toNumber());
//     }); 

//     it('Should transfer multiple nft', async() => {
//         const openDefiNFT = await OpenDefiNFT.deployed();
//         await openDefiNFT.unpause();
//         const initialBalance = await openDefiNFT.balanceOf('0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f',1);
//         console.log(initialBalance.toNumber());
//         await openDefiNFT.mintAll([1,2,3,4,5],[1,1,1,1,1]);
//         await openDefiNFT.transferFrom(['0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f'],[1,2,3,4,5],[1,1,1,1,1]);
//         var  balance = [];
//         balance = await openDefiNFT.balanceOfBatch(['0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f'],[1,2,3,4,5]);
//         const ids = balance.map(id => id.toNumber());
//         console.log(ids);
//         assert.deepEqual(ids,[6,1,1,1,1]); 
//     }); 

//     it('Should not transfer multiple nft', async() => {
//         const openDefiNFT = await OpenDefiNFT.deployed();
//         const initialBalance = await openDefiNFT.balanceOf('0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f',1);
//         console.log(initialBalance.toNumber());
//         await openDefiNFT.mintAll([1,2,3,4,5],[1,1,1,1,1]);
//         await openDefiNFT.pause();
//         await openDefiNFT.transferFrom(['0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f'],[1,2,3,4,5],[1,1,1,1,1]);
//         var  balance = [];
//         balance = await openDefiNFT.balanceOfBatch(['0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f','0xE734EC83b615DEDd7CB2b24DDd69b3dF56735d1f'],[1,2,3,4,5]);
//         const ids = balance.map(id => id.toNumber());
//         console.log(ids);
//         assert.deepEqual(ids,[1,1,1,1,1]); 
//     }); 

// });