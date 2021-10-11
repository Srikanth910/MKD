
const jwt = require("jsonwebtoken");
const LoginRoutes = (app, fs) => {
  // variables
  const dataPath = "./data/LoginData.json";
  // READ
  app.post('/login', (req, res) => {
    try {
      // Get user input
      const { user, password } = req.body;

      // Validate user input
      //  console.log(req.body)
      if (!(user && password)) {
        res.status(400).send("All input is required");
      } else {
        if (user === "user" && password === "user" || user === "admin" && password == "admin") {
          console.log(req.body)
          // Create token
          let token = jwt.sign({
            data: 'foobar'
          }, 'secret', { expiresIn: '1h' });
          //  console.log(token , "token")
          res.status(200).json({ user: "user", password: "user", token: token });


        } else {
          res.status(400).json({ message: "invaild  userName and Password" });
        }
      }



    } catch {


    }

  });
};
module.exports = LoginRoutes;