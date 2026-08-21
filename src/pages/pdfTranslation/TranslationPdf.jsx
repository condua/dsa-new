import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  useCallback,
} from "react";

// --- Icons (Lucide-React simulated) ---
const Icon = ({ name, className = "w-5 h-5", onClick }) => {
  const icons = {
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
    Languages: (
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
        <path d="m5 8 6 6" />
        <path d="m4 14 6-6 2-3" />
        <path d="M2 5h12" />
        <path d="M7 2h1" />
        <path d="m22 22-5-10-5 10" />
        <path d="M14 18h6" />
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

// Hàm tính toán thời gian đọc ước tính dựa trên độ dài văn bản
const calculateReadingTime = (htmlContent) => {
  if (!htmlContent) return 1;
  // Loại bỏ các thẻ HTML để lấy chữ thuần tuý
  const text = htmlContent.replace(/<[^>]+>/g, " ");
  // Đếm số lượng từ (tách nhau bởi khoảng trắng)
  const wordCount = text.trim().split(/\s+/).length;
  // Trung bình người học tiếng Anh đọc khoảng 200 từ / phút
  const readingTime = Math.ceil(wordCount / 200);
  return readingTime || 1; // Trả về ít nhất 1 phút
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
const RealDictionaryService = {
  lookup: async (text, context) => {
    const cleanText = text.trim();

    if (!cleanText) {
      return null;
    }

    const wordCount = cleanText.split(/\s+/).length;
    const isTranslationMode = wordCount > 3;

    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

      const apiUrl = "https://api.openai.com/v1/chat/completions";

      const systemPrompt = `
You are an expert English-Vietnamese AI tutor and dictionary.

Analyze the provided English text.

If the text contains 1 to 3 words, return a dictionary result.

If the text contains 4 or more words, return a translation result.

IMPORTANT:
- Always return valid JSON.
- Do not use Markdown.
- Do not add explanations outside JSON.

For dictionary mode, return:

{
  "word": "the exact text queried",
  "ipa": "IPA pronunciation",
  "partOfSpeech": "noun/verb/adjective/etc",
  "vietnameseMeaning": "primary Vietnamese meaning",
  "contextMeaning": "meaning in the given context",
  "englishDefinition": "short English definition",
  "examples": ["example sentence"]
}

For translation mode, return:

{
  "word": "the original text",
  "vietnameseMeaning": "natural Vietnamese translation",
  "englishDefinition": "brief explanation",
  "keyVocabulary": [
    {
      "word": "word",
      "meaning": "Vietnamese meaning"
    }
  ]
}
`;

      const userPrompt = `
Text: ${JSON.stringify(cleanText)}

Context: ${JSON.stringify(context || "None")}
`;

      const payload = {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
        response_format: {
          type: "json_object",
        },
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

      if (!response.ok) {
        console.error("OpenAI API Error:", result);
        throw new Error(result?.error?.message || "OpenAI API request failed");
      }

      const content = result?.choices?.[0]?.message?.content;

      if (!content) {
        throw new Error("OpenAI returned empty content");
      }

      const aiData = JSON.parse(content);

      // QUAN TRỌNG:
      // Không cho AI quyết định mode.
      // Frontend tự xác định dựa trên số lượng từ.
      return {
        ...aiData,
        mode: isTranslationMode ? "translation" : "dictionary",
        word: cleanText,
      };
    } catch (error) {
      console.error("AI Error:", error);

      // Nếu đang tra MỘT TỪ thì lỗi vẫn phải là dictionary.
      return {
        mode: isTranslationMode ? "translation" : "dictionary",
        word: cleanText,
        vietnameseMeaning: "Không thể kết nối với AI. Vui lòng thử lại.",
        englishDefinition: error.message,
        ipa: "",
        partOfSpeech: "",
        contextMeaning: "",
        examples: [],
      };
    }
  },
};
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [activeDocument, setActiveDocument] = useState(null);

  // Storage
  const [vocabulary, setVocabulary] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [documents, setDocuments] = useState(MOCK_DOCUMENTS);

  // Preferences
  const [theme, setTheme] = useState("light"); // light, dark, sepia
  const [fontSize, setFontSize] = useState(18);
  const [fontFamily, setFontFamily] = useState("Times New Roman, serif");

  // Hàm cập nhật tiến độ đọc
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
    // Nếu đang mở file đó thì đóng lại
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

  // Toggle dark/light (Sepia handled in Reader)
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

  // Giữ popup không bị tràn màn hình và bám chặt vào trang giấy
  const [adjustedPos, setAdjustedPos] = useState(position);
  useEffect(() => {
    if (popupRef.current && containerRef.current) {
      const popupRect = popupRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      let newTop = position.top;
      let newLeft = position.left;

      // Căn lề theo viền trang giấy (không để popup tràn ra khỏi bìa sách)
      if (newLeft + popupRect.width > containerRect.width - 20) {
        newLeft = containerRect.width - popupRect.width - 20;
      }
      if (newLeft < 20) {
        newLeft = 20;
      }

      // Tính toán toạ độ so với khung nhìn hiện tại của màn hình
      const viewportBottom = containerRect.top + newTop + popupRect.height;

      // Lật popup lên trên từ được bôi đen nếu chạm đáy màn hình
      if (viewportBottom > window.innerHeight - 20) {
        newTop = position.rectTop - popupRect.height - 10;
      }

      setAdjustedPos({ top: newTop, left: newLeft });
    }
  }, [position, data, containerRef]);

  const handlePronounce = (e) => {
    // Không cần e.stopPropagation() nữa vì thẻ cha bọc ngoài cùng đã chặn rồi
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div
      ref={popupRef}
      // Thêm class smart-popup-container để dễ nhận diện khi click chuột ra ngoài
      className="smart-popup-container absolute z-50 w-80 md:w-96 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-slate-200/50 dark:border-slate-700/50 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      style={{ top: `${adjustedPos.top}px`, left: `${adjustedPos.left}px` }}
      // SỬA LỖI Ở ĐÂY: Chặn tuyệt đối mọi sự kiện nhấn chuột lọt ra ngoài vùng văn bản
      onMouseDown={(e) => e.stopPropagation()}
      onMouseUp={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      {loading ? (
        <div className="p-8 flex flex-col items-center justify-center space-y-4">
          <div className="w-8 h-8 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
            AI đang phân tích ngữ cảnh...
          </span>
        </div>
      ) : data ? (
        <div className="flex flex-col max-h-[400px]">
          {/* Header */}
          <div className="p-4 border-b border-slate-100 dark:border-slate-700/50 flex justify-between items-start shrink-0 bg-slate-50/50 dark:bg-slate-800/50">
            <div className="pr-2 overflow-hidden">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight truncate">
                {data.mode === "dictionary" ? data.word : "Dịch & Phân tích"}
              </h4>
              {data.mode === "dictionary" && (
                <div className="flex items-center space-x-2 mt-1.5 flex-wrap gap-y-1">
                  {data.ipa && (
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-mono bg-white dark:bg-slate-900 px-1.5 rounded border border-slate-200 dark:border-slate-700">
                      {data.ipa}
                    </span>
                  )}
                  {data.partOfSpeech && (
                    <span className="text-xs font-semibold px-2 py-0.5 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 rounded-full">
                      {data.partOfSpeech}
                    </span>
                  )}
                </div>
              )}
            </div>
            <div className="flex items-center space-x-1 shrink-0">
              <button
                onClick={handlePronounce}
                className="p-2.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 rounded-full transition-colors"
                title="Phát âm"
              >
                <Icon name="Volume2" className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/20 rounded-full transition-colors"
                title="Đóng"
              >
                <Icon name="X" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 overflow-y-auto custom-scrollbar flex-1">
            {data.mode === "dictionary" ? (
              // Chế độ Từ Điển (1-3 từ)
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
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 italic bg-slate-50 dark:bg-slate-900/50 p-2 rounded-lg border border-slate-100 dark:border-slate-700">
                      "{data.englishDefinition}"
                    </p>
                  )}
                </div>

                {data.examples && data.examples.length > 0 && (
                  <div>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                      Ví dụ
                    </span>
                    <p className="text-sm text-slate-700 dark:text-slate-300 border-l-2 border-indigo-400 pl-3 py-0.5">
                      {data.examples[0]}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              // Chế độ Dịch Thuật (Câu/Đoạn)
              <div className="space-y-4">
                <div className="bg-indigo-50/50 dark:bg-indigo-900/20 p-3 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">
                    Bản dịch
                  </span>
                  <p className="text-base font-medium text-slate-800 dark:text-slate-200">
                    {data.vietnameseMeaning}
                  </p>
                </div>

                {data.englishDefinition && (
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Giải thích & Ngữ pháp
                    </span>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
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
                          className="text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1 shadow-sm flex flex-col"
                        >
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {v.word}
                          </span>
                          <span className="text-slate-500">{v.meaning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-3 border-t border-slate-100 dark:border-slate-700/50 bg-slate-50/80 dark:bg-slate-900/80 flex space-x-2 shrink-0">
            {data.mode === "dictionary" ? (
              <button
                onClick={() => saveWord(data)}
                className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white rounded-xl text-sm font-medium transition-all shadow-md shadow-indigo-500/20 active:scale-95"
              >
                <Icon name="Star" className="w-4 h-4 mr-2" /> Lưu từ vựng
              </button>
            ) : (
              <button
                onClick={() => saveHighlight(data.word, data.vietnameseMeaning)}
                className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl text-sm font-medium transition-all shadow-md shadow-emerald-500/20 active:scale-95"
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
  const [activeTab, setActiveTab] = useState("vocabulary"); // 'vocabulary' | 'highlights'
  const contentRef = useRef(null);
  const scrollTimeout = useRef(null);

  // Tính toán vị trí Popup khi bôi đen
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

      // Lấy câu ngữ cảnh
      let context = "";
      const node = selection.anchorNode;
      if (node && node.parentElement) {
        let block = node.parentElement;
        // Tìm thẻ bọc ngoài chứa đoạn văn (hỗ trợ HTML tag)
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

      // Tính toạ độ TƯƠNG ĐỐI so với trang giấy (giúp popup cuộn theo chữ)
      setPopupPosition({
        top: rect.bottom - containerRect.top + 10,
        rectTop: rect.top - containerRect.top, // Dùng để tính toán lật popup lên trên
        left: rect.left - containerRect.left + rect.width / 2 - 160, // Căn giữa popup
      });

      setSelectedText(text);
      setSelectionContext(context);
    } catch (err) {
      console.warn("Selection error:", err);
      setPopupPosition(null);
    }
  }, []);

  // Ẩn popup khi click ra ngoài vùng văn bản
  useEffect(() => {
    const handleClickOutside = (e) => {
      // SỬA LỖI Ở ĐÂY: Nếu click trúng vào bất kỳ thành phần nào bên trong Popup thì bỏ qua, không đóng
      if (e.target.closest(".smart-popup-container")) {
        return;
      }

      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) {
        setPopupPosition(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Tính toán % tiến độ khi cuộn trang
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    // Bỏ qua nếu trang quá ngắn không cần cuộn
    if (scrollHeight <= clientHeight) return;

    // Tính toán % hoàn thành
    const progress = Math.min(
      100,
      Math.max(
        0,
        Math.round((scrollTop / (scrollHeight - clientHeight)) * 100),
      ),
    );

    // Sử dụng debounce để tránh gọi update liên tục gây giật lag
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      updateProgress(activeDocument.id, progress);
    }, 300);
  };

  if (!activeDocument) return null;

  // Xác định class nền cho trang đọc sách
  const getPageBgClass = () => {
    if (theme === "sepia")
      return "bg-[#fbf0d9] text-[#5b4636] border-[#e8d5b7]";
    if (theme === "dark") return "bg-slate-900 text-slate-300 border-slate-700";
    return "bg-white text-slate-800 border-slate-200";
  };

  return (
    <div className="flex flex-col h-[calc(100vh-73px)] bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      {/* Reader Toolbar */}
      <div className="flex-none flex items-center justify-between px-4 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-10 shadow-sm">
        <div className="flex items-center space-x-4">
          <button
            onClick={closeDocument}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-600 dark:text-slate-300"
          >
            <Icon name="ArrowLeft" />
          </button>
          <div className="h-6 w-px bg-slate-300 dark:bg-slate-700"></div>
          <div>
            <h2 className="font-semibold text-slate-800 dark:text-white leading-tight max-w-[200px] sm:max-w-md md:max-w-xl truncate">
              {activeDocument.title}
            </h2>
            <div className="flex items-center text-xs text-slate-500 mt-0.5">
              <Icon name="Clock" className="w-3 h-3 mr-1" />
              <span>Thời gian đọc: ~{activeDocument.readingTime} phút</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-1 sm:space-x-3 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
          {/* Font Selector */}
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="bg-transparent text-sm font-medium outline-none text-slate-700 dark:text-slate-300 cursor-pointer px-2 hidden md:block max-w-[140px] truncate hover:text-indigo-600 transition-colors"
            title="Chọn Font chữ"
          >
            <option value="Times New Roman, serif">Times New Roman</option>
            <option value="Arial, sans-serif">Arial</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="Verdana, sans-serif">Verdana</option>
            <option value="'Courier New', Courier, monospace">
              Courier New
            </option>
            <option value="ui-sans-serif, system-ui">System Default</option>
          </select>

          <div className="h-5 w-px bg-slate-300 dark:bg-slate-600 mx-1 hidden md:block"></div>

          <button
            onClick={() => setFontSize((f) => Math.max(12, f - 2))}
            className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg"
          >
            <Icon name="ZoomOut" className="w-4 h-4" />
          </button>
          <span className="text-xs font-bold text-slate-400 w-8 text-center">
            {fontSize}px
          </span>
          <button
            onClick={() => setFontSize((f) => Math.min(32, f + 2))}
            className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg"
          >
            <Icon name="ZoomIn" className="w-4 h-4" />
          </button>

          <div className="h-5 w-px bg-slate-300 dark:bg-slate-600 mx-1"></div>

          <button
            onClick={() => setTheme("light")}
            className={`w-6 h-6 rounded-full border-2 ${theme === "light" ? "border-indigo-500" : "border-transparent"} bg-white shadow-sm`}
          ></button>
          <button
            onClick={() => setTheme("sepia")}
            className={`w-6 h-6 rounded-full border-2 ${theme === "sepia" ? "border-indigo-500" : "border-transparent"} bg-[#fbf0d9] shadow-sm`}
          ></button>
          <button
            onClick={() => setTheme("dark")}
            className={`w-6 h-6 rounded-full border-2 ${theme === "dark" ? "border-indigo-500" : "border-transparent"} bg-slate-800 shadow-sm`}
          ></button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden relative">
        {/* Main Document Area */}
        <div
          className="flex-1 overflow-y-auto p-4 md:p-10 custom-scrollbar relative flex justify-center scroll-smooth"
          onMouseUp={handleSelection}
          onScroll={handleScroll}
        >
          {/* Document Paper */}
          <div
            ref={contentRef}
            className={`w-full max-w-3xl p-10 md:p-16 shadow-2xl rounded-md h-max min-h-[842px] mb-12 border transition-all duration-300 flow-root relative
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

        {/* Right Sidebar - Học tập */}
        <div className="w-80 lg:w-96 flex-none bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col shadow-[-10px_0_20px_-10px_rgba(0,0,0,0.05)] z-20">
          {/* Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 px-2 pt-2 bg-slate-50 dark:bg-slate-900/50">
            <button
              onClick={() => setActiveTab("vocabulary")}
              className={`flex-1 py-3 text-sm font-semibold flex items-center justify-center space-x-2 border-b-2 transition-colors ${activeTab === "vocabulary" ? "border-indigo-500 text-indigo-600 dark:text-indigo-400" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
            >
              <Icon name="Star" className="w-4 h-4" />{" "}
              <span>Từ vựng ({vocabulary.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("highlights")}
              className={`flex-1 py-3 text-sm font-semibold flex items-center justify-center space-x-2 border-b-2 transition-colors ${activeTab === "highlights" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
            >
              <Icon name="Bookmark" className="w-4 h-4" />{" "}
              <span>Ghi chú ({highlights.length})</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-slate-50/50 dark:bg-slate-900/30">
            {activeTab === "vocabulary" ? (
              // Vocabulary List
              vocabulary.length === 0 ? (
                <div className="text-center text-slate-400 mt-20">
                  <Icon
                    name="Bot"
                    className="w-16 h-16 mx-auto mb-4 opacity-20"
                  />
                  <p className="font-medium">Chưa có từ vựng nào</p>
                  <p className="text-sm mt-2 text-slate-500">
                    Bôi đen 1 từ trong văn bản để tra cứu và lưu lại.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {vocabulary.map((v) => (
                    <div
                      key={v.id}
                      className="p-3.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm group hover:shadow-md transition-all"
                    >
                      <div className="flex justify-between items-start">
                        <div className="pr-4">
                          <strong className="text-slate-900 dark:text-white text-[1.05rem] font-bold block">
                            {v.word}
                          </strong>
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-300 block mt-1">
                            {v.vietnameseMeaning}
                          </span>
                        </div>
                        <button
                          onClick={() => removeWord(v.id)}
                          className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 transition-all p-1.5 bg-slate-50 hover:bg-red-50 dark:bg-slate-700 dark:hover:bg-red-900/30 rounded-lg"
                        >
                          <Icon name="Trash" className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : // Highlights List
            highlights.length === 0 ? (
              <div className="text-center text-slate-400 mt-20">
                <Icon
                  name="Type"
                  className="w-16 h-16 mx-auto mb-4 opacity-20"
                />
                <p className="font-medium">Sổ tay trống</p>
                <p className="text-sm mt-2 text-slate-500">
                  Bôi đen đoạn văn dài để dịch và lưu vào sổ tay.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {highlights.map((h) => (
                  <div
                    key={h.id}
                    className="p-4 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800/30 group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 mr-2 shrink-0"></div>
                      <p className="text-sm font-serif text-slate-700 dark:text-slate-300 italic leading-relaxed flex-1">
                        "{h.text}"
                      </p>
                      <button
                        onClick={() => removeHighlight(h.id)}
                        className="opacity-0 group-hover:opacity-100 text-emerald-300 hover:text-emerald-600 ml-2"
                      >
                        <Icon name="Trash" className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm font-medium text-emerald-800 dark:text-emerald-400 pl-3 border-l-2 border-emerald-200 dark:border-emerald-700/50 ml-0.5 mt-2">
                      {h.translation}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Icon name="Bot" className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block">
                  Gemini AI Engine
                </span>
                <span className="text-xs text-slate-500 block">
                  Dịch ngữ cảnh & Phân tích thông minh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    <div className="max-w-5xl mx-auto p-6 md:p-12 animate-fade-in">
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={() => setCurrentView("dashboard")}
          className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-600 dark:text-slate-300"
        >
          <Icon name="ArrowLeft" />
        </button>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">
          Sổ tay học tập
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-8 border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setActiveTab("vocabulary")}
          className={`pb-4 px-4 text-sm font-semibold flex items-center space-x-2 border-b-2 transition-colors ${activeTab === "vocabulary" ? "border-indigo-500 text-indigo-600 dark:text-indigo-400" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
        >
          <Icon name="Star" className="w-5 h-5" />{" "}
          <span>Từ vựng ({vocabulary.length})</span>
        </button>
        <button
          onClick={() => setActiveTab("highlights")}
          className={`pb-4 px-4 text-sm font-semibold flex items-center space-x-2 border-b-2 transition-colors ${activeTab === "highlights" ? "border-emerald-500 text-emerald-600 dark:text-emerald-400" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}
        >
          <Icon name="Bookmark" className="w-5 h-5" />{" "}
          <span>Đoạn văn dịch ({highlights.length})</span>
        </button>
      </div>

      {/* Content */}
      <div className="min-h-[400px]">
        {activeTab === "vocabulary" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vocabulary.length === 0 ? (
              <p className="text-slate-500 col-span-full">
                Chưa có từ vựng nào được lưu.
              </p>
            ) : (
              vocabulary.map((v) => (
                <div
                  key={v.id}
                  className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group"
                >
                  <button
                    onClick={() => removeWord(v.id)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon name="Trash" className="w-4 h-4" />
                  </button>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {v.word}
                  </h3>
                  {v.ipa && (
                    <p className="text-sm text-indigo-500 font-mono mt-1">
                      {v.ipa} • {v.partOfSpeech}
                    </p>
                  )}
                  <div className="mt-3 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                    <p className="font-medium text-slate-800 dark:text-slate-200">
                      {v.vietnameseMeaning}
                    </p>
                    {v.contextMeaning &&
                      v.contextMeaning !== v.vietnameseMeaning && (
                        <p className="text-sm text-slate-500 mt-1">
                          Trong ngữ cảnh:{" "}
                          <span className="font-medium">
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
              <p className="text-slate-500">Chưa có đoạn văn nào được lưu.</p>
            ) : (
              highlights.map((h) => (
                <div
                  key={h.id}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative group flex flex-col md:flex-row gap-6"
                >
                  <button
                    onClick={() => removeHighlight(h.id)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon name="Trash" className="w-5 h-5" />
                  </button>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Bản gốc tiếng Anh
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 font-serif italic border-l-4 border-slate-300 dark:border-slate-600 pl-4 py-1">
                      {h.text}
                    </p>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider block mb-2">
                      Bản dịch tiếng Việt
                    </span>
                    <p className="text-slate-800 dark:text-slate-100 font-medium bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/50">
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

const Navbar = () => {
  const { theme, toggleTheme, currentView, setCurrentView } =
    useContext(AppContext);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div
        className="flex items-center space-x-3 cursor-pointer group"
        onClick={() => setCurrentView("dashboard")}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all">
          L
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 hidden sm:block">
          LingoReader <span className="text-indigo-500 font-black">Pro</span>
        </span>
      </div>

      {currentView === "dashboard" && (
        <div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
          <input
            type="text"
            placeholder="Tìm kiếm tài liệu hoặc từ vựng..."
            className="w-full pl-11 pr-4 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white transition-all shadow-inner"
          />
          <Icon
            name="Search"
            className="absolute left-4 top-3 text-slate-400 w-5 h-5"
          />
        </div>
      )}

      {}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button
          onClick={() => setCurrentView("notebook")}
          className="flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 rounded-full font-medium transition-colors"
        >
          <Icon name="BookOpen" className="w-4 h-4" />
          <span className="hidden sm:inline">Sổ tay</span>
        </button>

        <div className="w-px h-6 bg-slate-200 dark:bg-slate-700"></div>

        <button
          onClick={toggleTheme}
          className="p-2.5 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
        >
          <Icon name={theme === "dark" ? "Sun" : "Moon"} />
        </button>
        <button className="flex items-center space-x-2 p-2.5 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <Icon name="User" />
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
    // Tải mammoth để chuyển đổi Word sang HTML chuẩn
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
        // Bọc text trong thẻ p để chuẩn HTML format
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
          // Dùng convertToHtml để giữ format thay vì extractRawText
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
      console.error("Lỗi:", error);
      alert("Lỗi đọc file: " + error.message);
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 animate-fade-in">
      {/* Hero Section */}
      <div className="mb-14 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Nâng cấp trải nghiệm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">
            Đọc tiếng Anh
          </span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Đọc tài liệu Word chuẩn định dạng. Bôi đen để dịch, phát âm và lưu từ
          vựng thông minh cùng Gemini AI.
        </p>
      </div>

      {/* Upload Zone */}
      <div className="relative group mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border-2 border-dashed border-indigo-200 dark:border-indigo-800 rounded-3xl p-12 flex flex-col items-center justify-center text-center hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all">
          <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/50 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 shadow-sm">
            <Icon name="Upload" className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
            Kéo thả tài liệu vào đây
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8">
            Hỗ trợ định dạng DOCX (có giữ format) và TXT
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
            className="px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center disabled:opacity-50 disabled:hover:scale-100"
          >
            {isUploading ? (
              <span className="flex items-center">
                <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin mr-3"></div>{" "}
                Đang xử lý...
              </span>
            ) : (
              <span className="flex items-center">
                <Icon name="FileText" className="w-5 h-5 mr-2" /> Chọn File từ
                máy tính
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Recent Documents */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Tài liệu gần đây
          </h2>
          <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
            Xem tất cả
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              onClick={() => openDocument(doc)}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl hover:shadow-indigo-500/5 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeDocument(doc.id);
                  }}
                  className="p-2 bg-red-50 dark:bg-red-900/20 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40"
                  title="Xóa tài liệu"
                >
                  <Icon name="Trash" className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-xl ${doc.type === "TXT" ? "bg-amber-100/50 text-amber-600 dark:bg-amber-900/30" : "bg-blue-100/50 text-blue-600 dark:bg-blue-900/30"} group-hover:scale-110 transition-transform`}
                >
                  <Icon
                    name={doc.type === "TXT" ? "FileText" : "BookOpen"}
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white truncate mb-1">
                    {doc.title}
                  </h3>
                  <div className="flex items-center text-xs text-slate-500 space-x-2">
                    <span className="bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded font-medium">
                      {doc.type}
                    </span>
                    <span>•</span>
                    <span>{doc.lastRead}</span>
                    <span>•</span>
                    <span
                      className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium"
                      title="Thời gian đọc ước tính"
                    >
                      <Icon name="Clock" className="w-3 h-3 mr-0.5" /> ~
                      {doc.readingTime}p
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
                  <span>Tiến độ đọc</span>
                  <span>{doc.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
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

const AppContent = () => {
  const { currentView } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-indigo-200 dark:selection:bg-indigo-900/50">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Scrollbar styles */
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(156, 163, 175, 0.3); border-radius: 10px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background-color: rgba(156, 163, 175, 0.6); }
        
        /* Animations */
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        
        /* Word Document Content Styling (Typography) */
        .document-html-content {
           line-height: 1.8;
           color: inherit;
        }
        .document-html-content p { margin-bottom: 1.5em; text-align: justify; }
        .document-html-content h1 { font-family: ui-sans-serif, system-ui; font-size: 2.25em; font-weight: 800; margin-bottom: 1em; line-height: 1.2; }
        .document-html-content h2 { font-family: ui-sans-serif, system-ui; font-size: 1.5em; font-weight: 700; margin-top: 1.5em; margin-bottom: 0.75em; }
        .document-html-content h3 { font-family: ui-sans-serif, system-ui; font-size: 1.25em; font-weight: 600; margin-top: 1.5em; margin-bottom: 0.5em; }
        .document-html-content ul { list-style-type: disc; padding-left: 2em; margin-bottom: 1.5em; }
        .document-html-content ol { list-style-type: decimal; padding-left: 2em; margin-bottom: 1.5em; }
        .document-html-content li { margin-bottom: 0.5em; }
        .document-html-content strong, .document-html-content b { font-weight: 700; }
        .document-html-content em, .document-html-content i { font-style: italic; }
        .document-html-content blockquote { border-left: 4px solid #cbd5e1; padding-left: 1em; margin-left: 0; font-style: italic; color: #64748b; }
        .dark .document-html-content blockquote { border-color: #475569; color: #94a3b8; }
        
        /* Table Styles */
        .document-html-content table { width: 100%; border-collapse: collapse; margin-bottom: 2em; font-size: 0.95em; }
        .document-html-content th, .document-html-content td { border: 1px solid rgba(156, 163, 175, 0.4); padding: 12px 16px; text-align: left; vertical-align: top; }
        .document-html-content th { background-color: rgba(0, 0, 0, 0.04); font-weight: 700; }
        .document-html-content tr:nth-child(even) { background-color: rgba(0, 0, 0, 0.015); }
        .dark .document-html-content th { background-color: rgba(255, 255, 255, 0.05); }
        .dark .document-html-content tr:nth-child(even) { background-color: rgba(255, 255, 255, 0.02); }
      `,
        }}
      />
      <Navbar />
      <main>
        {}
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
