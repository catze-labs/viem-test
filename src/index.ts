import { createPublicClient, http, publicActions } from "viem";
import { sepolia } from "viem/chains";

/**  커맨드 순서
 *  npm i
 *  npm i typescript -g
 *  npm i tsx -g
 */

/* 실행 tsx src/index.ts */

const client = createPublicClient({
  chain: sepolia,
  transport: http(),
}).extend(publicActions);

console.log(client);
