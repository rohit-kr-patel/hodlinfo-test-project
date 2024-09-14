
const CryptoData = require('../model/data');

const home_page = async (req, res) => {
    try {
        // Fetching the data
        const response = await fetch('https://api.wazirx.com/api/v2/tickers');
        const res_data = await response.json(); 

        // Slice the top 10 results
        const result = Object.values(res_data).slice(0, 10);

        // Creating an array of Data Model instances
        const cryptoDataArray = result.map((data) => new CryptoData(data));

        // Store the data in the DB collection
        await CryptoData.insertMany(cryptoDataArray);

        // Fetch and process the data
        var storedData = await CryptoData.find().sort({ _id: -1 }).limit(10);

        // Reverse to maintain the insertion order
        storedData.reverse();

        const processedData = [];

        storedData.forEach((data) => {
            // Destructure data object
            var { base_unit, name, buy, sell, volume, open, low, high, last } = data;

    
            base_unit = base_unit.toUpperCase();

            // Define tradeTime as the current time
            const tradeTime = new Date();

            
            const processedDoc = {
                baseUnit: base_unit,
                name: name,
                buy: buy,
                sell: sell,
                volume: volume,
                open: open,
                low: low,
                high: high,
                last: last,
                tradeTime: tradeTime,
            };

            processedData.push(processedDoc);
        });

        
        await CryptoData.deleteMany({});

        
        res.render('index', { data: processedData });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('');
    }
};

module.exports = { home_page };
