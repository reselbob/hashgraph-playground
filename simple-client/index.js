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
    console.log("Creating client");
    const client = Client.forNetwork(node).setMirrorNetwork('127.0.0.1:5600');
    console.log("Created client");

    client.setOperator(AccountId.fromString(accountId), PrivateKey.fromString(privateKey));
    console.log("Creating account");
    const newAccount = await new AccountCreateTransaction()
        .setKey(PrivateKey.fromString(privateKey))
        .setInitialBalance(new Hbar(1))
        .execute(client);
    console.log("Created account");

    console.log("Getting receipt");
    const receipt = await newAccount.getReceipt(client);
    console.log("Got receipt");
    const newAccountId = receipt.accountId;

    console.log(JSON.stringify({newAccountId}))
}

void main();
