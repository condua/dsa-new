import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Arrays from "./pages/Arrays";
import LandingPage from "./LandingPage";
// Import các trang khác khi bạn tạo chúng
// import LinkedList from './pages/LinkedList';
// import StackQueue from './pages/StackQueue';
// import Graph from './pages/Graph';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/arrays" element={<Arrays />} />
            {/* Thêm các routes này sau khi tạo file tương ứng */}
            {/* <Route path="/linked-list" element={<LinkedList />} /> */}
            {/* <Route path="/stack-queue" element={<StackQueue />} /> */}
            {/* <Route path="/graph" element={<Graph />} /> */}
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
