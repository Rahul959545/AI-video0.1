import { useState } from "react";
import axios from "axios";

export default function App() {
  const [script, setScript] = useState("");
  const [style, setStyle] = useState("3D");
  const [lang, setLang] = useState("hi-IN");
  const [charStyle, setCharStyle] = useState("Default");
  const [videoURL, setVideoURL] = useState("");

  const handleGenerate = async () => {
    const res = await axios.post("http://localhost:5000/generate-video", {
      scriptText: script,
      characterStyle: charStyle,
      voiceLanguage: lang,
      visualStyle: style,
    });
    setVideoURL(res.data.videoUrl);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI टेक्स्ट-टू-वीडियो जनरेटर</h1>
      <textarea
        className="w-full border p-2 mb-4"
        rows="6"
        placeholder="अपना स्क्रिप्ट लिखें..."
        value={script}
        onChange={(e) => setScript(e.target.value)}
      />
      <div className="mb-4">
        <label>विज़ुअल स्टाइल:</label>
        <select onChange={(e) => setStyle(e.target.value)} value={style}>
          <option value="3D">3D</option>
          <option value="2D">2D</option>
          <option value="Cinematic">Cinematic</option>
          <option value="Cartoon">Cartoon</option>
        </select>
      </div>
      <div className="mb-4">
        <label>कैरेक्टर स्टाइल:</label>
        <input
          type="text"
          value={charStyle}
          onChange={(e) => setCharStyle(e.target.value)}
          placeholder="Default"
        />
      </div>
      <div className="mb-4">
        <label>वॉइसओवर भाषा:</label>
        <select onChange={(e) => setLang(e.target.value)} value={lang}>
          <option value="hi-IN">हिन्दी</option>
          <option value="en-US">English</option>
          <option value="es-ES">Español</option>
          <option value="fr-FR">Français</option>
        </select>
      </div>
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        वीडियो बनाएं
      </button>

      {videoURL && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">प्रीव्यू:</h2>
          <video controls src={videoURL} className="w-full mt-2" />
        </div>
      )}
    </div>
  );
}
