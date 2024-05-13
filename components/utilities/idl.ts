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
      "name": "phaseUpdate",
      "accounts": [
        { "name": "tokenPda", "isMut": true, "isSigner": false },
        { "name": "authority", "isMut": true, "isSigner": true },
        { "name": "rent", "isMut": false, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false }
      ],
      "args": [{ "name": "phase", "type": { "defined": "PhaseParams" } }]
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
        { "name": "priceFeed", "isMut": false, "isSigner": false },
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
          { "name": "authority", "type": "publicKey" },
          { "name": "mintKey", "type": "publicKey" },
          { "name": "mintCount", "type": "u64" },
          { "name": "phaseOne", "type": "i64" },
          { "name": "phaseTwo", "type": "i64" },
          { "name": "phaseThree", "type": "i64" },
          { "name": "phaseFour", "type": "i64" },
          { "name": "phaseFive", "type": "i64" },
          { "name": "phaseFiveEnd", "type": "i64" },
          { "name": "phaseOneMint", "type": "u64" },
          { "name": "phaseTwoMint", "type": "u64" },
          { "name": "phaseThreeMint", "type": "u64" },
          { "name": "phaseFourMint", "type": "u64" },
          { "name": "phaseFiveMint", "type": "u64" }
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
    },
    {
      "name": "PhaseParams",
      "type": {
        "kind": "struct",
        "fields": [
          { "name": "phaseOne", "type": "i64" },
          { "name": "phaseTwo", "type": "i64" },
          { "name": "phaseThree", "type": "i64" },
          { "name": "phaseFour", "type": "i64" },
          { "name": "phaseFive", "type": "i64" },
          { "name": "phaseFiveEnd", "type": "i64" }
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
    },
    {
      "code": 6002,
      "name": "MintNotStarted",
      "msg": "Mint has not started yet, come-back later"
    },
    {
      "code": 6003,
      "name": "PhaseOneEnded",
      "msg": "Phase one mint ended, wait for the next phase"
    },
    {
      "code": 6004,
      "name": "PhaseTwoEnded",
      "msg": "Phase Two mint ended, wait for the next phase"
    },
    {
      "code": 6005,
      "name": "PhaseThreeEnded",
      "msg": "Phase Three mint ended, wait for the next phase"
    },
    {
      "code": 6006,
      "name": "PhaseFourEnded",
      "msg": "Phase Four mint ended, wait for the next phase"
    },
    {
      "code": 6007,
      "name": "PhaseFiveEnded",
      "msg": "Phase Five mint ended...."
    },
    { "code": 6008, "name": "MintEnded", "msg": "Mint has ended...." },
    { "code": 6009, "name": "InvalidPriceFeed", "msg": "Invalid Price Feed" },
    {
      "code": 6010,
      "name": "PriceFeedDown",
      "msg": "SOL/USD price feed is down, try again later"
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
        "name": "phaseUpdate",
        "accounts": [
          { "name": "tokenPda", "isMut": true, "isSigner": false },
          { "name": "authority", "isMut": true, "isSigner": true },
          { "name": "rent", "isMut": false, "isSigner": false },
          { "name": "systemProgram", "isMut": false, "isSigner": false }
        ],
        "args": [{ "name": "phase", "type": { "defined": "PhaseParams" } }]
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
          { "name": "priceFeed", "isMut": false, "isSigner": false },
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
            { "name": "authority", "type": "publicKey" },
            { "name": "mintKey", "type": "publicKey" },
            { "name": "mintCount", "type": "u64" },
            { "name": "phaseOne", "type": "i64" },
            { "name": "phaseTwo", "type": "i64" },
            { "name": "phaseThree", "type": "i64" },
            { "name": "phaseFour", "type": "i64" },
            { "name": "phaseFive", "type": "i64" },
            { "name": "phaseFiveEnd", "type": "i64" },
            { "name": "phaseOneMint", "type": "u64" },
            { "name": "phaseTwoMint", "type": "u64" },
            { "name": "phaseThreeMint", "type": "u64" },
            { "name": "phaseFourMint", "type": "u64" },
            { "name": "phaseFiveMint", "type": "u64" }
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
      },
      {
        "name": "PhaseParams",
        "type": {
          "kind": "struct",
          "fields": [
            { "name": "phaseOne", "type": "i64" },
            { "name": "phaseTwo", "type": "i64" },
            { "name": "phaseThree", "type": "i64" },
            { "name": "phaseFour", "type": "i64" },
            { "name": "phaseFive", "type": "i64" },
            { "name": "phaseFiveEnd", "type": "i64" }
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
      },
      {
        "code": 6002,
        "name": "MintNotStarted",
        "msg": "Mint has not started yet, come-back later"
      },
      {
        "code": 6003,
        "name": "PhaseOneEnded",
        "msg": "Phase one mint ended, wait for the next phase"
      },
      {
        "code": 6004,
        "name": "PhaseTwoEnded",
        "msg": "Phase Two mint ended, wait for the next phase"
      },
      {
        "code": 6005,
        "name": "PhaseThreeEnded",
        "msg": "Phase Three mint ended, wait for the next phase"
      },
      {
        "code": 6006,
        "name": "PhaseFourEnded",
        "msg": "Phase Four mint ended, wait for the next phase"
      },
      {
        "code": 6007,
        "name": "PhaseFiveEnded",
        "msg": "Phase Five mint ended...."
      },
      { "code": 6008, "name": "MintEnded", "msg": "Mint has ended...." },
      { "code": 6009, "name": "InvalidPriceFeed", "msg": "Invalid Price Feed" },
      {
        "code": 6010,
        "name": "PriceFeedDown",
        "msg": "SOL/USD price feed is down, try again later"
      }
    ]
  }
  