import {
  IndexerGrpcAccountPortfolioApi,
  IndexerGrpcExplorerApi,
} from "@injectivelabs/sdk-ts";
import { Network, getNetworkEndpoints } from "@injectivelabs/networks";

const network = Network.Mainnet;
const endpoints = getNetworkEndpoints(network);

const portfolioApi = new IndexerGrpcAccountPortfolioApi(endpoints.indexer);
const explorerApi = new IndexerGrpcExplorerApi(endpoints.indexer);

export async function fetchPortfolio(address) {
  try {
    const portfolio = await portfolioApi.fetchAccountPortfolio(address);
    return portfolio;
  } catch (error) {
    console.error("Portfolio fetch error:", error);
    return null;
  }
}

export async function fetchTransactions(address) {
  try {
    const transactions = await explorerApi.fetchAccountTransactions({
      address,
      limit: 10,
    });
    return transactions;
  } catch (error) {
    console.error("Transaction fetch error:", error);
    return null;
  }
}

export async function fetchAll(address) {
  const [portfolio, transactions] = await Promise.all([
    fetchPortfolio(address),
    fetchTransactions(address),
  ]);

  return {
    portfolio,
    transactions,
  };
}
