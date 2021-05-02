import React from 'react';

export const getCurrentPrice = () => {
  return fetch(
    'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GME&interval=5min&apikey=KZSDNUK0VZ5OEV6J',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
    .then(response => response.json())
    .then(x => {
      var urmom = JSON.stringify(x);
      console.log(urmom);
      debugger;
      var prices = x['Time Series (5min)'];
      var priceArray = Object.values(prices).map(x => {
        return (parseFloat(x['2. high']) + parseFloat(x['3. low'])) / 2;
      });
      return priceArray;
    });
};
