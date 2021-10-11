

const data = require('../data/ModalTable.json')
const FormDataRoutes = (app, fs) => {
  // variables
  // const dataPath = "./data/FormData.json";
  // READ
  app.get('/formdata', (req, res) => {


    const { id } = req.body

    if (!id) {
      res.status(400).send("ID missing please try again");
    } else {

      if (id) {

        res.status(200).send(data.filter((item) => item.member_id === id));

      }
    }

  });
};

module.exports = FormDataRoutes;