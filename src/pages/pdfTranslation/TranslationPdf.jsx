import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  useCallback,
} from "react";

/* STREAMING_CHUNK:Khởi tạo danh sách Icons và tiện ích phát âm... */
// --- Icons (Lucide-React simulated) ---
const Icon = ({ name, className = "w-5 h-5", onClick }) => {
  const icons = {
    Menu: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    ),
    Upload: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    FileText: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    BookOpen: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    Search: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    User: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    ArrowLeft: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    ),
    Volume2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    ),
    Star: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    Trash: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    Moon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    Sun: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
    Bot: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
      </svg>
    ),
    Type: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <line x1="12" y1="4" x2="12" y2="20" />
      </svg>
    ),
    Bookmark: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    ),
    ZoomIn: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    ZoomOut: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    Clock: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    X: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
    Sidebar: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 3v18" />
      </svg>
    ),
  };
  return (
    <span
      className={`inline-flex items-center justify-center ${className} cursor-pointer transition-transform active:scale-95`}
      onClick={onClick}
    >
      {icons[name]}
    </span>
  );
};

// Hàm phát âm chung
const playAudio = (text, e = null) => {
  if (e) e.stopPropagation();
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  }
};

const calculateReadingTime = (htmlContent) => {
  if (!htmlContent) return 1;
  const text = htmlContent.replace(/<[^>]+>/g, " ");
  const wordCount = text.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
  return readingTime || 1;
};

const SAMPLE_HTML_CONTENT = `
  <h1>The Future of Renewable Energy</h1>
  <p>The shift towards renewable energy is one of the most critical challenges of our time. Governments and corporations worldwide must participate in an international effort to reduce carbon emissions.</p>
  <h2>Why it matters?</h2>
  <p>Many students participated in the competition to <strong>raise awareness of environmental problems</strong>. They realized that to mitigate climate change, we must innovate and adopt sustainable practices immediately.</p>
  <ul>
    <li>Solar power adoption is increasing.</li>
    <li>Wind turbines are becoming more efficient.</li>
  </ul>
  <p>The company launched a new product last week. This new solar panel is expected to be responsible for a significant reduction in household electricity bills. Education is paramount; schools should raise awareness of environmental issues from a young age.</p>
`;

const MOCK_DOCUMENTS = [
  {
    id: "1",
    title: "The Future of Renewable Energy",
    type: "HTML",
    progress: 65,
    lastRead: "2 hours ago",
    content: SAMPLE_HTML_CONTENT,
    readingTime: calculateReadingTime(SAMPLE_HTML_CONTENT),
  },
];

