import { useEffect, useState } from "react";

const PreLoader = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("hasVisited");

    if (!visited) {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <svg className="w-12 h-12" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="white"
          strokeWidth="4"
          opacity="0.9"
        />

        <path
          d="M25 5
             a20 20 0 0 1 0 40"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-spin origin-center"
        />
      </svg>
    </div>
  );
};

export default PreLoader;
