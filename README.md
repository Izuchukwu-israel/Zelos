# Zelos — Your Injective Opportunity Guide

Zelos is an AI-powered wallet analyzer for the Injective blockchain. 
Paste any INJ wallet address and get a personalized breakdown of your 
portfolio, what you're doing right, every DeFi opportunity you're 
missing, and your exact Community BuyBack eligibility score.

## Live Demo
🔗 https://zelosinj.netlify.app

## How It Works
1. User enters their Injective wallet address
2. Zelos fetches real on-chain data via the Injective SDK
3. AI analyzes the data and returns personalized insights
4. User sees opportunities, risks, and direct links to act

## How AI Is Used
Zelos uses Groq AI (Llama 3.3 70B) to analyze wallet data and generate 
personalized, plain-English insights. The AI is prompted with real 
on-chain data and responds with ecosystem-specific guidance — covering 
staking, trading, lending, liquid staking, governance, and Community 
BuyBack eligibility. The AI call runs through a Netlify serverless 
function to keep the API key secure.

## Injective Integration
Zelos integrates directly with the Injective blockchain via the 
@injectivelabs/sdk-ts SDK. It fetches:
- Wallet portfolio and token holdings
- Transaction history
- Staking and dApp activity

It covers the full Injective DeFi stack including Helix, Mito, Neptune, 
Hydro Protocol, Silo Finance, Choice Exchange, RFY Finance, Bondi 
Finance, and the Community BuyBack program.

## Tech Stack
- Frontend: HTML + CSS + Vanilla JavaScript
- On-chain data: @injectivelabs/sdk-ts
- Bundler: Webpack
- AI: Groq API (Llama 3.3 70B) via Netlify Functions
- Deployment: Netlify

## Local Development
```bash
npm install
npm run build
netlify dev
```

## Built By
[@zuesthekreator](https://x.com/zuesthekreator) for the HackQuest x 
Injective Solo AI Builder Sprint 2026
