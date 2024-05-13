export type Meme_Stake ={
    "version": "0.1.0",
    "name": "meme_stake",
    "constants": [
      {
        "name": "MINT_KEY",
        "type": "string",
        "value": "\"7UqBTQnoswV2bPL3ZYvtLrhwXhX1oz91kSLTeHFiiwY2\""
      }
    ],
    "instructions": [
      {
        "name": "initialize",
        "accounts": [
          { "name": "metadata", "isMut": true, "isSigner": false },
          { "name": "mint", "isMut": true, "isSigner": false },
          { "name": "admin", "isMut": true, "isSigner": true },
          { "name": "poolInfo", "isMut": true, "isSigner": true },
          { "name": "stakingToken", "isMut": true, "isSigner": false },
          { "name": "adminStakingWallet", "isMut": true, "isSigner": false },
          { "name": "rent", "isMut": false, "isSigner": false },
          { "name": "systemProgram", "isMut": false, "isSigner": false },
          { "name": "tokenProgram", "isMut": false, "isSigner": false },
          { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
          { "name": "tokenMetadataProgram", "isMut": false, "isSigner": false }
        ],
        "args": [
          { "name": "startSlot", "type": "u64" },
          { "name": "endSlot", "type": "u64" },
          { "name": "metadata", "type": { "defined": "InitTokenParams" } }
        ]
      },
      {
        "name": "stake",
        "accounts": [
          { "name": "user", "isMut": true, "isSigner": true },
          { "name": "admin", "isMut": true, "isSigner": false },
          { "name": "userInfo", "isMut": true, "isSigner": true },
          { "name": "userStakingWallet", "isMut": true, "isSigner": false },
          { "name": "adminStakingWallet", "isMut": true, "isSigner": false },
          { "name": "destination", "isMut": true, "isSigner": false },
          { "name": "mint", "isMut": true, "isSigner": false },
          { "name": "stakingToken", "isMut": true, "isSigner": false },
          { "name": "tokenProgram", "isMut": false, "isSigner": false },
          { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
          { "name": "rent", "isMut": false, "isSigner": false },
          { "name": "systemProgram", "isMut": false, "isSigner": false }
        ],
        "args": [{ "name": "amount", "type": "u64" }]
      },
      {
        "name": "unstake",
        "accounts": [
          { "name": "user", "isMut": true, "isSigner": true },
          { "name": "admin", "isMut": true, "isSigner": false },
          { "name": "userInfo", "isMut": true, "isSigner": false },
          { "name": "userStakingWallet", "isMut": true, "isSigner": false },
          { "name": "adminStakingWallet", "isMut": true, "isSigner": false },
          { "name": "destination", "isMut": true, "isSigner": false },
          { "name": "mint", "isMut": true, "isSigner": false },
          { "name": "stakingToken", "isMut": true, "isSigner": false },
          { "name": "tokenProgram", "isMut": false, "isSigner": false },
          { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
          { "name": "rent", "isMut": false, "isSigner": false },
          { "name": "systemProgram", "isMut": false, "isSigner": false }
        ],
        "args": []
      },
      {
        "name": "claimReward",
        "accounts": [
          { "name": "user", "isMut": true, "isSigner": true },
          { "name": "admin", "isMut": true, "isSigner": false },
          { "name": "userInfo", "isMut": true, "isSigner": false },
          { "name": "userStakingWallet", "isMut": true, "isSigner": false },
          { "name": "adminStakingWallet", "isMut": true, "isSigner": false },
          { "name": "destination", "isMut": true, "isSigner": false },
          { "name": "mint", "isMut": true, "isSigner": false },
          { "name": "stakingToken", "isMut": true, "isSigner": false },
          { "name": "tokenProgram", "isMut": false, "isSigner": false },
          { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
          { "name": "rent", "isMut": false, "isSigner": false },
          { "name": "systemProgram", "isMut": false, "isSigner": false }
        ],
        "args": []
      }
    ],
    "accounts": [
      {
        "name": "PoolInfo",
        "type": {
          "kind": "struct",
          "fields": [
            { "name": "admin", "type": "publicKey" },
            { "name": "startSlot", "type": "u64" },
            { "name": "endSlot", "type": "u64" },
            { "name": "token", "type": "publicKey" }
          ]
        }
      },
      {
        "name": "UserInfo",
        "type": {
          "kind": "struct",
          "fields": [
            { "name": "amount", "type": "u64" },
            { "name": "rewardDebt", "type": "u64" },
            { "name": "depositSlot", "type": "u64" }
          ]
        }
      }
    ],
    "types": [
      {
        "name": "InitTokenParams",
        "type": {
          "kind": "struct",
          "fields": [
            { "name": "name", "type": "string" },
            { "name": "symbol", "type": "string" },
            { "name": "uri", "type": "string" },
            { "name": "decimals", "type": "u8" }
          ]
        }
      }
    ]
  }
  





























  export const IDL: Meme_Stake = {
    "version": "0.1.0",
    "name": "meme_stake",
    "constants": [
      {
        "name": "MINT_KEY",
        "type": "string",
        "value": "\"7UqBTQnoswV2bPL3ZYvtLrhwXhX1oz91kSLTeHFiiwY2\""
      }
    ],
    "instructions": [
      {
        "name": "initialize",
        "accounts": [
          { "name": "metadata", "isMut": true, "isSigner": false },
          { "name": "mint", "isMut": true, "isSigner": false },
          { "name": "admin", "isMut": true, "isSigner": true },
          { "name": "poolInfo", "isMut": true, "isSigner": true },
          { "name": "stakingToken", "isMut": true, "isSigner": false },
          { "name": "adminStakingWallet", "isMut": true, "isSigner": false },
          { "name": "rent", "isMut": false, "isSigner": false },
          { "name": "systemProgram", "isMut": false, "isSigner": false },
          { "name": "tokenProgram", "isMut": false, "isSigner": false },
          { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
          { "name": "tokenMetadataProgram", "isMut": false, "isSigner": false }
        ],
        "args": [
          { "name": "startSlot", "type": "u64" },
          { "name": "endSlot", "type": "u64" },
          { "name": "metadata", "type": { "defined": "InitTokenParams" } }
        ]
      },
      {
        "name": "stake",
        "accounts": [
          { "name": "user", "isMut": true, "isSigner": true },
          { "name": "admin", "isMut": true, "isSigner": false },
          { "name": "userInfo", "isMut": true, "isSigner": true },
          { "name": "userStakingWallet", "isMut": true, "isSigner": false },
          { "name": "adminStakingWallet", "isMut": true, "isSigner": false },
          { "name": "destination", "isMut": true, "isSigner": false },
          { "name": "mint", "isMut": true, "isSigner": false },
          { "name": "stakingToken", "isMut": true, "isSigner": false },
          { "name": "tokenProgram", "isMut": false, "isSigner": false },
          { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
          { "name": "rent", "isMut": false, "isSigner": false },
          { "name": "systemProgram", "isMut": false, "isSigner": false }
        ],
        "args": [{ "name": "amount", "type": "u64" }]
      },
      {
        "name": "unstake",
        "accounts": [
          { "name": "user", "isMut": true, "isSigner": true },
          { "name": "admin", "isMut": true, "isSigner": false },
          { "name": "userInfo", "isMut": true, "isSigner": false },
          { "name": "userStakingWallet", "isMut": true, "isSigner": false },
          { "name": "adminStakingWallet", "isMut": true, "isSigner": false },
          { "name": "destination", "isMut": true, "isSigner": false },
          { "name": "mint", "isMut": true, "isSigner": false },
          { "name": "stakingToken", "isMut": true, "isSigner": false },
          { "name": "tokenProgram", "isMut": false, "isSigner": false },
          { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
          { "name": "rent", "isMut": false, "isSigner": false },
          { "name": "systemProgram", "isMut": false, "isSigner": false }
        ],
        "args": []
      },
      {
        "name": "claimReward",
        "accounts": [
          { "name": "user", "isMut": true, "isSigner": true },
          { "name": "admin", "isMut": true, "isSigner": false },
          { "name": "userInfo", "isMut": true, "isSigner": false },
          { "name": "userStakingWallet", "isMut": true, "isSigner": false },
          { "name": "adminStakingWallet", "isMut": true, "isSigner": false },
          { "name": "destination", "isMut": true, "isSigner": false },
          { "name": "mint", "isMut": true, "isSigner": false },
          { "name": "stakingToken", "isMut": true, "isSigner": false },
          { "name": "tokenProgram", "isMut": false, "isSigner": false },
          { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
          { "name": "rent", "isMut": false, "isSigner": false },
          { "name": "systemProgram", "isMut": false, "isSigner": false }
        ],
        "args": []
      }
    ],
    "accounts": [
      {
        "name": "PoolInfo",
        "type": {
          "kind": "struct",
          "fields": [
            { "name": "admin", "type": "publicKey" },
            { "name": "startSlot", "type": "u64" },
            { "name": "endSlot", "type": "u64" },
            { "name": "token", "type": "publicKey" }
          ]
        }
      },
      {
        "name": "UserInfo",
        "type": {
          "kind": "struct",
          "fields": [
            { "name": "amount", "type": "u64" },
            { "name": "rewardDebt", "type": "u64" },
            { "name": "depositSlot", "type": "u64" }
          ]
        }
      }
    ],
    "types": [
      {
        "name": "InitTokenParams",
        "type": {
          "kind": "struct",
          "fields": [
            { "name": "name", "type": "string" },
            { "name": "symbol", "type": "string" },
            { "name": "uri", "type": "string" },
            { "name": "decimals", "type": "u8" }
          ]
        }
      }
    ]
  }
  