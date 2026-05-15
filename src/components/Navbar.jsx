import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition"
          >
            <Code2 size={28} />
            <span className="font-bold text-xl tracking-tight">
              DSA Self-Study
            </span>
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md font-medium"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
