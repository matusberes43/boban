const stocks = {
    "ALB": "Albemarle",
    "NVDA": "Nvidia",
    "LRCX": "Lam Research"
};

const apiKey = "U80PJ8035GV7GKIC";

async function fetchStockData(stockSymbol, elementPrice, elementChange) {
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=5min&apikey=${apiKey}`);
        const data = await response.json();

        if (data["Time Series (5min)"]) {
            const lastUpdate = Object.keys(data["Time Series (5min)"])[0];
            const currentPrice = parseFloat(data["Time Series (5min)"][lastUpdate]["1. open"]).toFixed(2);
            const previousClose = parseFloat(data["Time Series (5min)"][lastUpdate]["4. close"]).toFixed(2);
            const change = (currentPrice - previousClose).toFixed(2);
            const changePercent = (((change / previousClose) * 100).toFixed(2));

            document.getElementById(elementPrice).innerText = `$${currentPrice}`;
            document.getElementById(elementChange).innerText = `${change >= 0 ? '+' : ''}${change} (${changePercent}%)`;
        } else {
            document.getElementById(elementPrice).innerText = "Error loading";
            document.getElementById(elementChange).innerText = "Error loading";
        }
    } catch (error) {
        document.getElementById(elementPrice).innerText = "Error";
        document.getElementById(elementChange).innerText = "Error";
    }
}

function updateStocks() {
    fetchStockData("ALB", "alb-price", "alb-change");
    fetchStockData("NVDA", "nvda-price", "nvda-change");
    fetchStockData("LRCX", "lrcx-price", "lrcx-change");
}

updateStocks();
setInterval(updateStocks, 15000);