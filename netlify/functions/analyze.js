const fetch = require("node-fetch");

const apiKey = process.env.GROQ_API_KEY;

exports.handler = async function (event) {
  const { walletData, address } = JSON.parse(event.body);

  const prompt = `
You are Zelos, an AI guide for the Injective blockchain ecosystem. Analyze this wallet and give personalized insights.

Wallet Address: ${address}

Wallet Data:
${JSON.stringify(walletData, null, 2)}

Respond in this exact structure:

## 👋 Wallet Summary
Brief plain English summary of what this wallet holds and activity level.

## ✅ What You're Doing Right
What the user is already doing well on Injective.

## ⚠️ Opportunities You're Missing
For each missing opportunity explain what it is, why it matters, and the direct link.

Use ONLY these opportunities where relevant:
1. Community BuyBack — earn yield from Injective ecosystem revenue. Link: https://injhub.com/buyback
2. INJ Staking — earn passive APR on unstaked INJ. Link: https://injhub.com/stake
3. Mito Vaults — automated yield vaults. Link: https://mito.finance
4. Helix Trading — spot and perp trading with 0% gas for makers. Link: https://helixapp.com
5. Native USDC — migrate from bridged stablecoins to native USDC. Link: https://injective.com/usdc
6. Governance Voting — vote on proposals, improves BuyBack eligibility. Link: https://injhub.com/governance
7. Liquid Staking via Hydro — stake INJ and still use hINJ in DeFi. Link: https://hydroprotocol.finance
8. Neptune Finance — lend/borrow against your holdings. Link: https://nept.finance
9. Bridge Assets — bring assets from Ethereum, Solana, Cosmos. Link: https://bridge.injective.network

## 🎯 Community BuyBack Eligibility
Based on this wallet's staking activity, governance votes, and dApp usage, estimate their eligibility percentage for the next Community BuyBack (0-100%) and explain exactly what they need to improve it.

## 🎯 Your Top 3 Actions Right Now
Exactly 3 prioritized actions with links.

Sharp, direct, Injective-native language. No fluff.
`;

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama3-70b-8192",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      },
    );

    const data = await response.json();
    const text = data.choices[0].message.content;

    return {
      statusCode: 200,
      body: JSON.stringify({ result: text }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
