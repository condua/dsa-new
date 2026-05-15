import { topics } from "../data/topics";
import TopicCard from "../components/TopicCard";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Lộ trình học DSA
        </h1>
        <p className="text-slate-600">
          Theo dõi tiến độ giải bài tập Cấu trúc dữ liệu và Giải thuật của bạn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Home;
