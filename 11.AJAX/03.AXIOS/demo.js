const fetchbtcprice=async ()=>{
    try {
        const res= await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res.data.ticker.price);
        
    } catch (error) {
        console.log("Error"+e);
}
}

fetchbtcprice();