const Shimmer = () => {
  return (
    <div data-testid="shimmer" className="bg-gray-100">
      {Array(10).fill().map((_, index) => (
        <article key={index} className="bg-white rounded-md p-4 my-4 shadow-md">
          <div className="bg-gray-200 h-44 rounded-md animate-pulse mb-4"></div>
          <div className="card-content">
            <div className="card-title bg-gray-200 h-6 rounded-md animate-pulse w-3/4 mb-2"></div>
            <div className="card-text bg-gray-200 h-4 rounded-md animate-pulse w-2/4 mb-2"></div>
            <div className="card-text bg-gray-200 h-4 rounded-md animate-pulse w-5/4 mb-2"></div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Shimmer;