/* STREAMING_CHUNK:Định nghĩa logic xử lý AI và State toàn cục... */
const RealDictionaryService = {
  lookup: async (text, context) => {
    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY || "";
      const apiUrl = "https://api.openai.com/v1/chat/completions";

      const wordCount = text.trim().split(/\s+/).length;

      const systemPrompt = `You are an expert English-Vietnamese AI tutor and dictionary.
      Analyze the provided text.
      
      IF the text is 1 to 3 words long, act as a Dictionary and return ONLY this JSON structure:
      {
        "mode": "dictionary",
        "word": "the exact word queried",
        "ipa": "IPA pronunciation",
        "partOfSpeech": "noun/verb/adj/etc",
        "vietnameseMeaning": "primary Vietnamese translation",
        "contextMeaning": "Vietnamese meaning adapted to context (if different)",
        "englishDefinition": "Short English definition",
        "examples": ["example 1"]
      }

      IF the text is 4 words or longer (a phrase, sentence, or paragraph), act as a Translator and return ONLY this JSON structure:
      {
        "mode": "translation",
        "word": "the original text",
        "vietnameseMeaning": "Fluent and natural Vietnamese translation of the entire text",
        "englishDefinition": "Brief grammatical explanation or summary of the text's meaning",
        "keyVocabulary": [
           {"word": "hard word 1", "meaning": "meaning in vietnamese"},
           {"word": "hard word 2", "meaning": "meaning in vietnamese"}
        ]
      }
      
      Important: Output MUST be a valid JSON object.`;

      const userPrompt = `Text to analyze: "${text}"\nContext: "${context || "None"}"`;

      // Giả lập kết quả nội bộ nếu không có API Key để demo không bị lỗi
      if (!apiKey) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        if (wordCount <= 3) {
          return {
            mode: "dictionary",
            word: text.toLowerCase(),
            ipa: "/ˈdɛmoʊ/",
            partOfSpeech: "noun",
            vietnameseMeaning: "từ điển giả lập",
            contextMeaning: "nghĩa giả lập",
            englishDefinition:
              "This is a simulated response because API key is missing.",
            examples: ["Please add OpenAI API key to use real AI."],
          };
        } else {
          return {
            mode: "translation",
            word: text,
            vietnameseMeaning: "(Bản dịch giả lập) " + text,
            englishDefinition: "Phần dịch đoạn văn giả lập vì thiếu API Key.",
            keyVocabulary: [{ word: "mock", meaning: "giả lập" }],
          };
        }
      }

      const payload = {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        response_format: { type: "json_object" },
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result?.choices?.[0]?.message?.content) {
        return JSON.parse(result.choices[0].message.content.trim());
      } else {
        throw new Error("Invalid response from OpenAI");
      }
    } catch (error) {
      console.error("AI Error:", error);
      return {
        mode: "translation",
        word: text,
        vietnameseMeaning: "Lỗi kết nối AI hoặc thiếu API Key.",
        englishDefinition: error.message,
      };
    }
  },
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [activeDocument, setActiveDocument] = useState(null);

  const [vocabulary, setVocabulary] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [documents, setDocuments] = useState(MOCK_DOCUMENTS);

  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState(18);
  const [fontFamily, setFontFamily] = useState("ui-sans-serif, system-ui");

  const updateProgress = (id, progress) => {
    setDocuments((docs) =>
      docs.map((doc) =>
        doc.id === id
          ? { ...doc, progress: Math.max(doc.progress || 0, progress) }
          : doc,
      ),
    );
  };

  const openDocument = (doc) => {
    setActiveDocument(doc);
    setCurrentView("reader");
  };

  const closeDocument = () => {
    setActiveDocument(null);
    setCurrentView("dashboard");
  };

  const addDocument = (doc) => setDocuments([doc, ...documents]);

  const removeDocument = (id) => {
    setDocuments(documents.filter((doc) => doc.id !== id));
    if (activeDocument?.id === id) {
      closeDocument();
    }
  };

  const saveWord = (wordData) => {
    if (!vocabulary.find((v) => v.word === wordData.word)) {
      setVocabulary([
        { ...wordData, id: Date.now().toString() },
        ...vocabulary,
      ]);
    }
  };

  const removeWord = (id) =>
    setVocabulary(vocabulary.filter((v) => v.id !== id));

  const saveHighlight = (text, translation) => {
    setHighlights([
      { id: Date.now().toString(), text, translation },
      ...highlights,
    ]);
  };

  const removeHighlight = (id) =>
    setHighlights(highlights.filter((h) => h.id !== id));

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        openDocument,
        closeDocument,
        activeDocument,
        vocabulary,
        saveWord,
        removeWord,
        highlights,
        saveHighlight,
        removeHighlight,
        theme,
        setTheme,
        toggleTheme,
        fontSize,
        setFontSize,
        fontFamily,
        setFontFamily,
        documents,
        addDocument,
        removeDocument,
        updateProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/* STREAMING_CHUNK:Phát triển Component SmartPopup (Mobile Responsive)... */
