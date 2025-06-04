function generateVideo() {
  const scriptText = document.getElementById("scriptInput").value;
  const visualStyle = document.getElementById("visualStyle").value;
  const charStyle = document.getElementById("charStyle").value;
  const language = document.getElementById("language").value;

  if (!scriptText.trim()) {
    alert("Please enter a script!");
    return;
  }

  // Simulate API call - Replace this with actual AI API integration
  console.log("Generating video with:", {
    scriptText,
    visualStyle,
    charStyle,
    language
  });

  // Dummy video URL (use real AI-generated video here)
  const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

  const videoPlayer = document.getElementById("videoPlayer");
  videoPlayer.src = videoUrl;

  document.getElementById("videoSection").classList.remove("hidden");
}
