export type Meme = {
    "version": "0.1.0",
    "name": "meme",
    "constants": [
      { "name": "TOTAL_SUPPLY", "type": "u64", "value": "5_000_000_000" }
    ],
    "instructions": [
      {
        "name": "initToken",
        "accounts": [
          { "name": "metadata", "isMut": true, "isSigner": false },
          { "name": "mint", "isMut": true, "isSigner": false },
          { "name": "tokenPda", "isMut": true, "isSigner": false },
          { "name": "destination", "isMut": true, "isSigner": false },
          { "name": "payer", "isMut": true, "isSigner": true },
          { "name": "rent", "isMut": false, "isSigner": false },
          { "name": "systemProgram", "isMut": false, "isSigner": false },
          { "name": "tokenProgram", "isMut": false, "isSigner": false },
          { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
          { "name": "tokenMetadataProgram", "isMut": false, "isSigner": false }
        ],
        "args": [{ "name": "metadata", "type": { "defined": "InitTokenParams" } }]
      },
      {
        "name": "buyTokens",
        "accounts": [
          { "name": "mint", "isMut": true, "isSigner": false },
          { "name": "tokenPda", "isMut": true, "isSigner": false },
          { "name": "fromAta", "isMut": true, "isSigner": false },
          { "name": "destination", "isMut": true, "isSigner": false },
          { "name": "payer", "isMut": true, "isSigner": true },
          {
            "name": "referrer",
            "isMut": true,
            "isSigner": false,
            "isOptional": true
          },
          { "name": "rent", "isMut": false, "isSigner": false },
          { "name": "systemProgram", "isMut": false, "isSigner": false },
          { "name": "tokenProgram", "isMut": false, "isSigner": false },
          { "name": "associatedTokenProgram", "isMut": false, "isSigner": false }
        ],
        "args": [{ "name": "quantity", "type": "u64" }]
      }
    ],
    "accounts": [
      {
        "name": "TokenPda",
        "type": {
          "kind": "struct",
          "fields": [
            { "name": "creator", "type": "publicKey" },
            { "name": "mintKey", "type": "publicKey" },
            { "name": "mintCount", "type": "u64" }
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
    ],
    "errors": [
      {
        "code": 6000,
        "name": "DataTooLarge",
        "msg": "Exceeds total supply! Available tokens:"
      },
      {
        "code": 6001,
        "name": "ReferenceExists",
        "msg": "This user is alreday referred"
      }
    ]
  }
  

















  export const IDL: Meme = {
    "version": "0.1.0",
    "name": "meme",
    "constants": [
      { "name": "TOTAL_SUPPLY", "type": "u64", "value": "5_000_000_000" }
    ],
    "instructions": [
      {
        "name": "initToken",
        "accounts": [
          { "name": "metadata", "isMut": true, "isSigner": false },
          { "name": "mint", "isMut": true, "isSigner": false },
          { "name": "tokenPda", "isMut": true, "isSigner": false },
          { "name": "destination", "isMut": true, "isSigner": false },
          { "name": "payer", "isMut": true, "isSigner": true },
          { "name": "rent", "isMut": false, "isSigner": false },
          { "name": "systemProgram", "isMut": false, "isSigner": false },
          { "name": "tokenProgram", "isMut": false, "isSigner": false },
          { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
          { "name": "tokenMetadataProgram", "isMut": false, "isSigner": false }
        ],
        "args": [{ "name": "metadata", "type": { "defined": "InitTokenParams" } }]
      },
      {
        "name": "buyTokens",
        "accounts": [
          { "name": "mint", "isMut": true, "isSigner": false },
          { "name": "tokenPda", "isMut": true, "isSigner": false },
          { "name": "fromAta", "isMut": true, "isSigner": false },
          { "name": "destination", "isMut": true, "isSigner": false },
          { "name": "payer", "isMut": true, "isSigner": true },
          {
            "name": "referrer",
            "isMut": true,
            "isSigner": false,
            "isOptional": true
          },
          { "name": "rent", "isMut": false, "isSigner": false },
          { "name": "systemProgram", "isMut": false, "isSigner": false },
          { "name": "tokenProgram", "isMut": false, "isSigner": false },
          { "name": "associatedTokenProgram", "isMut": false, "isSigner": false }
        ],
        "args": [{ "name": "quantity", "type": "u64" }]
      }
    ],
    "accounts": [
      {
        "name": "TokenPda",
        "type": {
          "kind": "struct",
          "fields": [
            { "name": "creator", "type": "publicKey" },
            { "name": "mintKey", "type": "publicKey" },
            { "name": "mintCount", "type": "u64" }
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
    ],
    "errors": [
      {
        "code": 6000,
        "name": "DataTooLarge",
        "msg": "Exceeds total supply! Available tokens:"
      },
      {
        "code": 6001,
        "name": "ReferenceExists",
        "msg": "This user is alreday referred"
      }
    ]
  }