// Here we export some useful types and functions for interacting with the Anchor program.
import { Cluster, PublicKey } from '@solana/web3.js';

import {IDL} from './idl';

// // Re-export the generated IDL and type
// export type { IDL, Meme };

// After updating your program ID (e.g. after running `anchor keys sync`) update the value below.
export const MEME_PROGRAM_ID = new PublicKey(
  '8dw68VDX3pWPibpZH39vQtG1GK1DEY8pT6dyKeHbA5c2'
);

export const MEME_STAKE_PROGRAM_ID = new PublicKey(
  'GEEmbitgtu2vNexxZXmPmcr1Z6yWnoDzKTQsefmkHf9y'
);



//EmQEUUDYPZqHrtSVTCvTkvPdXdS5GiRgW4srWF9kUckz
//8SXDKYbosQzGBS5N1FUNPrFJq1v55iyBkxwShreiFPca

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
