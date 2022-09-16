const {
    Client,
    PrivateKey,
    Hbar,
    AccountId,
    AccountCreateTransaction
}  = require("@hashgraph/sdk");
require('dotenv').config()
async function main(){
    const accountId = process.env.ACCOUNT_ID;
    const privateKey = process.env.PRIVATE_KEY;

    const node = {'127.0.0.1:50211': new AccountId(3)}
    const client = Client.forNetwork(node).setMirrorNetwork('127.0.0.1:5600');

    client.setOperator(AccountId.fromString(accountId), PrivateKey.fromString(privateKey));

    const newAccount = await new AccountCreateTransaction()
        .setKey(PrivateKey.fromString(privateKey))
        .setInitialBalance(new Hbar(1))
        .execute(client);

    const receipt = await newAccount.getReceipt(client);
    const newAccountId = receipt.accountId;
    console.log(JSON.stringify({newAccountId}))
}

void main();
