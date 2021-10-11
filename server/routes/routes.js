const LoginRoutes = require('./LoginRoutes');
const MedicalFormRoutes = require('./MedicalFormRoutes');
const FormDataRoutes = require('./FormDataRoutes');
const ProviderDataRoutes = require('./ProviderDataRoutes');


const appRouter = (app, fs) => {

    // app.get('/users', (req, res) => {
    //     res.send('welcome to the development api-server');
    //   });

    //   app.get('/users', (req, res) => {
    //     res.send('welcome to the development api-server');
    //   });
      LoginRoutes(app, fs);
      MedicalFormRoutes(app,fs);
      FormDataRoutes(app,fs);
      ProviderDataRoutes(app,fs);
};

module.exports = appRouter;