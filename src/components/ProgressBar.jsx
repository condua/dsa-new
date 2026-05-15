const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-slate-100 rounded-full h-2.5 mt-2">
      <div
        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
