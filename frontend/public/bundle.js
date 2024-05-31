var contractABI=[];
var  contract="0xff792bFde3CbD04E1Fb43C1548ab2B24C397547";
var web3= new Web3('http://localhost:9545');
var simpleSmartContract=new web3.eth.Contract(contractABI,contractAddress);
console.log(simpleSmartContract);
web3.eth.getAccount()
.then(console.log); 