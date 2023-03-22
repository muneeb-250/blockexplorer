import { Alchemy, Network } from 'alchemy-sdk';
import { useState, useEffect } from 'react';

import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [loading, setLoading] = useState(false)
  const [block, setBlock] = useState({});
  // const getBlock = async (blockNumber) => {
  //   // this function just returns the block with transaction hashes (no details)
  //   setLoading(true)
  //   const block = await alchemy.core.getBlock(blockNumber);
  //   setBlock(block);
  //   setLoading(false)
  //   console.log("without details")
  //   console.log(block);
  // }
  async function getTransactions(blockNumber) {
    console.log('With transaction details')
    setLoading(true);
    setBlock(await alchemy.core.getBlockWithTransactions(blockNumber));
    setLoading(false);
    console.log(await alchemy.core.getBlockWithTransactions(blockNumber));
    // this function returns block with the transaction and their details.
  }

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
    // getBlock();
    getTransactions();
  }, []);

  return <>
    {loading ? (<h1 id='loading'>Loading....</h1>) : (
      <>
        <h1 id='heading'>Welcome to my Block Explorer!</h1>
        <div className='container'>
          <h1>Block# {blockNumber}</h1>
          <p>{String(new Date(block.timestamp * 1000))}</p>
          <p>Block Number: {blockNumber}</p>
          <p>Block Hash: {block.hash}</p>
          <p>Block Miner: {block.miner}</p>
          <p>Nonce: {parseInt(block.nonce)}</p>
          <p>Timestamp: {block.timestamp}</p>
          <p>Difficulty: {block.difficulty}</p>
        </div>
        <div className='container'>
          <h1>Transactions</h1>
          {(JSON.stringify(block) === '{}') ? (<h1>Loading...</h1>) : (
            block.transactions.map((transaction) => {
              const { from, to, nonce, extraData } = transaction;
              return <section id='transaction' key={extraData}>
                <p>From: {from}</p>
                <p>To: {to}</p>
                <p>Nonce: {nonce}</p>
              </section>
            })
          )}
        </div>
      </>
    )}
  </>;
}

export default App;
