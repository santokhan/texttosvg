const app = require("express")();
const cors = require("cors");
const port = 4000;

app.use(cors());

const textToSVG = require("text-to-svg").loadSync();
const attributes = { fill: "red", stroke: "black" };
const options = {
  x: 0,
  y: 0,
  fontSize: 72,
  anchor: "top",
  attributes: attributes,
};

app.get("/", (req, res) => {
  const svg = textToSVG.getSVG(req.query.text || "Dummy Response", options);
  console.log(svg);
  res.send(svg);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
