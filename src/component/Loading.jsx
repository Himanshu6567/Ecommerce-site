import React from "react";

function Loading() {
  return (
    <div className=" w-full">
      <div
        // wire:loading
        className=" w-full h-screen overflow-hidden  opacity-75 flex flex-col items-center justify-center"
      >
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-gray-600 text-xl font-semibold">
          Loading...
        </h2>
        <p className="w-1/3 text-center  text-gray-600">
          This may take a few seconds, please don't close this page.
        </p>
      </div>
    </div>
  );
}

export default Loading;
