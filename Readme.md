# Trading Backend

This project is a backend service for a trading application. It includes services for fetching market data, backtesting trading strategies, and logging trades.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/trading-backend.git
    cd trading-backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

To start the application, run:
```sh
npm run start
```

## Project Structure
```
trading-backend/
├── config/
│   └── users.json
├── logs/
│   └── trades.log
├── src/
│   ├── services/
│   │   ├── backTesting/
│   │   │   └── backTest.service.js
│   │   ├── logging/
│   │   │   └── tradeLogging.js
│   │   ├── market-data/
│   │   │   └── marketData.service.js
│   │   └── strategies/
│   │       ├── rsiStrategy.js
│   │       └── tradingStrategy.js
│   └── app.js
├── .gitignore
├── package.json
└── README.md
```

