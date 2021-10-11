const ProviderData = (app, fs) => {
    // variables
    const dataPath = "./data/ProviderData.json";
    // READ
    app.get('/providerdata', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));

      });
    });
  };
  
  module.exports = ProviderData;