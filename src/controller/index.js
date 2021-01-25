const fetch = require('node-fetch');


exports.controlRates = async (req, res) => {
  const rate = req.query.rate, currency = req.query.currency;
  try {
    const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${rate}&symbols=${currency}`);
    const data = await response.json();

    if (data.error) {
      return res.status(400).send(data);
    } else {
      return res.status(200).json({ results: data });
    }
    
  } catch (error) {
    return res.status(501).json({ 
      success: false, 
      message: `Error from server.` 
    });
  }
}