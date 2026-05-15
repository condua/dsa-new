import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProgressBar from "./ProgressBar";

const TopicCard = ({ topic }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md hover:border-indigo-200 transition-all group">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        {topic.title}
      </h3>
      <p className="text-slate-500 text-sm mb-6 h-10 line-clamp-2">
        {topic.description}
      </p>

      <div className="mb-4">
        <div className="flex justify-between text-xs text-slate-500 mb-1 font-medium">
          <span>Tiến độ</span>
          <span>
            {topic.completedProblems} / {topic.totalProblems} bài
          </span>
        </div>
        <ProgressBar progress={topic.progress} />
      </div>

      <Link
        to={topic.path}
        className="inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700 mt-2"
      >
        Học ngay
        <ArrowRight
          size={16}
          className="ml-1 group-hover:translate-x-1 transition-transform"
        />
      </Link>
    </div>
  );
};

export default TopicCard;
