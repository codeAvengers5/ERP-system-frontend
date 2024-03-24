import React from "react";
import { activity } from "../../public/icons/index";
import Image from "../../node_modules/next/image";
export const ActivityIndicator = () => {
  return (
    <div>
      <img
        className="h-16 w-16 animate-spin"
        src="https://www.svgrepo.com/show/448500/loading.svg"
        alt="Loading icon"
      />
      <span>Loading...</span>
    </div>
  );
};
