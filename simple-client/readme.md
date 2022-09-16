# Getting things up and running

`Step 1:` In a terminal window execute the following:

```bash
git clone https://github.com/hashgraph/hedera-local-node.git
```
---

`Step 2:` In the same terminal window:

```bash
cd hedera-local-node
```

---
`Step 3:` Run the following command in the terminal window to start the local Hashgraph instance

```
docker-compose up
```

**OPEN A SECOND TERMINAL WINDOW**

`Step 5:` Run the following command in the second terminal window to navigate to the working directory of the client code and install the dependencies

```
cd hashgraph-playground/simple-client && npm install
```

---

`Step 6:` Run the following command in the second terminal window  to create  and populate the `.env` file that will store important environment variable information that the code needs to run

```bash
cat << 'EOF' > .env
ACCOUNT_ID=0.0.2
PRIVATE_KEY=302e020100300506032b65700422042091132178e72057a1d7528025956fe39b0b847f200ab59b2fdd367017f3087137
EOF
```

---

`Step 7:` Run the following command in the second terminal window:

```bash
node index.js
```
Upon successful execution (in a minute or two in some cases) you'll see output similar to the following:

```
Creating client
Created client
Creating account
Created account
Getting receipt
Got receipt
Here is the receipt:

{"newAccountId":{"shard":{"low":0,"high":0,"unsigned":false},"realm":{"low":0,"high":0,"unsigned":false},"num":{"low":1002,"high":0,"unsigned":false},"aliasKey":null,"aliasEvmAddress":null,"_checksum":null}}
```

**OPEN A THIRD TERMINAL WINDOW**


`Step 8:` Run the following command in the third terminal to download the code for the Hashgraph Explorer

```bash
git clone https://github.com/hashgraph/hedera-mirror-node-explorer.git
```

---

`Step 9:` Run the following command in the third terminal to navigate to the working directory for the Hashgraph Explorer code

```bash
cd hedera-mirror-node-explorer
```

---

`Step 10:`  Run the following command in the third terminal to start the Hashgraph Explorer via Docker Compose

```
npm run build:docker && docker-compose up
```

---

`Step 11:` Open a browser window to the following URL: `http://localhost:9090`

---
