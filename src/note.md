# 4. Make the blockexplorer cool!
The starter code pulls down the current block number for you.

Can you get more information about the current block and display it in the page? Take a look at alchemy.core.getBlock() for how you might go about that.

Blocks contains transactions. Can you get the list of transactions for a given block? Can you use alchemy.core.getBlockWithTransactions() for this?

How about getting details for individual transactions? The alchemy.core.getTransactionReceipt() looks handy.

# 5. More ideas to think about
Connecting the dots.
Allow users to click on a block listed in the webpage to get the block's details including its list of transactions
From the list of transactions allow users to click on specific transactions to get the details of the transaction
Make an accounts page where a user can look up their balance or someone else's balance
6. Supercharge your blockexplorer using AlchemySDK's specialized APIs
By using the AlchemySDK you can really supercharge your projects with additional API functionality that isn't included in the ethers.js package including:

1. NFT methods
2. WebSocket methods
3. Alchemy's Transact API functionality 
4. endpoints for using Alchemy's Notify Webhooks
Read more about the above in the Alchemy SDK Surface docs. Using the SDK can implement the following features?

Given a contract address and token id, can you get the NFT's metadata?
What is the floor price of an NFT right now?
Did a pending transaction get mined?
What transfers did an address receive this year?
Good luck and have fun!