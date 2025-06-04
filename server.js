const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/generate-video", async (req, res) => {
  const { scriptText, characterStyle, voiceLanguage, visualStyle } = req.body;

  // TODO: Call AI APIs here for storyboard, animation & voice generation

  res.json({
    success: true,
    videoUrl: "https://dummyvideolink.com/preview.mp4",
    message: "Video generated successfully (mocked)",
  });
});

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
