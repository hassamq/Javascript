const data='{"time":{"updated":"Dec 26, 2020 07:08:00 UTC","updatedISO":"2020-12-26T07:08:00+00:00","updateduk":"Dec 26, 2020 at 07:08 GMT"},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org","chartName":"Bitcoin","bpi":{"USD":{"code":"USD","symbol":"&#36;","rate":"24,791.7817","description":"United States Dollar","rate_float":24791.7817},"GBP":{"code":"GBP","symbol":"&pound;","rate":"18,256.6184","description":"British Pound Sterling","rate_float":18256.6184},"EUR":{"code":"EUR","symbol":"&euro;","rate":"20,334.2193","description":"Euro","rate_float":20334.2193}}}';
const newdata=JSON.parse(data);
let rate=newdata.bpi.USD.rate;
console.log(rate);
{
//const dog={name:'roxxy',breed:'german shehpard'};
//let dog_json=JSON.stringify(dog);