const SmartPopup = ({ position, text, context, onClose, containerRef }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { saveWord, saveHighlight } = useContext(AppContext);
  const popupRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const fetchMeaning = async () => {
      setLoading(true);
      const result = await RealDictionaryService.lookup(text, context);
      if (isMounted) {
        setData(result);
        setLoading(false);
      }
    };
    if (text) fetchMeaning();
    return () => {
      isMounted = false;
    };
  }, [text, context]);

  // Điều chỉnh vị trí đảm bảo không bị tràn trên Mobile
  const [adjustedPos, setAdjustedPos] = useState({
    top: position.top,
    left: position.left,
    opacity: 0,
  });

  useEffect(() => {
    if (popupRef.current) {
      const popupRect = popupRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      let newTop = position.top;
      let newLeft = position.left;

      // Đảm bảo không tràn trái phải
      if (newLeft + popupRect.width > screenWidth - 16) {
        newLeft = screenWidth - popupRect.width - 16;
      }
      if (newLeft < 16) {
        newLeft = 16;
      }

      // Đảm bảo không tràn dưới (lật lên trên nếu cần)
      // Lấy tọa độ tuyệt đối so với màn hình để tính toán
      const containerTop = containerRef.current
        ? containerRef.current.getBoundingClientRect().top
        : 0;
      const viewportBottom = containerTop + newTop + popupRect.height;

      if (viewportBottom > screenHeight - 20) {
        newTop = position.rectTop - popupRect.height - 10;
      }

      setAdjustedPos({ top: newTop, left: newLeft, opacity: 1 });
    }
  }, [position, data, containerRef]);

  return (
    <div
      ref={popupRef}
      className="smart-popup-container absolute z-50 w-[90vw] sm:w-80 md:w-96 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-slate-200/50 dark:border-slate-700/50 overflow-hidden transition-opacity duration-200"
      style={{
        top: `${adjustedPos.top}px`,
        left: `${adjustedPos.left}px`,
        opacity: adjustedPos.opacity,
      }}
      onMouseDown={(e) => e.stopPropagation()}
      onMouseUp={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      {loading ? (
        <div className="p-8 flex flex-col items-center justify-center space-y-4">
          <div className="w-8 h-8 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            AI đang phân tích...
          </span>
        </div>
      ) : data ? (
        <div className="flex flex-col max-h-[50vh] sm:max-h-[400px]">
          {/* Header - Phân biệt màu theo chế độ */}
          <div
            className={`p-4 border-b flex justify-between items-start shrink-0 
              ${
                data.mode === "dictionary"
                  ? "bg-indigo-50/50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800/50"
                  : "bg-emerald-50/50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800/50"
              }
          `}
          >
            <div className="pr-2 overflow-hidden flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span
                  className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full
                  ${
                    data.mode === "dictionary"
                      ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200"
                      : "bg-emerald-100 text-emerald-700 dark:bg-emerald-800 dark:text-emerald-200"
                  }
                `}
                >
                  {data.mode === "dictionary" ? "Từ vựng" : "Đoạn văn"}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight truncate">
                {data.mode === "dictionary" ? data.word : "Bản dịch & Ngữ cảnh"}
              </h4>

              {data.mode === "dictionary" && (
                <div className="flex items-center space-x-2 mt-2 flex-wrap gap-y-1">
                  {data.ipa && (
                    <span className="text-sm text-slate-600 dark:text-slate-300 font-mono">
                      {data.ipa}
                    </span>
                  )}
                  {data.partOfSpeech && (
                    <span className="text-xs font-semibold px-2 py-0.5 bg-slate-200/50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-md">
                      {data.partOfSpeech}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center space-x-1 shrink-0">
              {data.mode === "dictionary" && (
                <button
                  onClick={(e) => playAudio(data.word, e)}
                  className="p-2 bg-white/60 dark:bg-slate-800/60 text-indigo-600 dark:text-indigo-400 hover:bg-white dark:hover:bg-slate-700 rounded-full transition-colors shadow-sm"
                  title="Phát âm"
                >
                  <Icon name="Volume2" className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/20 rounded-full transition-colors"
                title="Đóng"
              >
                <Icon name="X" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 overflow-y-auto custom-scrollbar flex-1 bg-white dark:bg-slate-900/50">
            {data.mode === "dictionary" ? (
              <div className="space-y-4">
                <div>
                  <p className="text-[1.05rem] font-semibold text-slate-800 dark:text-slate-100">
                    {data.contextMeaning &&
                    data.contextMeaning !== data.vietnameseMeaning ? (
                      <>
                        <span className="text-indigo-600 dark:text-indigo-400">
                          Nghĩa ngữ cảnh:{" "}
                        </span>
                        {data.contextMeaning} <br />
                        <span className="text-sm text-slate-500 dark:text-slate-400 font-normal mt-1 block">
                          Nghĩa gốc: {data.vietnameseMeaning}
                        </span>
                      </>
                    ) : (
                      data.vietnameseMeaning
                    )}
                  </p>
                  {data.englishDefinition && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 italic bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/50">
                      "{data.englishDefinition}"
                    </p>
                  )}
                </div>

                {data.examples && data.examples.length > 0 && (
                  <div>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                      Ví dụ
                    </span>
                    <p className="text-sm text-slate-700 dark:text-slate-300 border-l-2 border-indigo-400 pl-3 py-1 bg-indigo-50/30 dark:bg-indigo-900/10 rounded-r-lg">
                      {data.examples[0]}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-3.5 rounded-xl border border-emerald-100 dark:border-emerald-800/30">
                  <p className="text-[15px] font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    {data.vietnameseMeaning}
                  </p>
                </div>

                {data.englishDefinition && (
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Giải thích & Ngữ pháp
                    </span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                      {data.englishDefinition}
                    </p>
                  </div>
                )}

                {data.keyVocabulary && data.keyVocabulary.length > 0 && (
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Từ vựng quan trọng
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {data.keyVocabulary.map((v, i) => (
                        <div
                          key={i}
                          className="text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-2.5 py-1.5 shadow-sm flex flex-col"
                        >
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {v.word}
                          </span>
                          <span className="text-slate-500 mt-0.5">
                            {v.meaning}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-3 border-t border-slate-100 dark:border-slate-700/50 bg-slate-50/80 dark:bg-slate-800 flex space-x-2 shrink-0">
            {data.mode === "dictionary" ? (
              <button
                onClick={() => {
                  saveWord(data);
                  onClose();
                }}
                className="flex-1 flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition-all shadow-md active:scale-95"
              >
                <Icon name="Star" className="w-4 h-4 mr-2" /> Lưu từ vựng
              </button>
            ) : (
              <button
                onClick={() => {
                  saveHighlight(data.word, data.vietnameseMeaning);
                  onClose();
                }}
                className="flex-1 flex items-center justify-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium transition-all shadow-md active:scale-95"
              >
                <Icon name="Bookmark" className="w-4 h-4 mr-2" /> Lưu đoạn này
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="p-6 text-center text-slate-500">
          Không tìm thấy kết quả.
        </div>
      )}
    </div>
  );
};

/* STREAMING_CHUNK:Màn hình Đọc và Thanh bên Sidebar... */
const Reader = () => {
  const {
    activeDocument,
    closeDocument,
    vocabulary,
    highlights,
    removeWord,
    removeHighlight,
    theme,
    setTheme,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    updateProgress,
  } = useContext(AppContext);

  const [selectedText, setSelectedText] = useState("");
  const [selectionContext, setSelectionContext] = useState("");
  const [popupPosition, setPopupPosition] = useState(null);
  const [activeTab, setActiveTab] = useState("vocabulary");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Quản lý sidebar trên mobile

  const contentRef = useRef(null);
  const scrollTimeout = useRef(null);

  const handleSelection = useCallback(() => {
    try {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
        setPopupPosition(null);
        return;
      }
      const text = selection.toString().trim();
      if (!text || text.length < 2) {
        setPopupPosition(null);
        return;
      }

      let context = "";
      const node = selection.anchorNode;
      if (node && node.parentElement) {
        let block = node.parentElement;
        while (
          block &&
          !["P", "DIV", "H1", "H2", "H3", "LI"].includes(block.tagName) &&
          block !== contentRef.current
        ) {
          block = block.parentElement;
        }
        context = block ? block.innerText : text;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const containerRect = contentRef.current.getBoundingClientRect();

      if (rect.width === 0 && rect.height === 0) return;

      setPopupPosition({
        top: rect.bottom - containerRect.top + 10,
        rectTop: rect.top - containerRect.top,
        left: rect.left - containerRect.left + rect.width / 2 - 160,
      });

      setSelectedText(text);
      setSelectionContext(context);
    } catch (err) {
      console.warn("Selection error:", err);
      setPopupPosition(null);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.closest(".smart-popup-container")) return;
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) {
        setPopupPosition(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollHeight <= clientHeight) return;
    const progress = Math.min(
      100,
      Math.max(
        0,
        Math.round((scrollTop / (scrollHeight - clientHeight)) * 100),
      ),
    );

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      updateProgress(activeDocument.id, progress);
    }, 300);
  };

  if (!activeDocument) return null;

  const getPageBgClass = () => {
    if (theme === "sepia")
      return "bg-[#fbf0d9] text-[#5b4636] border-[#e8d5b7]";
    if (theme === "dark") return "bg-slate-900 text-slate-300 border-slate-700";
    return "bg-white text-slate-800 border-slate-200";
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] sm:h-[calc(100vh-73px)] bg-slate-100 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Reader Toolbar */}
      <div className="flex-none flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-20 shadow-sm">
        <div className="flex items-center space-x-2 sm:space-x-4 min-w-0">
          <button
            onClick={closeDocument}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-600 dark:text-slate-300 shrink-0"
          >
            <Icon name="ArrowLeft" />
          </button>
          <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 shrink-0 hidden sm:block"></div>
          <div className="min-w-0 flex-1">
            <h2 className="font-semibold text-slate-800 dark:text-white leading-tight truncate text-sm sm:text-base">
              {activeDocument.title}
            </h2>
            <div className="flex items-center text-[10px] sm:text-xs text-slate-500 mt-0.5 truncate">
              <Icon name="Clock" className="w-3 h-3 mr-1 shrink-0" />
              <span className="truncate">
                Thời gian đọc: ~{activeDocument.readingTime} phút
              </span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-1 sm:space-x-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl shrink-0 ml-2">
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="bg-transparent text-xs sm:text-sm font-medium outline-none text-slate-700 dark:text-slate-300 cursor-pointer px-1 hidden md:block max-w-[120px] truncate hover:text-indigo-600 transition-colors"
          >
            <option value="ui-sans-serif, system-ui">System Font</option>
            <option value="Times New Roman, serif">Times New Roman</option>
            <option value="Arial, sans-serif">Arial</option>
            <option value="Georgia, serif">Georgia</option>
          </select>

          <div className="h-4 w-px bg-slate-300 dark:bg-slate-600 mx-1 hidden md:block"></div>

          <button
            onClick={() => setFontSize((f) => Math.max(12, f - 2))}
            className="p-1 sm:p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg"
          >
            <Icon name="ZoomOut" className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <span className="text-xs font-bold text-slate-400 w-6 text-center hidden sm:block">
            {fontSize}
          </span>
          <button
            onClick={() => setFontSize((f) => Math.min(32, f + 2))}
            className="p-1 sm:p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg"
          >
            <Icon name="ZoomIn" className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="h-4 w-px bg-slate-300 dark:bg-slate-600 mx-1 hidden sm:block"></div>

          {/* Theme Toggles - Hidden on very small screens, moved to navbar */}
          <div className="hidden sm:flex space-x-1">
            <button
              onClick={() => setTheme("light")}
              className={`w-5 h-5 rounded-full border-2 ${theme === "light" ? "border-indigo-500" : "border-transparent"} bg-white shadow-sm`}
            ></button>
            <button
              onClick={() => setTheme("sepia")}
              className={`w-5 h-5 rounded-full border-2 ${theme === "sepia" ? "border-indigo-500" : "border-transparent"} bg-[#fbf0d9] shadow-sm`}
            ></button>
            <button
              onClick={() => setTheme("dark")}
              className={`w-5 h-5 rounded-full border-2 ${theme === "dark" ? "border-indigo-500" : "border-transparent"} bg-slate-800 shadow-sm`}
            ></button>
          </div>

          <div className="h-4 w-px bg-slate-300 dark:bg-slate-600 mx-1 lg:hidden"></div>

          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-1 sm:p-1.5 text-indigo-600 dark:text-indigo-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg lg:hidden"
          >
            <Icon name="Sidebar" className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden relative w-full">
        {/* Main Document Area */}
        <div
          className="flex-1 overflow-y-auto p-3 sm:p-6 md:p-10 custom-scrollbar relative flex justify-center scroll-smooth w-full"
          onMouseUp={handleSelection}
          onScroll={handleScroll}
        >
          {/* Document Paper */}
          <div
            ref={contentRef}
            className={`w-full max-w-3xl p-6 sm:p-10 md:p-16 shadow-xl rounded-lg h-max min-h-[842px] mb-12 border transition-all duration-300 flow-root relative
                ${getPageBgClass()}`}
          >
            <div
              className="document-html-content"
              style={{ fontSize: `${fontSize}px`, fontFamily: fontFamily }}
              dangerouslySetInnerHTML={{ __html: activeDocument.content }}
            />

            {popupPosition && (
              <SmartPopup
                position={popupPosition}
                text={selectedText}
                context={selectionContext}
                containerRef={contentRef}
                onClose={() => setPopupPosition(null)}
              />
            )}
          </div>
        </div>

        {/* Overlay for Mobile Sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Right Sidebar - Học tập */}
        <div
          className={`fixed inset-y-0 right-0 w-[85vw] max-w-[360px] lg:w-96 flex-none bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col shadow-2xl lg:shadow-none z-40 lg:z-auto transition-transform duration-300 transform lg:translate-x-0 lg:relative ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Header Mobile Only */}
          <div className="flex items-center justify-between p-3 border-b border-slate-200 dark:border-slate-800 lg:hidden bg-slate-50 dark:bg-slate-900">
            <span className="font-bold text-slate-800 dark:text-white">
              Công cụ học tập
            </span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-1.5 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300"
            >
              <Icon name="X" className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 px-2 pt-2 bg-slate-50 dark:bg-slate-900/50">
            <button
              onClick={() => setActiveTab("vocabulary")}
              className={`flex-1 py-3 text-sm font-semibold flex items-center justify-center space-x-2 border-b-2 transition-colors ${activeTab === "vocabulary" ? "border-indigo-500 text-indigo-600 dark:text-indigo-400" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
            >
              <Icon name="Star" className="w-4 h-4" />
              <span className="truncate">Từ vựng ({vocabulary.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("highlights")}
              className={`flex-1 py-3 text-sm font-semibold flex items-center justify-center space-x-2 border-b-2 transition-colors ${activeTab === "highlights" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
            >
              <Icon name="Bookmark" className="w-4 h-4" />
              <span className="truncate">Ghi chú ({highlights.length})</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 custom-scrollbar bg-slate-50/50 dark:bg-slate-900/30">
            {activeTab === "vocabulary" ? (
              // Vocabulary List
              vocabulary.length === 0 ? (
                <div className="text-center text-slate-400 mt-20 px-4">
                  <Icon
                    name="Bot"
                    className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-20"
                  />
                  <p className="font-medium">Chưa có từ vựng nào</p>
                  <p className="text-xs sm:text-sm mt-2 text-slate-500">
                    Bôi đen 1 từ trong văn bản để tra cứu và lưu lại.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {vocabulary.map((v) => (
                    <div
                      key={v.id}
                      className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm group hover:shadow-md transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="pr-2 flex-1">
                          <strong className="text-slate-900 dark:text-white text-[1.05rem] font-bold block">
                            {v.word}
                          </strong>
                          {v.ipa && (
                            <span className="text-[11px] sm:text-xs text-indigo-500 dark:text-indigo-400 font-mono block mt-0.5">
                              {v.ipa} • {v.partOfSpeech}
                            </span>
                          )}
                        </div>
                        <div className="flex space-x-1 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                          <button
                            onClick={() => playAudio(v.word)}
                            className="p-1.5 text-indigo-500 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 rounded-lg"
                            title="Phát âm"
                          >
                            <Icon name="Volume2" className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeWord(v.id)}
                            className="p-1.5 text-red-500 bg-red-50 hover:bg-red-100 dark:bg-red-900/30 dark:hover:bg-red-900/50 rounded-lg"
                          >
                            <Icon name="Trash" className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-lg border border-slate-100 dark:border-slate-700/50">
                        {v.vietnameseMeaning}
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : // Highlights List
            highlights.length === 0 ? (
              <div className="text-center text-slate-400 mt-20 px-4">
                <Icon
                  name="Type"
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-20"
                />
                <p className="font-medium">Sổ tay trống</p>
                <p className="text-xs sm:text-sm mt-2 text-slate-500">
                  Bôi đen đoạn văn dài để dịch và lưu vào sổ tay.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {highlights.map((h) => (
                  <div
                    key={h.id}
                    className="p-3.5 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800/30 group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 mr-2 shrink-0"></div>
                      <p className="text-[13px] sm:text-sm font-serif text-slate-700 dark:text-slate-300 italic leading-relaxed flex-1">
                        "{h.text}"
                      </p>
                      <button
                        onClick={() => removeHighlight(h.id)}
                        className="opacity-100 sm:opacity-0 group-hover:opacity-100 text-emerald-400 hover:text-emerald-600 p-1 bg-emerald-100/50 dark:bg-emerald-900/50 rounded ml-2"
                      >
                        <Icon name="Trash" className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[13px] sm:text-sm font-medium text-emerald-800 dark:text-emerald-400 pl-3 border-l-2 border-emerald-200 dark:border-emerald-700/50 ml-0.5 mt-2">
                      {h.translation}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar Footer */}
          <div className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                <Icon name="Bot" className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 block truncate">
                  Gemini AI Engine
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 block truncate">
                  Phân tích ngữ cảnh thông minh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* STREAMING_CHUNK:Màn hình Sổ tay chi tiết... */
const NotebookView = () => {
  const {
    vocabulary,
    highlights,
    removeWord,
    removeHighlight,
    setCurrentView,
  } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState("vocabulary");

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-12 animate-fade-in">
      <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
        <button
          onClick={() => setCurrentView("dashboard")}
          className="p-1.5 sm:p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-600 dark:text-slate-300"
        >
          <Icon name="ArrowLeft" />
        </button>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
          Sổ tay học tập
        </h1>
      </div>

      <div className="flex space-x-2 sm:space-x-4 mb-6 sm:mb-8 border-b border-slate-200 dark:border-slate-800 overflow-x-auto custom-scrollbar">
        <button
          onClick={() => setActiveTab("vocabulary")}
          className={`pb-3 sm:pb-4 px-2 sm:px-4 text-sm font-semibold flex items-center space-x-2 border-b-2 transition-colors whitespace-nowrap ${activeTab === "vocabulary" ? "border-indigo-500 text-indigo-600 dark:text-indigo-400" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
        >
          <Icon name="Star" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Từ vựng ({vocabulary.length})</span>
        </button>
        <button
          onClick={() => setActiveTab("highlights")}
          className={`pb-3 sm:pb-4 px-2 sm:px-4 text-sm font-semibold flex items-center space-x-2 border-b-2 transition-colors whitespace-nowrap ${activeTab === "highlights" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
        >
          <Icon name="Bookmark" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Đoạn văn dịch ({highlights.length})</span>
        </button>
      </div>

      <div className="min-h-[400px]">
        {activeTab === "vocabulary" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vocabulary.length === 0 ? (
              <p className="text-slate-500 col-span-full text-center mt-10">
                Chưa có từ vựng nào được lưu.
              </p>
            ) : (
              vocabulary.map((v) => (
                <div
                  key={v.id}
                  className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group flex flex-col"
                >
                  <div className="absolute top-4 right-4 flex space-x-1">
                    <button
                      onClick={() => playAudio(v.word)}
                      className="text-slate-400 hover:text-indigo-500 bg-slate-50 dark:bg-slate-900/50 p-1.5 rounded-lg opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Phát âm"
                    >
                      <Icon name="Volume2" className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => removeWord(v.id)}
                      className="text-slate-400 hover:text-red-500 bg-slate-50 dark:bg-slate-900/50 p-1.5 rounded-lg opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon name="Trash" className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white pr-16 break-words">
                    {v.word}
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-1.5 mb-3">
                    {v.ipa && (
                      <span className="text-sm text-indigo-500 font-mono bg-indigo-50 dark:bg-indigo-900/20 px-1.5 rounded">
                        {v.ipa}
                      </span>
                    )}
                    {v.partOfSpeech && (
                      <span className="text-xs font-semibold px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                        {v.partOfSpeech}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700 flex-1">
                    <p className="font-medium text-slate-800 dark:text-slate-200">
                      {v.vietnameseMeaning}
                    </p>
                    {v.contextMeaning &&
                      v.contextMeaning !== v.vietnameseMeaning && (
                        <p className="text-sm text-slate-500 mt-2 border-t border-slate-200 dark:border-slate-700/50 pt-2">
                          Ngữ cảnh:{" "}
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            {v.contextMeaning}
                          </span>
                        </p>
                      )}
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {highlights.length === 0 ? (
              <p className="text-slate-500 text-center mt-10">
                Chưa có đoạn văn nào được lưu.
              </p>
            ) : (
              highlights.map((h) => (
                <div
                  key={h.id}
                  className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group flex flex-col md:flex-row gap-4 sm:gap-6"
                >
                  <button
                    onClick={() => removeHighlight(h.id)}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 text-slate-400 hover:text-red-500 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity bg-slate-50 dark:bg-slate-900 p-1.5 rounded-lg z-10"
                  >
                    <Icon name="Trash" className="w-5 h-5" />
                  </button>
                  <div className="flex-1 mt-2 sm:mt-0">
                    <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Bản gốc tiếng Anh
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-serif italic border-l-4 border-slate-300 dark:border-slate-600 pl-3 sm:pl-4 py-1 leading-relaxed">
                      {h.text}
                    </p>
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] sm:text-xs font-bold text-emerald-500 uppercase tracking-wider block mb-2">
                      Bản dịch tiếng Việt
                    </span>
                    <p className="text-sm sm:text-base text-slate-800 dark:text-slate-100 font-medium bg-emerald-50 dark:bg-emerald-900/20 p-3 sm:p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/50 leading-relaxed">
                      {h.translation}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/* STREAMING_CHUNK:Thanh Navbar và Màn hình chính Dashboard... */
const Navbar = () => {
  const { theme, toggleTheme, currentView, setCurrentView } =
    useContext(AppContext);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div
        className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group"
        onClick={() => setCurrentView("dashboard")}
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all">
          L
        </div>
        <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300">
          Lingo<span className="hidden sm:inline">Reader</span>{" "}
          <span className="text-indigo-500 font-black">Pro</span>
        </span>
      </div>

      {currentView === "dashboard" && (
        <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
          <input
            type="text"
            placeholder="Tìm kiếm tài liệu..."
            className="w-full pl-10 pr-4 py-2 rounded-full text-sm border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white transition-all shadow-inner"
          />
          <Icon
            name="Search"
            className="absolute left-3.5 top-2.5 text-slate-400 w-4 h-4"
          />
        </div>
      )}

      <div className="flex items-center space-x-1 sm:space-x-3">
        <button
          onClick={() => setCurrentView("notebook")}
          className="flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 rounded-full font-medium transition-colors text-sm"
        >
          <Icon name="BookOpen" className="w-4 h-4" />
          <span className="hidden sm:inline">Sổ tay</span>
        </button>

        <div className="w-px h-5 sm:h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>

        <button
          onClick={toggleTheme}
          className="p-2 sm:p-2.5 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
        >
          <Icon
            name={theme === "dark" ? "Sun" : "Moon"}
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
        </button>
        <button className="hidden sm:flex items-center space-x-2 p-2.5 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <Icon name="User" className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

const Dashboard = () => {
  const { openDocument, documents, addDocument, removeDocument } =
    useContext(AppContext);
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (!document.getElementById("mammoth-script")) {
      const script = document.createElement("script");
      script.id = "mammoth-script";
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.4.21/mammoth.browser.min.js";
      document.body.appendChild(script);
    }
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      if (file.name.endsWith(".txt")) {
        const text = await file.text();
        const htmlContent = text
          .split("\n")
          .filter((p) => p.trim() !== "")
          .map((p) => `<p>${p}</p>`)
          .join("");
        const time = calculateReadingTime(htmlContent);
        const newDoc = {
          id: Date.now().toString(),
          title: file.name,
          type: "TXT",
          progress: 0,
          lastRead: "Vừa xong",
          content: htmlContent,
          readingTime: time,
        };
        addDocument(newDoc);
        openDocument(newDoc);
      } else if (file.name.endsWith(".docx")) {
        if (window.mammoth) {
          const arrayBuffer = await file.arrayBuffer();
          const result = await window.mammoth.convertToHtml({ arrayBuffer });
          const htmlContent = result.value || "<p>Tài liệu trống</p>";
          const time = calculateReadingTime(htmlContent);
          const newDoc = {
            id: Date.now().toString(),
            title: file.name,
            type: "DOCX",
            progress: 0,
            lastRead: "Vừa xong",
            content: htmlContent,
            readingTime: time,
          };
          addDocument(newDoc);
          openDocument(newDoc);
        } else {
          alert("Thư viện đọc Word đang tải. Vui lòng thử lại sau 1 giây.");
        }
      } else {
        alert("Vui lòng chọn file .txt hoặc .docx");
      }
    } catch (error) {
      alert("Lỗi đọc file: " + error.message);
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-12 animate-fade-in">
      <div className="mb-10 sm:mb-14 text-center space-y-3 sm:space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Nâng cấp trải nghiệm <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">
            {" "}
            Đọc tiếng Anh
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
          Đọc tài liệu Word chuẩn định dạng. Bôi đen để dịch, phát âm và lưu từ
          vựng thông minh cùng AI.
        </p>
      </div>

      <div className="relative group mb-12 sm:mb-16 mx-2 sm:mx-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border-2 border-dashed border-indigo-200 dark:border-indigo-800 rounded-3xl p-8 sm:p-12 flex flex-col items-center justify-center text-center hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-50 dark:bg-indigo-900/50 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 sm:mb-6 shadow-sm">
            <Icon name="Upload" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-2">
            Kéo thả tài liệu vào đây
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 sm:mb-8">
            Hỗ trợ định dạng DOCX và TXT
          </p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".txt,.docx"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center text-sm sm:text-base disabled:opacity-50"
          >
            {isUploading ? (
              <span className="flex items-center">
                <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin mr-2 sm:mr-3"></div>{" "}
                Đang xử lý...
              </span>
            ) : (
              <span className="flex items-center">
                <Icon name="FileText" className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />{" "}
                Chọn File từ máy tính
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="px-2 sm:px-0">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
            Tài liệu gần đây
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              onClick={() => openDocument(doc)}
              className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl hover:shadow-indigo-500/5 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeDocument(doc.id);
                  }}
                  className="p-1.5 sm:p-2 bg-red-50 dark:bg-red-900/20 text-red-500 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40"
                >
                  <Icon name="Trash" className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4 pr-8">
                <div
                  className={`p-2.5 sm:p-3 rounded-xl shrink-0 ${doc.type === "TXT" ? "bg-amber-100/50 text-amber-600 dark:bg-amber-900/30" : "bg-blue-100/50 text-blue-600 dark:bg-blue-900/30"}`}
                >
                  <Icon
                    name={doc.type === "TXT" ? "FileText" : "BookOpen"}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white truncate mb-1">
                    {doc.title}
                  </h3>
                  <div className="flex items-center text-[10px] sm:text-xs text-slate-500 space-x-1 sm:space-x-2">
                    <span className="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded font-medium">
                      {doc.type}
                    </span>
                    <span>•</span>
                    <span className="truncate">{doc.lastRead}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                      <Icon name="Clock" className="w-3 h-3 mr-0.5" /> ~
                      {doc.readingTime}p
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-6">
                <div className="flex justify-between text-[10px] sm:text-xs font-medium text-slate-500 mb-1.5 sm:mb-2">
                  <span>Tiến độ đọc</span>
                  <span>{doc.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                  <div
                    className="bg-indigo-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${doc.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* STREAMING_CHUNK:Main App Component và Global CSS... */
const AppContent = () => {
  const { currentView } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-indigo-200 dark:selection:bg-indigo-900/50">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        @media (min-width: 640px) { .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; } }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(156, 163, 175, 0.3); border-radius: 10px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background-color: rgba(156, 163, 175, 0.6); }
        
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        
        /* Word Document Content Styling */
        .document-html-content { line-height: 1.6; color: inherit; word-wrap: break-word; overflow-wrap: break-word;}
        @media (min-width: 640px) { .document-html-content { line-height: 1.8; } }
        
        .document-html-content p { margin-bottom: 1.2em; text-align: left; }
        @media (min-width: 768px) { .document-html-content p { text-align: justify; margin-bottom: 1.5em; } }
        
        .document-html-content h1 { font-family: ui-sans-serif, system-ui; font-size: 1.75em; font-weight: 800; margin-bottom: 0.8em; line-height: 1.2; }
        @media (min-width: 640px) { .document-html-content h1 { font-size: 2.25em; margin-bottom: 1em; } }
        
        .document-html-content h2 { font-family: ui-sans-serif, system-ui; font-size: 1.3em; font-weight: 700; margin-top: 1.2em; margin-bottom: 0.6em; }
        @media (min-width: 640px) { .document-html-content h2 { font-size: 1.5em; margin-top: 1.5em; margin-bottom: 0.75em; } }
        
        .document-html-content h3 { font-family: ui-sans-serif, system-ui; font-size: 1.15em; font-weight: 600; margin-top: 1.2em; margin-bottom: 0.5em; }
        .document-html-content ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.2em; }
        .document-html-content ol { list-style-type: decimal; padding-left: 1.5em; margin-bottom: 1.2em; }
        .document-html-content li { margin-bottom: 0.4em; }
        .document-html-content strong, .document-html-content b { font-weight: 700; }
        .document-html-content em, .document-html-content i { font-style: italic; }
        
        .document-html-content blockquote { border-left: 3px solid #cbd5e1; padding-left: 1em; margin-left: 0; font-style: italic; color: #64748b; }
        @media (min-width: 640px) { .document-html-content blockquote { border-left-width: 4px; } }
        .dark .document-html-content blockquote { border-color: #475569; color: #94a3b8; }
        
        /* Table Styles Responsive */
        .document-html-content table { width: 100%; border-collapse: collapse; margin-bottom: 1.5em; font-size: 0.85em; display: block; overflow-x: auto; white-space: nowrap; }
        @media (min-width: 640px) { .document-html-content table { font-size: 0.95em; display: table; white-space: normal; } }
        .document-html-content th, .document-html-content td { border: 1px solid rgba(156, 163, 175, 0.4); padding: 8px 10px; text-align: left; vertical-align: top; }
        @media (min-width: 640px) { .document-html-content th, .document-html-content td { padding: 12px 16px; } }
        .document-html-content th { background-color: rgba(0, 0, 0, 0.04); font-weight: 700; }
        .document-html-content tr:nth-child(even) { background-color: rgba(0, 0, 0, 0.015); }
        .dark .document-html-content th { background-color: rgba(255, 255, 255, 0.05); }
        .dark .document-html-content tr:nth-child(even) { background-color: rgba(255, 255, 255, 0.02); }
      `,
        }}
      />

      <Navbar />
      <main>
        {currentView === "dashboard" && <Dashboard />}
        {currentView === "reader" && <Reader />}
        {currentView === "notebook" && <NotebookView />}
      </main>
    </div>
  );
};

const App = () => (
  <AppProvider>
    <AppContent />
  </AppProvider>
);

export default App;
