import { useState } from "react";
import { FaMagic, FaCopy, FaRedo } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  const [prompt, setPrompt] = useState("");
  const [enhancedPrompt, setEnhancedPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([]);

  const examples = [
    "A poster for my juice shop's monsoon offer",
    "Luxury perfume advertisement",
    "Minimal coffee shop logo",
    "YouTube thumbnail for Valorant gameplay",
  ];

  async function enhancePrompt() {
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/enhance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      setEnhancedPrompt(data.enhancedPrompt);

      setHistory((prev) => [
        {
          input: prompt,
          output: data.enhancedPrompt,
        },
        ...prev.slice(0, 4),
      ]);
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }

    setLoading(false);
  }

  function copyPrompt() {
    navigator.clipboard.writeText(enhancedPrompt);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  function downloadPrompt() {
  const blob = new Blob([enhancedPrompt], {
    type: "text/plain",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = "professional-prompt.txt";

  a.click();

  URL.revokeObjectURL(url);
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 flex items-center justify-center p-8">
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-10">
        <div className="flex justify-center mb-4">
          <FaMagic className="text-5xl text-indigo-400" />
        </div>
<h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
  PromptCraft AI
</h1>

       <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
  AI-powered prompt enhancement for designers, marketers, content creators, and businesses. Turn simple ideas into detailed, professional prompts in seconds.
</p>
<div className="flex justify-center mt-5">
  <span className="px-4 py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30">
    ⚡ Powered by Google Gemini 2.5 Flash
  </span>
</div>
        {/* Example Prompts */}
        <div className="flex flex-wrap gap-3 mt-8 mb-4 justify-center">
          {examples.map((example) => (
            <button
              key={example}
              onClick={() => setPrompt(example)}
              className="px-4 py-2 rounded-full bg-slate-800 hover:bg-indigo-600 text-gray-200 text-sm transition"
            >
              {example}
            </button>
          ))}
        </div>

        {/* Input */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Example: A poster for my juice shop's monsoon offer..."
          className="w-full h-40 rounded-xl p-5 text-lg bg-gray-900 text-white border border-gray-700 resize-none outline-none"
        />

        {/* Generate Button */}
        <button
          onClick={enhancePrompt}
          disabled={loading}
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 text-white py-4 rounded-xl text-lg font-semibold flex justify-center items-center gap-3"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Enhancing...
            </>
          ) : (
            <>
              <FaMagic />
              Generate Professional Prompt
            </>
          )}
        </button>

        {/* Empty State */}
        {!enhancedPrompt && !loading && (
          <div className="mt-10 border border-dashed border-slate-600 rounded-xl p-10 text-center text-gray-400">
            🚀 Enter a prompt above and click
            <br />
            <span className="text-white font-semibold">
              Generate Professional Prompt
            </span>
          </div>
        )}

        {/* Result */}
        {enhancedPrompt && (
           <motion.div
             className="mt-10"
              initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
  >
            <div className="flex justify-between items-center flex-wrap gap-4">
              <h2 className="text-2xl font-bold text-white">
                Professional Prompt
              </h2>

              <div className="flex gap-3">
                <button
                  onClick={copyPrompt}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white flex items-center gap-2"
                >
                  <FaCopy />
                  {copied ? "Copied!" : "Copy"}
                </button>
                <button 
                onClick={downloadPrompt}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white">
                           Download
</button>

                <button
                  onClick={enhancePrompt}
                  className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-white flex items-center gap-2"
                >
                  <FaRedo />
                  Regenerate
                </button>
              </div>
            </div>

            <div className="mt-5 bg-slate-900 rounded-xl border border-slate-700 p-6 text-gray-200 leading-8 whitespace-pre-wrap">
              {enhancedPrompt}
            </div>
          </motion.div>
        )}

        {/* History */}
        {history.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl text-white font-bold mb-4">
              Recent Prompts
            </h2>

            <div className="space-y-4">
              {history.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900 rounded-xl p-5 border border-slate-700"
                >
                  <p className="text-indigo-400 font-semibold">
                    {item.input}
                  </p>

                  <p className="text-gray-300 mt-3 text-sm">
                    {item.output}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;