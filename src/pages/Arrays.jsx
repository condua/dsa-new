import React, { useState } from "react";
import {
  CheckCircle2,
  Circle,
  BookOpen,
  Code2,
  Lightbulb,
  TerminalSquare,
} from "lucide-react";

const Arrays = () => {
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'problems'

  const problems = [
    { id: 1, title: "Two Sum", difficulty: "Easy", status: "done" },
    {
      id: 2,
      title: "Best Time to Buy and Sell Stock",
      difficulty: "Easy",
      status: "done",
    },
    {
      id: 3,
      title: "Container With Most Water",
      difficulty: "Medium",
      status: "todo",
    },
    { id: 4, title: "3Sum", difficulty: "Medium", status: "todo" },
    {
      id: 5,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      status: "todo",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-3 flex items-center gap-3">
          <TerminalSquare className="text-indigo-600" size={32} />
          Arrays & Strings
        </h1>
        <p className="text-slate-600 text-lg">
          Nền tảng của mọi cấu trúc dữ liệu. Nắm vững mảng và chuỗi là bước đầu
          tiên để chinh phục các thuật toán phức tạp hơn.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex space-x-1 bg-slate-100/50 p-1 rounded-xl mb-8 w-fit border border-slate-200">
        <button
          onClick={() => setActiveTab("theory")}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeTab === "theory"
              ? "bg-white text-indigo-700 shadow-sm border border-slate-200/50"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
          }`}
        >
          <BookOpen size={18} />
          Lý thuyết cốt lõi
        </button>
        <button
          onClick={() => setActiveTab("problems")}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeTab === "problems"
              ? "bg-white text-indigo-700 shadow-sm border border-slate-200/50"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
          }`}
        >
          <Code2 size={18} />
          Danh sách bài tập
        </button>
      </div>

      {/* Tab Content: Theory */}
      {activeTab === "theory" && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* 1. Arrays & Strings Basics */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                1
              </span>
              Đặc điểm cơ bản
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Mảng (Arrays)
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lưu trữ các phần tử liên tiếp nhau trong bộ nhớ.</li>
                  <li>
                    <strong>Truy cập (Access):</strong> O(1) thông qua chỉ số
                    (index).
                  </li>
                  <li>
                    <strong>Tìm kiếm (Search):</strong> O(N) nếu chưa sắp xếp,
                    O(log N) nếu đã sắp xếp (Binary Search).
                  </li>
                  <li>
                    <strong>Thêm/Xóa:</strong> O(1) ở cuối mảng, nhưng O(N) ở
                    đầu hoặc giữa do phải dịch chuyển các phần tử.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  Chuỗi (Strings)
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Bản chất là một mảng các ký tự.</li>
                  <li>
                    <strong>Tính bất biến (Immutability):</strong> Trong nhiều
                    ngôn ngữ (Java, Python, JS), chuỗi không thể thay đổi sau
                    khi tạo. Mọi thao tác chỉnh sửa đều tạo ra một chuỗi mới ở
                    vùng nhớ khác (độ phức tạp O(N)).
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Two Pointers */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                2
              </span>
              Kỹ thuật Two Pointers (Hai con trỏ)
            </h2>
            <p className="text-slate-600 mb-4">
              Sử dụng hai biến trỏ duyệt qua mảng cùng lúc để giảm thời gian
              thực thi (thường từ O(N²) xuống O(N)). Vô cùng hiệu quả với{" "}
              <strong>mảng đã được sắp xếp</strong>.
            </p>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                <Lightbulb size={18} className="text-amber-500" />
                Các mô hình thường gặp:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <strong>Hai đầu xích lại gần nhau:</strong> Con trỏ{" "}
                  <code>left = 0</code> và <code>right = arr.length - 1</code>.
                  Thường dùng tìm cặp số có tổng mục tiêu (vd: Two Sum II, 3Sum)
                  hoặc đảo ngược mảng.
                </li>
                <li>
                  <strong>
                    Cùng chiều, khác tốc độ (Fast & Slow Pointers):
                  </strong>{" "}
                  Dùng để xóa phần tử trùng lặp (Remove Duplicates) hoặc phát
                  hiện chu trình.
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Sliding Window */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                3
              </span>
              Kỹ thuật Sliding Window (Cửa sổ trượt)
            </h2>
            <p className="text-slate-600 mb-4">
              Mở rộng của Two Pointers. Dùng để xử lý các bài toán liên quan đến{" "}
              <strong>
                mảng con/chuỗi con liên tiếp (contiguous subarray/substring)
              </strong>
              .
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                <h4 className="font-semibold text-emerald-800 mb-2">
                  Cửa sổ cố định (Fixed Window)
                </h4>
                <p className="text-emerald-700 text-sm">
                  Kích thước mảng con được cho trước (vd: k = 3). Di chuyển toàn
                  bộ khung hình sang phải 1 đơn vị bằng cách trừ đi phần tử bị
                  bỏ lại và cộng thêm phần tử mới vào. <br />
                  <em>(Vd: Tính tổng lớn nhất của mảng con độ dài k)</em>
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Cửa sổ linh hoạt (Dynamic Window)
                </h4>
                <p className="text-blue-700 text-sm">
                  Kích thước cửa sổ co giãn tùy theo điều kiện bài toán. Mở rộng
                  (di chuyển <code>right</code>) cho đến khi vi phạm điều kiện,
                  sau đó thu hẹp (di chuyển <code>left</code>) để thỏa mãn lại
                  điều kiện.
                  <br />
                  <em>(Vd: Chuỗi con dài nhất không có ký tự lặp lại)</em>
                </p>
              </div>
            </div>
          </section>

          {/* 4. Hashing */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                4
              </span>
              Sử dụng Hashing (Map / Set)
            </h2>
            <p className="text-slate-600 mb-4">
              Đánh đổi không gian bộ nhớ (Space Complexity: O(N)) để đạt được
              tốc độ truy xuất siêu tốc (Time Complexity: O(1)).
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>
                <strong>Hash Map (Object / Map):</strong> Lưu các giá trị đã
                duyệt qua để kiểm tra nhanh trong tương lai. <br />
                <em>
                  Ví dụ bài Two Sum: Duyệt qua `num`, kiểm tra xem `target -
                  num` đã có trong Map chưa.
                </em>
              </li>
              <li>
                <strong>Hash Set (Set):</strong> Dùng khi chỉ cần biết một phần
                tử đã tồn tại hay chưa, hoặc cần lọc các phần tử trùng lặp nhanh
                chóng.
              </li>
            </ul>
          </section>
        </div>
      )}

      {/* Tab Content: Problems List */}
      {activeTab === "problems" && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-slate-800 text-lg">
                Danh sách bài tập
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Sắp xếp theo độ khó và kỹ thuật tương ứng.
              </p>
            </div>
            <div className="text-sm font-medium text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              Tiến độ: 2 / {problems.length}
            </div>
          </div>
          <ul className="divide-y divide-slate-100">
            {problems.map((problem) => (
              <li
                key={problem.id}
                className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-slate-50/80 transition-colors gap-3"
              >
                <div className="flex items-center gap-4">
                  {problem.status === "done" ? (
                    <CheckCircle2
                      className="text-emerald-500 shrink-0"
                      size={22}
                    />
                  ) : (
                    <Circle className="text-slate-300 shrink-0" size={22} />
                  )}
                  <span
                    className={`text-base font-medium ${problem.status === "done" ? "text-slate-400 line-through" : "text-slate-800"}`}
                  >
                    {problem.title}
                  </span>
                </div>
                <div className="flex items-center gap-3 ml-10 sm:ml-0">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold border
                    ${
                      problem.difficulty === "Easy"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : problem.difficulty === "Medium"
                          ? "bg-amber-50 text-amber-700 border-amber-200"
                          : "bg-rose-50 text-rose-700 border-rose-200"
                    }`}
                  >
                    {problem.difficulty}
                  </span>
                  <button className="text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors px-2 py-1">
                    Giải ngay &rarr;
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Arrays;
