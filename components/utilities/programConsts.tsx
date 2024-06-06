// Here we export some useful types and functions for interacting with the Anchor program.
import { Cluster, PublicKey } from '@solana/web3.js';

import {IDL} from './idl';

// // Re-export the generated IDL and type
// export type { IDL, Meme };

// After updating your program ID (e.g. after running `anchor keys sync`) update the value below.
export const MEME_PROGRAM_ID = new PublicKey(
  '3Wb1PzHZa8vQua43feBsh9hrwVk2GnKCHTTWii1rd5Cv'
);

//CtpNYAbYD6LPY64jSd668gTmTSCwAdDevbQecPkjdRqB
//C2qXBLSRdrjGUDf56HwnQ1w8rQzrr9mK7dDWHT5Wx76f
//8dw68VDX3pWPibpZH39vQtG1GK1DEY8pT6dyKeHbA5c2

//8QpzZYTQr2huLtK2FdLJFuyce7PhzsCy1tLZ4yR8724J

// export function useAnchorProvider() {
//   const { connection } = useConnection();
//   const wallet = useWallet();

//   return new AnchorProvider(connection, wallet as AnchorWallet, {
//     commitment: 'confirmed',
//   });
// }

//const provider = useAnchorProvider();

//export const program = new Program(IDL, MEME_PROGRAM_ID, provider);

// This is a helper function to get the program ID for the Dapp program depending on the cluster.
export function getDappProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
    case 'mainnet-beta':
    default:
      return MEME_PROGRAM_ID;
  }
}
