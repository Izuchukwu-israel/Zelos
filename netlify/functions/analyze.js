const apiKey = process.env.GROQ_API_KEY;

exports.handler = async function (event) {
  console.log("Function hit. API key present:", !!apiKey);

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "GROQ_API_KEY is missing from environment",
      }),
    };
  }

  try {
    const { walletData, address } = JSON.parse(event.body);

    const prompt = `
You are Zelos, an AI guide for the Injective blockchain ecosystem. Analyze this wallet and give personalized insights.

Wallet Address: ${address}

Wallet Data:
${JSON.stringify(walletData, null, 2)}

Respond in this exact structure:

## 👋 Wallet Summary
Brief plain English summary of what this wallet holds and its activity level on Injective.

## ✅ What You're Doing Right
What the user is already doing well on Injective. Be specific to the wallet data.

## ⚠️ Opportunities You're Missing
For each relevant missing opportunity explain what it is, why it matters, and include the link.

Use ONLY these verified Injective ecosystem opportunities where relevant:

TRADING & DEX:
1. Helix — the everything DEX on Injective. Spot, perps, RWAs (US stocks, gold, pre-IPO equities), all onchain. Zero gas for makers. Link: https://helixapp.com
2. Choice Exchange — DEX aggregator routing swaps across all Injective venues for best execution. CPMM liquidity pools and auto-compounding vaults. Link: https://app.choice.exchange
3. Pumex — next-gen MetaDEX on Injective with smart routing and automated LP management. Link: https://pumex.fi
4. Borderless — native DeFi hub for pre-market and cross-chain asset trading on Injective. Link: https://bswap.in

STAKING & LIQUID STAKING:
5. INJ Staking — earn passive staking APR on unstaked INJ. Required for Community BuyBack eligibility. Link: https://injhub.com/stake
6. Hydro Protocol — liquid stake INJ to mint hINJ (1:1 pegged) or yINJ (yield-bearing). Stay staked while staying liquid. Link: https://hydroprotocol.finance
7. Accumulated Finance — mint stINJ on Injective EVM, earn auto-compounding rewards via wstINJ. Link: https://accumulated.finance/stake/inj

LENDING & BORROWING:
8. Neptune Finance — Injective's premier lending protocol for USDT, USDC, WETH, INJ. Cross-margin accounts, flash loans, yield-bearing collateral. Link: https://app.nept.finance
9. Silo Finance — risk-isolated lending. Each market is a two-asset silo with its own oracle and risk params. yINJ/INJ market live. Link: https://app.silo.finance

YIELD:
10. Mito Vaults — automated yield vaults for passive growth on Injective. Link: https://mito.finance
11. RFY Finance — institutional yield vaults. Earn from covered calls, basis spreads, volatility strategies. Supports INJ, USDT, BTC. Link: https://rfy.finance
12. Bondi Finance — real corporate bonds onchain. Fixed income instruments as DeFi-composable tokens with automatic coupon payments. Link: https://bondifinance.io

ECOSYSTEM:
13. Community BuyBack — monthly program where active INJ users commit INJ to receive a pro-rata share of Injective ecosystem revenue. Committed INJ is permanently burned. Average participant earnings ~23.9% per round. Eligibility based on INJ staking, dApp usage, and governance voting. Link: https://injhub.com/buyback
14. Governance Voting — vote on proposals to improve Community BuyBack eligibility. Link: https://injhub.com/governance
15. Native USDC — migrate from bridged stablecoins to native USDC on Injective. Link: https://injective.com/usdc
16. Bridge Assets — bring assets from Ethereum, Solana, Cosmos. Link: https://bridge.injective.network

## 🎯 Community BuyBack Eligibility
The BuyBack runs monthly. Whitelist selection is based on real Injective usage: INJ staking, dApp activity, and governance voting. Committed INJ is permanently burned and participants earn a share of ecosystem revenue (~23.9% average per round across 4 completed rounds so far).

Based on this wallet's staking, governance votes, and dApp usage, estimate their eligibility percentage (0-100%) and give 2-3 specific actions they can take right now to improve it before the next round.

## 🎯 Your Top 3 Actions Right Now
Exactly 3 prioritized, specific actions with direct links. Make them relevant to this wallet's actual situation.

## 🐦 Tweet
Write one punchy tweet (max 220 chars, first person, crypto twitter tone). Reference their actual situation — what they're doing right and their BuyBack eligibility %. Start with "Just used @ZelosOnINJ on @injective —" and end with "#INJ #DeFi". Keep it natural, not spammy.

Sharp, direct, Injective-native language. No fluff.
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          max_tokens: 1500,
          messages: [{ role: "user", content: prompt }],
        }),
      },
    );

    const data = await response.json();
    console.log("Groq status:", response.status);

    if (!response.ok) {
      console.error("Groq error:", JSON.stringify(data));
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Groq error: " + JSON.stringify(data.error),
        }),
      };
    }

    const text = data.choices[0].message.content;
    return {
      statusCode: 200,
      body: JSON.stringify({ result: text }),
    };
  } catch (error) {
    console.error("Function error:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
