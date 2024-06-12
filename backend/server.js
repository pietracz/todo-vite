const exress = require("express");
const app = exress();
const cors = require("cors");
const PORT = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tasks = ["eat", "sleep", "code", "repeat"];

// Holt mir alle Tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const newTask = req.body.task;
  if (newTask) {
    tasks.push(newTask);
    res
      .status(201)
      .send({ message: "Dein Task wurde erfolgreich hinzugefügt" });
  } else {
    res
      .status(400)
      .send({
        message:
          "Bitte einen Task in form von {'task':'neuer task'} hinzufügen",
      });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
