const MedicalFormRoutes = (app, fs) => {
    // variables
    const dataPath = "./data/MedicalFormData.json";
    // READ
    app.get('/medicalform', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
        console.log((JSON.parse(data)));
      });
    });
  };
  
  module.exports = MedicalFormRoutes;