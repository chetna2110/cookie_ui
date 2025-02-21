import { useState, useRef, useEffect } from "react";
import { BiSolidPhone, BiDesktop } from "react-icons/bi";
import { IoTabletPortrait } from "react-icons/io5";
import { BsCode } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FiCopy } from "react-icons/fi";

const CodePreview = () => {
  const [view, setView] = useState("desktop");
  const [isRTL, setIsRTL] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const iframeRef = useRef(null);

  const deviceOptions = [
    { type: "mobile", icon: <BiSolidPhone />, maxWidth: "max-w-[425px]" },
    { type: "tablet", icon: <IoTabletPortrait />, maxWidth: "max-w-[800px]" },
    { type: "desktop", icon: <BiDesktop />, maxWidth: "max-w-full" },
  ];

  // Function to send dark mode and RTL updates to the iframe
  const updateIframe = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.contentWindow.postMessage(
        { darkMode, isRTL },
        "*"
      );
    }
  };

  useEffect(() => {
    updateIframe();
  }, [darkMode, isRTL]); // Update iframe when dark mode or RTL changes

  const htmlCode = `
    <div class="flex items-center gap-x-6">
    <div class="relative">
        <img class="object-cover w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
        <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0"></span>
    </div>

    <div class="relative">
        <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
        <span class="h-2 w-2 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0"></span>
    </div>

    <div class="relative">
        <img class="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
        <span class="h-2.5 w-2.5 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0"></span>
    </div>

    <div class="relative">
        <img class="object-cover w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
        <span class="h-2.5 w-2.5 rounded-full bg-emerald-500 absolute right-1 ring-1 ring-white bottom-0"></span>
    </div>

    <div class="relative">
        <img class="object-cover w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
        <span class="absolute bottom-0 w-3 h-3 rounded-full bg-emerald-500 right-1 ring-1 ring-white"></span>
    </div>
</div>
  `;

  // Function to copy the code
  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 p-6 border rounded-lg bg-white dark:bg-gray-900 shadow-md">
      {/* Control Buttons */}
      <div className="flex justify-between items-center px-4 py-3 bg-gray-200 dark:bg-gray-800 rounded-md">
        {/* Device View Buttons */}
        <div className="flex items-center gap-2">
          {deviceOptions.map(({ type, icon }) => (
            <button
              key={type}
              className={`p-2 rounded-md transition-all ${
                view === type
                  ? "bg-gray-400 dark:bg-gray-700"
                  : "hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              onClick={() => setView(type)}
            >
              {icon}
            </button>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => {
            setDarkMode(!darkMode);
            updateIframe(); // Ensure iframe updates
          }}
          className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {darkMode ? (
            <MdLightMode size={22} className="text-yellow-400" />
          ) : (
            <MdDarkMode size={22} className="text-gray-800 dark:text-white" />
          )}
        </button>

        {/* Show Code Button */}
        <button onClick={() => setShowCode(!showCode)} className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600">
          <BsCode size={20} />
        </button>

        {/* Copy Code Button */}
        <button onClick={copyToClipboard} className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600">
          <FiCopy size={20} />
        </button>
      </div>

      {/* Code Preview Container */}
      <div className={`border rounded-md overflow-hidden ${deviceOptions.find((d) => d.type === view)?.maxWidth}`}>
        <iframe ref={iframeRef} srcDoc={htmlCode} className="w-full h-[350px] border-none"></iframe>
      </div>

      {/* Show Code Section */}
      {showCode && (
        <pre className="p-3 bg-gray-100 dark:bg-gray-800 text-sm rounded-md overflow-x-auto">
          <code>{htmlCode}</code>
        </pre>
      )}
    </div>
  );
};

export default CodePreview;
