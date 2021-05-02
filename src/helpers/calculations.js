export const helpers = {
  formattedPriceData: function (data) {
    var timeStamps = Object.keys(data);
    var formattedData = [];
    timeStamps.map(x => {
      var price = data[x];
      var average =
        (parseFloat(price['2. high']) + parseFloat(price['3. low'])) / 2;
      formattedData.push({
        time: x,
        price: average,
        volume: parseFloat(price['5. volume']),
      });
    });
    return formattedData;
  },
  calculateChartData: function (data) {
    var max = data.reduce((prev, curr) => {
      return prev.price > curr.price ? prev : curr;
    });
    var min = data.reduce((prev, curr) => {
      return prev.price < curr.price ? prev : curr;
    });
    var avg =
      data.reduce((acc, obj) => {
        return acc + obj.price;
      }, 0) / data.length;

    var gridLines = [];
    var stdDev = (max.price - min.price) / 10;

    for (var i = 0; i < 10; i++) {
      gridLines.push(min.price + stdDev * i);
    }
    return {
      max: max.price,
      min: min.price,
      range: max.price - min.price,
      avg,
      median: this.median(data),
      gridLines,
    };
  },
  median: function (prices) {
    var values = prices.map(x => x.price);
    if (values.length === 0) return 0;
    values.sort(function (a, b) {
      return a - b;
    });

    var half = Math.floor(values.length / 2);

    if (values.length % 2) return values[half];

    return (values[half - 1] + values[half]) / 2;
  },
};
