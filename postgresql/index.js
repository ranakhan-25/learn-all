const express = require("express");
const { v4: uuidv4 } = require("uuid");
const pool = require("./db");
const app = express();
const port = 5245;

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "server is running" });
});

app.get("/read", async (req, res) => {
  try {
    const result = await pool.query("select * from books");
    res.status(200).json({
      message: "read all table from books",
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
});

app.get("/read/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("select * from books where id=$1", [id]);
    res.status(200).json({
      message: "read table from books",
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

  await pool.query("delete from books where id=$1", [id]);

    res.status(200).json({
      message: "deleted by id from books"
    });

  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
});

app.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

  const result = await pool.query("update books set name=$1, description=$2 where id=$3 returning *", [name, description, id]);

    res.status(200).json({
      message: "deleted by id from books",
      data:result.rows
    });

  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
});

app.post("/create", async (req, res) => {
  try {
    const { name, description } = req.body;
    const id = uuidv4();

    const result = await pool.query(
      "INSERT INTO books (id, name,description) VALUES ($1,$2,$3) RETURNING *",
      [id, name, description],
    );

    res.status(200).json({
      message: "create successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
