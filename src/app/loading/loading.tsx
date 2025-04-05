import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-stone-700/65 flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-stone-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default Loading;
