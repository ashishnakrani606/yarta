import React from 'react';
import { MarketData } from 'react-ts-tradingview-widgets'

const data =  [
  {
    "name": "Equities",
    "originalName": "Indices",
    "symbols": [
      {
        "name": "FOREXCOM:SPXUSD",
        "displayName": "S&P 500"
      },
      {
        "name": "FOREXCOM:NSXUSD",
        "displayName": "US 100"
      },
      {
        "name": "FOREXCOM:DJI",
        "displayName": "Dow 30"
      },
      {
        "name": "INDEX:NKY",
        "displayName": "Nikkei 225"
      },
      {
        "name": "INDEX:DEU40",
        "displayName": "DAX Index"
      },
      {
        "name": "FOREXCOM:UKXGBP",
        "displayName": "UK 100"
      }
    ]
  },
  {
    "name": "Bonds",
    "originalName": "Indices",
    "symbols": [
      {
        "name": "CME:GE1!",
        "displayName": "Eurodollar"
      },
      {
        "name": "CBOT:ZB1!",
        "displayName": "T-Bond"
      },
      {
        "name": "CBOT:UB1!",
        "displayName": "Ultra T-Bond"
      },
      {
        "name": "EUREX:FGBL1!",
        "displayName": "Euro Bund"
      },
      {
        "name": "EUREX:FBTP1!",
        "displayName": "Euro BTP"
      },
      {
        "name": "EUREX:FGBM1!",
        "displayName": "Euro BOBL"
      }
    ]
  },
  {
    "name": "Forex",
    "originalName": "Indices",
    "symbols": [
      {
        "name": "FX:EURUSD",
        "displayName": "EUR/USD"
      },
      {
        "name": "FX:GBPUSD",
        "displayName": "GBP/USD"
      },
      {
        "name": "FX:USDJPY",
        "displayName": "USD/JPY"
      },
      {
        "name": "FX_IDC:USDBRL",
        "displayName": "USD/BRL"
      },
      {
        "name": "FX:USDCHF",
        "displayName": "USD/CHF"
      },
      {
        "name": "FX:AUDUSD",
        "displayName": "AUD/USD"
      },
      {
        "name": "FX:USDCAD",
        "displayName": "USD/CAD"
      }
    ]
  },
  {
    "name": "Energy",
    "originalName": "Indices",
    "symbols": [
      {
        "name": "NYMEX:CL1!",
        "displayName": "Crude Oil 1st Month Continuous"
      },
      {
        "name": "NYMEX:CL2!",
        "displayName": "Crude Oil 2nd Month Continuous"
      },
      {
        "name": "NYMEX:BB1!",
        "displayName": "Brent Oil 1st Month Continuous"
      },
      {
        "name": "NYMEX:BB2!",
        "displayName": "Crude Oil 2nd Month Continuous"
      },
      {
        "name": "NYMEX:HO1!",
        "displayName": "Heating Oil 1st Month Continuous"
      },
      {
        "name": "NYMEX:HO2",
        "displayName": "Crude Oil 2nd Month Continuous"
      },
      {
        "name": "NYMEX:RB1",
        "displayName": "RBOB 1st Month Continuous"
      },
      {
        "name": "NYMEX:RB2!",
        "displayName": "RBOB 2nd Month Continuous"
      },
      {
        "name": "NYMEX:NG1!",
        "displayName": "Natural Gas 1st Month Continuous"
      },
      {
        "name": "NYMEX:NG2!",
        "displayName": "Natural Gas 2nd Month Continuous"
      }
    ]
  },
  {
    "name": "Metals",
    "originalName": "Indices",
    "symbols": [
      {
        "name": "OANDA:XAUUSD",
        "displayName": "Spot Gold"
      },
      {
        "name": "OANDA:XAGUSD",
        "displayName": "Spot Silver"
      },
      {
        "name": "COMEX:HG1!",
        "displayName": "Copper 1st Month Continuous"
      },
      {
        "name": "COMEX:HG2!",
        "displayName": "Copper 2nd Month Continuous"
      },
      {
        "name": "NYMEX:PA1!",
        "displayName": "Palladium 1st Month Continuous"
      },
      {
        "name": "NYMEX:PA2!",
        "displayName": "Palladium 2nd Month Continuous"
      },
      {
        "name": "NYMEX:PL1!",
        "displayName": "Platinum 1st Month Continuous"
      },
      {
        "name": "NYMEX:PL2!",
        "displayName": "Platinum 2nd Month Continuous"
      }
    ]
  },
  {
    "name": "Grains",
    "originalName": "Indices",
    "symbols": [
      {
        "name": "CBOT:ZC1!",
        "displayName": "CBOT Corn 1st Month Continuous"
      },
      {
        "name": "CBOT:ZC2!",
        "displayName": "CBOT Corn 2nd Month Continuous"
      },
      {
        "name": "CBOT:ZCK2023",
        "displayName": "CBOT Corn MAY 23"
      },
      {
        "name": "CBOT:ZCN2023",
        "displayName": "CBOT Corn JUL 23"
      },
      {
        "name": "CBOT:ZCU2023",
        "displayName": "CBOT Corn SEP 23"
      },
      {
        "name": "CBOT:ZS1!",
        "displayName": "CBOT Soybeans 1st Month Continuous"
      },
      {
        "name": "CBOT:ZS2!",
        "displayName": "CBOT Soybeans 2nd Month Continuous"
      },
      {
        "name": "CBOT:ZSK2023",
        "displayName": "CBOT Soybeans MAY 23"
      },
      {
        "name": "CBOT:ZSN2023",
        "displayName": "CBOT Soybeans JUL 23"
      },
      {
        "name": "CBOT:ZSQ2023",
        "displayName": "CBOT Soybeans AUG 23"
      },
      {
        "name": "CBOT:ZM1!",
        "displayName": "CBOT Soybean Meal 1st Month Continuous"
      },
      {
        "name": "CBOT:ZM2!",
        "displayName": "CBOT Soybean Meal 2nd Month Continuous"
      },
      {
        "name": "CBOT:ZMK2023",
        "displayName": "CBOT Soybean Meal MAY 23"
      },
      {
        "name": "CBOT:ZMN2023",
        "displayName": "CBOT Soybean Meal JUL 23"
      },
      {
        "name": "CBOT:ZL1!",
        "displayName": "CBOT Soybean Oil 1st Month Continuous"
      },
      {
        "name": "CBOT:ZL2!",
        "displayName": "CBOT Soybean Oil 2nd Month Continuous"
      },
      {
        "name": "CBOT:ZLK2023",
        "displayName": "CBOT Soybean Oil MAY 23"
      },
      {
        "name": "CBOT:ZLN2023",
        "displayName": "CBOT Soybean Oil JUL 23"
      },
      {
        "name": "CBOT:ZW1!",
        "displayName": "CBOT Wheat 1st Month Continuous"
      },
      {
        "name": "CBOT:ZW2!",
        "displayName": "CBOT Wheat 2nd Month Continuous"
      },
      {
        "name": "CBOT:ZWK2023",
        "displayName": "CBOT Wheat MAY 23"
      },
      {
        "name": "CBOT:ZWN2023",
        "displayName": "CBOT Wheat JUL 23"
      },
      {
        "name": "CBOT:ZWU2023",
        "displayName": "CBOT Wheat SEP 23"
      },
      {
        "name": "CBOT:ZWZ2023",
        "displayName": "CBOT Wheat DEC 23"
      },
      {
        "name": "CBOT:ZO1!",
        "displayName": "CBOT Oats 1st Month Continuous"
      },
      {
        "name": "CBOT:ZO2",
        "displayName": "CBOT Oats 2nd Month Continuous"
      },
      {
        "name": "CBOT:ZR1!",
        "displayName": "CBOT Rough Rice 1st Month Continuous"
      },
      {
        "name": "CBOT:ZR2!",
        "displayName": "CBOT Rough Rice 2nd Month Continuous"
      }
    ]
  },
  {
    "name": "Livestock",
    "originalName": "Indices",
    "symbols": [
      {
        "name": "CME:LE1!",
        "displayName": "Live Cattle 1st Month Continuous"
      },
      {
        "name": "CME:LE2!",
        "displayName": "Live Cattle 2nd Month Continuous"
      },
      {
        "name": "CME:GF1!",
        "displayName": "Feeder Cattle 1st Month Continuous"
      },
      {
        "name": "CME:GF2!",
        "displayName": "Feeder Cattle 2nd Month Continuous"
      },
      {
        "name": "CME:HE1!",
        "displayName": "Lean Hogs 1st Month Continuous"
      },
      {
        "name": "CME:HE2!",
        "displayName": "Lean Hogs 2nd Month Continuous"
      },
      {
        "name": "CME:HEJ2023",
        "displayName": "Lean Hogs APR 23"
      },
      {
        "name": "CME:HEK2023",
        "displayName": "Lean Hogs MAY 23"
      },
      {
        "name": "CME:HEM2023",
        "displayName": "Lean Hogs JUN 23"
      },
      {
        "name": "CME:HEN2023",
        "displayName": "Lean Hogs JUL 23"
      },
      {
        "name": "CME:HEQ2023",
        "displayName": "Lean Hogs AUG 23"
      }
    ]
  },
  {
    "name": "Dairy",
    "originalName": "Indices",
    "symbols": [
      {
        "name": "CME:DC1!",
        "displayName": "CME Class III Milk 1st Month Continuous"
      },
      {
        "name": "CME:DC2!",
        "displayName": "CME Class III Milk 2nd Month Continuous"
      },
      {
        "name": "CME:GNF1!",
        "displayName": "CME Non Fat Dry Milk Powder 1st Month Continuous"
      },
      {
        "name": "CME:GNF2!",
        "displayName": "CME Non Fat Dry Milk Powder 1st Month Continuous"
      },
      {
        "name": "NZX:MKP1!",
        "displayName": "NZX Milk 1st Month Continuous"
      }
    ]
  },
  {
    "name": "Carbon Offsets",
    "originalName": "Indices",
    "symbols": [
      {
        "name": "ICEEUR:ECF1!",
        "displayName": "European Union Allowance Front Month Continuous Futures"
      },
      {
        "name": "NYMEX:CC31!",
        "displayName": "CBL California Carbon Allowance 2023 Vintage Futures"
      },
      {
        "name": "NYMEX:GEO1!",
        "displayName": "CBL Global Emissions Offset Futures"
      },
      {
        "name": "NYMEX:NGO1!",
        "displayName": "CBL Nature-Based Global Emissions Offset Front Month Continuous Futures"
      },
      {
        "name": "NYMEX:CGO1!",
        "displayName": "CBL Core Global Emissions (C-GEO) Front Month Continuous Futures"
      }
    ]
  },
  {
    "name": "Cryptocurrency",
    "originalName": "Indices",
    "symbols": [
      {
        "name": "COINBASE:BTCUSD",
        "displayName": "Bitcoin"
      },
      {
        "name": "COINBASE:ETHUSD",
        "displayName": "Ethereum"
      },
      {
        "name": "EIGHTCAP:CRYPTO10",
        "displayName": "Top 10 Crypto Index"
      }
    ]
  }
]
const MarketQuotesBoard = () => {
  
  return (
    <div>
      <div className='bg-black-darkest w-full pt-10 md:pb-24 pb-10 text-white'>
        <div className='wrapper flex-col items-center justify-center'>
          <h2 className='md:text-5xl text-3xl text-white text-center font-bold md:pb-8 pb-5'>
            Yarta Market Quotes Board
          </h2>
          <h3 className='md:text-xl text-base  text-center'>
            Track global futures market prices across grains, livestock, energy, metals, and carbon offsets.
          </h3>
        </div> 
      </div>
      <div className='wrapper pb-11 cutome-set w-full'>
        <MarketData symbolsGroups={data}        
          colorTheme='dark'         
          height={700}></MarketData>
      </div>
    </div>
  )
}

export default MarketQuotesBoard
