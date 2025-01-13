const stocks = {
    "ALB": "Albemarle",
    "NVDA": "Nvidia",
    "LRCX": "Lam Research"
};

const apiKey = "YOUR_API_KEY"; // Použi vlastný kľúč z Finnhub alebo Alpha Vantage

async function fetchStockData(stockSymbol, elementPrice, elementChange) {
    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${apiKey}`);
    const data = await response.json();

    const currentPrice = data.c;
    const previousClose = data.pc;
    const change = currentPrice - previousClose;
    const changePercent = ((change / previousClose) * 100).toFixed(2);

    document.getElementById(elementPrice).innerText = `$${currentPrice.toFixed(2)}`;
    document.getElementById(elementChange).innerText = `${change >= 0 ? '+' : ''}${change.toFixed(2)} (${changePercent}%)`;
}

function updateStocks() {
    fetchStockData("ALB", "alb-price", "alb-change");
    fetchStockData("NVDA", "nvda-price", "nvda-change");
    fetchStockData("LRCX", "lrcx-price", "lrcx-change");
}

updateStocks();
setInterval(updateStocks, 15000); // Aktualizácia každých 15 sekúnd