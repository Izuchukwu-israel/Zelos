export async function analyzeWallet(walletData, address) {
  try {
    const response = await fetch("/.netlify/functions/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ walletData, address }),
    });

    const data = await response.json();

    if (!data.result) {
      return "Error: " + (data.error || "No result returned from AI");
    }

    return data.result;
  } catch (error) {
    console.error("AI analysis error:", error);
    return "Error: " + error.message;
  }
}
