import { useEffect, useState } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem("hasVisited");
  });

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("hasVisited", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <svg
        className="w-10 h-10 animate-spin text-gray-300 fill-violet-600"
        viewBox="0 0 100 101"
        fill="none"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default PreLoader;
