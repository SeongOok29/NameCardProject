import web3 from './web3';

const contractABI = [...] // 스마트 컨트랙트의 ABI
const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // 배포한 스마트 컨트랙트 주소

const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

export default contractInstance;
