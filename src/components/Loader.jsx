"use client";
import React from "react";
import { useEffect, useState } from "react";

export default function Loader() {
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNote(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup if component unmounts
  }, []);
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 text-white">
      <svg
        className="w-12 h-12 animate-spin mb-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8z"
        />
      </svg>
      <h2 className="text-xl font-semibold animate-pulse">Loading Web...</h2>
      {showNote && (
        <h4 className="mt-4 text-xl font-semibold animate-pulse text-center">
          <b className="text-yellow-500">Note:</b> If loading takes time, please
          reload the page... <br /> or <br />
          Also Check The Internet Connection
        </h4>
      )}
    </div>
  );
}
