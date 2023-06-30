// import modules
const { req, res } = require("express");
const { Pool } = require("pg");
const config = require("./config");

// set app path & port
const app = express();
const port = 3001;

//PostgreSQL config
const pool = new Pool({ config });

// set json parser
app.use(express.json());

//API endpoint for email submission
app.post("/api/submit-email", async (req, res) => {
  try {
    //set email to request body
    const { email } = req.body;

    //SQL command 2 insert email into db
    await pool.query("INSERT INTO emails (email) VALUES ($1)", [email]);

    res.status(200).json({ message: "Email submitted successfully." });
  } catch (error) {
    console.error("Error during email submission", error);

    res.status(500).json({ message: "Error" });
  }
});

//Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
